import { createContext, useContext } from 'react'
import { en } from './en'
import { vi } from './vi'
import type { Dict } from './vi'

export const LANGS = ['vi', 'en'] as const
export type Lang = (typeof LANGS)[number]

export const DICTS: Record<Lang, Dict> = { vi, en }

const STORAGE_KEY = 'lang'

const VN_TIMEZONES = ['Asia/Ho_Chi_Minh', 'Asia/Saigon']

// True when the machine's locale says Vietnam: a Vietnamese language, a VN region (e.g. en-VN), or a
// Vietnamese time zone.
function isVietnamLocale(): boolean {
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const tag of tags) {
    if (!tag) continue
    try {
      const locale = new Intl.Locale(tag)
      if (locale.language === 'vi' || locale.region === 'VN') return true
    } catch {
      // Ignore malformed tags.
    }
  }
  try {
    return VN_TIMEZONES.includes(Intl.DateTimeFormat().resolvedOptions().timeZone)
  } catch {
    return false
  }
}

// A saved choice wins; otherwise Vietnamese for machines set up for Vietnam, English for everyone else.
export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'vi' || saved === 'en') return saved
  } catch {
    // Storage can be blocked (private mode); fall through to the machine locale.
  }
  return isVietnamLocale() ? 'vi' : 'en'
}

export function saveLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // Ignore: the choice just won't persist.
  }
}

interface I18nValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

export const I18nContext = createContext<I18nValue>({ lang: 'vi', setLang: () => {}, t: vi })

export const useI18n = () => useContext(I18nContext)
