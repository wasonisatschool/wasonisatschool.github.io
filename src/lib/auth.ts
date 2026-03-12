import { cookies } from 'next/headers';

const SESSION_COOKIE = 'wason_session';
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  if (!session) return null;
  try {
    const data = JSON.parse(Buffer.from(session.value, 'base64').toString());
    if (data.expires < Date.now()) return null;
    return data;
  } catch {
    return null;
  }
}

export function createSessionToken(userId: string) {
  const data = {
    userId,
    expires: Date.now() + SESSION_DURATION_MS,
  };
  return Buffer.from(JSON.stringify(data)).toString('base64');
}
