import { Faq } from '@/components/faq/Faq'
import { MailForm } from '@/components/forms/MailForm'
import { PageHero } from '@/components/sections/Sections'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { useI18n } from '@/i18n/context'
import { CONTACT } from '@/lib/site'
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

  const channels: Channel[] = [
    {
      icon: 'phone',
      title: c.support,
      items: [
        { text: CONTACT.phone, href: CONTACT.phoneHref },
        ...CONTACT.hotlines.map((p) => ({ text: p, href: `tel:${p}` })),
      ],
    },
    {
      icon: 'mail',
      title: c.email,
      items: [CONTACT.email, ...CONTACT.feedbackEmails].map((e) => ({ text: e, href: `mailto:${e}` })),
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
              to="contact@anhnhuy.com"
              subject={c.subject}
              fields={[
                { name: 'name', label: c.name, autoComplete: 'name', placeholder: c.namePlaceholder },
                {
                  name: 'email',
                  label: c.emailLabel,
                  type: 'email',
                  required: true,
                  autoComplete: 'email',
                  placeholder: c.emailPlaceholder,
                },
                {
                  name: 'message',
                  label: c.message,
                  type: 'textarea',
                  required: true,
                  placeholder: c.messagePlaceholder,
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
