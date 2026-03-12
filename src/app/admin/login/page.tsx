'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        toast.success('登入成功');
        router.push('/admin');
      } else {
        const data = await res.json();
        toast.error(data.error || '登入失敗');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0f',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          padding: '2.5rem',
          border: '1px solid #1e1e2e',
          borderRadius: '12px',
          backgroundColor: '#13131a',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#f59e0b',
            }}
          >
            W.
          </span>
          <h1
            style={{
              color: '#e8e6e1',
              fontSize: '1.25rem',
              fontWeight: 600,
              marginTop: '0.5rem',
            }}
          >
            管理後台
          </h1>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label
              htmlFor="password"
              style={{ color: '#8b8a97', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}
            >
              密碼
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.625rem 0.875rem',
                borderRadius: '6px',
                border: '1px solid #1e1e2e',
                backgroundColor: '#0a0a0f',
                color: '#e8e6e1',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => {
                (e.target as HTMLElement).style.borderColor = '#f59e0b';
              }}
              onBlur={(e) => {
                (e.target as HTMLElement).style.borderColor = '#1e1e2e';
              }}
              placeholder="輸入管理密碼"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              backgroundColor: loading ? 'rgba(245,158,11,0.5)' : '#f59e0b',
              color: '#0a0a0f',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: 'none',
              cursor: loading ? 'wait' : 'pointer',
              transition: 'background-color 0.2s',
              marginTop: '0.5rem',
            }}
          >
            {loading ? '登入中...' : '登入'}
          </button>
        </form>
      </div>
    </div>
  );
}
