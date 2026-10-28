import type { ReactNode } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { SplitWords } from '@/components/ui/SplitWords'
import { useCountUp } from '@/hooks/useCountUp'
import { useI18n } from '@/i18n/context'
import { CONTACT } from '@/lib/site'
import styles from './Sections.module.css'

interface PageHeroProps {
  eyebrow: string
  title: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <span className={styles.blob} aria-hidden="true" />
      <div className={`container ${styles.pageHeroInner}`} data-reveal="stagger">
        <span className="eyebrow">{eyebrow}</span>
        <h1>
          <SplitWords text={title} />
        </h1>
        {children && <p className="lead">{children}</p>}
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  const [, num, suffix] = value.match(/^(\d+)(.*)$/) ?? [value, '0', '']
  const { ref, value: current } = useCountUp<HTMLElement>(Number(num))
  return (
    <div className={styles.stat}>
      <dt>{label}</dt>
      <dd ref={ref} aria-label={value}>
        {current}
        {suffix}
      </dd>
    </div>
  )
}

export function StatsBar() {
  const { t } = useI18n()
  return (
    <dl className={`${styles.stats} glare`} data-reveal="stagger" data-tilt="3">
      {t.stats.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </dl>
  )
}

export function Testimonials({ alt = false }: { alt?: boolean }) {
  const { t } = useI18n()
  return (
    <section className={`section ${alt ? 'section--alt' : ''}`}>
      <div className="container">
        <div className="sectionHead sectionHead--center" data-reveal>
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2>{t.testimonials.title}</h2>
          <p className="lead">{t.testimonials.lead}</p>
        </div>
        <div className={styles.quotes} data-reveal="stagger">
          {t.testimonials.items.map((q) => (
            <figure key={q} className={`${styles.quote} glare`} data-tilt="7">
              <blockquote>“{q}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  const { t } = useI18n()
  return (
    <section className={`container ${styles.ctaWrap}`}>
      <div className={`${styles.cta} glare`} data-reveal="zoom" data-tilt="4">
        <span className={styles.ctaGlow} aria-hidden="true" />
        <div className={styles.ctaText}>
          <h2>{t.cta.title}</h2>
          <p>{t.cta.text}</p>
        </div>
        <div className={styles.ctaActions}>
          <ButtonLink to="/lien-he" variant="light">
            {t.cta.button}
            <Icon name="arrowRight" size={18} />
          </ButtonLink>
          <a className={styles.ctaPhone} href={CONTACT.phoneHref}>
            <Icon name="phone" size={18} />
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
