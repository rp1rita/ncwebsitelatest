"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { DollarSign, TrendingDown, Clock, Shield } from "lucide-react"

const benefits = [
  {
    title: "Reduced Operational Costs",
    description: "Cut your IT expenses by up to 40% with our optimized solutions",
    icon: DollarSign,
  },
  {
    title: "Improved Efficiency",
    description: "Streamline processes and boost productivity across your organization",
    icon: TrendingDown,
  },
  {
    title: "Faster Time-to-Market",
    description: "Deploy new features and services in record time",
    icon: Clock,
  },
  {
    title: "Enhanced Security",
    description: "Protect your business with enterprise-grade security measures",
    icon: Shield,
  },
]

export default function CostSaving() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 text-blue-100 text-sm font-medium mb-4">
            Business Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">COST SAVING</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Our solutions are designed to maximize your ROI while minimizing expenses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="opacity-80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
