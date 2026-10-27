import { Faq } from '@/components/faq/Faq'
import { MailForm } from '@/components/forms/MailForm'
import { PageHero } from '@/components/sections/Sections'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { CONTACT } from '@/lib/site'
import styles from '../pages.module.css'

interface Channel {
  icon: IconName
  title: string
  items: { text: string; href?: string }[]
}

const CHANNELS: Channel[] = [
  {
    icon: 'phone',
    title: 'Hỗ trợ',
    items: [
      { text: CONTACT.phone, href: CONTACT.phoneHref },
      ...CONTACT.hotlines.map((p) => ({ text: p, href: `tel:${p}` })),
    ],
  },
  {
    icon: 'mail',
    title: 'Email',
    items: [CONTACT.email, ...CONTACT.feedbackEmails].map((e) => ({ text: e, href: `mailto:${e}` })),
  },
  { icon: 'pin', title: 'Địa chỉ', items: [{ text: CONTACT.address }] },
  { icon: 'clock', title: 'Giờ làm việc', items: [{ text: CONTACT.hours }] },
]

export function ContactPage() {
  useDocumentTitle('Liên hệ | Anh Như Ý')

  return (
    <>
      <PageHero eyebrow="Liên hệ" title="Liên hệ với chúng tôi">
        Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn về các sản phẩm trái cây tươi chất lượng cao của Việt Nam.
      </PageHero>

      <section className="section">
        <div className={`container ${styles.contact}`}>
          <div className={styles.channels} data-reveal="stagger">
            {CHANNELS.map((c) => (
              <div key={c.title} className={`${styles.channel} glare`} data-tilt="6">
                <span className={styles.channelIcon}>
                  <Icon name={c.icon} size={22} />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <ul>
                    {c.items.map((item) => (
                      <li key={item.text}>{item.href ? <a href={item.href}>{item.text}</a> : item.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.formCard} data-reveal="right">
            <h2>Gửi yêu cầu báo giá</h2>
            <p className={styles.formIntro}>Cho chúng tôi biết sản phẩm, số lượng và thị trường bạn quan tâm.</p>
            <MailForm
              to="contact@anhnhuy.com"
              subject="Liên hệ từ website Anh Như Ý"
              fields={[
                { name: 'name', label: 'Tên của bạn', autoComplete: 'name', placeholder: 'Nguyễn Văn A' },
                {
                  name: 'email',
                  label: 'Email liên hệ',
                  type: 'email',
                  required: true,
                  autoComplete: 'email',
                  placeholder: 'ban@congty.com',
                },
                {
                  name: 'message',
                  label: 'Nội dung tin nhắn',
                  type: 'textarea',
                  required: true,
                  placeholder: 'Sản phẩm, số lượng, thị trường…',
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
