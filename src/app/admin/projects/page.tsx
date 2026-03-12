'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { getProjects, upsertProject, deleteProject } from '@/lib/storage';
import toast from 'react-hot-toast';
import Tag from '@/components/ui/Tag';

const emptyProject = (): Project => ({
  id: Date.now().toString(),
  title: '',
  description: '',
  tags: [],
  url: '',
  github: '',
  status: 'active',
});

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Project | null>(null);
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);

  const loadProjects = () => setProjects(getProjects());

  useEffect(() => {
    loadProjects();
  }, []);

  const handleSave = () => {
    if (!editing) return;
    if (!editing.title) {
      toast.error('請輸入專案標題');
      return;
    }
    setSaving(true);
    upsertProject(editing);
    setSaving(false);
    toast.success('專案已儲存');
    setEditing(null);
    loadProjects();
  };

  const handleDelete = (id: string, title: string) => {
    if (!confirm(`確定要刪除「${title}」嗎？`)) return;
    deleteProject(id);
    loadProjects();
    toast.success('專案已刪除');
  };

  const handleAddTag = () => {
    if (!editing) return;
    const tag = tagInput.trim();
    if (tag && !editing.tags.includes(tag)) {
      setEditing((prev) => prev ? { ...prev, tags: [...prev.tags, tag] } : null);
    }
    setTagInput('');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.625rem 0.875rem',
    borderRadius: '6px',
    border: '1px solid #1e1e2e',
    backgroundColor: '#0a0a0f',
    color: '#e8e6e1',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ padding: '2.5rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#e8e6e1',
            }}
          >
            專案管理
          </h1>
          <p style={{ color: '#8b8a97', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            共 {projects.length} 個專案
          </p>
        </div>
        <button
          onClick={() => setEditing(emptyProject())}
          style={{
            padding: '0.625rem 1.5rem',
            borderRadius: '6px',
            backgroundColor: '#f59e0b',
            color: '#0a0a0f',
            fontWeight: 600,
            fontSize: '0.875rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#fbbf24';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#f59e0b';
          }}
        >
          + 新增專案
        </button>
      </div>

      {/* Edit form */}
      {editing && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '2rem',
            border: '1px solid #f59e0b',
            borderRadius: '10px',
            backgroundColor: '#13131a',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <h2
            style={{ color: '#e8e6e1', fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}
          >
            {editing.id && projects.find((p) => p.id === editing.id) ? '編輯專案' : '新增專案'}
          </h2>

          <input
            type="text"
            value={editing.title}
            onChange={(e) => setEditing((prev) => prev ? { ...prev, title: e.target.value } : null)}
            style={inputStyle}
            placeholder="專案標題 *"
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
          />

          <textarea
            value={editing.description}
            onChange={(e) => setEditing((prev) => prev ? { ...prev, description: e.target.value } : null)}
            rows={3}
            style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
            placeholder="專案描述"
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
          />

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              value={editing.url || ''}
              onChange={(e) => setEditing((prev) => prev ? { ...prev, url: e.target.value } : null)}
              style={{ ...inputStyle, flex: 1, minWidth: 200 }}
              placeholder="網站 URL（選填）"
              onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
            />
            <input
              type="text"
              value={editing.github || ''}
              onChange={(e) => setEditing((prev) => prev ? { ...prev, github: e.target.value } : null)}
              style={{ ...inputStyle, flex: 1, minWidth: 200 }}
              placeholder="GitHub URL（選填）"
              onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
            />
          </div>

          <div>
            <select
              value={editing.status}
              onChange={(e) =>
                setEditing((prev) =>
                  prev ? { ...prev, status: e.target.value as Project['status'] } : null
                )
              }
              style={{ ...inputStyle, width: 'auto', cursor: 'pointer' }}
            >
              <option value="active">進行中</option>
              <option value="completed">已完成</option>
              <option value="archived">已封存</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              {editing.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    border: '1px solid #f59e0b',
                    color: '#f59e0b',
                    fontSize: '0.75rem',
                  }}
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() =>
                      setEditing((prev) =>
                        prev ? { ...prev, tags: prev.tags.filter((t) => t !== tag) } : null
                      )
                    }
                    style={{ color: '#f59e0b', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddTag(); } }}
                style={{ ...inputStyle, flex: 1 }}
                placeholder="標籤（按 Enter 新增）"
                onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#f59e0b'; }}
                onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#1e1e2e'; }}
              />
              <button type="button" onClick={handleAddTag}
                style={{ padding: '0.625rem 1rem', borderRadius: '6px', border: '1px solid #1e1e2e', backgroundColor: 'transparent', color: '#8b8a97', fontSize: '0.875rem', cursor: 'pointer' }}
              >新增</button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setEditing(null)}
              style={{ padding: '0.5rem 1.25rem', borderRadius: '6px', border: '1px solid #1e1e2e', backgroundColor: 'transparent', color: '#8b8a97', fontSize: '0.875rem', cursor: 'pointer' }}
            >
              取消
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              style={{ padding: '0.5rem 1.5rem', borderRadius: '6px', backgroundColor: '#f59e0b', color: '#0a0a0f', fontWeight: 600, fontSize: '0.875rem', border: 'none', cursor: 'pointer' }}
            >
              {saving ? '儲存中...' : '儲存'}
            </button>
          </div>
        </motion.div>
      )}

      {/* Projects list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            style={{
              padding: '1.25rem 1.5rem',
              border: '1px solid #1e1e2e',
              borderRadius: '8px',
              backgroundColor: '#13131a',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ color: '#e8e6e1', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.375rem' }}>
                {project.title}
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.1rem 0.5rem',
                    borderRadius: '9999px',
                    backgroundColor: project.status === 'active' ? 'rgba(245,158,11,0.15)' : 'rgba(139,138,151,0.15)',
                    color: project.status === 'active' ? '#f59e0b' : '#8b8a97',
                  }}
                >
                  {project.status === 'active' ? '進行中' : project.status === 'completed' ? '已完成' : '已封存'}
                </span>
                <div style={{ display: 'flex', gap: '0.375rem' }}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} label={tag} small />
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
              <button
                onClick={() => setEditing({ ...project })}
                style={{ padding: '0.375rem 0.75rem', borderRadius: '5px', border: '1px solid #f59e0b', backgroundColor: 'transparent', color: '#f59e0b', fontSize: '0.75rem', cursor: 'pointer' }}
              >
                編輯
              </button>
              <button
                onClick={() => handleDelete(project.id, project.title)}
                style={{ padding: '0.375rem 0.75rem', borderRadius: '5px', border: '1px solid #1e1e2e', backgroundColor: 'transparent', color: '#8b8a97', fontSize: '0.75rem', cursor: 'pointer' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#ef4444'; el.style.color = '#ef4444'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#1e1e2e'; el.style.color = '#8b8a97'; }}
              >
                刪除
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
