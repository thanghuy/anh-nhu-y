import type { ReactNode } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { SplitWords } from '@/components/ui/SplitWords'
import { useCountUp } from '@/hooks/useCountUp'
import { CONTACT, STATS, TESTIMONIALS } from '@/lib/site'
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
  return (
    <dl className={`${styles.stats} glare`} data-reveal="stagger" data-tilt="3">
      {STATS.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </dl>
  )
}

export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead sectionHead--center" data-reveal>
          <span className="eyebrow">Khách hàng nói gì</span>
          <h2>Trải nghiệm của khách hàng</h2>
          <p className="lead">Sản phẩm thanh long tươi ngon, chất lượng tuyệt vời từ Anh Như Ý!</p>
        </div>
        <div className={styles.quotes} data-reveal="stagger">
          {TESTIMONIALS.map((t) => (
            <figure key={t} className={`${styles.quote} glare`} data-tilt="7">
              <div className={styles.stars} aria-label="5 trên 5 sao">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" size={18} />
                ))}
              </div>
              <blockquote>“{t}”</blockquote>
              <figcaption>Khách hàng của Anh Như Ý</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className={`container ${styles.ctaWrap}`}>
      <div className={`${styles.cta} glare`} data-reveal="zoom" data-tilt="4">
        <span className={styles.ctaGlow} aria-hidden="true" />
        <div className={styles.ctaText}>
          <h2>Sẵn sàng hợp tác cùng Anh Như Ý?</h2>
          <p>Gửi yêu cầu để nhận báo giá thanh long và dừa xuất khẩu, phản hồi trong giờ làm việc.</p>
        </div>
        <div className={styles.ctaActions}>
          <ButtonLink to="/lien-he" variant="light">
            Liên hệ báo giá
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
