import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import AdminSidebar from '@/components/admin/Sidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0a0a0f' }}>
      <AdminSidebar />
      <div style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </div>
    </div>
  );
}
