'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { getProjects } from '@/lib/storage';
import Tag from '@/components/ui/Tag';

export default function FeaturedProject() {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const projects = getProjects();
    setProject(projects[0] || null);
  }, []);

  if (!project) return null;

  return (
    <section
      style={{
        padding: '6rem 0',
        backgroundColor: '#13131a',
        borderTop: '1px solid #1e1e2e',
        borderBottom: '1px solid #1e1e2e',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            精選專案
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#e8e6e1',
              marginBottom: '3rem',
            }}
          >
            進行中的研究
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            padding: '2.5rem',
            border: '1px solid #1e1e2e',
            borderRadius: '12px',
            backgroundColor: '#0a0a0f',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner accent */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 3,
              height: '100%',
              backgroundColor: '#f59e0b',
            }}
          />

          <div style={{ paddingLeft: '1.5rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#e8e6e1',
                }}
              >
                {project.title}
              </h3>
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(245,158,11,0.15)',
                  color: '#f59e0b',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                }}
              >
                {project.status === 'active' ? '進行中' : project.status === 'completed' ? '已完成' : '已封存'}
              </span>
            </div>

            <p
              style={{
                color: '#8b8a97',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                maxWidth: '700px',
              }}
            >
              {project.description}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} small />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '6px',
                    backgroundColor: '#f59e0b',
                    color: '#0a0a0f',
                    fontSize: '0.875rem',
                    fontWeight: 600,
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
                  查看專案
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1.25rem',
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
                  GitHub
                </a>
              )}
              <Link
                href="/projects"
                style={{
                  padding: '0.5rem 1.25rem',
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
                所有專案 →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
