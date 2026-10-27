import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { DICTS, I18nContext, detectLang, saveLang } from './context'
import type { Lang } from './context'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: DICTS[lang],
      setLang: (next: Lang) => {
        saveLang(next)
        setLangState(next)
      },
    }),
    [lang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
