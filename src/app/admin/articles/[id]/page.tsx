'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Article } from '@/lib/types';
import { getArticles, upsertArticle } from '@/lib/storage';
import TipTapEditor from '@/components/admin/TipTapEditor';
import toast from 'react-hot-toast';

const emptyArticle = (): Article => ({
  id: Date.now().toString(),
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  tags: [],
  publishedAt: new Date().toISOString().split('T')[0],
  status: 'draft',
  readingTime: 5,
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[\s\u3000]/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function ArticleEditorPage() {
  const params = useParams();
  const router = useRouter();
  const isNew = params?.id === 'new';

  const [article, setArticle] = useState<Article>(emptyArticle());
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isNew && params?.id) {
      const articles = getArticles();
      const found = articles.find((a) => a.id === params.id);
      if (found) setArticle(found);
    }
  }, [isNew, params?.id]);

  const handleTitleChange = (title: string) => {
    setArticle((prev) => ({
      ...prev,
      title,
      slug: prev.slug || slugify(title),
    }));
  };

  const handleAddTag = () => {
    const tag = tagInput.trim();
    if (tag && !article.tags.includes(tag)) {
      setArticle((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
    setTagInput('');
  };

  const handleRemoveTag = (tag: string) => {
    setArticle((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  };

  const handleSave = async (status: 'draft' | 'published') => {
    if (!article.title) {
      toast.error('請輸入文章標題');
      return;
    }
    setSaving(true);
    const toSave = { ...article, status };
    upsertArticle(toSave);
    setSaving(false);
    toast.success(status === 'published' ? '文章已發布' : '草稿已儲存');
    router.push('/admin/articles');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.625rem 0.875rem',
    borderRadius: '6px',
    border: '1px solid #1e1e2e',
    backgroundColor: '#0a0a0f',
    color: '#e8e6e1',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1000px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#e8e6e1',
          }}
        >
          {isNew ? '新增文章' : '編輯文章'}
        </h1>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => router.push('/admin/articles')}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '6px',
              border: '1px solid #1e1e2e',
              backgroundColor: 'transparent',
              color: '#8b8a97',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            取消
          </button>
          <button
            onClick={() => handleSave('draft')}
            disabled={saving}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '6px',
              border: '1px solid #1e1e2e',
              backgroundColor: 'transparent',
              color: '#8b8a97',
              fontSize: '0.875rem',
              cursor: saving ? 'wait' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            儲存草稿
          </button>
          <button
            onClick={() => handleSave('published')}
            disabled={saving}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '6px',
              backgroundColor: saving ? 'rgba(245,158,11,0.5)' : '#f59e0b',
              color: '#0a0a0f',
              fontWeight: 600,
              fontSize: '0.875rem',
              border: 'none',
              cursor: saving ? 'wait' : 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            {saving ? '儲存中...' : '發布'}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Title */}
        <div>
          <label style={{ color: '#8b8a97', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
            標題 *
          </label>
          <input
            type="text"
            value={article.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            style={{ ...inputStyle, fontSize: '1.1rem' }}
            placeholder="文章標題"
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
          />
        </div>

        {/* Slug */}
        <div>
          <label style={{ color: '#8b8a97', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
            Slug（URL路徑）
          </label>
          <input
            type="text"
            value={article.slug}
            onChange={(e) => setArticle((prev) => ({ ...prev, slug: e.target.value }))}
            style={inputStyle}
            placeholder="article-slug"
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
          />
        </div>

        {/* Excerpt */}
        <div>
          <label style={{ color: '#8b8a97', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
            摘要
          </label>
          <textarea
            value={article.excerpt}
            onChange={(e) => setArticle((prev) => ({ ...prev, excerpt: e.target.value }))}
            rows={3}
            style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
            placeholder="文章摘要..."
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
          />
        </div>

        {/* Tags */}
        <div>
          <label style={{ color: '#8b8a97', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
            標籤
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            {article.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.2rem 0.625rem',
                  borderRadius: '9999px',
                  border: '1px solid #f59e0b',
                  color: '#f59e0b',
                  fontSize: '0.75rem',
                }}
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  style={{
                    color: '#f59e0b',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '0.75rem',
                    lineHeight: 1,
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') { e.preventDefault(); handleAddTag(); }
              }}
              style={{ ...inputStyle, flex: 1 }}
              placeholder="輸入標籤後按 Enter 或點擊新增"
              onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
            />
            <button
              type="button"
              onClick={handleAddTag}
              style={{
                padding: '0.625rem 1rem',
                borderRadius: '6px',
                border: '1px solid #1e1e2e',
                backgroundColor: 'transparent',
                color: '#8b8a97',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              新增
            </button>
          </div>
        </div>

        {/* Meta row */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 160 }}>
            <label style={{ color: '#8b8a97', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
              發布日期
            </label>
            <input
              type="date"
              value={article.publishedAt}
              onChange={(e) => setArticle((prev) => ({ ...prev, publishedAt: e.target.value }))}
              style={inputStyle}
              onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 160 }}>
            <label style={{ color: '#8b8a97', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
              閱讀時間（分鐘）
            </label>
            <input
              type="number"
              value={article.readingTime}
              onChange={(e) =>
                setArticle((prev) => ({ ...prev, readingTime: parseInt(e.target.value) || 1 }))
              }
              style={inputStyle}
              min={1}
              onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
            />
          </div>
        </div>

        {/* Content editor */}
        <div>
          <label style={{ color: '#8b8a97', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
            內容
          </label>
          <TipTapEditor
            content={article.content}
            onChange={(html) => setArticle((prev) => ({ ...prev, content: html }))}
            placeholder="開始撰寫文章內容..."
          />
        </div>
      </div>
    </div>
  );
}
