import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Cloud, Server, Database, Network, Shield, Zap, ArrowRight } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Cloud Enablement Services | NathCorp",
  description:
    "Comprehensive cloud enablement solutions including cloud migration, architecture design, and optimization services for AWS, Azure, and Google Cloud.",
  keywords: "cloud enablement, cloud migration, AWS, Azure, Google Cloud, cloud architecture, cloud optimization",
}

const features = [
  {
    icon: Cloud,
    title: "Cloud Strategy",
    description: "Develop comprehensive cloud adoption strategies aligned with business objectives",
  },
  {
    icon: Server,
    title: "Migration Services",
    description: "Seamless migration of applications and data to cloud platforms",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Cloud-native data solutions and database optimization",
  },
  {
    icon: Network,
    title: "Network Architecture",
    description: "Design and implement secure, scalable cloud network architectures",
  },
  {
    icon: Shield,
    title: "Cloud Security",
    description: "Implement robust security measures and compliance frameworks",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize cloud resources for maximum performance and cost efficiency",
  },
]

const platforms = [
  {
    name: "Amazon Web Services",
    description: "Complete AWS solutions from EC2 to advanced AI/ML services",
    services: ["EC2 & ECS", "Lambda Functions", "RDS & DynamoDB", "S3 Storage", "CloudFormation", "AI/ML Services"],
  },
  {
    name: "Microsoft Azure",
    description: "Full-stack Azure implementation and management services",
    services: [
      "Virtual Machines",
      "Azure Functions",
      "SQL Database",
      "Blob Storage",
      "ARM Templates",
      "Cognitive Services",
    ],
  },
  {
    name: "Google Cloud Platform",
    description: "GCP solutions leveraging Google's cutting-edge technology",
    services: ["Compute Engine", "Cloud Functions", "Cloud SQL", "Cloud Storage", "Deployment Manager", "AI Platform"],
  },
]

const benefits = [
  "Reduced infrastructure costs by up to 30%",
  "Improved scalability and flexibility",
  "Enhanced disaster recovery capabilities",
  "Faster deployment and time-to-market",
  "Global accessibility and collaboration",
  "Automatic updates and maintenance",
  "Pay-as-you-use pricing models",
  "Enterprise-grade security and compliance",
]

export default function CloudEnablementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Cloud Enablement Services"
        description="Transform your business with comprehensive cloud adoption and optimization solutions"
        backgroundImage="/images/cloud-enablement-hero.jpg"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-800">
              Accelerate Your Cloud Journey
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
              Cloud enablement is more than just migration—it's about transforming your entire IT infrastructure to be
              more agile, scalable, and cost-effective. Our comprehensive cloud services help you leverage the full
              potential of cloud computing while ensuring security, compliance, and optimal performance.
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

      {/* Cloud Platforms Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">Multi-Cloud Expertise</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{platform.name}</h3>
                  <p className="text-slate-600 mb-6">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {service}
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
              Cloud Enablement Benefits
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
                Start Your Cloud Journey
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
