'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#13131a',
        borderTop: '1px solid #1e1e2e',
        padding: '3rem 0',
        marginTop: '6rem',
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#f59e0b',
          }}
        >
          W.
        </span>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {[
            { href: '/articles', label: '文章' },
            { href: '/projects', label: '專案' },
            { href: '/about', label: '關於' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: '#8b8a97',
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#e8e6e1';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#8b8a97';
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p style={{ color: '#8b8a97', fontSize: '0.8rem', textAlign: 'center' }}>
          © {new Date().getFullYear()} Wason · 科技法律研究所 · 法律 × 科技 × 正義
        </p>
      </div>
    </footer>
  );
}
