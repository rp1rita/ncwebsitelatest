"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Globe, Zap, Target, ArrowRight } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"

const transformationAreas = [
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation",
    icon: Zap,
  },
  {
    title: "Digital Strategy",
    description: "Comprehensive roadmap for digital evolution",
    icon: Target,
  },
  {
    title: "Technology Integration",
    description: "Seamless integration of modern technologies",
    icon: Globe,
  },
]

const benefits = [
  "Increased operational efficiency",
  "Enhanced customer experience",
  "Data-driven decision making",
  "Improved scalability",
  "Reduced operational costs",
  "Faster time-to-market",
  "Better competitive positioning",
  "Future-ready infrastructure",
]

export default function DigitalTransformationPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Digital Transformation Services - Business Modernization"
        description="Comprehensive digital transformation services to modernize your business processes, technology, and customer experience."
        keywords="digital transformation, business modernization, process automation, digital strategy, technology integration"
        canonicalUrl="/services/digital-transformation"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="Digital Transformation"
          subtitle="Transform your business with comprehensive digital solutions and strategies"
          backgroundImage="/images/digital-transformation.png"
        />

        <section className="py-20" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Reimagine Your Business for the Digital Age</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our digital transformation services help organizations evolve their operations, technology, and
                  culture to thrive in today's digital-first world.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg group">
                  Begin Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {transformationAreas.map((area, index) => (
                  <Card key={index} className="glass-card border-0 shadow-lg p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <area.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 mb-2">{area.title}</h3>
                          <p className="text-slate-600">{area.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
