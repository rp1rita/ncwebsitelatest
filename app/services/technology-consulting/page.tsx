"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Lightbulb, TrendingUp, Target, ArrowRight } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"

const consultingAreas = [
  {
    title: "Strategic Planning",
    description: "Technology roadmaps aligned with business goals",
    icon: Target,
  },
  {
    title: "Innovation Strategy",
    description: "Identify opportunities for technological advancement",
    icon: Lightbulb,
  },
  {
    title: "Performance Optimization",
    description: "Maximize efficiency and ROI of existing systems",
    icon: TrendingUp,
  },
]

const consultingServices = [
  "Technology assessment and audit",
  "Digital strategy development",
  "Architecture design and review",
  "Vendor selection and evaluation",
  "Risk assessment and mitigation",
  "Compliance and governance",
  "Change management",
  "Training and knowledge transfer",
]

export default function TechnologyConsultingPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Technology Consulting - Strategic IT Guidance"
        description="Expert technology consulting services including strategic planning, architecture design, and digital transformation guidance."
        keywords="technology consulting, IT strategy, digital transformation, technology assessment, strategic planning"
        canonicalUrl="/services/technology-consulting"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="Technology Consulting"
          subtitle="Strategic technology guidance to optimize your IT infrastructure"
          backgroundImage="/images/Consulting.png"
        />

        <section className="py-20" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Strategic Technology Leadership</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our technology consulting services provide expert guidance to help you make informed decisions,
                  optimize your IT investments, and achieve your business objectives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {consultingServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>

                <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {consultingAreas.map((area, index) => (
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
