import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Lock, Eye, AlertTriangle, FileCheck, Users, ArrowRight } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Cybersecurity Services | NathCorp",
  description:
    "Comprehensive cybersecurity solutions including threat detection, vulnerability management, compliance, and security consulting services.",
  keywords:
    "cybersecurity, threat detection, vulnerability management, compliance, security consulting, penetration testing",
}

const features = [
  {
    icon: Shield,
    title: "Threat Detection",
    description: "Advanced threat detection and response systems to protect against cyber attacks",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Multi-factor authentication and role-based access control implementation",
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "24/7 security monitoring and incident response services",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Assessment",
    description: "Regular vulnerability scans and penetration testing services",
  },
  {
    icon: FileCheck,
    title: "Compliance Management",
    description: "Ensure compliance with industry standards and regulations",
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Employee security awareness training and phishing simulation",
  },
]

const services = [
  {
    title: "Security Assessment",
    description: "Comprehensive security audits and risk assessments",
    features: ["Network security analysis", "Vulnerability scanning", "Penetration testing", "Risk assessment reports"],
  },
  {
    title: "Security Implementation",
    description: "Deploy and configure security solutions tailored to your needs",
    features: [
      "Firewall configuration",
      "Intrusion detection systems",
      "Endpoint protection",
      "Security policy development",
    ],
  },
  {
    title: "Managed Security",
    description: "Ongoing security monitoring and management services",
    features: ["24/7 SOC monitoring", "Incident response", "Threat hunting", "Security maintenance"],
  },
]

const compliance = ["SOC 2 Type II", "ISO 27001", "HIPAA", "PCI DSS", "GDPR", "NIST Framework", "FedRAMP", "FISMA"]

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Cybersecurity Services"
        description="Protect your business with enterprise-grade security solutions and expert consulting"
        backgroundImage="/images/Security.png"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-800">
              Comprehensive Cybersecurity Solutions
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
              In today's digital landscape, cybersecurity is not optional—it's essential. Our comprehensive security
              services protect your organization from evolving threats while ensuring compliance with industry
              standards. From threat detection to incident response, we provide end-to-end security solutions that give
              you peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-red-600" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">Our Security Services</h2>

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

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">Compliance & Standards</h2>
            <p className="text-lg text-slate-600 mb-12 text-center">
              We help you achieve and maintain compliance with major industry standards and regulations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {compliance.map((standard, index) => (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-800">{standard}</h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Schedule Security Assessment
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
