'use client'

import { useEffect, useRef } from 'react'

export default function LainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drawWires = () => {
      ctx.strokeStyle = '#003300'
      ctx.lineWidth = 1

      for (let i = 0; i < 50; i++) {
        ctx.beginPath()
        ctx.moveTo(Math.random() * canvas.width, 0)
        ctx.lineTo(Math.random() * canvas.width, canvas.height)
        ctx.stroke()
      }
    }

    const drawCircuits = () => {
      ctx.fillStyle = '#001100'
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 5 + 1
        ctx.fillRect(x, y, size, size)
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawWires()
      drawCircuits()
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

