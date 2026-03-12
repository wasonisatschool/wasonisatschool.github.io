'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/admin', label: '儀表板', icon: '▦' },
  { href: '/admin/articles', label: '文章管理', icon: '✎' },
  { href: '/admin/projects', label: '專案管理', icon: '⬡' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  };

  return (
    <aside
      style={{
        width: '220px',
        minHeight: '100vh',
        backgroundColor: '#13131a',
        borderRight: '1px solid #1e1e2e',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 0',
        flexShrink: 0,
      }}
    >
      <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#f59e0b',
            textDecoration: 'none',
          }}
        >
          W.
        </Link>
        <p style={{ color: '#8b8a97', fontSize: '0.75rem', marginTop: '0.25rem' }}>
          管理後台
        </p>
      </div>

      <nav style={{ flex: 1, padding: '0 0.75rem' }}>
        {links.map((link) => {
          const isActive =
            link.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.625rem 0.75rem',
                borderRadius: '6px',
                color: isActive ? '#f59e0b' : '#8b8a97',
                backgroundColor: isActive ? 'rgba(245,158,11,0.08)' : 'transparent',
                textDecoration: 'none',
                fontSize: '0.875rem',
                marginBottom: '0.25rem',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ fontSize: '1rem' }}>{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #1e1e2e' }}>
        <button
          onClick={handleLogout}
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem 0.75rem',
            borderRadius: '6px',
            border: '1px solid #1e1e2e',
            backgroundColor: 'transparent',
            color: '#8b8a97',
            fontSize: '0.875rem',
            cursor: 'pointer',
            textAlign: 'left',
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
          登出
        </button>
      </div>
    </aside>
  );
}
