import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { siteContent } from '../../data/site'
import { trackEvent } from '../../utils/analytics'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export const ContactSection = () => {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedback, setFeedback] = useState('')
  const renderedAt = useRef(Date.now())

  const rawFormspreeValue = import.meta.env.VITE_FORMSPREE_ID?.trim() ?? ''
  const isPlaceholder = rawFormspreeValue === '' || rawFormspreeValue === 'YOUR_FORMSPREE_ID'
  const endpoint = !isPlaceholder
    ? rawFormspreeValue.includes('/f/')
      ? rawFormspreeValue
      : `https://formspree.io/f/${rawFormspreeValue}`
    : ''
  const formReady = !isPlaceholder && endpoint.startsWith('https://formspree.io/f/')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (!formReady || !endpoint) {
      setStatus('error')
      setFeedback(siteContent.contact.missingConfigMessage)
      trackEvent('contact_submit_blocked', { reason: 'missing_form_config' })
      return
    }

    const honeypot = formData.get('website')
    if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
      setStatus('success')
      setFeedback(siteContent.contact.successMessage)
      trackEvent('contact_submit_blocked', { reason: 'honeypot' })
      return
    }

    const elapsedMs = Date.now() - renderedAt.current
    if (elapsedMs < 1500) {
      setStatus('error')
      setFeedback('Please wait a moment and try again.')
      trackEvent('contact_submit_blocked', { reason: 'too_fast' })
      return
    }

    setStatus('submitting')
    setFeedback('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Formspree request failed')
      }

      setStatus('success')
      setFeedback(siteContent.contact.successMessage)
      trackEvent('contact_submit_success')
      form.reset()
    } catch {
      setStatus('error')
      setFeedback(siteContent.contact.errorMessage)
      trackEvent('contact_submit_error')
    }
  }

  return (
    <section id="contact" className="section-shell section-anchor pb-24">
      <div className="container-shell">
        <SectionHeader
          label={siteContent.sections.contact.label}
          title={siteContent.sections.contact.title}
          subtitle={siteContent.sections.contact.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-4">
            <div className="card-shell">
              <p className="mono-label">Email</p>
              <a href={`mailto:${siteContent.contact.email}`} className="mt-2 block text-sm text-text hover:text-accent2">
                {siteContent.contact.email}
              </a>
            </div>

            <div className="card-shell space-y-3">
              <p className="mono-label">Social</p>
              <div className="flex flex-wrap gap-2">
                {siteContent.contact.social.map((social) => (
                  <Button key={social.label} variant="outlined" size="sm" href={social.href} external>
                    {social.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <form className="card-shell space-y-4" onSubmit={onSubmit} noValidate>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <label className="block text-sm text-text" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-border bg-surface2/90 px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-muted focus:border-accent2 focus:ring-2 focus:ring-accent2/30"
            />

            <label className="block text-sm text-text" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-border bg-surface2/90 px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-muted focus:border-accent2 focus:ring-2 focus:ring-accent2/30"
            />

            <label className="block text-sm text-text" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              className="w-full resize-y rounded-md border border-border bg-surface2/90 px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-muted focus:border-accent2 focus:ring-2 focus:ring-accent2/30"
            />

            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message ->'}
            </Button>

            {feedback ? (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${status === 'success' ? 'text-[#98d982]' : 'text-accent3'}`}
              >
                {feedback}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

