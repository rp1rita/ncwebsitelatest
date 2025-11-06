"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Cloud, Shield, Zap, ArrowRight } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"

const cloudServices = [
  {
    title: "Cloud Migration",
    description: "Seamless transition to cloud infrastructure",
    icon: Cloud,
  },
  {
    title: "Cloud Security",
    description: "Comprehensive security for cloud environments",
    icon: Shield,
  },
  {
    title: "Cloud Optimization",
    description: "Performance and cost optimization strategies",
    icon: Zap,
  },
]

const cloudCapabilities = [
  "Multi-cloud and hybrid cloud solutions",
  "Cloud architecture design",
  "Serverless computing",
  "Container orchestration",
  "Cloud backup and disaster recovery",
  "Cost optimization and monitoring",
  "Cloud compliance and governance",
  "24/7 cloud management and support",
]

export default function CloudServicesPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Cloud Services - Migration, Management & Optimization"
        description="Comprehensive cloud services including migration, security, optimization, and 24/7 management for AWS, Azure, and Google Cloud."
        keywords="cloud services, cloud migration, cloud security, AWS, Azure, Google Cloud, cloud optimization"
        canonicalUrl="/services/cloud-services"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="Cloud Services"
          subtitle="Cloud migration, management, and optimization for scalable solutions"
          backgroundImage="/images/cloud-services.png"
        />

        <section className="py-20" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Unlock the Power of the Cloud</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our comprehensive cloud services help organizations leverage the full potential of cloud computing
                  with secure, scalable, and cost-effective solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {cloudCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{capability}</span>
                    </div>
                  ))}
                </div>

                <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg group">
                  Start Your Cloud Journey
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {cloudServices.map((service, index) => (
                  <Card key={index} className="glass-card border-0 shadow-lg p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <service.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 mb-2">{service.title}</h3>
                          <p className="text-slate-600">{service.description}</p>
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
