interface TagProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
  small?: boolean;
}

export default function Tag({ label, onClick, active = false, small = false }: TagProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: small ? '0.125rem 0.5rem' : '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: small ? '0.7rem' : '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.05em',
    border: '1px solid',
    transition: 'all 0.2s',
    cursor: onClick ? 'pointer' : 'default',
    userSelect: 'none',
    backgroundColor: active ? '#f59e0b' : 'transparent',
    color: active ? '#0a0a0f' : '#8b8a97',
    borderColor: active ? '#f59e0b' : '#1e1e2e',
  };

  return (
    <span
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (onClick && !active) {
          (e.currentTarget as HTMLElement).style.borderColor = '#f59e0b';
          (e.currentTarget as HTMLElement).style.color = '#f59e0b';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick && !active) {
          (e.currentTarget as HTMLElement).style.borderColor = '#1e1e2e';
          (e.currentTarget as HTMLElement).style.color = '#8b8a97';
        }
      }}
    >
      {label}
    </span>
  );
}
