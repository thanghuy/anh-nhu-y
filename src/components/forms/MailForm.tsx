import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { useI18n } from '@/i18n/context'
import styles from './MailForm.module.css'

export interface MailField {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  required?: boolean
  autoComplete?: string
  placeholder?: string
}

interface MailFormProps {
  to: string
  subject: string
  fields: MailField[]
  submitLabel?: string
}

// The site has no form backend, so a submit opens the visitor's mail app with the message filled in.
export function MailForm({ to, subject, fields, submitLabel }: MailFormProps) {
  const { t } = useI18n()
  const [values, setValues] = useState<Record<string, string>>({})

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const body = fields.map((f) => `${f.label}: ${values[f.name] ?? ''}`).join('\n')
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      {fields.map((f) => {
        const common = {
          name: f.name,
          required: f.required,
          placeholder: f.placeholder,
          value: values[f.name] ?? '',
          onChange: (e: { target: { value: string } }) => setValues((v) => ({ ...v, [f.name]: e.target.value })),
        }
        return (
          <label key={f.name} className={styles.field}>
            <span>
              {f.label}
              {f.required && <span className={styles.required}> *</span>}
            </span>
            {f.type === 'textarea' ? (
              <textarea rows={5} {...common} />
            ) : (
              <input type={f.type ?? 'text'} autoComplete={f.autoComplete} {...common} />
            )}
          </label>
        )
      })}
      <p className={styles.note}>{t.form.note}</p>
      <Button type="submit" className={styles.submit}>
        {submitLabel ?? t.form.submit}
        <Icon name="arrowRight" size={18} />
      </Button>
    </form>
  )
}
