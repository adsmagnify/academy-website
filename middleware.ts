import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BLOCKED_COUNTRIES = ['CN', 'PK', 'BD', 'ZA', 'NG']; // China, Pakistan, Bangladesh, South Africa, Nigeria

type RequestWithGeo = NextRequest & { geo?: { country?: string } };

export function middleware(request: NextRequest) {
  const req = request as RequestWithGeo;
  const country = req.geo?.country ?? request.headers.get('x-vercel-ip-country') ?? '';

  if (country && BLOCKED_COUNTRIES.includes(country)) {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"><title>Access restricted</title></head>
        <body style="font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #fafafa;">
          <div style="text-align: center; padding: 2rem;">
            <h1 style="color: #333;">Access restricted</h1>
            <p style="color: #666;">This service is not available in your region.</p>
          </div>
        </body>
      </html>
      `,
      {
        status: 403,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?)$).*)'],
};
