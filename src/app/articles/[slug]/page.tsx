'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Article } from '@/lib/types';
import { getArticleBySlug } from '@/lib/storage';
import Tag from '@/components/ui/Tag';

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params?.slug as string;
    if (slug) {
      const found = getArticleBySlug(slug);
      setArticle(found || null);
    }
    setLoading(false);
  }, [params?.slug]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ color: '#8b8a97' }}>載入中...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <p style={{ color: '#8b8a97', fontSize: '1.125rem' }}>找不到這篇文章</p>
        <button
          onClick={() => router.push('/articles')}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '6px',
            border: '1px solid #1e1e2e',
            backgroundColor: 'transparent',
            color: '#8b8a97',
            cursor: 'pointer',
          }}
        >
          回到文章列表
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <button
            onClick={() => router.push('/articles')}
            style={{
              color: '#8b8a97',
              fontSize: '0.875rem',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#f59e0b';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#8b8a97';
            }}
          >
            ← 回到文章列表
          </button>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {article.tags.map((tag) => (
              <Tag key={tag} label={tag} small />
            ))}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: '#e8e6e1',
              lineHeight: 1.3,
              marginBottom: '1.5rem',
            }}
          >
            {article.title}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              color: '#8b8a97',
              fontSize: '0.875rem',
              marginBottom: '3rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid #1e1e2e',
            }}
          >
            <time>{article.publishedAt}</time>
            <span>{article.readingTime} 分鐘閱讀</span>
          </div>

          {/* Content */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>
      </div>
    </div>
  );
}
