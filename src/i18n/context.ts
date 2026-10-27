import { createContext, useContext } from 'react'
import { en } from './en'
import { vi } from './vi'
import type { Dict } from './vi'

export const LANGS = ['vi', 'en'] as const
export type Lang = (typeof LANGS)[number]

export const DICTS: Record<Lang, Dict> = { vi, en }

const STORAGE_KEY = 'lang'

// A saved choice wins; otherwise follow the visitor's OS/browser language (Vietnamese if any preferred
// language is vi, English for everyone else).
export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'vi' || saved === 'en') return saved
  } catch {
    // Storage can be blocked (private mode); fall through to the browser language.
  }
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const tag of preferred) {
    const base = tag?.toLowerCase().split('-')[0]
    if (base === 'vi') return 'vi'
    if (base === 'en') return 'en'
  }
  return 'en'
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
