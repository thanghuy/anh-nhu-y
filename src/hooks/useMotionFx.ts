import { useEffect } from 'react'

// Pointer-driven 3D effects, wired once through event delegation so every page gets them:
// - `[data-tilt]` (optional max angle, default 8): sets --rx/--ry (deg) and --mx/--my (glare position, %)
// - `[data-magnetic]`: nudges the element toward the cursor with the `translate` property
// - `[data-parallax]`: sets --px/--py (-1..1) so layered children can shift by depth
// Touch devices have no cursor, so there the same variables follow scroll position (and the
// device tilt where the browser exposes it without a permission prompt). All of it is skipped
// when the visitor prefers reduced motion.
export function useMotionFx() {
  useTouchFx()

  useEffect(() => {
    if (
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    let tilt: HTMLElement | null = null
    let magnet: HTMLElement | null = null
    let parallax: HTMLElement | null = null
    let last: PointerEvent | null = null
    let frame = 0

    const resetTilt = (el: HTMLElement) => {
      el.classList.remove('is-tilting')
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    const resetMagnet = (el: HTMLElement) => el.style.removeProperty('translate')
    const resetParallax = (el: HTMLElement) => {
      el.style.setProperty('--px', '0')
      el.style.setProperty('--py', '0')
    }

    const update = () => {
      frame = 0
      const e = last
      const target = e?.target instanceof Element ? e.target : null

      const nextTilt = target?.closest<HTMLElement>('[data-tilt]') ?? null
      if (tilt && tilt !== nextTilt) resetTilt(tilt)
      tilt = nextTilt
      if (tilt && e) {
        const r = tilt.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        const max = Number(tilt.dataset.tilt) || 8
        tilt.classList.add('is-tilting')
        tilt.style.setProperty('--rx', `${((0.5 - y) * max * 2).toFixed(2)}deg`)
        tilt.style.setProperty('--ry', `${((x - 0.5) * max * 2).toFixed(2)}deg`)
        tilt.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
        tilt.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
      }

      const nextMagnet = target?.closest<HTMLElement>('[data-magnetic]') ?? null
      if (magnet && magnet !== nextMagnet) resetMagnet(magnet)
      magnet = nextMagnet
      if (magnet && e) {
        const r = magnet.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        magnet.style.translate = `${(dx * 0.22).toFixed(1)}px ${(dy * 0.32).toFixed(1)}px`
      }

      const nextParallax = target?.closest<HTMLElement>('[data-parallax]') ?? null
      if (parallax && parallax !== nextParallax) resetParallax(parallax)
      parallax = nextParallax
      if (parallax && e) {
        const r = parallax.getBoundingClientRect()
        parallax.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
        parallax.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
      }
    }

    const onMove = (e: PointerEvent) => {
      last = e
      if (!frame) frame = requestAnimationFrame(update)
    }
    const onLeave = () => {
      last = null
      if (!frame) frame = requestAnimationFrame(update)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])
}

function useTouchFx() {
  useEffect(() => {
    if (
      window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    let frame = 0
    const clamp = (n: number) => Math.max(-1, Math.min(1, n))

    // Each tilt element leans back while below the middle of the screen and forward once past it,
    // with the glare sweeping across, so cards swing through 3D as they scroll by.
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      for (const el of document.querySelectorAll<HTMLElement>('[data-tilt]')) {
        const r = el.getBoundingClientRect()
        if (r.bottom < -100 || r.top > vh + 100) continue
        const t = clamp((r.top + r.height / 2 - vh / 2) / (vh / 2))
        const max = (Number(el.dataset.tilt) || 8) * 1.6
        el.classList.toggle('is-tilting', Math.abs(t) < 0.85)
        el.style.setProperty('--rx', `${(t * max).toFixed(2)}deg`)
        el.style.setProperty('--my', `${(50 + t * 60).toFixed(1)}%`)
        el.style.setProperty('--mx', `${(50 - t * 30).toFixed(1)}%`)
      }
      for (const el of document.querySelectorAll<HTMLElement>('[data-parallax]')) {
        const r = el.getBoundingClientRect()
        if (r.bottom < 0 || r.top > vh) continue
        el.style.setProperty('--py', clamp(-r.top / (r.height / 2)).toFixed(3))
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    // Android exposes device orientation freely; iOS needs a permission prompt, so it is left out.
    const needsPermission =
      typeof DeviceOrientationEvent !== 'undefined' &&
      'requestPermission' in DeviceOrientationEvent
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.gamma == null) return
      const px = clamp(e.gamma / 30).toFixed(3)
      for (const el of document.querySelectorAll<HTMLElement>('[data-parallax]')) el.style.setProperty('--px', px)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    if (!needsPermission) window.addEventListener('deviceorientation', onOrient)
    // Pages render after navigation without a scroll event, so refresh on DOM changes too.
    const mo = new MutationObserver(onScroll)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      cancelAnimationFrame(frame)
      mo.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('deviceorientation', onOrient)
    }
  }, [])
}
