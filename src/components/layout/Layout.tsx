import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FloatingActions } from '@/components/layout/FloatingActions'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { useMotionFx } from '@/hooks/useMotionFx'
import { useReveal } from '@/hooks/useReveal'
import { LANGS, useI18n } from '@/i18n/context'
import { CONTACT, IMAGES, NAV, img } from '@/lib/site'
import styles from './Layout.module.css'

const YEAR = new Date().getFullYear()

interface LayoutProps {
  children: ReactNode
}

function Brand() {
  const { t } = useI18n()
  return (
    <Link to="/" className={styles.brand} aria-label={t.common.brandHome}>
      <img src={img(IMAGES.logo, 120)} width="44" height="44" alt="" />
      <span className={styles.brandText}>
        <strong>Anh Như Ý</strong>
        <small>ANY Fruit</small>
      </span>
    </Link>
  )
}

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className={styles.lang} role="group" aria-label={t.common.language}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          className={l === lang ? styles.langActive : ''}
          aria-pressed={l === lang}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export function Layout({ children }: LayoutProps) {
  const { t } = useI18n()
  const { pathname } = useLocation()
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const open = menuPath === pathname
  const setOpen = (next: boolean) => setMenuPath(next ? pathname : null)
  const [scrolled, setScrolled] = useState(false)
  useReveal(pathname)
  useMotionFx()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuPath(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className={styles.shell}>
      <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ''}`}>
        <span className={styles.progress} aria-hidden="true" />
        <div className={`container ${styles.inner}`}>
          <Brand />
          <nav className={styles.nav} aria-label={t.nav.main}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {t.nav[item.key]}
              </NavLink>
            ))}
          </nav>
          <div className={styles.actions}>
            <a className={styles.phone} href={CONTACT.phoneHref}>
              <Icon name="phone" size={18} />
              {CONTACT.phone}
            </a>
            <LangSwitch />
            <ButtonLink to="/lien-he" className={styles.cta}>
              {t.common.getQuote}
            </ButtonLink>
            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.common.closeMenu : t.common.openMenu}
              onClick={() => setOpen(!open)}
            >
              <Icon name={open ? 'close' : 'menu'} size={24} />
            </button>
          </div>
        </div>
      </header>
      <div id="mobile-menu" className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`} hidden={!open}>
        <nav className="container" aria-label={t.nav.mobile}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ''}`}
            >
              {t.nav[item.key]}
              <Icon name="arrowRight" size={18} />
            </NavLink>
          ))}
          <a className={styles.mobilePhone} href={CONTACT.phoneHref}>
            <Icon name="phone" size={18} />
            {CONTACT.phone}
          </a>
        </nav>
      </div>

      <main key={pathname} className={`${styles.main} page-enter`}>
        {children}
      </main>

      <FloatingActions />

      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.footerBrand}>
            <Brand />
            <p>{t.footer.tagline}</p>
            <a className={styles.social} href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={18} />
            </a>
          </div>
          <div>
            <h3 className={styles.footerTitle}>{t.footer.navigation}</h3>
            <ul className={styles.footerList}>
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{t.nav[item.key]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.footerTitle}>{t.footer.contact}</h3>
            <ul className={styles.footerList}>
              <li>
                <Icon name="mail" size={18} />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <Icon name="phone" size={18} />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <Icon name="pin" size={18} />
                <span>{t.contact.address}</span>
              </li>
              <li>
                <Icon name="clock" size={18} />
                <span>
                  {t.footer.hours}: {t.contact.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={`container ${styles.footerBottom}`}>
          <span>
            © {YEAR} Anh Như Ý. {t.footer.rights}
          </span>
          <span>{t.footer.slogan}</span>
        </div>
      </footer>
    </div>
  )
}
