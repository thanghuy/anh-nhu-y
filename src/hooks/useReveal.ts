import { useEffect } from 'react'

// Adds `is-visible` to every `[data-reveal]` element once it scrolls into view.
// Re-run whenever `key` changes so newly rendered pages get observed.
export function useReveal(key: string) {
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')]
    const show = (el: Element) => el.classList.add('is-visible')
    if (!('IntersectionObserver' in window)) {
      els.forEach(show)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          show(entry.target)
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))

    // A jump past a section (anchor link, restored scroll) never intersects it, so reveal those too.
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        for (const el of els) {
          if (el.getBoundingClientRect().bottom < 0) {
            show(el)
            io.unobserve(el)
          }
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [key])
}
