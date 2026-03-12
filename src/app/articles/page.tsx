'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Article } from '@/lib/types';
import { getArticles } from '@/lib/storage';
import ArticleCard from '@/components/articles/ArticleCard';
import Tag from '@/components/ui/Tag';

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    setArticles(getArticles().filter((a) => a.status === 'published'));
  }, []);

  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));
  const filtered = activeTag
    ? articles.filter((a) => a.tags.includes(activeTag))
    : articles;

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem', paddingTop: '2rem' }}
        >
          <p
            style={{
              color: '#f59e0b',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            研究文章
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#e8e6e1',
              marginBottom: '1rem',
            }}
          >
            所有文章
          </h1>
          <p style={{ color: '#8b8a97', maxWidth: '500px', lineHeight: 1.7 }}>
            探索科技法律、轉型正義與數位人權的研究與思考。
          </p>
        </motion.div>

        {/* Tag filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          <Tag
            label="全部"
            active={activeTag === null}
            onClick={() => setActiveTag(null)}
          />
          {allTags.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            />
          ))}
        </motion.div>

        {/* Articles grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {filtered.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#8b8a97' }}>
            目前沒有相關文章
          </div>
        )}
      </div>
    </div>
  );
}
