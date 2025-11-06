import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle, Users, Shield, Settings, Database, Network, ArrowRight } from "lucide-react"
import CallToAction from "@/components/call-to-action"

export const metadata: Metadata = {
  title: "Active Directory Services | NathCorp",
  description:
    "Comprehensive Active Directory solutions for identity management, security, and user authentication. Expert AD implementation, migration, and optimization services.",
  keywords: "Active Directory, AD, identity management, user authentication, LDAP, domain controller, group policy",
}

const features = [
  {
    icon: Users,
    title: "User Management",
    description: "Centralized user account management with automated provisioning and deprovisioning",
  },
  {
    icon: Shield,
    title: "Security Policies",
    description: "Advanced security policies and group policy management for enhanced protection",
  },
  {
    icon: Settings,
    title: "Domain Services",
    description: "Complete domain controller setup, configuration, and maintenance services",
  },
  {
    icon: Database,
    title: "Directory Services",
    description: "LDAP integration and directory synchronization across multiple platforms",
  },
  {
    icon: Network,
    title: "Federation Services",
    description: "Single sign-on (SSO) and federation services for seamless user experience",
  },
]

const benefits = [
  "Centralized identity and access management",
  "Enhanced security through group policies",
  "Simplified user provisioning and management",
  "Seamless integration with Microsoft ecosystem",
  "Scalable architecture for growing organizations",
  "Automated backup and disaster recovery",
  "24/7 monitoring and support",
  "Compliance with industry standards",
]

const services = [
  {
    title: "AD Implementation",
    description: "Complete Active Directory setup from planning to deployment",
    features: [
      "Domain design and planning",
      "Forest and domain configuration",
      "DNS and DHCP integration",
      "Group Policy setup",
    ],
  },
  {
    title: "AD Migration",
    description: "Seamless migration from legacy systems to modern AD infrastructure",
    features: [
      "Legacy system assessment",
      "Migration planning and strategy",
      "Data migration and validation",
      "User training and support",
    ],
  },
  {
    title: "AD Optimization",
    description: "Performance tuning and optimization of existing AD environments",
    features: ["Performance analysis", "Security hardening", "Policy optimization", "Monitoring setup"],
  },
]

export default function ActiveDirectoryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Active Directory Services"
        description="Comprehensive identity and access management solutions for your organization"
        backgroundImage="/images/active-directory-hero.jpg"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-800">
              Enterprise-Grade Active Directory Solutions
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
              Our Active Directory services provide comprehensive identity and access management solutions that enhance
              security, streamline user management, and ensure seamless integration across your entire IT
              infrastructure. From initial implementation to ongoing optimization, we deliver enterprise-grade solutions
              tailored to your organization's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">
            Our Active Directory Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">
              Why Choose Our Active Directory Services?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  )
}
