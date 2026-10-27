import { Link } from 'react-router-dom'
import { useI18n } from '@/i18n/context'
import styles from './Faq.module.css'

export function Faq() {
  const { t } = useI18n()
  return (
    <section className="section">
      <div className={`container ${styles.faq}`}>
        <div className={styles.intro} data-reveal="left">
          <span className="eyebrow">FAQ</span>
          <h2>{t.faq.title}</h2>
          <p className="lead">
            {t.faq.leadBefore} <Link to="/lien-he">{t.faq.leadLink}</Link> {t.faq.leadAfter}
          </p>
        </div>
        <div className={styles.list} data-reveal="stagger">
          {t.faq.items.map((item, i) => (
            <details key={item.q} className={styles.item} open={i === 0}>
              <summary>
                {item.q}
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
