"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Headphones, Clock, Users, ArrowRight } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"

const supportServices = [
  {
    title: "24/7 Technical Support",
    description: "Round-the-clock assistance for critical issues",
    icon: Clock,
  },
  {
    title: "Dedicated Support Team",
    description: "Assigned experts who understand your systems",
    icon: Users,
  },
  {
    title: "Multi-Channel Support",
    description: "Phone, email, chat, and remote assistance",
    icon: Headphones,
  },
]

const supportFeatures = [
  "24/7 monitoring and alerting",
  "Proactive maintenance",
  "Emergency response",
  "System health checks",
  "Performance optimization",
  "Security updates",
  "Backup and recovery",
  "Documentation and training",
]

export default function SupportPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Support Services - 24/7 Technical Support & Maintenance"
        description="Professional technical support services including 24/7 monitoring, maintenance, and emergency response for your critical systems."
        keywords="technical support, 24/7 support, system maintenance, IT support, emergency response, monitoring"
        canonicalUrl="/services/support"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="Support Services"
          subtitle="24/7 technical support and maintenance for your critical systems"
          backgroundImage="/images/support-services.png"
        />

        <section className="py-20" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Always Here When You Need Us</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our comprehensive support services ensure your systems run smoothly with proactive monitoring, rapid
                  response times, and expert technical assistance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {supportFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg group">
                  Get Support Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {supportServices.map((service, index) => (
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
