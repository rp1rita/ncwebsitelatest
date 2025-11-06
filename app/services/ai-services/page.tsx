"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Bot, Brain, Zap, ArrowRight } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"

const aiServices = [
  {
    title: "Machine Learning",
    description: "Custom ML models for predictive analytics",
    icon: Brain,
  },
  {
    title: "Process Automation",
    description: "Intelligent automation with AI-powered workflows",
    icon: Zap,
  },
  {
    title: "AI Chatbots",
    description: "Conversational AI for customer service",
    icon: Bot,
  },
]

const aiCapabilities = [
  "Natural language processing",
  "Computer vision solutions",
  "Predictive analytics",
  "Recommendation engines",
  "Intelligent document processing",
  "Robotic process automation",
  "AI model training and deployment",
  "AI strategy and implementation",
]

export default function AIServicesPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="AI Services - Artificial Intelligence Solutions"
        description="Advanced AI services including machine learning, process automation, chatbots, and intelligent analytics solutions."
        keywords="AI services, artificial intelligence, machine learning, automation, chatbots, predictive analytics"
        canonicalUrl="/services/ai-services"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="AI Services"
          subtitle="Artificial intelligence solutions to automate and enhance your operations"
          backgroundImage="/images/AI-Services.jpg"
        />

        <section className="py-20" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Harness the Power of Artificial Intelligence</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our AI services help businesses automate processes, gain insights from data, and create intelligent
                  solutions that drive efficiency and innovation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {aiCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{capability}</span>
                    </div>
                  ))}
                </div>

                <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg group">
                  Explore AI Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {aiServices.map((service, index) => (
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
