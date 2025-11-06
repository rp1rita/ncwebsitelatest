"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Cloud, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MetaTags from "@/components/seo/meta-tags"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: "ez-migrate",
    name: "EZ Migrate",
    tagline: "Modern Deployment Solution",
    description: "Simplify your journey to the cloud with our comprehensive migration platform. Why wait to migrate?",
    longDescription:
      "EZ Migrate is our flagship cloud migration solution designed to make your transition to the cloud seamless, secure, and cost-effective. With automated assessment tools, intelligent workload planning, and zero-downtime migration capabilities, EZ Migrate reduces the complexity and risk typically associated with cloud migrations.",
    features: [
      "Cost effective, safe & personalized approach",
      "Automated discovery and dependency mapping",
      "Intelligent migration planning and scheduling",
      "Zero-downtime migration execution",
      "Post-migration validation and optimization",
      "Comprehensive security and compliance controls",
    ],
    benefits: [
      "Reduce migration time by up to 60%",
      "Minimize business disruption during transition",
      "Lower migration costs through automation",
      "Ensure security and compliance throughout the process",
      "Optimize cloud resources from day one",
    ],
    icon: Cloud,
    color: "from-blue-700 to-blue-500",
    image: "/images/ez-migrate-slide.png",
  },
  {
    id: "pro-work",
    name: "Pro-Work Portfolio",
    tagline: "Achieve Key Business Objectives",
    description: "We designed our Pro-Work portfolio to allow you to achieve two key business objectives.",
    longDescription:
      "Pro-Work Portfolio is a comprehensive suite of tools designed to enhance productivity, streamline workflows, and drive collaboration across your organization. This integrated platform provides everything teams need to manage projects, track progress, and deliver results efficiently in today's hybrid work environment.",
    features: [
      "Intuitive project and task management",
      "Real-time collaboration tools",
      "Customizable workflow templates",
      "Advanced analytics and reporting",
      "Seamless integration with existing tools",
      "Enterprise-grade security and compliance",
    ],
    benefits: [
      "Increase team productivity by up to 40%",
      "Improve project visibility and accountability",
      "Enhance cross-team collaboration",
      "Make data-driven decisions with advanced analytics",
      "Reduce time spent on administrative tasks",
    ],
    icon: Zap,
    color: "from-blue-600 to-blue-400",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "secure-shield",
    name: "SecureShield",
    tagline: "Comprehensive Security Platform",
    description: "Protect your digital assets with our multi-layered security solution.",
    longDescription:
      "SecureShield is our enterprise-grade security platform that provides comprehensive protection for your digital assets. With advanced threat detection, intelligent monitoring, and automated response capabilities, SecureShield helps organizations stay ahead of evolving security threats while maintaining operational efficiency.",
    features: [
      "Real-time threat detection and prevention",
      "Zero-trust architecture implementation",
      "Continuous vulnerability assessment",
      "Automated incident response",
      "Compliance monitoring and reporting",
      "Security awareness training platform",
    ],
    benefits: [
      "Reduce security incidents by up to 75%",
      "Minimize response time to potential threats",
      "Ensure regulatory compliance across operations",
      "Protect sensitive data from unauthorized access",
      "Build a security-conscious organizational culture",
    ],
    icon: Shield,
    color: "from-blue-800 to-blue-600",
    image: "/images/security-slide.png",
  },
]

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("ez-migrate")
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })
  const [showClickAnimation, setShowClickAnimation] = useState(false)
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.2 })
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get click position for animation
    const rect = e.currentTarget.getBoundingClientRect()
    setClickPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    
    // Show and then hide the animation
    setShowClickAnimation(true)
    setTimeout(() => setShowClickAnimation(false), 700)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Our Products - NathCorp Solutions"
        description="Explore NathCorp's innovative product suite including EZ Migrate, Pro-Work Portfolio, and SecureShield."
        keywords="EZ Migrate, Pro-Work Portfolio, SecureShield, cloud migration, productivity tools, security platform"
        canonicalUrl="/products"
      />

      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white" ref={headerRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4"
              >
                <Badge className="bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 py-1 px-4">
                  Product Suite
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Innovative Products
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-blue-100 mb-8"
              >
                Cutting-edge solutions designed to transform your business operations
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-800 hover:bg-blue-50 rounded-full px-8 py-6 text-lg relative overflow-hidden"
                  onClick={handleButtonClick}
                >
                  Explore Our Products
                  
                  {showClickAnimation && (
                    <motion.span
                      className="absolute bg-blue-400/30 rounded-full pointer-events-none"
                      initial={{ opacity: 0.8, scale: 0 }}
                      animate={{ opacity: 0, scale: 4 }}
                      transition={{ duration: 0.7 }}
                      style={{ 
                        left: clickPosition.x, 
                        top: clickPosition.y,
                        width: '10px',
                        height: '10px',
                        transformOrigin: 'center center'
                      }}
                    />
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Products Showcase */}
        <section className="py-20" ref={contentRef}>
          <div className="container mx-auto px-4">
            <Tabs 
              defaultValue="ez-migrate" 
              className="w-full"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <div className="flex justify-center mb-12">
                <TabsList className="bg-slate-100/80 backdrop-blur-sm p-1 rounded-full border border-slate-200">
                  {products.map((product) => (
                    <TabsTrigger
                      key={product.id}
                      value={product.id}
                      className="rounded-full px-6 py-2.5 text-sm data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md transition-all duration-300"
                    >
                      {product.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {products.map((product) => (
                <TabsContent key={product.id} value={product.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={contentInView && activeTab === product.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ duration: 0.6 }}
                      className="order-2 lg:order-1"
                    >
                      <div className="mb-6">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} text-white mb-4 shadow-lg`}
                        >
                          <product.icon size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-slate-800">{product.name}</h2>
                        <p className="text-xl text-blue-600 mb-4">{product.tagline}</p>
                      </div>

                      <p className="text-slate-600 mb-8 text-lg leading-relaxed">{product.longDescription}</p>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-slate-800">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                              <span className="text-slate-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-slate-800">Benefits</h3>
                        <div className="space-y-3">
                          {product.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mr-3 shrink-0">
                                {index + 1}
                              </div>
                              <span className="text-slate-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Button 
                          className="luxury-button rounded-full px-8 py-6 text-white text-lg relative overflow-hidden"
                          onClick={handleButtonClick}
                        >
                          Request Demo
                          
                          {showClickAnimation && (
                            <motion.span
                              className="absolute bg-white/30 rounded-full pointer-events-none"
                              initial={{ opacity: 0.8, scale: 0 }}
                              animate={{ opacity: 0, scale: 4 }}
                              transition={{ duration: 0.7 }}
                              style={{ 
                                left: clickPosition.x, 
                                top: clickPosition.y,
                                width: '10px',
                                height: '10px',
                                transformOrigin: 'center center'
                              }}
                            />
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg group relative overflow-hidden"
                          onClick={handleButtonClick}
                        >
                          Learn More <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          
                          {showClickAnimation && (
                            <motion.span
                              className="absolute bg-blue-400/30 rounded-full pointer-events-none"
                              initial={{ opacity: 0.8, scale: 0 }}
                              animate={{ opacity: 0, scale: 4 }}
                              transition={{ duration: 0.7 }}
                              style={{ 
                                left: clickPosition.x, 
                                top: clickPosition.y,
                                width: '10px',
                                height: '10px',
                                transformOrigin: 'center center'
                              }}
                            />
                          )}
                        </Button>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={contentInView && activeTab === product.id ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="order-1 lg:order-2"
                    >
                      <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200/50 rounded-2xl transform rotate-3 backdrop-blur-sm"></div>
                        <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-300/30 rounded-2xl transform -rotate-3 backdrop-blur-sm"></div>
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={800}
                            height={600}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-800 luxury-text-gradient">Flexible Pricing Options</h2>
              <p className="text-xl text-slate-600">Choose the plan that works best for your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Card className="glass-card border-0 shadow-xl relative overflow-hidden transform transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100/50 z-0"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl text-slate-800">Starter</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-slate-800">$499</span>
                      <span className="text-slate-600">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base text-slate-600 mb-6">
                      Perfect for small businesses just getting started with digital transformation.
                    </CardDescription>
                    <ul className="space-y-3">
                      {["Up to 5 users", "Basic support", "Core features", "1TB storage", "Monthly reports"].map(
                        (feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <Button 
                      className="w-full luxury-button text-white relative overflow-hidden"
                      onClick={handleButtonClick}
                    >
                      Get Started
                      
                      {showClickAnimation && (
                        <motion.span
                          className="absolute bg-white/30 rounded-full pointer-events-none"
                          initial={{ opacity: 0.8, scale: 0 }}
                          animate={{ opacity: 0, scale: 4 }}
                          transition={{ duration: 0.7 }}
                          style={{ 
                            left: clickPosition.x, 
                            top: clickPosition.y,
                            width: '10px',
                            height: '10px',
                            transformOrigin: 'center center'
                          }}
                        />
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Card className="glass-card border-0 shadow-2xl relative overflow-hidden transform transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 z-0"></div>
                  <div className="absolute top-0 right-0 bg-blue-900 text-white py-2 px-6 rounded-bl-lg font-semibold">
                    Most Popular
                  </div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl text-white">Professional</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">$999</span>
                      <span className="text-blue-100">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base text-blue-100 mb-6">
                      Ideal for growing businesses with more advanced digital needs.
                    </CardDescription>
                    <ul className="space-y-3">
                      {[
                        "Up to 20 users",
                        "Priority support",
                        "Advanced features",
                        "5TB storage",
                        "Weekly reports",
                        "API access",
                        "Custom integrations",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-white mr-2 shrink-0" />
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <Button 
                      className="w-full bg-white text-blue-800 hover:bg-blue-50 relative overflow-hidden"
                      onClick={handleButtonClick}
                    >
                      Get Started
                      
                      {showClickAnimation && (
                        <motion.span
                          className="absolute bg-blue-400/30 rounded-full pointer-events-none"
                          initial={{ opacity: 0.8, scale: 0 }}
                          animate={{ opacity: 0, scale: 4 }}
                          transition={{ duration: 0.7 }}
                          style={{ 
                            left: clickPosition.x, 
                            top: clickPosition.y,
                            width: '10px',
                            height: '10px',
                            transformOrigin: 'center center'
                          }}
                        />
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Card className="glass-card border-0 shadow-xl relative overflow-hidden transform transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100/50 z-0"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl text-slate-800">Enterprise</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-slate-800">$1999</span>
                      <span className="text-slate-600">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base text-slate-600 mb-6">
                      Tailored for large enterprises with complex digital transformation needs.
                    </CardDescription>
                    <ul className="space-y-3">
                      {[
                        "Unlimited users",
                        "Dedicated support",
                        "All features",
                        "Unlimited storage",
                        "Daily reports",
                        "Custom API access",
                        "Enterprise-grade integrations",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <Button 
                      className="w-full luxury-button text-white relative overflow-hidden"
                      onClick={handleButtonClick}
                    >
                      Get Started
                      
                      {showClickAnimation && (
                        <motion.span
                          className="absolute bg-white/30 rounded-full pointer-events-none"
                          initial={{ opacity: 0.8, scale: 0 }}
                          animate={{ opacity: 0, scale: 4 }}
                          transition={{ duration: 0.7 }}
                          style={{ 
                            left: clickPosition.x, 
                            top: clickPosition.y,
                            width: '10px',
                            height: '10px',
                            transformOrigin: 'center center'
                          }}
                        />
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </ThemeProvider>
  )
}
