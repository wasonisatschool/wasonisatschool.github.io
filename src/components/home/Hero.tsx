'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0a0a0f',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="max-w-6xl mx-auto px-6"
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: '9999px',
            border: '1px solid #1e1e2e',
            backgroundColor: 'rgba(19,19,26,0.8)',
            marginBottom: '2.5rem',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#f59e0b',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }}
          />
          <span style={{ color: '#8b8a97', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            科技法律研究所
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#e8e6e1' }}>法律</span>
          <span style={{ color: '#f59e0b', margin: '0 0.5rem' }}>×</span>
          <span style={{ color: '#e8e6e1' }}>科技</span>
          <span style={{ color: '#f59e0b', margin: '0 0.5rem' }}>×</span>
          <span style={{ color: '#e8e6e1' }}>正義</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            color: '#8b8a97',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '560px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
          }}
        >
          研究科技法律、轉型正義與數位人權的交叉地帶。
          <br />
          探索科技如何重塑法律秩序，以及法律如何回應科技挑戰。
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link
            href="/articles"
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '6px',
              backgroundColor: '#f59e0b',
              color: '#0a0a0f',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#fbbf24';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#f59e0b';
            }}
          >
            閱讀文章
          </Link>
          <Link
            href="/about"
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '6px',
              border: '1px solid #1e1e2e',
              color: '#8b8a97',
              fontWeight: 500,
              fontSize: '0.9rem',
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
            關於我
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: '-8rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: '#8b8a97', fontSize: '0.7rem', letterSpacing: '0.15em' }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 1,
              height: 40,
              backgroundColor: '#1e1e2e',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              animate={{ y: [-40, 40] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '100%',
                height: '50%',
                backgroundColor: '#f59e0b',
                position: 'absolute',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
