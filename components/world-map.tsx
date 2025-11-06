"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface Location {
  name: string
  x: string
  y: string
  side: "left" | "right"
}

const locations: Location[] = [
  { name: "Irvine, CA", x: "12%", y: "42%", side: "left" },
  { name: "Ranchi, India", x: "75%", y: "45%", side: "right" },
  { name: "Dubai, UAE", x: "65%", y: "48%", side: "right" },
]

export default function WorldMap() {
  return (
    <div className="relative w-full h-[600px] bg-slate-900 rounded-2xl overflow-hidden">
      {/* World map background using Map.png */}
      <div className="absolute inset-0">
        <Image
          src="/images/Map.png"
          alt="World map background"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title */}
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-white text-lg font-semibold">NathCorp Global Offices</h3>
        <p className="text-slate-200 text-sm mt-1">3 Strategic Locations Worldwide</p>
      </div>

      {/* Location markers and labels */}
      {locations.map((loc, idx) => (
        <motion.div
          key={loc.name}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="absolute z-10"
          style={{ left: loc.x, top: loc.y }}
        >
          {/* Pulse marker */}
          <div className="relative">
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
              className="block w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-md"
            />
            <span className="absolute inset-0 block rounded-full animate-ping bg-blue-400 opacity-50" />
          </div>

          {/* Label & connector */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              loc.side === "right" ? "left-6" : "right-6"
            } z-10`}
          >
            <div className={`flex items-center ${loc.side === "right" ? "flex-row" : "flex-row-reverse"}`}>
              <span className="block w-12 h-px bg-blue-400" />
              <div className="bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-md border border-blue-500/30 shadow-lg">
                <span className="text-white text-sm font-medium whitespace-nowrap">{loc.name}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
