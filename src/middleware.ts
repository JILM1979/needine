import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Si ya tiene el userId en cookie, sigue
  const existingUserId = request.cookies.get('userId');
  if (existingUserId) return response;

  // Si no, genera uno y colócalo
  const newUserId = uuidv4();
  response.cookies.set('userId', newUserId, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });

  return response;
}
