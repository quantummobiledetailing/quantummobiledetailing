import { onBeforeUnmount, onMounted } from 'vue'

export const useRevealOnScroll = () => {
  let observer: IntersectionObserver | null = null
  let timeoutId: number | null = null

  const revealAll = (elements: HTMLElement[]) => {
    elements.forEach((element) => {
      element.classList.add('is-visible')
    })
  }

  onMounted(() => {
    if (typeof window === 'undefined') {
      return
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    )

    if (!elements.length) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      revealAll(elements)
      return
    }

    if (!('IntersectionObserver' in window)) {
      revealAll(elements)
      return
    }

    observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const target = entry.target as HTMLElement
          target.classList.add('is-visible')
          currentObserver.unobserve(target)
        })
      },
      {
        threshold: 0.2,
      }
    )

    elements.forEach((element) => {
      const delay = element.dataset.revealDelay
      if (delay) {
        element.style.transitionDelay = `${delay}ms`
      }
      observer?.observe(element)
    })

    timeoutId = window.setTimeout(() => {
      revealAll(elements)
      observer?.disconnect()
      observer = null
    }, 1200)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
    if (timeoutId !== null) {
      window.clearTimeout(timeoutId)
      timeoutId = null
    }
  })
}
