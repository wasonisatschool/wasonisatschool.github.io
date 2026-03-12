'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { getProjects } from '@/lib/storage';
import Tag from '@/components/ui/Tag';

const statusLabel: Record<string, string> = {
  active: '進行中',
  completed: '已完成',
  archived: '已封存',
};

const statusColor: Record<string, string> = {
  active: '#f59e0b',
  completed: '#10b981',
  archived: '#8b8a97',
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-6">
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
            研究專案
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
            專案
          </h1>
          <p style={{ color: '#8b8a97', maxWidth: '500px', lineHeight: 1.7 }}>
            進行中的研究計畫、工具開發與教育推廣項目。
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '2rem',
                border: '1px solid #1e1e2e',
                borderRadius: '10px',
                backgroundColor: '#13131a',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'all 0.25s',
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#e8e6e1',
                    flex: 1,
                  }}
                >
                  {project.title}
                </h2>
                <span
                  style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    color: statusColor[project.status],
                    backgroundColor: `${statusColor[project.status]}18`,
                    flexShrink: 0,
                    marginLeft: '0.5rem',
                  }}
                >
                  {statusLabel[project.status]}
                </span>
              </div>

              <p style={{ color: '#8b8a97', fontSize: '0.875rem', lineHeight: 1.7, flex: 1 }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} small />
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #1e1e2e' }}>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#f59e0b',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#fbbf24';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#f59e0b';
                    }}
                  >
                    查看網站 ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#8b8a97',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#e8e6e1';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#8b8a97';
                    }}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
