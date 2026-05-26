import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'

interface Particle {
  x: number; y: number; originalX: number; originalY: number
  color: string; opacity: number; originalAlpha: number
  velocityX: number; velocityY: number; angle: number; speed: number
  floatingOffsetX: number; floatingOffsetY: number
  floatingSpeed: number; floatingAngle: number
  targetOpacity: number; sparkleSpeed: number
}

interface Props {
  text: string
  color?: string
  fontSize?: number
  fontFamily?: string
  fontWeight?: number
  spread?: number
  speed?: number
  density?: number
}

export const MagicTextReveal: React.FC<Props> = ({
  text,
  color = 'rgba(26,22,20,1)',
  fontSize = 32,
  fontFamily = 'Lora, Georgia, serif',
  fontWeight = 600,
  spread = 36,
  speed = 0.45,
  density = 4,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(performance.now())
  const [isHovered, setIsHovered] = useState(false)
  const [showText, setShowText] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 })
  const [textDimensions, setTextDimensions] = useState({ width: 0, height: 0 })
  const transformedDensity = 6 - density
  const globalDpr = useMemo(() => (typeof window !== 'undefined' ? window.devicePixelRatio * 1.5 : 1), [])

  const measureText = useCallback((t: string, fs: number, fw: number, ff: string) => {
    if (typeof window === 'undefined') return { width: 200, height: 60 }
    const c = document.createElement('canvas')
    const ctx = c.getContext('2d')!
    ctx.font = `${fw} ${fs}px ${ff}`
    const m = ctx.measureText(t)
    return { width: Math.ceil(m.width + fs * 0.5), height: Math.ceil(fs * 1.4) }
  }, [])

  useEffect(() => {
    setTextDimensions(measureText(text, fontSize, fontWeight, fontFamily))
  }, [text, fontSize, fontWeight, fontFamily, measureText])

  const createParticles = useCallback((
    ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement,
    t: string, tx: number, ty: number, font: string, col: string, td: number
  ): Particle[] => {
    const particles: Particle[] = []
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = col; ctx.font = font
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.imageSmoothingEnabled = true
    ctx.fillText(t, tx, ty)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    const currentDPR = canvas.width / parseInt(canvas.style.width)
    const sampleRate = Math.max(2, Math.round(currentDPR)) * td
    let minX = canvas.width, maxX = 0, minY = canvas.height, maxY = 0
    for (let y = 0; y < canvas.height; y += sampleRate)
      for (let x = 0; x < canvas.width; x += sampleRate)
        if (data[(y * canvas.width + x) * 4 + 3] > 0) {
          minX = Math.min(minX, x); maxX = Math.max(maxX, x)
          minY = Math.min(minY, y); maxY = Math.max(maxY, y)
        }
    const spreadRadius = Math.max(maxX - minX, maxY - minY) * 0.1
    for (let y = 0; y < canvas.height; y += sampleRate)
      for (let x = 0; x < canvas.width; x += sampleRate) {
        const i = (y * canvas.width + x) * 4
        const alpha = data[i + 3]
        if (alpha > 0) {
          const oa = alpha / 255
          const angle = Math.random() * Math.PI * 2
          const dist = Math.random() * spreadRadius
          particles.push({
            x: x + Math.cos(angle) * dist, y: y + Math.sin(angle) * dist,
            originalX: x, originalY: y,
            color: `rgba(${data[i]},${data[i+1]},${data[i+2]},${oa})`,
            opacity: oa * 0.3, originalAlpha: oa,
            velocityX: 0, velocityY: 0,
            angle: Math.random() * Math.PI * 2, speed: 0,
            floatingOffsetX: 0, floatingOffsetY: 0,
            floatingSpeed: Math.random() * 2 + 1,
            floatingAngle: Math.random() * Math.PI * 2,
            targetOpacity: Math.random() * oa * 0.5,
            sparkleSpeed: Math.random() * 2 + 1,
          })
        }
      }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    return particles
  }, [])

  const updateParticles = useCallback((
    particles: Particle[], dt: number,
    hovered: boolean, showTxt: boolean, setShow: (b: boolean) => void,
    sp: number, spd: number
  ) => {
    const RETURN_SPEED = 3, FLOAT_SPEED = spd
    const TRANSITION_SPEED = 5 * FLOAT_SPEED
    const NOISE_SCALE = 0.6, CHAOS_FACTOR = 1.3, FADE_SPEED = 13
    particles.forEach(p => {
      if (hovered) {
        const dx = p.originalX - p.x, dy = p.originalY - p.y
        const dist = Math.sqrt(dx*dx + dy*dy)
        if (dist > 0.1) { p.x += dx/dist * RETURN_SPEED * dt * 60; p.y += dy/dist * RETURN_SPEED * dt * 60 }
        else { p.x = p.originalX; p.y = p.originalY }
        p.opacity = Math.max(0, p.opacity - FADE_SPEED * dt)
      } else {
        p.floatingAngle += dt * p.floatingSpeed * (1 + Math.random() * CHAOS_FACTOR)
        const time = Date.now() * 0.001, uo = p.floatingSpeed * 2000
        const nx = (Math.sin(time * p.floatingSpeed + p.floatingAngle) * 1.2 + Math.sin((time+uo)*0.5)*0.8 + (Math.random()-0.5)*CHAOS_FACTOR) * NOISE_SCALE
        const ny = (Math.cos(time * p.floatingSpeed + p.floatingAngle * 1.5) * 0.6 + Math.cos((time+uo)*0.5)*0.4 + (Math.random()-0.5)*CHAOS_FACTOR) * NOISE_SCALE
        const tx = p.originalX + sp * nx, ty = p.originalY + sp * ny
        const dx = tx - p.x, dy = ty - p.y
        const distT = Math.sqrt(dx*dx + dy*dy)
        const js = Math.min(1, distT/(sp*1.5))
        p.x += dx * TRANSITION_SPEED * dt + (Math.random()-0.5)*FLOAT_SPEED*js
        p.y += dy * TRANSITION_SPEED * dt + (Math.random()-0.5)*FLOAT_SPEED*js
        const dfo = Math.sqrt(Math.pow(p.x-p.originalX,2)+Math.pow(p.y-p.originalY,2))
        if (dfo > sp) { const a = Math.atan2(p.y-p.originalY, p.x-p.originalX); const pb = (dfo-sp)*0.1; p.x -= Math.cos(a)*pb; p.y -= Math.sin(a)*pb }
        const od = p.targetOpacity - p.opacity
        p.opacity += od * p.sparkleSpeed * dt * 3
        if (Math.abs(od) < 0.01) { p.targetOpacity = Math.random()<0.5 ? Math.random()*0.1*p.originalAlpha : p.originalAlpha*3; p.sparkleSpeed = Math.random()*3+1 }
      }
    })
    if (hovered && !showTxt) setShow(true)
    if (!hovered && showTxt) setShow(false)
  }, [])

  const renderParticles = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[], dpr: number) => {
    ctx.save(); ctx.scale(dpr, dpr)
    const byColor = new Map<string, Array<{x:number,y:number}>>()
    particles.forEach(p => {
      if (p.opacity <= 0) return
      const col = p.color.replace(/[\d.]+\)$/, `${p.opacity})`)
      if (!byColor.has(col)) byColor.set(col, [])
      byColor.get(col)!.push({ x: p.x/dpr, y: p.y/dpr })
    })
    byColor.forEach((positions, col) => {
      ctx.fillStyle = col
      positions.forEach(({x,y}) => ctx.fillRect(x, y, 1, 1))
    })
    ctx.restore()
  }, [])

  const renderCanvas = useCallback(() => {
    if (!canvasRef.current || !wrapperSize.width || !wrapperSize.height) return
    const canvas = canvasRef.current
    const { width, height } = wrapperSize
    canvas.width = width * globalDpr; canvas.height = height * globalDpr
    canvas.style.width = `${width}px`; canvas.style.height = `${height}px`
    const ctx = canvas.getContext('2d')!
    const font = `${fontWeight} ${fontSize * globalDpr}px ${fontFamily}`
    particlesRef.current = createParticles(ctx, canvas, text, canvas.width/2, canvas.height/2, font, color, transformedDensity)
    renderParticles(ctx, particlesRef.current, globalDpr)
  }, [wrapperSize, globalDpr, text, fontSize, fontFamily, fontWeight, color, transformedDensity, createParticles, renderParticles])

  useEffect(() => {
    const animate = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000
      lastTimeRef.current = now
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      if (canvas && ctx && particlesRef.current.length) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        updateParticles(particlesRef.current, dt, isHovered, showText, setShowText, spread, speed)
        renderParticles(ctx, particlesRef.current, globalDpr)
      }
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animationFrameRef.current = requestAnimationFrame(animate)
    return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current) }
  }, [isHovered, showText, spread, speed, globalDpr, updateParticles, renderParticles])

  useEffect(() => {
    const resize = () => {
      if (!textDimensions.width || !textDimensions.height) return
      const pad = Math.max(fontSize * 0.5, 32)
      const parent = wrapperRef.current?.parentElement?.getBoundingClientRect()
      const maxW = parent ? parent.width : window.innerWidth * 0.9
      setWrapperSize({
        width: Math.min(textDimensions.width + pad * 2, maxW),
        height: Math.max(textDimensions.height + pad, 80),
      })
    }
    if (textDimensions.width) resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [textDimensions, fontSize])

  useEffect(() => { renderCanvas() }, [renderCanvas])

  return (
    <div
      ref={wrapperRef}
      className="magic-reveal-wrapper"
      style={{ width: wrapperSize.width || 'auto', height: wrapperSize.height || 'auto' }}
      onMouseEnter={() => { setIsHovered(true); setHasBeenShown(true) }}
      onMouseLeave={() => { if (!hasBeenShown) return; setIsHovered(false) }}
    >
      <div className={`magic-reveal-text${showText ? ' magic-reveal-text--visible' : ''}`}
        style={{ fontFamily, fontWeight, fontSize, color }}>
        {text}
      </div>
      <canvas ref={canvasRef} className="magic-reveal-canvas" />
    </div>
  )
}
