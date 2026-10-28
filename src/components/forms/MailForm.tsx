import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { useI18n } from '@/i18n/context'
import { CONTACT } from '@/lib/site'
import styles from './MailForm.module.css'

export interface MailField {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required?: boolean
  autoComplete?: string
  placeholder?: string
  options?: string[]
  /** Spans both columns of the two-column grid. */
  wide?: boolean
}

interface MailFormProps {
  to: string
  subject: string
  fields: MailField[]
  submitLabel?: string
  initialValues?: Record<string, string>
}

// The site has no form backend, so a submit opens the visitor's mail app with the message filled in.
// Mail apps are often missing on phones, so after submitting the form also offers the address to copy
// and the direct channels as a fallback.
export function MailForm({ to, subject, fields, submitLabel, initialValues }: MailFormProps) {
  const { t } = useI18n()
  const [values, setValues] = useState<Record<string, string>>(initialValues ?? {})
  const [sent, setSent] = useState(false)
  const [copy, setCopy] = useState<'idle' | 'copied' | 'failed'>('idle')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const body = fields.map((f) => `${f.label}: ${values[f.name] ?? ''}`).join('\n')
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(to)
      setCopy('copied')
    } catch {
      setCopy('failed')
    }
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.grid}>
        {fields.map((f) => {
          const common = {
            name: f.name,
            required: f.required,
            value: values[f.name] ?? '',
            onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
              setValues((v) => ({ ...v, [f.name]: e.target.value })),
          }
          return (
            <label key={f.name} className={`${styles.field} ${f.wide ? styles.wide : ''}`}>
              <span>
                {f.label}
                {f.required && <span className={styles.required}> *</span>}
              </span>
              {f.type === 'textarea' ? (
                <textarea rows={5} placeholder={f.placeholder} {...common} />
              ) : f.type === 'select' ? (
                <select {...common}>
                  <option value="">{f.placeholder}</option>
                  {f.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input type={f.type ?? 'text'} autoComplete={f.autoComplete} placeholder={f.placeholder} {...common} />
              )}
            </label>
          )
        })}
      </div>
      <p className={styles.note}>{t.form.note}</p>
      <Button type="submit" className={styles.submit}>
        {submitLabel ?? t.form.submit}
        <Icon name="arrowRight" size={18} />
      </Button>

      {sent && (
        <div className={styles.sent} role="status">
          <p>
            <strong>{t.form.sentTitle}</strong> {t.form.sentText}
          </p>
          <div className={styles.fallback}>
            <code>{to}</code>
            <button type="button" className={styles.copy} onClick={copyAddress}>
              <Icon name={copy === 'copied' ? 'check' : 'copy'} size={16} />
              {copy === 'copied' ? t.form.copied : t.form.copy}
            </button>
          </div>
          {copy === 'failed' && <p>{t.form.copyFailed}</p>}
          <p className={styles.alt}>
            {t.form.orReach}{' '}
            <a href={CONTACT.zalo} target="_blank" rel="noreferrer">
              Zalo
            </a>{' '}
            · <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          </p>
        </div>
      )}
    </form>
  )
}
