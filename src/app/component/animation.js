'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Animations() {
  useEffect(() => {
    const viewportHeight = window.innerHeight

    // ─────────────────────────────────────
    // 1. CAROUSEL AUTO ROTATE
    // ─────────────────────────────────────
    let currentRotation = 0

    const ticker = () => {
      currentRotation += 0.1
      const cards = document.querySelectorAll('.carousel-card')
      const translateZ = window.innerWidth * 0.33
      cards.forEach((card, i) => {
        const baseRotation = (i - 5) * 30
        card.style.transform = `rotateY(${baseRotation + currentRotation}deg) translateZ(${translateZ}px)`
      })
    }

    gsap.ticker.add(ticker)

    // ─────────────────────────────────────
    // 2. CURSOR — muncul dari titik mouse
    // ─────────────────────────────────────
    const handleFirstMove = () => {
      gsap.set(['.cursor-dot', '.cursor-bracket', '.cursor-hline', '.cursor-vline'], {
        opacity: 0,
        scale: 0,
      })
      gsap.to(['.cursor-dot', '.cursor-bracket'], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(2)',
      })
      gsap.to(['.cursor-hline', '.cursor-vline'], {
        opacity: 0.3,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      })
      window.removeEventListener('mousemove', handleFirstMove)
    }

    window.addEventListener('mousemove', handleFirstMove)

    // ─────────────────────────────────────
    // 3. NAVBAR, HERO TEXT, BUTTON — reveal
    // ─────────────────────────────────────
    const tl = gsap.timeline({ delay: 0.3 })

    tl.from('.navbar', {
      y: -60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from('.hero-text', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.hero-button', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.4')

    // ─────────────────────────────────────
    // 4. HURUF MONOCAD — jatuh dari tengah
    // ─────────────────────────────────────
    tl.from('.hero-letter', {
      y: -viewportHeight * 2,
      opacity: 1,
      rotation: (i) => {
        const startRotations = [180, -270, 90, -360, 360, 180, 360]
        return startRotations[i]
      },
      duration: 2,
      ease: 'bounce.out',
      stagger: {
        amount: 1,
        from: 'center'
      },
    }, '-=0.3')

    // ─────────────────────────────────────
    // 5. HERO BACKGROUND — gelap seiring scroll
    // ─────────────────────────────────────
    gsap.to('#hero-section', {
      backgroundColor: '#0A0A0A',
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
      }
    })

    // ─────────────────────────────────────
    // 6. META BAWAH HERO — jadi putih
    // ─────────────────────────────────────
    gsap.to('.hero-meta-bottom', {
      color: '#ffffff',
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'bottom 80%',
        end: 'bottom top',
        scrub: true,
      }
    })

    // ─────────────────────────────────────
    // 7. CAROUSEL — hilang ke atas
    // ─────────────────────────────────────
    gsap.to('#carousel-wrapper', {
      y: -300,
      opacity: 0,
      scrollTrigger: {
        trigger: '#about-section',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      }
    })

    // ─────────────────────────────────────
    // 8. PARAGRAF ABOUT — opacity naik seiring scroll
    // ─────────────────────────────────────
    gsap.to('.about-text', {
      opacity: 1,
      scrollTrigger: {
        trigger: '#about-section',
        start: 'top center',
        end: 'center center',
        scrub: true,
      }
    })

    // ─────────────────────────────────────
    // 9. META ATAS ABOUT — muncul
    // ─────────────────────────────────────
    gsap.from('.about-meta-top', {
      y: -30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '#about-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      }
    })

    // ─────────────────────────────────────
    // 10. SCRAMBLE TEXT ON HOVER
    // ─────────────────────────────────────
    const aboutText = document.querySelector('.about-text')
    if (aboutText) {
      const originalText = aboutText.innerText
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      aboutText.addEventListener('mousemove', (e) => {
        const words = originalText.split(' ')
        const rect = aboutText.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const totalWidth = rect.width
        const mousePercent = mouseX / totalWidth
        const wordIndex = Math.floor(mousePercent * words.length)

        const scrambled = words.map((word, i) => {
          if (i === wordIndex) {
            return word.split('').map(char => {
              if (char === ' ') return ' '
              return chars[Math.floor(Math.random() * chars.length)]
            }).join('')
          }
          return word
        }).join(' ')

        aboutText.innerText = scrambled

        clearTimeout(aboutText._scrambleTimeout)
        aboutText._scrambleTimeout = setTimeout(() => {
          aboutText.innerText = originalText
        }, 150)
      })

      aboutText.addEventListener('mouseleave', () => {
        clearTimeout(aboutText._scrambleTimeout)
        aboutText.innerText = originalText
      })
    }

    // ─────────────────────────────────────
    // CLEANUP
    // ─────────────────────────────────────
    return () => {
      gsap.ticker.remove(ticker)
      window.removeEventListener('mousemove', handleFirstMove)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }

  }, [])

  return null
}