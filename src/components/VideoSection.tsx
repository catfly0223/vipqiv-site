'use client'

import { useEffect, useRef } from 'react'

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // 動画の自動再生
    videoRef.current?.play().catch(() => {
      console.log('Video autoplay was blocked')
    })
  }, [])

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/section1.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

