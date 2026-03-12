'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/articles', label: '文章' },
  { href: '/projects', label: '專案' },
  { href: '/about', label: '關於' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #1e1e2e' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#f59e0b',
              }}
              className="group-hover:opacity-80 transition-opacity"
            >
              W.
            </span>
            <span
              className="relative"
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#f59e0b',
                display: 'inline-block',
                animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
              }}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: pathname === link.href ? '#f59e0b' : '#8b8a97',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#e8e6e1';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color =
                    pathname === link.href ? '#f59e0b' : '#8b8a97';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{
                display: 'block',
                width: 22,
                height: 2,
                backgroundColor: '#e8e6e1',
                borderRadius: 2,
                transformOrigin: 'center',
              }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{
                display: 'block',
                width: 22,
                height: 2,
                backgroundColor: '#e8e6e1',
                borderRadius: 2,
              }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{
                display: 'block',
                width: 22,
                height: 2,
                backgroundColor: '#e8e6e1',
                borderRadius: 2,
                transformOrigin: 'center',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              backgroundColor: 'rgba(19,19,26,0.98)',
              borderBottom: '1px solid #1e1e2e',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: pathname === link.href ? '#f59e0b' : '#8b8a97',
                    fontSize: '1rem',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #1e1e2e',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </>
  );
}
