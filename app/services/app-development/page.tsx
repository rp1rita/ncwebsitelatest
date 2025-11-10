"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Smartphone, Monitor, Tablet, ArrowRight } from "lucide-react"
//fddggh
import MetaTags from "@/components/seo/meta-tags"

const features = [
  "Native iOS and Android development",
  "Cross-platform solutions with React Native",
  "Progressive Web Applications (PWA)",
  "Custom web applications",
  "API development and integration",
  "UI/UX design and prototyping",
  "App store optimization",
  "Maintenance and support",
]

const technologies = [
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Swift", category: "iOS" },
  { name: "Kotlin", category: "Android" },
  { name: "React", category: "Web" },
  { name: "Vue.js", category: "Web" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
]

export default function AppDevelopmentPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="App Development Services - Custom Mobile & Web Applications"
        description="Professional app development services including native iOS/Android apps, cross-platform solutions, and custom web applications."
        keywords="app development, mobile apps, web applications, iOS development, Android development, React Native"
        canonicalUrl="/services/app-development"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="App Development"
          subtitle="Custom mobile and web applications built with cutting-edge technologies"
          backgroundImage="/images/App-development.png"
        />

        <section className="py-20" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Building Tomorrow's Applications Today</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our app development team creates innovative, user-friendly applications that drive business growth.
                  From concept to deployment, we deliver solutions that exceed expectations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <Card className="glass-card border-0 shadow-lg p-6 text-center">
                  <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Mobile Apps</h3>
                  <p className="text-sm text-slate-600">Native and cross-platform mobile applications</p>
                </Card>

                <Card className="glass-card border-0 shadow-lg p-6 text-center">
                  <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Web Apps</h3>
                  <p className="text-sm text-slate-600">Responsive web applications and PWAs</p>
                </Card>

                <Card className="glass-card border-0 shadow-lg p-6 text-center">
                  <Tablet className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Tablet Apps</h3>
                  <p className="text-sm text-slate-600">Optimized applications for tablet devices</p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Technologies We Use</h2>
              <p className="text-lg text-slate-600">
                We leverage the latest technologies to build robust, scalable applications
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass-card border-0 shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center">
                    <h3 className="font-bold text-slate-800">{tech.name}</h3>
                    <p className="text-sm text-blue-600">{tech.category}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
