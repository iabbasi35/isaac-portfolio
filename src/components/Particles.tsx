import { useEffect, useCallback } from 'react'

export default function Particles() {
  const initParticles = useCallback(() => {
    const oldCanvas = document.querySelector('#particles-js canvas')
    if (oldCanvas) oldCanvas.remove()

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p: any) => p.pJS.fn.vendors.destroypJS())
      // @ts-ignore
      window.pJSDom = []
    }

    // @ts-ignore
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: '#C4956A' },
        shape: { type: 'circle', stroke: { width: 0, color: '#C4956A' } },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 0.6, opacity_min: 0.15 },
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: true, speed: 1, size_min: 0.8 },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#8A7968',
          opacity: 0.28,
          width: 1,
        },
        move: { enable: true, speed: 1.2, random: true, out_mode: 'bounce' },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 3 },
          repulse: { distance: 150, duration: 0.4 },
        },
      },
      retina_detect: true,
    })
  }, [])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    document.body.appendChild(script)
    script.onload = () => initParticles()

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [initParticles])

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        inset: 0,
        background: '#F7F4EE',
        zIndex: 0,
      }}
    />
  )
}
