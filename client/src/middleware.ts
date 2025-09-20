import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { NODE_ENV } from './utils/services/constants'

export function middleware(request: NextRequest) {
    const response = NextResponse.next()

    // Add performance headers for faster loading
    response.headers.set('X-DNS-Prefetch-Control', 'on')

    // Enable early hints for critical resources
    if (request.nextUrl.pathname === '/') {
        response.headers.set('Link', [
            '</images/logo1.png>; rel=preload; as=image',
            '<https://fonts.googleapis.com>; rel=preconnect',
            '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
        ].join(', '))
    }

    // Optimize for static assets
    if (request.nextUrl.pathname.startsWith('/_next/static/')) {
        response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    }

    // Add server timing header for debugging
    if (NODE_ENV === 'development') {
        response.headers.set('Server-Timing', 'middleware;dur=0')
    }

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}