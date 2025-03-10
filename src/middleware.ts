import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as acceptLanguage from 'accept-language-parser'

const locales = ['en', 'zh', 'ja'] as const
const defaultLocale = 'ja'

function isMobile(userAgent: string): boolean {
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  return mobileRegex.test(userAgent)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 跳过静态资源请求
  if (
    pathname.startsWith('/images') || // 跳过 /images/*
    pathname.startsWith('/_next') ||  // 跳过 Next.js 内部资源
    pathname.startsWith('/api') ||    // 跳过 API 路由
    pathname === '/favicon.ico'       // 跳过 favicon
  ) {
    return NextResponse.next() // 直接处理请求，不重定向
  }

  // 检查路径是否已包含语言标识
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // 获取用户首选语言
  const acceptLang = request.headers.get('accept-language') || 'en'
  const languages = acceptLanguage.parse(acceptLang)
  const preferredLocale = languages[0]?.code
  
  // 选择匹配的语言或默认语言
  const locale = locales.includes(preferredLocale as any) 
    ? preferredLocale 
    : defaultLocale

  // 根据设备类型选择路径
  const userAgent = request.headers.get('user-agent') || ''
  const devicePath = isMobile(userAgent) ? '/mobile/top' : '/top'

  // 重定向到对应的路径
  request.nextUrl.pathname = `/${locale}${devicePath}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // 只匹配不以以下路径开头的请求
    '/((?!images|_next/static|_next/image|api|favicon.ico).*)',
  ],
}