import { notFound } from 'next/navigation'

export const locales = ['en', 'zh','ja'] as const
export type Locale = typeof locales[number]

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export async function getTranslations(locale: string) {
  if (!isLocale(locale)) notFound()
  
  try {
    const translations = await import(`../../public/locales/${locale}/common.json`)
    return translations.default
  } catch (error) {
    console.error('Failed to load translations:', error)
    notFound()
  }
}