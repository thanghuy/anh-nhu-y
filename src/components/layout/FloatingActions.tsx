import { useEffect, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { CONTACT } from '@/lib/site'
import styles from './FloatingActions.module.css'

const RING = 2 * Math.PI * 22

// Bottom-right quick actions: call, Facebook, and back-to-top with a scroll-progress ring.
export function FloatingActions() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const showTop = progress > 0.08

  return (
    <div className={styles.dock}>
      <button
        type="button"
        className={`${styles.fab} ${styles.top} ${showTop ? styles.topVisible : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Lên đầu trang"
        tabIndex={showTop ? 0 : -1}
      >
        <svg className={styles.ring} viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="22" />
          <circle cx="24" cy="24" r="22" strokeDasharray={RING} strokeDashoffset={RING * (1 - progress)} />
        </svg>
        <Icon name="arrowUp" size={20} />
        <span className={styles.tip}>Lên đầu trang</span>
      </button>

      <a
        className={`${styles.fab} ${styles.facebook}`}
        href={CONTACT.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Nhắn tin qua Facebook"
      >
        <Icon name="facebook" size={22} />
        <span className={styles.tip}>Facebook</span>
      </a>

      <a className={`${styles.fab} ${styles.call}`} href={CONTACT.phoneHref} aria-label={`Gọi ${CONTACT.phone}`}>
        <span className={styles.pulse} aria-hidden="true" />
        <span className={styles.pulse} aria-hidden="true" />
        <Icon name="phone" size={24} className={styles.shake} />
        <span className={styles.tip}>Gọi {CONTACT.phone}</span>
      </a>
    </div>
  )
}
