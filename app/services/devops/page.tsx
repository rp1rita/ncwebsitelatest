"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Settings, GitBranch, Zap, ArrowRight } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"

const devopsServices = [
  {
    title: "CI/CD Pipelines",
    description: "Automated build, test, and deployment workflows",
    icon: GitBranch,
  },
  {
    title: "Infrastructure as Code",
    description: "Automated infrastructure provisioning and management",
    icon: Settings,
  },
  {
    title: "Monitoring & Alerting",
    description: "Real-time system monitoring and incident response",
    icon: Zap,
  },
]

const devopsCapabilities = [
  "Continuous integration and deployment",
  "Container orchestration with Kubernetes",
  "Infrastructure automation",
  "Configuration management",
  "Security integration (DevSecOps)",
  "Performance monitoring",
  "Log management and analysis",
  "Disaster recovery planning",
]

export default function DevOpsPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="DevOps Services - Development & Operations Automation"
        description="Professional DevOps services including CI/CD pipelines, infrastructure automation, and continuous monitoring solutions."
        keywords="DevOps, CI/CD, infrastructure automation, continuous integration, deployment automation, monitoring"
        canonicalUrl="/services/devops"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader title="DevOps" subtitle="Development and operations automation for faster, reliable deployments" backgroundImage="/images/devops.png" />

        <section className="py-20" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Streamline Development and Operations</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our DevOps services bridge the gap between development and operations, enabling faster delivery,
                  improved reliability, and enhanced collaboration across teams.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {devopsCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{capability}</span>
                    </div>
                  ))}
                </div>

                <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg group">
                  Accelerate Your DevOps
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {devopsServices.map((service, index) => (
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
