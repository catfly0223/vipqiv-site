'use client'

import { useEffect, useRef, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoSectionProps {
  scrollProgress: number
}

const VideoSection = memo(({ scrollProgress }: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play()
        }
      } catch (error) {
        console.log('Video autoplay was blocked')
      }
    }

    playVideo()
  }, [])

  // スクロール進捗に基づいてスタイルを計算
  const overlayOpacity = Math.min(scrollProgress * 0.15, 0.15) // 最大15%の暗さに大幅軽減
  const blurAmount = Math.min(scrollProgress * 1, 1) // 最大1pxのブラーに大幅軽減

  return (
    <div className="relative w-full h-full">
      <motion.div 
        className="relative w-full h-full"
        animate={{
          filter: `blur(${blurAmount}px)`,
        }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
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
      </motion.div>
      <motion.div 
        className="absolute inset-0 bg-black/5" // 初期透過率を5%に大幅軽減
        animate={{
          opacity: overlayOpacity
        }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </div>
  )
})

VideoSection.displayName = 'VideoSection'

export default VideoSection

