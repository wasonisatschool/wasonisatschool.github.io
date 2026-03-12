'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Article } from '@/lib/types';
import { getArticles, deleteArticle } from '@/lib/storage';
import toast from 'react-hot-toast';
import Tag from '@/components/ui/Tag';

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  const loadArticles = () => setArticles(getArticles());

  useEffect(() => {
    loadArticles();
  }, []);

  const handleDelete = (id: string, title: string) => {
    if (!confirm(`確定要刪除「${title}」嗎？`)) return;
    deleteArticle(id);
    loadArticles();
    toast.success('文章已刪除');
  };

  return (
    <div style={{ padding: '2.5rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#e8e6e1',
            }}
          >
            文章管理
          </h1>
          <p style={{ color: '#8b8a97', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            共 {articles.length} 篇文章
          </p>
        </div>
        <Link
          href="/admin/articles/new"
          style={{
            padding: '0.625rem 1.5rem',
            borderRadius: '6px',
            backgroundColor: '#f59e0b',
            color: '#0a0a0f',
            fontWeight: 600,
            fontSize: '0.875rem',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#fbbf24';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#f59e0b';
          }}
        >
          + 新增文章
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            style={{
              padding: '1.25rem 1.5rem',
              border: '1px solid #1e1e2e',
              borderRadius: '8px',
              backgroundColor: '#13131a',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  color: '#e8e6e1',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  marginBottom: '0.375rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {article.title}
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.1rem 0.5rem',
                    borderRadius: '9999px',
                    backgroundColor:
                      article.status === 'published'
                        ? 'rgba(16,185,129,0.15)'
                        : 'rgba(139,138,151,0.15)',
                    color: article.status === 'published' ? '#10b981' : '#8b8a97',
                  }}
                >
                  {article.status === 'published' ? '已發布' : '草稿'}
                </span>
                <span style={{ color: '#8b8a97', fontSize: '0.75rem' }}>
                  {article.publishedAt}
                </span>
                <div style={{ display: 'flex', gap: '0.375rem' }}>
                  {article.tags.slice(0, 2).map((tag) => (
                    <Tag key={tag} label={tag} small />
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
              <Link
                href={`/articles/${article.slug}`}
                target="_blank"
                style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '5px',
                  border: '1px solid #1e1e2e',
                  color: '#8b8a97',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#f59e0b';
                  el.style.color = '#f59e0b';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#1e1e2e';
                  el.style.color = '#8b8a97';
                }}
              >
                預覽
              </Link>
              <Link
                href={`/admin/articles/${article.id}`}
                style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '5px',
                  border: '1px solid #f59e0b',
                  color: '#f59e0b',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = '#f59e0b';
                  el.style.color = '#0a0a0f';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = 'transparent';
                  el.style.color = '#f59e0b';
                }}
              >
                編輯
              </Link>
              <button
                onClick={() => handleDelete(article.id, article.title)}
                style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '5px',
                  border: '1px solid #1e1e2e',
                  backgroundColor: 'transparent',
                  color: '#8b8a97',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#ef4444';
                  el.style.color = '#ef4444';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#1e1e2e';
                  el.style.color = '#8b8a97';
                }}
              >
                刪除
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
