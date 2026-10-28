import { Link } from 'react-router-dom'
import { Faq } from '@/components/faq/Faq'
import { CtaBand, StatsBar, Testimonials } from '@/components/sections/Sections'
import { ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { SplitWords } from '@/components/ui/SplitWords'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { useI18n } from '@/i18n/context'
import { IMAGES, img } from '@/lib/site'
import styles from './HomePage.module.css'

// Icons and images per item; the text for each lives at the same index in `t.home`.
const REASON_ICONS = ['truck', 'tag', 'leaf'] as const

const PRODUCT_IMAGES = [IMAGES.cartons, IMAGES.coconut]
const PRODUCT_LINKS = ['/san-pham#thanh-long', '/san-pham#dua']

// Each crop is one photo inside the original "Thành tựu tiêu biểu" collage.
const ACHIEVEMENT_X = ['8.9%', '50.1%', '91.3%']

export function HomePage() {
  const { t } = useI18n()
  const h = t.home
  useDocumentTitle(t.meta.home)

  return (
    <>
      <section className={styles.hero} data-parallax>
        <span className={styles.heroBlob} aria-hidden="true" />
        <div className={styles.orbs} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText} data-reveal="stagger">
            <span className="eyebrow">{h.eyebrow}</span>
            <h1>
              <SplitWords text={h.title[0]} />{' '}
              <SplitWords text={h.title[1]} start={3} className="shimmer-text" />{' '}
              <SplitWords text={h.title[2]} start={6} />
            </h1>
            <p className="lead">{h.lead}</p>
            <div className={styles.heroActions}>
              <ButtonLink to="/lien-he">
                {t.common.getQuote}
                <Icon name="arrowRight" size={18} />
              </ButtonLink>
              <ButtonLink to="/san-pham" variant="ghost">
                {h.viewProducts}
              </ButtonLink>
            </div>
            <ul className={styles.badges}>
              {h.badges.map((b) => (
                <li key={b}>
                  <Icon name="check" size={16} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.heroMedia} data-reveal="right">
            <div className={`${styles.heroStage} glare`} data-tilt="9">
              <span className={styles.ring} aria-hidden="true" />
              <span className={`${styles.ring} ${styles.ringAlt}`} aria-hidden="true" />
              <div className={styles.heroFrame}>
                <img
                  src={img(IMAGES.packingHall, 1000)}
                  width="1000"
                  height="750"
                  alt={h.heroAlt}
                  fetchPriority="high"
                />
              </div>
              <div className={styles.floatCard}>
                <span className={styles.floatIcon}>
                  <Icon name="globe" size={22} />
                </span>
                <div>
                  <strong>{h.marketsCard}</strong>
                  <span>{h.marketsCardSub}</span>
                </div>
              </div>
              <div className={`${styles.floatCard} ${styles.floatBadge}`}>
                <span className={styles.floatIcon}>
                  <Icon name="shield" size={22} />
                </span>
                <div>
                  <strong>GlobalGAP</strong>
                  <span>{h.exportStandard}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <StatsBar />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.headRow} data-reveal>
            <div className="sectionHead" style={{ marginBottom: 0 }}>
              <span className="eyebrow">{h.productsEyebrow}</span>
              <h2>{h.productsTitle}</h2>
              <p className="lead">{h.productsLead}</p>
            </div>
            <ButtonLink to="/san-pham" variant="ghost">
              {h.productsMore}
              <Icon name="arrowRight" size={18} />
            </ButtonLink>
          </div>
          <div className={styles.products} data-reveal="stagger">
            {h.products.map((p, i) => (
              <Link key={p.name} to={PRODUCT_LINKS[i]} className={`${styles.product} glare`} data-tilt="6">
                <div className={styles.productMedia}>
                  <img
                    className="parallax-img"
                    src={img(PRODUCT_IMAGES[i], 900)}
                    width="900"
                    height="675"
                    loading="lazy"
                    alt={p.alt}
                  />
                  <span className={styles.productTag}>{p.tag}</span>
                </div>
                <div className={styles.productBody}>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <span className={styles.productLink}>
                    {h.learnMore} <Icon name="arrowRight" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.marketsRow} data-reveal>
            <p className={styles.marketsLabel}>{h.marketsLabel}</p>
            <ul className={styles.markets} data-reveal="stagger">
              {t.markets.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead sectionHead--center" data-reveal>
            <span className="eyebrow">{h.achievementsEyebrow}</span>
            <h2>{h.achievementsTitle}</h2>
          </div>
          <div className={styles.achievements} data-reveal="stagger">
            {h.achievements.map((text, i) => (
              <Card key={ACHIEVEMENT_X[i]} className={styles.achievement}>
                <div
                  className={styles.achievementPhoto}
                  role="img"
                  aria-label={text}
                  style={{
                    backgroundImage: `url(${img(IMAGES.achievements, 1920)})`,
                    backgroundPositionX: ACHIEVEMENT_X[i],
                  }}
                />
                <p>{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="sectionHead sectionHead--center" data-reveal>
            <span className="eyebrow">{h.reasonsEyebrow}</span>
            <h2>{h.reasonsTitle}</h2>
            <p className="lead">{h.reasonsLead}</p>
          </div>
          <div className={styles.reasons} data-reveal="stagger">
            {h.reasons.map((r, i) => (
              <Card key={r.title} title={r.title} icon={<Icon name={REASON_ICONS[i]} size={24} />} highlight={i === 0}>
                <ul className={styles.points}>
                  {r.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={18} />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <Testimonials />
      <div className="section--alt">
        <Faq />
      </div>
      <CtaBand />
    </>
  )
}
