'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Article } from '@/lib/types';
import { getArticles } from '@/lib/storage';
import ArticleCard from '@/components/articles/ArticleCard';

export default function RecentArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const all = getArticles().filter((a) => a.status === 'published');
    setArticles(all.slice(0, 3));
  }, []);

  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
          }}
        >
          <div>
            <p
              style={{
                color: '#f59e0b',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              最新文章
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 700,
                color: '#e8e6e1',
              }}
            >
              近期研究
            </h2>
          </div>
          <Link
            href="/articles"
            style={{
              color: '#8b8a97',
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'color 0.2s',
              display: 'none',
            }}
            className="md:block"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#f59e0b';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#8b8a97';
            }}
          >
            查看全部 →
          </Link>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <Link
            href="/articles"
            style={{
              display: 'inline-block',
              padding: '0.625rem 1.75rem',
              border: '1px solid #1e1e2e',
              borderRadius: '6px',
              color: '#8b8a97',
              fontSize: '0.875rem',
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
            查看所有文章
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
