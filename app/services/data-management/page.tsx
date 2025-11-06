import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Database, BarChart3, Shield, Workflow, Cloud, Zap, ArrowRight } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Data Management Services | NathCorp",
  description:
    "Comprehensive data management solutions including data architecture, analytics, governance, and cloud data services.",
  keywords: "data management, data architecture, data analytics, data governance, big data, data warehouse, ETL",
}

const features = [
  {
    icon: Database,
    title: "Data Architecture",
    description: "Design scalable and efficient data architectures for modern enterprises",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Advanced analytics and business intelligence solutions for data-driven decisions",
  },
  {
    icon: Shield,
    title: "Data Governance",
    description: "Implement comprehensive data governance frameworks and compliance measures",
  },
  {
    icon: Workflow,
    title: "ETL/ELT Pipelines",
    description: "Automated data integration and transformation pipelines",
  },
  {
    icon: Cloud,
    title: "Cloud Data Services",
    description: "Cloud-native data solutions and migration services",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Stream processing and real-time data analytics capabilities",
  },
]

const solutions = [
  {
    title: "Data Warehousing",
    description: "Modern data warehouse solutions for enterprise-scale analytics",
    features: ["Data modeling", "ETL development", "Performance optimization", "Cloud migration"],
  },
  {
    title: "Big Data Analytics",
    description: "Harness the power of big data with advanced analytics platforms",
    features: ["Hadoop ecosystem", "Spark processing", "Machine learning", "Predictive analytics"],
  },
  {
    title: "Data Lake Implementation",
    description: "Scalable data lake architectures for structured and unstructured data",
    features: ["Data ingestion", "Schema management", "Data cataloging", "Access controls"],
  },
]

const technologies = [
  { name: "Apache Spark", category: "Processing" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "Amazon Redshift", category: "Analytics" },
  { name: "Databricks", category: "Platform" },
  { name: "Apache Kafka", category: "Streaming" },
  { name: "Tableau", category: "Visualization" },
  { name: "Power BI", category: "BI Tools" },
  { name: "dbt", category: "Transformation" },
]

const benefits = [
  "Improved data quality and consistency",
  "Faster time-to-insight for business decisions",
  "Reduced data silos and improved accessibility",
  "Enhanced data security and compliance",
  "Scalable architecture for growing data needs",
  "Cost optimization through efficient storage",
  "Real-time analytics capabilities",
  "Self-service analytics for business users",
]

export default function DataManagementPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Data Management Services"
        description="Transform your data into actionable insights with comprehensive data management solutions"
        backgroundImage="/images/data-management.png"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-800">
              Unlock the Power of Your Data
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
              In the data-driven economy, effective data management is crucial for business success. Our comprehensive
              data management services help you collect, store, process, and analyze data to drive informed
              decision-making, improve operational efficiency, and gain competitive advantages through advanced
              analytics and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">Our Data Solutions</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{solution.title}</h3>
                  <p className="text-slate-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">Technologies We Use</h2>
            <p className="text-lg text-slate-600 mb-12 text-center">
              We leverage cutting-edge technologies to deliver robust data management solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{tech.name}</h3>
                  <p className="text-sm text-slate-600">{tech.category}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center text-slate-800">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Transform Your Data Strategy
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
