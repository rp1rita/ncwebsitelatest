"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const clientLogos = [
  {
    name: "3M",
    logo: "/images/3m-logo.png",
    width: 120,
    height: 60,
  },
  {
    name: "Hawaiian Airlines",
    logo: "/images/hawaiian-airlines-logo.png",
    width: 140,
    height: 60,
  },
  {
    name: "Technicolor",
    logo: "/images/technicolor-logo.png",
    width: 160,
    height: 60,
  },
  {
    name: "Toyota",
    logo: "/images/toyota-logo.png",
    width: 120,
    height: 60,
  },
  {
    name: "Allergan",
    logo: "/images/allergan-logo.png",
    width: 140,
    height: 60,
  },
  {
    name: "Intuit",
    logo: "/images/intuit-logo.png",
    width: 120,
    height: 60,
  },
  {
    name: "Hanson Spirits",
    logo: "/images/hanson-spirits-logo.png",
    width: 100,
    height: 60,
  },
  {
    name: "Sharp",
    logo: "/images/sharp-logo.png",
    width: 120,
    height: 60,
  },
  {
    name: "Universal Music Group",
    logo: "/images/universal-music-group-logo.png",
    width: 160,
    height: 60,
  },
  {
    name: "Zions Bank",
    logo: "/images/zions-bank-logo.png",
    width: 140,
    height: 60,
  },
  {
    name: "First Hawaiian Bank",
    logo: "/images/first-hawaiian-bank-logo.png",
    width: 160,
    height: 60,
  },
  {
    name: "Edwards",
    logo: "/images/edwards-logo.png",
    width: 120,
    height: 60,
  },
  {
    name: "Western Digital",
    logo: "/images/western-digital-logo.png",
    width: 160,
    height: 60,
  },
  {
    name: "AAA",
    logo: "/images/aaa-logo.png",
    width: 100,
    height: 60,
  },
  {
    name: "OCLC",
    logo: "/images/oclc-logo.png",
    width: 120,
    height: 60,
  },
]

export default function ClientLogosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-slate-50 via-white to-slate-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Trusted Partners
          </span>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Trusted by Industry Leaders Worldwide</h3>
          <p className="text-slate-600">Join Fortune 500 companies who trust us with their digital transformation</p>
        </motion.div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-hidden whitespace-nowrap"
            style={{
              scrollBehavior: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {duplicatedLogos.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 px-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative group">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    // className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    className="object-contain transition-all duration-300 opacity-60 hover:opacity-100"
                    priority={index < 5}
                  />

                  {/* Hover tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                    {client.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats below logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-slate-200"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
            <div className="text-sm text-slate-600">Fortune 500 Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">25+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
            <div className="text-sm text-slate-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-1">99.9%</div>
            <div className="text-sm text-slate-600">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
