import { Faq } from '@/components/faq/Faq'
import { CtaBand, PageHero, StatsBar, Testimonials } from '@/components/sections/Sections'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { useI18n } from '@/i18n/context'
import { IMAGES, img } from '@/lib/site'
import styles from '../pages.module.css'

// Dictionary paragraphs alternate plain and bold runs: [plain, bold, plain, bold, ...].
function Rich({ parts }: { parts: string[] }) {
  return parts.map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

export function AboutPage() {
  const { t } = useI18n()
  const a = t.about
  useDocumentTitle(t.meta.about)

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title}>
        {a.lead}
      </PageHero>

      <section className="section">
        <div className={`container ${styles.split}`}>
          <div className={styles.stack} data-reveal="left">
            <span className="eyebrow">{a.storyEyebrow}</span>
            <h2>{a.storyTitle}</h2>
            <p className={styles.body}>
              <Rich parts={a.story1} />
            </p>
            <p className={styles.body}>
              <Rich parts={a.story2} />
            </p>
            <ul className={styles.chips}>
              {t.markets.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <figure className={`${styles.photo} glare`} data-reveal="right" data-tilt="6">
            <img
              src={img(IMAGES.storefront, 1000)}
              width="1000"
              height="750"
              alt={t.home.storefrontAlt}
            />
          </figure>
        </div>
        <div className={`container ${styles.statsGap}`}>
          <StatsBar />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="sectionHead sectionHead--center" data-reveal>
            <span className="eyebrow">{a.directionEyebrow}</span>
            <h2>{a.directionTitle}</h2>
          </div>
          <div className={styles.two} data-reveal="stagger">
            <Card title={a.mission} icon={<Icon name="leaf" size={24} />}>
              <p>
                <Rich parts={a.missionText} />
              </p>
            </Card>
            <Card title={a.vision} icon={<Icon name="globe" size={24} />} highlight>
              <ul className={styles.ticks}>
                {a.visionPoints.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={18} />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
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
