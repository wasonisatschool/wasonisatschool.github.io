'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getArticles, getProjects } from '@/lib/storage';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ articles: 0, published: 0, projects: 0, active: 0 });

  useEffect(() => {
    const articles = getArticles();
    const projects = getProjects();
    setStats({
      articles: articles.length,
      published: articles.filter((a) => a.status === 'published').length,
      projects: projects.length,
      active: projects.filter((p) => p.status === 'active').length,
    });
  }, []);

  const cards = [
    { label: '文章總數', value: stats.articles, sub: `${stats.published} 篇已發布`, href: '/admin/articles' },
    { label: '進行中專案', value: stats.active, sub: `共 ${stats.projects} 個專案`, href: '/admin/projects' },
  ];

  return (
    <div style={{ padding: '2.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#e8e6e1',
            marginBottom: '0.25rem',
          }}
        >
          儀表板
        </h1>
        <p style={{ color: '#8b8a97', fontSize: '0.875rem' }}>管理您的文章與專案</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}
      >
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                padding: '1.75rem',
                border: '1px solid #1e1e2e',
                borderRadius: '10px',
                backgroundColor: '#13131a',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#f59e0b';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#1e1e2e';
              }}
            >
              <p style={{ color: '#8b8a97', fontSize: '0.8rem', marginBottom: '0.75rem' }}>{card.label}</p>
              <p
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#f59e0b',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {card.value}
              </p>
              <p style={{ color: '#8b8a97', fontSize: '0.75rem' }}>{card.sub}</p>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <h2
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#e8e6e1',
            marginBottom: '1.25rem',
          }}
        >
          快速操作
        </h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
          <Link
            href="/admin/projects"
            style={{
              padding: '0.625rem 1.5rem',
              borderRadius: '6px',
              border: '1px solid #1e1e2e',
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
            管理專案
          </Link>
        </div>
      </div>
    </div>
  );
}
