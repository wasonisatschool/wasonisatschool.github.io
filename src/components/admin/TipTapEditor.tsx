'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import { useState, useCallback } from 'react';

interface TipTapEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

type ToolbarButton = {
  label: string;
  title: string;
  action: () => void;
  isActive?: boolean;
};

export default function TipTapEditor({ content, onChange, placeholder }: TipTapEditorProps) {
  const [aiLoading, setAiLoading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder || '開始撰寫...',
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: 'noopener noreferrer' },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'tiptap-editor',
      },
    },
  });

  const handleAI = useCallback(async () => {
    if (!editor || aiLoading) return;
    const selection = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      ' '
    );
    const prompt = selection || editor.getText().slice(0, 200) || '法律科技主題';

    setAiLoading(true);
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      if (!res.body) return;
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      editor.chain().focus().insertContent('\n\n').run();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        editor.chain().focus().insertContent(chunk).run();
      }
    } finally {
      setAiLoading(false);
    }
  }, [editor, aiLoading]);

  if (!editor) return null;

  const toolbarButtons: ToolbarButton[] = [
    {
      label: 'B',
      title: '粗體',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
    },
    {
      label: 'I',
      title: '斜體',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
    },
    {
      label: 'H1',
      title: '標題 1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive('heading', { level: 1 }),
    },
    {
      label: 'H2',
      title: '標題 2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive('heading', { level: 2 }),
    },
    {
      label: 'H3',
      title: '標題 3',
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive('heading', { level: 3 }),
    },
    {
      label: '≡',
      title: '無序列表',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
    },
    {
      label: '⒈',
      title: '有序列表',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
    },
    {
      label: '❝',
      title: '引用',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive('blockquote'),
    },
    {
      label: '</>',
      title: '程式碼',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive('codeBlock'),
    },
    {
      label: '—',
      title: '分隔線',
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      label: '↩',
      title: '撤銷',
      action: () => editor.chain().focus().undo().run(),
    },
    {
      label: '↪',
      title: '重做',
      action: () => editor.chain().focus().redo().run(),
    },
  ];

  return (
    <div
      style={{
        border: '1px solid #1e1e2e',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#0a0a0f',
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2px',
          padding: '0.5rem',
          borderBottom: '1px solid #1e1e2e',
          backgroundColor: '#13131a',
          alignItems: 'center',
        }}
      >
        {toolbarButtons.map((btn) => (
          <button
            key={btn.title}
            type="button"
            title={btn.title}
            onClick={btn.action}
            style={{
              padding: '0.3rem 0.6rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: btn.isActive ? '#f59e0b' : 'transparent',
              color: btn.isActive ? '#0a0a0f' : '#8b8a97',
              fontSize: '0.8rem',
              fontWeight: btn.isActive ? 700 : 400,
              cursor: 'pointer',
              transition: 'all 0.15s',
              fontFamily: 'monospace',
            }}
            onMouseEnter={(e) => {
              if (!btn.isActive) {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#1e1e2e';
                (e.currentTarget as HTMLElement).style.color = '#e8e6e1';
              }
            }}
            onMouseLeave={(e) => {
              if (!btn.isActive) {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#8b8a97';
              }
            }}
          >
            {btn.label}
          </button>
        ))}

        {/* Divider */}
        <div
          style={{ width: 1, height: 20, backgroundColor: '#1e1e2e', margin: '0 4px' }}
        />

        {/* AI wand button */}
        <button
          type="button"
          title="AI 輔助寫作"
          onClick={handleAI}
          disabled={aiLoading}
          style={{
            padding: '0.3rem 0.75rem',
            borderRadius: '4px',
            border: '1px solid rgba(245,158,11,0.3)',
            backgroundColor: aiLoading ? 'rgba(245,158,11,0.1)' : 'transparent',
            color: '#f59e0b',
            fontSize: '0.8rem',
            cursor: aiLoading ? 'wait' : 'pointer',
            transition: 'all 0.15s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
          }}
          onMouseEnter={(e) => {
            if (!aiLoading)
              (e.currentTarget as HTMLElement).style.backgroundColor =
                'rgba(245,158,11,0.15)';
          }}
          onMouseLeave={(e) => {
            if (!aiLoading)
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
        >
          {aiLoading ? '⏳' : '✨'} AI 輔助
        </button>
      </div>

      {/* Editor content */}
      <div className="tiptap-editor">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
