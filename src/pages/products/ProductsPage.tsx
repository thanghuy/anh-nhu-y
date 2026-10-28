import { CtaBand, PageHero } from '@/components/sections/Sections'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { useI18n } from '@/i18n/context'
import { IMAGES, img } from '@/lib/site'
import styles from '../pages.module.css'

interface Spec {
  label: string
  value: string
}

function SpecList({ specs }: { specs: Spec[] }) {
  return (
    <dl className={styles.specs} data-reveal="stagger">
      {specs.map((s) => (
        <div key={s.label} className={styles.spec}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function ProductsPage() {
  const { t } = useI18n()
  const p = t.products
  useDocumentTitle(t.meta.products)

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title}>
        {p.lead}
      </PageHero>

      <div className={`container ${styles.tabsWrap}`}>
        <nav className={styles.tabs} aria-label={p.categories}>
          <a href="#thanh-long">{p.dragonFruit}</a>
          <a href="#dua">{p.coconut}</a>
        </nav>
      </div>

      <section id="thanh-long" className="section">
        <div className={`container ${styles.product}`}>
          <div className={styles.gallery} data-reveal="stagger">
            <img
              data-tilt="8"
              className={styles.galleryMain}
              src={img(IMAGES.packingHall, 1200)}
              width="1200"
              height="900"
              alt={p.gallery[0]}
            />
            <img data-tilt="8" src={img(IMAGES.cartons, 700)} width="700" height="933" loading="lazy" alt={p.gallery[1]} />
            <img data-tilt="8" src={img(IMAGES.farmer, 700)} width="700" height="486" loading="lazy" alt={p.gallery[2]} />
          </div>
          <div className={styles.stack} data-reveal="right">
            <span className={styles.label}>{p.flagship}</span>
            <h2>{p.dragonFruit}</h2>
            <p className={styles.body}>{p.dragonFruitText}</p>
            <ul className={styles.chips}>
              {p.varieties.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
            <SpecList specs={p.dragonFruitSpecs} />
            <ButtonLink to="/lien-he?product=dragon-fruit" className={styles.quoteCta}>
              {p.quoteDragonFruit}
              <Icon name="arrowRight" size={18} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="dua" className="section section--alt">
        <div className={`container ${styles.product} ${styles.productReverse}`}>
          <div className={styles.stack} data-reveal="left">
            <span className={styles.label}>
              <Icon name="leaf" size={16} />
              {p.newProduct}
            </span>
            <h2>{p.coconut}</h2>
            <p className={styles.body}>{p.coconutText}</p>
            <SpecList specs={p.coconutSpecs} />
            <ButtonLink to="/lien-he?product=coconut" className={styles.quoteCta}>
              {p.quoteCoconut}
              <Icon name="arrowRight" size={18} />
            </ButtonLink>
          </div>
          <figure className={`${styles.photo} glare`} data-reveal="zoom" data-tilt="6">
            <img
              src={img(IMAGES.coconut, 1000)}
              width="1000"
              height="1000"
              loading="lazy"
              style={{ aspectRatio: '1' }}
              alt={p.coconutAlt}
            />
          </figure>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
