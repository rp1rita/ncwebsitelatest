import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ServicesCarousel from "@/components/services-carousel";
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Database,
  Globe,
  Lock,
  Server,
  Users,
  Smartphone,
  TestTube,
  Headphones,
  Lightbulb,
  Bot,
  Settings,
} from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"
import { ServiceSchema } from "@/components/seo/schema-markup"

const allServices = [
  // Original Services
  {
    id: "active-directory",
    title: "Active Directory",
    subtitle: "Hybrid Work Environment",
    description: "The best of both worlds",
    icon: Users,
    color: "bg-gradient-to-br from-blue-900 to-blue-700",
    features: [
      "Seamless integration between on-premises and cloud environments",
      "Centralized identity management across all platforms",
      "Enhanced security with multi-factor authentication",
      "Simplified user provisioning and deprovisioning",
      "Comprehensive audit and compliance reporting",
    ],
    longDescription:
      "Our Active Directory services provide a hybrid work environment that combines the best of on-premises and cloud solutions. We help organizations maintain security and control while enabling the flexibility modern workforces demand.",
  },
  {
    id: "security",
    title: "Security",
    subtitle: "Protect what's important",
    description: "Simple. Safe. Secure.",
    icon: Lock,
    color: "bg-gradient-to-br from-blue-950 to-blue-900",
    features: [
      "Comprehensive threat detection and prevention",
      "Zero-trust architecture implementation",
      "24/7 security monitoring and incident response",
      "Data loss prevention strategies",
      "Security awareness training and phishing simulations",
    ],
    longDescription:
      "In today's digital landscape, security is paramount. Our security services provide robust protection for your critical assets with a simple, safe, and secure approach.",
  },
  {
    id: "cloud-enablement",
    title: "Cloud Enablement",
    subtitle: "Migrate to the cloud",
    description: "Securely. Cost Effectively.",
    icon: Cloud,
    color: "bg-gradient-to-br from-blue-800 to-blue-600",
    features: [
      "Comprehensive cloud readiness assessment",
      "Tailored migration strategy and planning",
      "Seamless workload transition with minimal disruption",
      "Cloud optimization for performance and cost efficiency",
      "Ongoing cloud management and support",
    ],
    longDescription:
      "Our Cloud Enablement services help organizations transition to the cloud securely and cost-effectively. We provide end-to-end support throughout your cloud journey.",
  },
  {
    id: "modern-deployment",
    title: "Modern Deployment",
    subtitle: "Why wait to migrate?",
    description: "Cost effective, safe & personalized",
    icon: Server,
    color: "bg-gradient-to-br from-blue-700 to-blue-500",
    features: [
      "Automated deployment pipelines for consistent results",
      "Infrastructure as Code (IaC) implementation",
      "Containerization and orchestration solutions",
      "Microservices architecture design",
      "Continuous integration and delivery (CI/CD)",
    ],
    longDescription:
      "Modern Deployment solutions from NathCorp transform how organizations deliver applications and services. Our approach emphasizes automation, standardization, and efficiency.",
  },
  {
    id: "data-management",
    title: "Data Management",
    subtitle: "Harness your data potential",
    description: "Organize. Analyze. Optimize.",
    icon: Database,
    color: "bg-gradient-to-br from-blue-600 to-blue-400",
    features: [
      "Enterprise data strategy development",
      "Data governance and compliance frameworks",
      "Business intelligence and analytics solutions",
      "Data integration and ETL processes",
      "Big data architecture and implementation",
    ],
    longDescription:
      "Our Data Management services help organizations transform raw data into valuable insights and actionable intelligence.",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    subtitle: "Reimagine your business",
    description: "Innovate. Adapt. Thrive.",
    icon: Globe,
    color: "bg-gradient-to-br from-blue-500 to-blue-300",
    features: [
      "Digital strategy development and roadmapping",
      "Business process optimization and automation",
      "Customer experience enhancement",
      "Legacy system modernization",
      "Change management and adoption support",
    ],
    longDescription:
      "Digital Transformation is about more than technology—it's about fundamentally changing how your business operates and delivers value.",
  },
  // New Services
  {
    id: "app-development",
    title: "App Development",
    subtitle: "Custom Applications",
    description: "Mobile & Web Solutions",
    icon: Smartphone,
    color: "bg-gradient-to-br from-purple-600 to-purple-400",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions with React Native",
      "Progressive Web Applications (PWA)",
      "Custom web applications",
      "API development and integration",
    ],
    longDescription:
      "Our app development team creates innovative, user-friendly applications that drive business growth. From concept to deployment, we deliver solutions that exceed expectations.",
  },
  {
    id: "qa-testing",
    title: "QA & Testing",
    subtitle: "Quality Assurance",
    description: "Reliable. Tested. Secure.",
    icon: TestTube,
    color: "bg-gradient-to-br from-green-600 to-green-400",
    features: [
      "Manual and automated testing",
      "Cross-platform compatibility testing",
      "User acceptance testing (UAT)",
      "Regression testing",
      "API testing and validation",
    ],
    longDescription:
      "Our comprehensive QA and testing services ensure your software meets the highest standards of quality, performance, and security before reaching your users.",
  },
  {
    id: "support",
    title: "Support Services",
    subtitle: "24/7 Technical Support",
    description: "Always Available. Always Reliable.",
    icon: Headphones,
    color: "bg-gradient-to-br from-orange-600 to-orange-400",
    features: [
      "24/7 monitoring and alerting",
      "Proactive maintenance",
      "Emergency response",
      "System health checks",
      "Performance optimization",
    ],
    longDescription:
      "Our comprehensive support services ensure your systems run smoothly with proactive monitoring, rapid response times, and expert technical assistance.",
  },
  {
    id: "technology-consulting",
    title: "Technology Consulting",
    subtitle: "Strategic IT Guidance",
    description: "Expert. Strategic. Results-Driven.",
    icon: Lightbulb,
    color: "bg-gradient-to-br from-yellow-600 to-yellow-400",
    features: [
      "Technology assessment and audit",
      "Digital strategy development",
      "Architecture design and review",
      "Vendor selection and evaluation",
      "Risk assessment and mitigation",
    ],
    longDescription:
      "Our technology consulting services provide expert guidance to help you make informed decisions, optimize your IT investments, and achieve your business objectives.",
  },
  {
    id: "ai-services",
    title: "AI Services",
    subtitle: "Artificial Intelligence",
    description: "Smart. Automated. Innovative.",
    icon: Bot,
    color: "bg-gradient-to-br from-pink-600 to-pink-400",
    features: [
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "Recommendation engines",
      "Intelligent document processing",
    ],
    longDescription:
      "Our AI services help businesses automate processes, gain insights from data, and create intelligent solutions that drive efficiency and innovation.",
  },
  {
    id: "devops",
    title: "DevOps",
    subtitle: "Development & Operations",
    description: "Fast. Reliable. Automated.",
    icon: Settings,
    color: "bg-gradient-to-br from-red-600 to-red-400",
    features: [
      "Continuous integration and deployment",
      "Container orchestration with Kubernetes",
      "Infrastructure automation",
      "Configuration management",
      "Security integration (DevSecOps)",
    ],
    longDescription:
      "Our DevOps services bridge the gap between development and operations, enabling faster delivery, improved reliability, and enhanced collaboration across teams.",
  },
]

