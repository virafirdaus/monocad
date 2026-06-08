'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const bracketRef = useRef(null)
  const hLeftRef = useRef(null)
  const hRightRef = useRef(null)
  const vTopRef = useRef(null)
  const vBottomRef = useRef(null)

  const GAP = 5 // jarak garis dari tengah

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX
      const y = e.clientY

      // dot & bracket ikut cursor
      gsap.to(dotRef.current, { x, y, duration: 0.1, ease: 'power2.out' })
      gsap.to(bracketRef.current, { x, y, duration: 0.15, ease: 'power2.out' })

      // garis kiri — dari 0 sampai x - GAP
      gsap.to(hLeftRef.current, {
        y,
        width: x - GAP,
        duration: 0.1,
        ease: 'power2.out'
      })

      // garis kanan — dari x + GAP sampai ujung layar
      gsap.to(hRightRef.current, {
        x: x + GAP,
        y,
        width: `calc(100vw - ${x + GAP}px)`,
        duration: 0.1,
        ease: 'power2.out'
      })

      // garis atas — dari 0 sampai y - GAP
      gsap.to(vTopRef.current, {
        x,
        height: y - GAP,
        duration: 0.1,
        ease: 'power2.out'
      })

      // garis bawah — dari y + GAP sampai ujung layar
      gsap.to(vBottomRef.current, {
        x,
        y: y + GAP,
        height: `calc(100vh - ${y + GAP}px)`,
        duration: 0.1,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  const lineStyle = {
  mixBlendMode: 'difference',
  pointerEvents: 'none',
  zIndex: 9999,
  position: 'fixed',
  background: 'white',
  opacity: 0.3, // ← hanya garis yang transparan
}

const solidStyle = {
  mixBlendMode: 'difference',
  pointerEvents: 'none',
  zIndex: 9999,
  position: 'fixed',
  background: 'white',
  opacity: 1, // ← dot & bracket tetap solid
}

  return (
    <>
      {/* Garis kiri */}
      <div ref={hLeftRef} style={{ ...lineStyle, top: 0, left: 0, height: '1px', width: 0, transform: 'translateY(-50%)' }} />

      {/* Garis kanan */}
      <div ref={hRightRef} style={{ ...lineStyle, top: 0, left: 0, height: '1px', width: 0, transform: 'translateY(-50%)' }} />

      {/* Garis atas */}
      <div ref={vTopRef} style={{ ...lineStyle, top: 0, left: 0, width: '1px', height: 0, transform: 'translateX(-50%)' }} />

      {/* Garis bawah */}
      <div ref={vBottomRef} style={{ ...lineStyle, top: 0, left: 0, width: '1px', height: 0, transform: 'translateX(-50%)' }} />

      {/* Dot tengah */}
      <div ref={dotRef} style={{
        ...solidStyle,
        top: 0,
        left: 0,
        width: '12px',
        height: '12px',
        transform: 'translate(-50%, -50%)',
      }} />

      {/* Corner Brackets */}
      <div ref={bracketRef} style={{
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '35px',
        height: '35px',
        opacity: 0.3,
        transform: 'translate(-50%, -50%)',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '12px', height: '12px', borderTop: '1px solid white', borderLeft: '1px solid white' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '12px', height: '12px', borderTop: '1px solid white', borderRight: '1px solid white' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '12px', height: '12px', borderBottom: '1px solid white', borderLeft: '1px solid white' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', borderBottom: '1px solid white', borderRight: '1px solid white' }} />
      </div>
    </>
  )
}