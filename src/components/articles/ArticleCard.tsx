import Link from 'next/link';
import { Article } from '@/lib/types';
import Tag from '@/components/ui/Tag';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article
        style={{
          padding: '1.75rem',
          border: '1px solid #1e1e2e',
          borderRadius: '10px',
          backgroundColor: '#13131a',
          transition: 'all 0.25s',
          height: '100%',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = '#f59e0b';
          el.style.transform = 'translateY(-2px)';
          el.style.boxShadow = '0 8px 32px rgba(245,158,11,0.08)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = '#1e1e2e';
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = 'none';
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {article.tags.slice(0, 2).map((tag) => (
            <Tag key={tag} label={tag} small />
          ))}
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.125rem',
            fontWeight: 700,
            color: '#e8e6e1',
            lineHeight: 1.4,
            marginBottom: '0.75rem',
          }}
        >
          {article.title}
        </h3>

        <p
          style={{
            color: '#8b8a97',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            marginBottom: '1.25rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.excerpt}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#8b8a97',
          }}
        >
          <time>{article.publishedAt}</time>
          <span>{article.readingTime} 分鐘閱讀</span>
        </div>
      </article>
    </Link>
  );
}
