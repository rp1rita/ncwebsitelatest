import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Rocket, GitBranch, Container, Workflow, Monitor, Zap, ArrowRight } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Modern Deployment Services | NathCorp",
  description:
    "Advanced DevOps and deployment solutions including CI/CD pipelines, containerization, and automated deployment strategies.",
  keywords: "modern deployment, DevOps, CI/CD, containerization, Docker, Kubernetes, automation, deployment pipelines",
}

const features = [
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automated continuous integration and deployment pipelines for faster releases",
  },
  {
    icon: Container,
    title: "Containerization",
    description: "Docker and Kubernetes implementation for scalable application deployment",
  },
  {
    icon: Workflow,
    title: "Infrastructure as Code",
    description: "Automated infrastructure provisioning and management using IaC tools",
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    description: "Comprehensive monitoring, logging, and alerting solutions",
  },
  {
    icon: Zap,
    title: "Automated Testing",
    description: "Integrated testing frameworks for quality assurance and reliability",
  },
  {
    icon: Rocket,
    title: "Blue-Green Deployment",
    description: "Zero-downtime deployment strategies for mission-critical applications",
  },
]

const methodologies = [
  {
    title: "DevOps Implementation",
    description: "Complete DevOps transformation with culture, tools, and processes",
    features: ["DevOps assessment", "Tool chain setup", "Process automation", "Team training"],
  },
  {
    title: "Microservices Architecture",
    description: "Design and implement scalable microservices-based applications",
    features: ["Service decomposition", "API gateway setup", "Service mesh implementation", "Container orchestration"],
  },
  {
    title: "Cloud-Native Deployment",
    description: "Modern deployment strategies optimized for cloud environments",
    features: ["Serverless deployment", "Auto-scaling configuration", "Load balancing", "Multi-region deployment"],
  },
]

const tools = [
  { name: "Jenkins", category: "CI/CD" },
  { name: "GitLab CI", category: "CI/CD" },
  { name: "Docker", category: "Containerization" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Terraform", category: "IaC" },
  { name: "Ansible", category: "Configuration" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Visualization" },
]

export default function ModernDeploymentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Modern Deployment Services"
        description="Accelerate your software delivery with cutting-edge DevOps and deployment solutions"
        backgroundImage="/images/modern-deployment.png"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-800">
              Transform Your Software Delivery
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
              Modern deployment practices are essential for staying competitive in today's fast-paced digital landscape.
              Our comprehensive DevOps and deployment services help you achieve faster time-to-market, improved
              reliability, and seamless scalability through automation, containerization, and cloud-native technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">
            Our Deployment Methodologies
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{methodology.title}</h3>
                  <p className="text-slate-600 mb-6">{methodology.description}</p>
                  <ul className="space-y-2">
                    {methodology.features.map((feature, featureIndex) => (
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

      {/* Tools & Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">Tools & Technologies</h2>
            <p className="text-lg text-slate-600 mb-12 text-center">
              We leverage industry-leading tools and technologies to deliver robust deployment solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{tool.name}</h3>
                  <p className="text-sm text-slate-600">{tool.category}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Modernize Your Deployment
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
