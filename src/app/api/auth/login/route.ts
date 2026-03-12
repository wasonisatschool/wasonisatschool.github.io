import { NextResponse } from 'next/server';
import { createSessionToken } from '@/lib/auth';

export async function POST(request: Request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (password !== adminPassword) {
    return NextResponse.json({ error: '密碼錯誤' }, { status: 401 });
  }

  const token = createSessionToken('admin');
  const response = NextResponse.json({ success: true });
  response.cookies.set('wason_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 86400,
    path: '/',
  });
  return response;
}