export default function ServicesPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Our Services - Comprehensive Digital Solutions"
        description="Explore NathCorp's complete range of IT services including Cloud Migration, Digital Transformation, AI Services, DevOps, and more."
        keywords="IT services, cloud migration, digital transformation, app development, AI services, DevOps, technology consulting"
        canonicalUrl="/services"
      />

      <ServiceSchema
        name="NathCorp IT Services"
        description="Comprehensive IT services including Cloud Migration, Digital Transformation, AI Services, DevOps, and more."
        provider={{
          name: "NathCorp",
          url: "https://nathcorp.com",
        }}
        areaServed="Global"
        serviceType="IT Services"
      />

      <main className="min-h-screen">
        <Navbar />
         <ServicesCarousel />

        {/* Services Overview */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="active-directory" className="w-full">
              <div className="flex justify-center mb-12 overflow-x-auto pb-2">
                <TabsList className="bg-slate-100/80 backdrop-blur-sm p-1 rounded-full border border-slate-200 flex-wrap">
                  {allServices.map((service) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md transition-all duration-300 m-1"
                    >
                      {service.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {allServices.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="mb-6">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} text-white mb-4 shadow-lg`}
                        >
                          <service.icon size={32} />
                        </div>
                        <h3 className="text-3xl font-bold mb-2 text-slate-800">{service.subtitle}</h3>
                        <p className="text-xl text-blue-600 mb-4">{service.description}</p>
                      </div>

                      <p className="text-slate-600 mb-8 text-lg leading-relaxed">{service.longDescription}</p>

                      <div className="space-y-4 mb-8">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg" asChild>
                        <a href={`/services/${service.id}`}>
                          Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    </div>

                    <div>
                      <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200/50 rounded-2xl transform rotate-3 backdrop-blur-sm"></div>
                        <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-300/30 rounded-2xl transform -rotate-3 backdrop-blur-sm"></div>
                        <Card className="glass-card relative z-10 rounded-2xl overflow-hidden border-0">
                          <CardContent className="p-0">
                            <div className={`h-64 ${service.color}`}></div>
                            <div className="p-8">
                              <h4 className="text-2xl font-bold mb-4 text-slate-800">
                                Why Choose Our {service.title} Services
                              </h4>
                              <ul className="space-y-3">
                                <li className="flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                                  <span>Expert team with proven industry experience</span>
                                </li>
                                <li className="flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                                  <span>Tailored solutions for your specific needs</span>
                                </li>
                                <li className="flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                                  <span>Ongoing support and optimization</span>
                                </li>
                                <li className="flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                                  <span>Transparent pricing with no hidden costs</span>
                                </li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8">
                Let's discuss how our services can address your specific challenges and opportunities.
              </p>
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 rounded-full px-8 py-6 text-lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
