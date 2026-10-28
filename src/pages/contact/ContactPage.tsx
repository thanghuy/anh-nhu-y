import { Faq } from '@/components/faq/Faq'
import { MailForm } from '@/components/forms/MailForm'
import { PageHero } from '@/components/sections/Sections'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { useI18n } from '@/i18n/context'
import { useSearchParams } from 'react-router-dom'
import { CONTACT, QUOTE_PRODUCTS } from '@/lib/site'
import type { QuoteProduct } from '@/lib/site'
import styles from '../pages.module.css'

interface Channel {
  icon: IconName
  title: string
  items: { text: string; href?: string }[]
}

export function ContactPage() {
  const { t } = useI18n()
  const c = t.contactPage
  useDocumentTitle(t.meta.contact)
  const [params] = useSearchParams()
  const productParam = params.get('product')
  const initialProduct =
    productParam && productParam in QUOTE_PRODUCTS ? c.productOptions[QUOTE_PRODUCTS[productParam as QuoteProduct]] : undefined

  const channels: Channel[] = [
    {
      icon: 'phone',
      title: c.support,
      items: [
        { text: CONTACT.phone, href: CONTACT.phoneHref },
        ...CONTACT.hotlines,
        { text: `Zalo ${CONTACT.phone}`, href: CONTACT.zalo },
      ],
    },
    {
      icon: 'mail',
      title: c.email,
      items: [{ text: CONTACT.email, href: `mailto:${CONTACT.email}` }],
    },
    { icon: 'pin', title: c.address, items: [{ text: t.contact.address }] },
    { icon: 'clock', title: c.hours, items: [{ text: t.contact.hours }] },
  ]

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title}>
        {c.lead}
      </PageHero>

      <section className="section">
        <div className={`container ${styles.contact}`}>
          <h2 className="visually-hidden">{c.channels}</h2>
          <div className={styles.channels} data-reveal="stagger">
            {channels.map((ch) => (
              <div key={ch.title} className={`${styles.channel} glare`} data-tilt="6">
                <span className={styles.channelIcon}>
                  <Icon name={ch.icon} size={22} />
                </span>
                <div>
                  <h3>{ch.title}</h3>
                  <ul>
                    {ch.items.map((item) => (
                      <li key={item.text}>{item.href ? <a href={item.href}>{item.text}</a> : item.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.formCard} data-reveal="right">
            <h2>{c.formTitle}</h2>
            <p className={styles.formIntro}>{c.formIntro}</p>
            <MailForm
              to={CONTACT.email}
              initialValues={initialProduct ? { product: initialProduct } : undefined}
              subject={c.subject}
              fields={[
                { name: 'name', label: c.name, autoComplete: 'name', placeholder: c.namePlaceholder },
                {
                  name: 'company',
                  label: c.company,
                  autoComplete: 'organization',
                  placeholder: c.companyPlaceholder,
                },
                {
                  name: 'email',
                  label: c.emailLabel,
                  type: 'email',
                  required: true,
                  autoComplete: 'email',
                  placeholder: c.emailPlaceholder,
                },
                { name: 'phone', label: c.phoneLabel, type: 'tel', autoComplete: 'tel', placeholder: c.phonePlaceholder },
                {
                  name: 'product',
                  label: c.product,
                  type: 'select',
                  required: true,
                  placeholder: c.productPlaceholder,
                  options: c.productOptions,
                },
                { name: 'volume', label: c.volume, required: true, placeholder: c.volumePlaceholder },
                {
                  name: 'destination',
                  label: c.destination,
                  required: true,
                  autoComplete: 'country-name',
                  placeholder: c.destinationPlaceholder,
                  wide: true,
                },
                {
                  name: 'message',
                  label: c.message,
                  type: 'textarea',
                  placeholder: c.messagePlaceholder,
                  wide: true,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <div className="section--alt">
        <Faq />
      </div>
    </>
  )
}
