"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, TestTube, Shield, Zap, ArrowRight } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"

const testingServices = [
  {
    title: "Functional Testing",
    description: "Comprehensive testing of application functionality",
    icon: TestTube,
  },
  {
    title: "Security Testing",
    description: "Identify and address security vulnerabilities",
    icon: Shield,
  },
  {
    title: "Performance Testing",
    description: "Ensure optimal application performance under load",
    icon: Zap,
  },
]

const qaFeatures = [
  "Manual and automated testing",
  "Cross-platform compatibility testing",
  "User acceptance testing (UAT)",
  "Regression testing",
  "API testing and validation",
  "Mobile app testing",
  "Accessibility testing",
  "Continuous testing integration",
]

export default function QATestingPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="QA & Testing Services - Quality Assurance Solutions"
        description="Comprehensive quality assurance and testing services including functional, security, and performance testing."
        keywords="QA testing, quality assurance, software testing, functional testing, security testing, performance testing"
        canonicalUrl="/services/qa-testing"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="QA & Testing"
          subtitle="Comprehensive quality assurance and testing services for reliable software"
          backgroundImage="/images/QA-Testing.png"
        />

        <section className="py-20" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Ensuring Quality at Every Step</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our comprehensive QA and testing services ensure your software meets the highest standards of quality,
                  performance, and security before reaching your users.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {qaFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg group">
                  Improve Your Quality
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {testingServices.map((service, index) => (
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
