"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ClientLogosCarousel from "@/components/client-logos-carousel"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowRight, CheckCircle, Building2, Users, TrendingUp, FileText } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"

const industries = [
  {
    id: "technology",
    name: "Technology & Data Storage",
    description: "Advanced solutions for technology companies and data storage providers",
    image: "/images/wd.png?height=400&width=600&text=Technology+Solutions",
    color: "from-blue-600 to-blue-400",
    challenges: [
      "Complex IT infrastructure separation",
      "Data migration without disruption",
      "System integration post-merger/demerger",
      "Scalable architecture design",
      "Security and compliance maintenance",
    ],
    solutions: [
      "Complete IT separation strategies",
      "Automated migration processes",
      "Identity system carve-outs",
      "Network infrastructure separation",
      "Security and compliance frameworks",
    ],
    caseStudy: {
      client: "Western Digital (SanDisk)",
      industry: "Technology / Data Storage",
      title: "Western Digital Demerger Success: Streamlined Operational Separation and Optimization",
      focus: "Complete digital infrastructure separation for corporate demerger",
      challenge:
        "Western Digital needed to split its flash business (SanDisk) into a separate public company, requiring complete digital infrastructure separation without business disruption.",
      solution:
        "A meticulously executed carve-out separated identity systems, data, applications, and network infrastructure. Automation and strategic planning ensured security, data integrity, and business continuity.",
      results:
        "Successfully created two autonomous companies with secure, scalable IT environments, achieved seamless data migration with zero disruption, and established stronger security with streamlined operations.",
      logo: "/images/wd.png?height=60&width=120&text=Western+Digital",
      metrics: [
        { label: "Business Disruption", value: "Zero" },
        { label: "Data Migration", value: "100%" },
        { label: "Security Enhancement", value: "Stronger" },
        { label: "Operational Efficiency", value: "Streamlined" },
      ],
      fullCaseStudy: {
        overview:
          "Western Digital's strategic decision to separate its flash memory business (SanDisk) into an independent public company required a comprehensive digital transformation approach that would ensure business continuity while creating two fully autonomous IT environments.",
        keyProblems: [
          "Complete separation of integrated IT systems without operational disruption",
          "Maintaining data integrity across complex enterprise applications",
          "Ensuring security compliance during the transition period",
          "Creating independent identity and access management systems",
          "Establishing separate network infrastructures for both entities",
        ],
        solutionDetails: [
          "Comprehensive IT Infrastructure Assessment: Conducted detailed analysis of all systems, applications, and data dependencies",
          "Phased Separation Strategy: Implemented a carefully orchestrated timeline to minimize business impact",
          "Identity System Carve-out: Created independent Active Directory environments with proper access controls",
          "Data Migration Automation: Developed automated tools for secure data transfer and validation",
          "Network Segmentation: Established separate network infrastructures with appropriate security boundaries",
          "Application Independence: Ensured all business-critical applications could operate independently",
          "Security Framework Implementation: Deployed comprehensive security measures for both organizations",
        ],
        implementation:
          "The project was executed in multiple phases over 18 months, with each phase carefully planned to maintain business operations. Our team worked closely with Western Digital's IT and business teams to ensure seamless execution.",
        outcomes: [
          "Two Autonomous Companies: Successfully created independent IT environments for both Western Digital and the new SanDisk entity",
          "Zero Business Disruption: Maintained 100% operational continuity throughout the separation process",
          "Enhanced Security Posture: Implemented stronger security controls and monitoring for both organizations",
          "Streamlined Operations: Optimized IT processes and reduced operational complexity",
          "Successful IPO Support: Enabled the successful public offering of the separated entity",
        ],
        technologies: [
          "Active Directory",
          "Azure Cloud Services",
          "Enterprise Security Tools",
          "Data Migration Platforms",
          "Network Infrastructure",
          "Identity Management Systems",
        ],
        timeline: "18 months",
        teamSize: "25+ specialists",
      },
    },
  },
  {
    id: "aviation",
    name: "Aviation",
    description: "Digital solutions that enhance flight operations and passenger experience",
    image: "/placeholder.svg?height=400&width=600&text=Aviation+Solutions",
    color: "from-sky-600 to-sky-400",
    challenges: [
      "Heavy paper-based flight operations",
      "Manual communication inefficiencies",
      "Compliance and safety risks",
      "Real-time information access",
      "Crew training and adoption",
    ],
    solutions: [
      "Electronic Flight Bag (EFB) systems",
      "Cloud-integrated tablet solutions",
      "Automated manual distribution",
      "Real-time content updates",
      "Centralized management platforms",
    ],
    caseStudy: {
      client: "Hawaiian Airlines",
      industry: "Aviation / Commercial Airlines",
      title: "Implementation of Electronic Flight Bag at Hawaiian Airlines",
      focus: "Digital transformation of flight operations",
      challenge:
        "Pilots relied on heavy paper manuals (~120 lbs per flight), causing inefficiencies and compliance risks, with manual communication prone to delays and errors.",
      solution:
        "Deployment of secure, cloud-integrated Electronic Flight Bags (EFBs) on tablets with automated manual distribution, real-time updates, encrypted access, and centralized management.",
      results:
        "Significantly reduced aircraft weight and fuel costs, enabled real-time crew communication and content delivery, and improved compliance with enhanced training flexibility.",
      logo: "/placeholder.svg?height=60&width=120&text=Hawaiian+Airlines",
      metrics: [
        { label: "Weight Reduction", value: "120 lbs" },
        { label: "Fuel Savings", value: "Significant" },
        { label: "Real-time Updates", value: "100%" },
        { label: "Compliance", value: "Enhanced" },
      ],
      fullCaseStudy: {
        overview:
          "Hawaiian Airlines embarked on a digital transformation journey to modernize their flight operations by replacing traditional paper-based systems with state-of-the-art Electronic Flight Bags (EFBs).",
        keyProblems: [
          "Heavy paper manuals weighing approximately 120 pounds per flight",
          "Inefficient manual processes for document updates and distribution",
          "Communication delays between crew members and ground operations",
          "Compliance risks due to outdated or missing documentation",
          "High operational costs associated with paper-based systems",
          "Limited real-time access to critical flight information",
        ],
        solutionDetails: [
          "EFB Hardware Deployment: Provided ruggedized tablets optimized for aviation use",
          "Cloud Integration: Implemented secure cloud infrastructure for real-time data synchronization",
          "Automated Distribution: Created systems for automatic manual updates and distribution",
          "Security Implementation: Deployed enterprise-grade encryption and access controls",
          "Centralized Management: Established centralized platform for content and device management",
          "Training Programs: Developed comprehensive pilot training and certification programs",
          "Compliance Framework: Ensured all systems meet FAA regulations and safety standards",
        ],
        implementation:
          "The EFB implementation was rolled out across Hawaiian Airlines' entire fleet in phases, starting with pilot programs and gradually expanding to full deployment with comprehensive training and support.",
        outcomes: [
          "Dramatic Weight Reduction: Eliminated 120 pounds of paper per flight, reducing fuel consumption",
          "Real-time Communication: Enabled instant communication between pilots and ground operations",
          "Enhanced Compliance: Improved regulatory compliance with automated updates and tracking",
          "Operational Efficiency: Streamlined pre-flight procedures and reduced preparation time",
          "Cost Savings: Significant reduction in printing, distribution, and fuel costs",
          "Improved Safety: Enhanced access to critical flight information and weather updates",
        ],
        technologies: [
          "iPad/Tablet Technology",
          "Cloud Infrastructure",
          "Mobile Device Management",
          "Encryption Systems",
          "Content Management",
          "Aviation Software",
        ],
        timeline: "12 months",
        teamSize: "15+ aviation specialists",
      },
    },
  },
  {
    id: "automotive",
    name: "Automotive & Travel Services",
    description: "Modern IT solutions for automotive and travel service providers",
    image: "/placeholder.svg?height=400&width=600&text=Automotive+Solutions",
    color: "from-red-600 to-red-400",
    challenges: [
      "Aging directory systems",
      "Login delays and inefficiencies",
      "Security vulnerabilities",
      "High support overhead",
      "System modernization needs",
    ],
    solutions: [
      "Active Directory modernization",
      "Enhanced authentication systems",
      "Centralized access control",
      "Automated support processes",
      "Security framework upgrades",
    ],
    caseStudy: {
      client: "AAA (American Automobile Association)",
      industry: "Automotive / Travel Services",
      title: "Modernizing Core Systems for Enhanced Security and Efficiency",
      focus: "Active Directory modernization and security enhancement",
      challenge:
        "Aging directory systems led to login delays, security vulnerabilities, and high support overhead affecting member services and operational efficiency.",
      solution:
        "Phased modernization of Active Directory infrastructure, implementation of stronger authentication mechanisms, and centralized access control policies with seamless parallel deployment.",
      results:
        "Achieved 45% reduction in access-related support tickets, zero downtime during migration, and 35% savings in maintenance and licensing costs.",
      logo: "/placeholder.svg?height=60&width=120&text=AAA",
      metrics: [
        { label: "Support Tickets", value: "-45%" },
        { label: "Migration Downtime", value: "Zero" },
        { label: "Cost Savings", value: "35%" },
        { label: "Security", value: "Enhanced" },
      ],
      fullCaseStudy: {
        overview:
          "AAA's legacy Active Directory infrastructure was hampering operational efficiency and creating security risks. A comprehensive modernization project was undertaken to transform their identity management systems.",
        keyProblems: [
          "Aging directory systems causing frequent login delays and user frustration",
          "Security vulnerabilities in legacy authentication mechanisms",
          "High volume of access-related support tickets overwhelming IT staff",
          "Inefficient user provisioning and de-provisioning processes",
          "Lack of centralized access control and policy management",
          "High maintenance costs for legacy systems",
        ],
        solutionDetails: [
          "Infrastructure Assessment: Comprehensive analysis of existing AD environment and dependencies",
          "Phased Migration Strategy: Implemented parallel deployment to ensure zero downtime",
          "Modern Authentication: Deployed multi-factor authentication and single sign-on solutions",
          "Centralized Management: Created unified access control policies and automated workflows",
          "Security Enhancements: Implemented advanced threat protection and monitoring",
          "User Training: Provided comprehensive training for IT staff and end users",
          "Performance Optimization: Tuned systems for optimal performance and reliability",
        ],
        implementation:
          "The modernization project was executed in carefully planned phases over 8 months, with extensive testing and validation at each stage to ensure business continuity.",
        outcomes: [
          "Dramatic Support Reduction: 45% decrease in access-related support tickets",
          "Zero Downtime Migration: Seamless transition without business interruption",
          "Significant Cost Savings: 35% reduction in maintenance and licensing expenses",
          "Enhanced Security Posture: Improved authentication and access controls",
          "Improved User Experience: Faster login times and streamlined access processes",
          "Operational Efficiency: Automated provisioning and centralized management",
        ],
        technologies: [
          "Active Directory",
          "Multi-Factor Authentication",
          "Single Sign-On",
          "Identity Management",
          "Security Monitoring",
          "Automation Tools",
        ],
        timeline: "8 months",
        teamSize: "12+ identity specialists",
      },
    },
  },
  {
    id: "media",
    name: "Media & Entertainment",
    description: "Scalable solutions for media companies and entertainment platforms",
    image: "/placeholder.svg?height=400&width=600&text=Media+Solutions",
    color: "from-purple-600 to-purple-400",
    challenges: [
      "High AD-related ticket volumes",
      "Patching delays and inconsistencies",
      "Lack of proactive monitoring",
      "Service reliability issues",
      "VIP support requirements",
    ],
    solutions: [
      "Standardized AD operations",
      "Automated patching systems",
      "24/7 monitoring and health checks",
      "VIP support channels",
      "Proactive issue detection",
    ],
    caseStudy: {
      client: "Universal Music Group (UMG)",
      industry: "Media & Entertainment",
      title: "UMG AD Services: Enhancing Operational Efficiency",
      focus: "Active Directory optimization and automated operations",
      challenge:
        "High AD-related ticket volumes, patching delays, and lack of monitoring hampered service reliability and VIP support capabilities.",
      solution:
        "Standardized AD operations, implemented automated monthly patching, comprehensive health checks, and established 24/7 VIP support channels with proactive monitoring.",
      results:
        "Achieved 42% reduction in resolution time, 100% patch compliance, and implemented proactive issue detection with auto-remediation capabilities.",
      logo: "/placeholder.svg?height=60&width=120&text=Universal+Music",
      metrics: [
        { label: "Resolution Time", value: "-42%" },
        { label: "Patch Compliance", value: "100%" },
        { label: "Proactive Detection", value: "Auto" },
        { label: "VIP Support", value: "24/7" },
      ],
      fullCaseStudy: {
        overview:
          "Universal Music Group required a comprehensive overhaul of their Active Directory services to support their global operations and high-profile artist management needs.",
        keyProblems: [
          "Overwhelming volume of AD-related support tickets affecting productivity",
          "Inconsistent and delayed security patching creating vulnerabilities",
          "Lack of proactive monitoring leading to reactive problem-solving",
          "Insufficient support for VIP users and time-sensitive operations",
          "Manual processes causing delays in issue resolution",
          "Limited visibility into system health and performance",
        ],
        solutionDetails: [
          "Operations Standardization: Implemented standardized procedures for all AD operations",
          "Automated Patching: Deployed automated monthly patching with testing and rollback capabilities",
          "Health Monitoring: Created comprehensive health check systems with real-time alerts",
          "VIP Support Infrastructure: Established dedicated 24/7 support channels for critical users",
          "Proactive Detection: Implemented AI-driven issue detection and auto-remediation",
          "Performance Optimization: Tuned AD infrastructure for optimal global performance",
          "Documentation and Training: Created comprehensive documentation and training programs",
        ],
        implementation:
          "The transformation was implemented over 6 months with careful attention to maintaining service levels for UMG's global operations and high-profile clients.",
        outcomes: [
          "Faster Resolution: 42% reduction in average ticket resolution time",
          "Perfect Compliance: Achieved 100% patch compliance with automated systems",
          "Proactive Operations: Implemented auto-remediation for common issues",
          "Enhanced VIP Support: 24/7 dedicated support for critical operations",
          "Improved Reliability: Significant reduction in system outages and issues",
          "Operational Excellence: Standardized processes and improved efficiency",
        ],
        technologies: [
          "Active Directory",
          "Automated Patching Systems",
          "Monitoring Tools",
          "AI-driven Analytics",
          "Support Platforms",
          "Performance Optimization",
        ],
        timeline: "6 months",
        teamSize: "18+ AD specialists",
      },
    },
  },
  {
    id: "digital-library",
    name: "Digital Library & Media Services",
    description: "Cloud-native solutions for digital libraries and media services",
    image: "/placeholder.svg?height=400&width=600&text=Digital+Library+Solutions",
    color: "from-emerald-600 to-emerald-400",
    challenges: [
      "Complex infrastructure transitions",
      "Multiple ownership changes",
      "Service availability threats",
      "Global user base demands",
      "System performance optimization",
    ],
    solutions: [
      "Robust DevOps pipelines",
      "Azure cloud integration",
      "Automated monitoring systems",
      "SQL performance tuning",
      "Service modernization",
    ],
    caseStudy: {
      client: "OCLC (CloudLibrary)",
      industry: "Digital Library / Media Services",
      title: "CloudLibrary – Powering a Global Digital Library Ecosystem",
      focus: "DevOps and cloud management for global digital library platform",
      challenge:
        "Complex infrastructure transitions during multiple ownership changes threatened service availability for millions of global users accessing digital library resources.",
      solution:
        "Implemented robust DevOps pipelines with Azure cloud integration, automated monitoring, SQL performance tuning, and Reaktor service modernization to ensure continuous service delivery.",
      results:
        "Maintained 15+ years of uninterrupted global service, achieved seamless transitions across three parent companies, and optimized cloud cost and system performance.",
      logo: "/placeholder.svg?height=60&width=120&text=OCLC+CloudLibrary",
      metrics: [
        { label: "Service Uptime", value: "15+ Years" },
        { label: "Company Transitions", value: "3 Seamless" },
        { label: "Global Users", value: "Millions" },
        { label: "Performance", value: "Optimized" },
      ],
      fullCaseStudy: {
        overview:
          "OCLC's CloudLibrary platform serves millions of users worldwide, providing digital library services that require absolute reliability and performance despite complex corporate transitions.",
        keyProblems: [
          "Multiple ownership changes creating infrastructure instability",
          "Risk of service disruption for millions of global library users",
          "Complex legacy systems requiring modernization",
          "Need for scalable cloud infrastructure to handle global demand",
          "Performance optimization requirements for large-scale operations",
          "Cost optimization while maintaining service quality",
        ],
        solutionDetails: [
          "DevOps Pipeline Implementation: Created robust CI/CD pipelines for reliable deployments",
          "Azure Cloud Migration: Migrated infrastructure to scalable Azure cloud environment",
          "Automated Monitoring: Deployed comprehensive monitoring and alerting systems",
          "Database Optimization: Implemented SQL performance tuning and optimization",
          "Service Modernization: Modernized Reaktor services for improved performance",
          "Cost Optimization: Implemented cloud cost management and optimization strategies",
          "Disaster Recovery: Established comprehensive backup and recovery procedures",
        ],
        implementation:
          "The modernization project spanned multiple years, carefully managing transitions during ownership changes while maintaining continuous service for global users.",
        outcomes: [
          "Uninterrupted Service: Maintained 15+ years of continuous global service availability",
          "Seamless Transitions: Successfully navigated three different parent company changes",
          "Global Scale: Continued serving millions of users without service degradation",
          "Performance Optimization: Achieved significant improvements in system performance",
          "Cost Efficiency: Optimized cloud costs while improving service capabilities",
          "Modern Infrastructure: Established scalable, maintainable cloud-native architecture",
        ],
        technologies: [
          "Azure Cloud Services",
          "DevOps Pipelines",
          "SQL Server",
          "Monitoring Systems",
          "Reaktor Services",
          "CI/CD Tools",
        ],
        timeline: "Ongoing 15+ years",
        teamSize: "20+ cloud specialists",
      },
    },
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Healthcare",
    description: "Innovative solutions for manufacturing and healthcare safety products",
    image: "/placeholder.svg?height=400&width=600&text=Manufacturing+Solutions",
    color: "from-amber-600 to-amber-400",
    challenges: [
      "Widespread product counterfeiting",
      "Supply chain security threats",
      "Public safety concerns",
      "Brand trust protection",
      "Real-time authentication needs",
    ],
    solutions: [
      "Anti-counterfeit technology systems",
      "Encrypted QR code authentication",
      "Azure-hosted verification backend",
      "Real-time validation portals",
      "Supply chain tracking",
    ],
    caseStudy: {
      client: "3M",
      industry: "Manufacturing / Healthcare / Safety Products",
      title: "3M SafeGuard – AntiCounterfeiting System for N95 Masks",
      focus: "Anti-counterfeit system for critical safety products",
      challenge:
        "Widespread counterfeiting of N95 masks during COVID-19 threatened public safety and brand trust, requiring immediate action to protect healthcare workers and consumers.",
      solution:
        "Developed a hybrid system with encrypted QR code labels, Azure-hosted verification backend, and real-time validation through a public portal to ensure product authenticity.",
      results:
        "Enabled real-time product authentication across the supply chain, prevented counterfeit mask distribution, and secured trust among hospitals, distributors, and regulators.",
      logo: "/placeholder.svg?height=60&width=120&text=3M",
      metrics: [
        { label: "Authentication", value: "Real-time" },
        { label: "Counterfeit Prevention", value: "100%" },
        { label: "Supply Chain", value: "Secured" },
        { label: "Trust", value: "Restored" },
      ],
      fullCaseStudy: {
        overview:
          "During the COVID-19 pandemic, 3M faced a critical challenge with widespread counterfeiting of their N95 masks, threatening public safety and requiring an immediate, comprehensive anti-counterfeit solution.",
        keyProblems: [
          "Massive increase in counterfeit N95 masks during COVID-19 pandemic",
          "Threat to public safety from substandard counterfeit products",
          "Damage to 3M brand trust and reputation",
          "Need for immediate solution to protect healthcare workers",
          "Complex supply chain requiring authentication at multiple points",
          "Regulatory pressure to ensure product authenticity",
        ],
        solutionDetails: [
          "QR Code System: Implemented encrypted QR code labels on all authentic products",
          "Azure Backend: Deployed scalable Azure-hosted verification infrastructure",
          "Public Portal: Created user-friendly public verification portal",
          "Supply Chain Integration: Integrated authentication throughout the supply chain",
          "Real-time Validation: Enabled instant product authenticity verification",
          "Mobile Optimization: Ensured system works seamlessly on mobile devices",
          "Regulatory Compliance: Met all regulatory requirements for product authentication",
        ],
        implementation:
          "The SafeGuard system was rapidly deployed during the height of the pandemic, requiring accelerated development and deployment timelines to address the urgent public safety need.",
        outcomes: [
          "Real-time Authentication: Enabled instant verification of product authenticity",
          "Counterfeit Prevention: Successfully prevented distribution of counterfeit masks",
          "Public Safety: Protected healthcare workers and consumers from substandard products",
          "Brand Protection: Restored and maintained trust in 3M products",
          "Supply Chain Security: Secured entire supply chain from manufacturing to end user",
          "Regulatory Compliance: Met all government and regulatory requirements",
        ],
        technologies: [
          "QR Code Technology",
          "Azure Cloud Platform",
          "Encryption Systems",
          "Web Portals",
          "Mobile Applications",
          "Supply Chain Integration",
        ],
        timeline: "3 months (emergency deployment)",
        teamSize: "10+ security specialists",
      },
    },
  },
]

const CaseStudyModal = ({ caseStudy, isOpen, onClose }: { caseStudy: any, isOpen: boolean, onClose: () => void }) => {
  const is3M = caseStudy?.client === "3M";
  const isOCLC = caseStudy?.client === "OCLC (CloudLibrary)";
  const isUMG = caseStudy?.client === "Universal Music Group (UMG)";
  const isAAA = caseStudy?.client === "AAA (American Automobile Association)";
  const isHawaiianAirlines = caseStudy?.client === "Hawaiian Airlines";
  const isWesternDigital = caseStudy?.client === "Western Digital (SanDisk)";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800 pr-8">
            {is3M ? "Case Study: 3M SafeGuard – AntiCounterfeiting System for N95 Masks" : 
             isOCLC ? "Case Study: CloudLibrary – Powering a Global Digital Library Ecosystem" :
             isUMG ? "Case Study: Active Directory Services Excellence" :
             isAAA ? "Case Study: Active Directory Services Excellence" :
             isHawaiianAirlines ? "Case Study: Implementation of Electronic Flight Bag at Hawaiian Airlines" :
             isWesternDigital ? "Case Study: Western Digital Demerger Success: Streamlined Operational Separation and Optimization" :
             caseStudy.title}
          </DialogTitle>
          <div className="flex items-center gap-4 mt-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {caseStudy.client}
            </span>
            {is3M && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Partner: NathCorp
              </span>
            )}
            {isOCLC && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Partner: NathCorp
              </span>
            )}
            {isUMG && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Partner: NathCorp
              </span>
            )}
            {isAAA && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Partner: NathCorp
              </span>
            )}
            {isHawaiianAirlines && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Partner: NathCorp
              </span>
            )}
            {isWesternDigital && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Partner: NathCorp
              </span>
            )}
            <span className="text-slate-600">{caseStudy.industry}</span>
          </div>
        </DialogHeader>

        {is3M ? (
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Product Launch</h3>
              <p className="text-slate-700">2017</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Key Challenges</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Increasing counterfeit infiltration of popular 3M N95 masks—threatening user safety, brand integrity, and compliance.</li>
                <li>Absence of a reliable, decentralized authentication method at point of use.</li>
                <li>Need for scalable architecture supporting multi-site global manufacturing.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Objectives</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Enable instant code-based verification of product authenticity.</li>
                <li>Prevent counterfeit masks from entering supply chains.</li>
                <li>Centralize validation data for transparency and audits.</li>
                <li>Maintain robust, scalable operations across multiple production sites.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Solutions Implemented</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Factory-level Desktop App generated encrypted QR labels with LOT and secure AUTH codes; data stored locally in SQL Express.</li>
                <li>Windows Service &amp; SSIS pipeline encrypted, aggregated, and transferred label info to Azure Blob storage.</li>
                <li>Azure-hosted backend decrypted, validated, and stored data in Azure Table Storage.</li>
                <li>Public Verification Portal (<a href="https://safeguard.3m.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">safeguard.3m.com</a>) enabled user-initiated authentication.</li>
                <li>Multi-site encryption keys and Azure AD ensured high-level security.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Results &amp; Improvements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Real-time authenticity checks at multiple supply chain stages.</li>
                <li>Significant supply-chain traceability uplift and counterfeit interception.</li>
                <li>Centralized validation while maintaining local printing autonomy.</li>
                <li>Strengthened trust among distributors and regulators.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">ROI &amp; Operational Efficiency</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Reduction in losses related to counterfeit distribution.</li>
                <li>Faster, simpler validation workflow, lessening manual checks.</li>
                <li>Amplified value of existing manufacturing systems with digital label technology.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Unique or Standout Elements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Hybrid architecture: stateful desktop apps at factories + stateless Azure verification backend.</li>
                <li>Encryption and authentication: site-specific key pairs + Azure AD.</li>
                <li>Secure QR labels: LOT + AUTH code embedded in encrypted payload.</li>
                <li>Centralized but flexible infrastructure, supporting multiple factory rollouts.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Impact During COVID-19</h3>
              <p className="text-slate-700 mb-2">
                Though launched in 2017, SafeGuard proved invaluable during the COVID-19 crisis. A surge of counterfeit N95 masks caused significant health and operational challenges:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Over 10 million fake 3M N95 masks were seized in the U.S. in early 2021.</li>
                <li>Medical facilities unknowingly received and used counterfeit masks—impacting healthcare personnel safety.</li>
                <li>The influx of fake masks triggered large-scale recalls, operational disruption, and supply chain strain.</li>
                <li>SafeGuard enabled hospitals, distributors, and end users to immediately verify mask authenticity, preventing counterfeit penetration, protecting frontline workers, and preserving trust in 3M products.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Impact &amp; Why SafeGuard Became Indispensable</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>
                  <span className="font-semibold">Public Health Risk:</span> Counterfeit masks often failed basic filtration tests, compromising healthcare workers and giving a false sense of protection.
                </li>
                <li>
                  <span className="font-semibold">Supply Chain Exploitation:</span> Illicit distributors peddled fake masks through unauthorized channels, leading to hospitals unknowingly purchasing dangerous products.
                </li>
                <li>
                  <span className="font-semibold">Operational Disruption &amp; Cost:</span> Seizures and recalls of fake PPE forced hospitals to halt usage, test inventory, and reorder supplies—delaying protection and draining resources.
                </li>
                <li>
                  <span className="font-semibold">Regulatory &amp; Reputation Risk:</span> Counterfeiting waves prompted lawsuits and enforcement actions, with substantial legal and PR consequences for 3M and healthcare institutions.
                </li>
              </ul>
            </div>
            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Azure Cloud Services</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">SQL Server Express</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Windows Services</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">SSIS Pipeline</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Azure Blob Storage</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Azure Table Storage</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Azure AD</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">QR Code Generation</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Encryption</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Timeline</h4>
                <p className="text-slate-700">Product Launch: 2017</p>
                <p className="text-slate-700">Ongoing Support</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Team Size</h4>
                <p className="text-slate-700">15+ security specialists</p>
                <p className="text-slate-700">Multi-site deployment</p>
              </div>
            </div>
          </div>
        ) : isOCLC ? (
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Client &amp; Partner</h3>
              <p className="text-slate-700">Client: OCLC (originally 3M → Bibliotheca)</p>
              <p className="text-slate-700">Partner: NathCorp</p>
              <p className="text-slate-700">Engagement Duration: 2010 – Present (15+ years)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">🌍 Global Reach &amp; Adoption</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Nearly 500 libraries across 20 countries, serving millions of users in over 50 languages rely on CloudLibrary's unified digital collection ecosystem.</li>
                <li>CloudLibrary offers access to millions of ebooks and audiobooks, coupled with tens of thousands of magazines, newspapers, comics, manga, and streaming video.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">🎖️ Recognition &amp; Achievements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Awarded Platinum in the 2025 Modern Library Awards — a testament to user satisfaction and industry acclaim.</li>
                <li>As of April 2025, CloudLibrary is integrated with WorldCat, extending visibility and discoverability of digital library collections globally.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">📈 Content Diversity &amp; Accessibility</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Provides magazine and newspaper content from 9,800+ titles across 80 countries in 60 languages.</li>
                <li>Unlimited, simultaneous access to digital comics, manga, and videos through partnerships like Comics Plus and NewsStand — with no holds or waitlists.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">1. Key Challenges the Client Was Facing</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Managing a large-scale cloud-based eBook lending platform with complex, hybrid infrastructure (Linux, Windows, Reaktor-based services).</li>
                <li>Supporting seamless multi-platform deployment across geographies and libraries with millions of users.</li>
                <li>Orchestrating infrastructure transitions during ownership changes—from 3M to Bibliotheca to OCLC—without disrupting live services.</li>
                <li>Ensuring high availability, continuous performance optimization, and infrastructure modernization while avoiding costly downtime.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">2. Objectives We Aimed to Achieve</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Guarantee 24x7 operations and monitoring through resilient DevOps pipelines.</li>
                <li>Execute zero-downtime migrations between infrastructure stacks and organizational handovers.</li>
                <li>Maintain a robust, scalable, and secure platform through Azure-based architecture and multi-environment DevOps.</li>
                <li>Optimize legacy workloads and improve SQL/Node performance across global deployments.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">3. Solutions We Implemented</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Implemented an integrated DevOps and Azure cloud architecture, managing multiple layers of the application including Reaktor Nodes, Linux services, and Windows batch processes.</li>
                <li>SQL performance tuning and fault-tolerant data sync.</li>
                <li>Legacy component modernization.</li>
                <li>Managed seamless migrations across 3M → Bibliotheca → OCLC, without service interruptions.</li>
                <li>Delivered enterprise-grade infrastructure monitoring, with proactive alerting and auto-remediation pipelines.</li>
                <li>Standardized deployment, configuration, and access control protocols across multiple environments.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">4. Notable Results &amp; Improvements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>15+ years of uninterrupted live service, with zero critical outages during transitions.</li>
                <li>Optimized cloud utilization and cost through performance tuning and modern DevOps practices.</li>
                <li>Resolved SQL and Reaktor-related performance issues across deployment zones.</li>
                <li>Reduced downtime, maintenance effort, and manual interventions—dramatically improving operational efficiency.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">5. ROI &amp; Operational Impact</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Significant reduction in support overhead and platform fragility.</li>
                <li>Seamless DevOps practices enhanced platform scalability and agility.</li>
                <li>Long-term DevOps engagement increased customer trust across multiple vendor transitions.</li>
                <li>Improved overall reliability and delivery speed for new rollouts and patches.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">6. Unique or Standout Contributions</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Continuity through three corporate handovers—an exceptional example of vendor loyalty and operational consistency.</li>
                <li>Expertise in managing hybrid legacy + modern cloud stacks with customized Reaktor integration.</li>
                <li>Cross-platform support for Azure, Windows, Linux, and third-party modules under a single DevOps umbrella.</li>
                <li>Proactive fault resolution, backed by real-time alerting and telemetry.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">7. Global Impact of CloudLibrary</h3>
              <p className="text-slate-700 mb-2">
                CloudLibrary has emerged as one of the world's most widely adopted digital library platforms, and NathCorp has been instrumental in its success:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Deployed across 20+ countries and nearly 500 library systems, serving millions of global users.</li>
                <li>Offers millions of eBooks, audiobooks, magazines, and streaming content in 50+ languages.</li>
                <li>Supports 9,800+ periodical titles from 80+ countries through its NewsStand and Comics Plus integrations.</li>
                <li>Winner of the 2025 Modern Library Platinum Award for excellence in digital library services.</li>
                <li>Integrated with WorldCat, increasing digital discoverability for libraries worldwide.</li>
              </ul>
            </div>
            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Azure Cloud Services</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">DevOps Pipelines</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">SQL Server</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Monitoring Systems</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Reaktor Services</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">CI/CD Tools</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Timeline</h4>
                <p className="text-slate-700">Ongoing 15+ years</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Team Size</h4>
                <p className="text-slate-700">20+ cloud specialists</p>
              </div>
            </div>
          </div>
        ) : isUMG ? (
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Client Overview</h3>
              <p className="text-slate-700 mb-2">Client: Universal Music Group (UMG)</p>
              <p className="text-slate-700 mb-2">Industry: Media & Entertainment</p>
              <p className="text-slate-700">
                UMG, a global leader in music-based entertainment, operates a vast and complex IT environment supporting thousands of users across multiple regions. To maintain operational excellence and AD service continuity, UMG implemented a dedicated Active Directory Services project focusing on directory hygiene, service reliability, and security compliance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Key Challenges</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Ticket Volume & User Dependency: High volume of AD-related support tickets caused delays in account provisioning, access issues, and group management.</li>
                <li>Legacy Practices: Manual patching and inconsistent health checks increased vulnerability to downtime and security threats.</li>
                <li>Resource Constraints: Routine maintenance diverted IT staff from strategic projects, slowing innovation.</li>
                <li>Exchange Dependencies: Integration between AD and Exchange systems required precise coordination to avoid service disruptions.</li>
                <li>Delays in resolving issues for special users such as VIPs, executives, and higher management, including CEOs.</li>
                <li>Absence of daily monitoring or structured health check processes.</li>
                <li>Increased exposure due to unpatched or misconfigured servers, leading to server vulnerabilities.</li>
                <li>Lack of 24x7 support coverage, especially during weekends, resulting in prolonged issue resolution windows.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Objectives</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Streamline and standardize Active Directory operations including user lifecycle management and group policy administration.</li>
                <li>Automate and enforce monthly patching cycles to mitigate vulnerabilities.</li>
                <li>Provide daily health checks to ensure proactive detection of anomalies.</li>
                <li>Improve customer experience by accelerating resolution time for AD-related incidents.</li>
                <li>Support Exchange operations such as mailbox provisioning, address book sync, and service integration.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Solutions Implemented</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Active Directory Management</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Implemented standardized user onboarding/offboarding workflows.</li>
                    <li>Enabled group-based access control and automated group membership management.</li>
                    <li>Delegated role-based access to improve admin efficiency and reduce dependency bottlenecks.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Monthly Server Patching</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Developed and executed a structured AD patch management schedule.</li>
                    <li>Used WSUS and PowerShell automation for scheduled and verified patch rollouts.</li>
                    <li>Conducted regression testing in isolated environments before deployment.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Daily Health Checks</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Scripted automated health monitoring (DC replication, DNS status, sysvol, etc.).</li>
                    <li>Generated real-time reports and alerts for AD anomalies and service disruptions.</li>
                    <li>Integrated logs into centralized SIEM tools for visibility and auditability.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Exchange Management</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Handled mailbox provisioning/de-provisioning, shared mailbox delegation, and DL sync.</li>
                    <li>Coordinated with the Messaging team for transport rule changes and Exchange Online hygiene.</li>
                    <li>Assisted with license mapping and AD-Exchange sync validations.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Ticket & User Support</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Designed knowledge base articles to deflect repetitive queries.</li>
                    <li>Implemented SLA-backed incident workflows via ServiceNow for faster turnaround.</li>
                    <li>Conducted regular training sessions for deskside and regional IT teams.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">VIP User Support</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Created a dedicated support track for VIPs and high-ranking officials to ensure prioritized handling of incidents and requests.</li>
                    <li>Reduced the response time for the VIP user's escalations to couple of minutes.</li>
                    <li>Implemented SLA-based ticket routing rules in ServiceNow for escalated visibility and resolution tracking.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Daily Monitoring</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Established a daily checklist system for verifying domain controller replication, DNS integrity, time sync, and service availability.</li>
                    <li>Automated daily reporting with alert-based escalation for critical AD components.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Server Vulnerability Management</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Introduced vulnerability scanning tools to proactively identify configuration gaps and unpatched systems.</li>
                    <li>Applied hardening baselines and integrated results with patch compliance reporting.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">24x7 Support Enablement</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Transitioned to a follow-the-sun support model ensuring round-the-clock coverage.</li>
                    <li>Weekend and off-hour shifts for critical incident handling and preventive monitoring.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Results & Improvements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>42% reduction in AD-related ticket resolution time.</li>
                <li>100% patch compliance across all domain controllers.</li>
                <li>Enhanced security posture through timely patching and audit reporting.</li>
                <li>Proactive issue resolution using daily health reports, preventing major outages.</li>
                <li>Improved user satisfaction from faster access provisioning and issue resolution.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Standout Elements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Automation-Driven Patching: Monthly patching with automated compliance verification reduced risk and admin overhead.</li>
                <li>Self-Healing Scripts: Health checks linked with auto-remediation scripts minimized manual interventions.</li>
                <li>Seamless Exchange Integration: Tight coordination between AD and Exchange ensured end-user continuity.</li>
                <li>Maintained the users information updated in Hybrid AD environment.</li>
                <li>User-Centric Support: Standardized knowledge and incident response accelerated user satisfaction and reduced backlog.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Client Testimonial</h3>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-700">
                "The AD Services framework deployed has significantly enhanced our AD stability and operational efficiency. What used to take hours is now resolved in minutes, allowing us to focus more on innovation." – IT Ops Lead, UMG
              </blockquote>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Conclusion & Next Steps</h3>
              <p className="text-slate-700 mb-2">
                Through a structured AD Services initiative, UMG strengthened its core infrastructure, reduced support overhead, and improved system reliability. Future plans include:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>For over seven years, we have been delivering unwavering, high-caliber support distinguished by consistency, precision, and operational excellence.</li>
                <li>Integrating AI-driven predictive maintenance to detect anomalies before failures occur.</li>
                <li>Extending AD automation to hybrid Azure environments.</li>
                <li>Continuous patching optimization with machine learning insights for vulnerability prioritization.</li>
              </ul>
            </div>
            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Active Directory</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Exchange Online</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">WSUS</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">PowerShell</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">ServiceNow</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">SIEM Tools</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Vulnerability Scanning</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Automated Monitoring</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Timeline</h4>
                <p className="text-slate-700">7+ years ongoing</p>
                <p className="text-slate-700">Continuous support</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Team Size</h4>
                <p className="text-slate-700">18+ AD specialists</p>
                <p className="text-slate-700">24x7 support coverage</p>
              </div>
            </div>
          </div>
        ) : isAAA ? (
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Client Overview</h3>
              <p className="text-slate-700 mb-2">Client: AAA (American Automobile Association)</p>
              <p className="text-slate-700 mb-2">Industry: Automotive / Travel Services</p>
              <p className="text-slate-700">
                AAA, a leading automotive and travel services organization, operates a complex IT environment supporting thousands of employees and members across multiple regions. To maintain operational excellence and AD service continuity, AAA implemented a dedicated Active Directory Services project focusing on directory hygiene, service reliability, and security compliance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Key Challenges</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Ticket Volume & User Dependency: High volume of AD-related support tickets caused delays in account provisioning, access issues, and group management.</li>
                <li>Legacy Practices: Manual patching and inconsistent health checks increased vulnerability to downtime and security threats.</li>
                <li>Resource Constraints: Routine maintenance diverted IT staff from strategic projects, slowing innovation.</li>
                <li>Exchange Dependencies: Integration between AD and Exchange systems required precise coordination to avoid service disruptions.</li>
                <li>Delays in resolving issues for special users such as VIPs, executives, and higher management, including CEOs.</li>
                <li>Absence of daily monitoring or structured health check processes.</li>
                <li>Increased exposure due to unpatched or misconfigured servers, leading to server vulnerabilities.</li>
                <li>Lack of 24x7 support coverage, especially during weekends, resulting in prolonged issue resolution windows.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Objectives</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Streamline and standardize Active Directory operations including user lifecycle management and group policy administration.</li>
                <li>Automate and enforce monthly patching cycles to mitigate vulnerabilities.</li>
                <li>Provide daily health checks to ensure proactive detection of anomalies.</li>
                <li>Improve customer experience by accelerating resolution time for AD-related incidents.</li>
                <li>Support Exchange operations such as mailbox provisioning, address book sync, and service integration.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Solutions Implemented</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Active Directory Management</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Implemented standardized user onboarding/offboarding workflows.</li>
                    <li>Enabled group-based access control and automated group membership management.</li>
                    <li>Delegated role-based access to improve admin efficiency and reduce dependency bottlenecks.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Monthly Server Patching</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Developed and executed a structured AD patch management schedule.</li>
                    <li>Used WSUS and PowerShell automation for scheduled and verified patch rollouts.</li>
                    <li>Conducted regression testing in isolated environments before deployment.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Daily Health Checks</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Scripted automated health monitoring (DC replication, DNS status, sysvol, etc.).</li>
                    <li>Generated real-time reports and alerts for AD anomalies and service disruptions.</li>
                    <li>Integrated logs into centralized SIEM tools for visibility and auditability.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Exchange Management</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Handled mailbox provisioning/de-provisioning, shared mailbox delegation, and DL sync.</li>
                    <li>Coordinated with the Messaging team for transport rule changes and Exchange Online hygiene.</li>
                    <li>Assisted with license mapping and AD-Exchange sync validations.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Ticket & User Support</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Designed knowledge base articles to deflect repetitive queries.</li>
                    <li>Implemented SLA-backed incident workflows via ServiceNow for faster turnaround.</li>
                    <li>Conducted regular training sessions for deskside and regional IT teams.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">VIP User Support</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Created a dedicated support track for VIPs and high-ranking officials to ensure prioritized handling of incidents and requests.</li>
                    <li>Reduced the response time for the VIP user's escalations to couple of minutes.</li>
                    <li>Implemented SLA-based ticket routing rules in ServiceNow for escalated visibility and resolution tracking.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Daily Monitoring</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Established a daily checklist system for verifying domain controller replication, DNS integrity, time sync, and service availability.</li>
                    <li>Automated daily reporting with alert-based escalation for critical AD components.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Server Vulnerability Management</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Introduced vulnerability scanning tools to proactively identify configuration gaps and unpatched systems.</li>
                    <li>Applied hardening baselines and integrated results with patch compliance reporting.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">24x7 Support Enablement</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Transitioned to a follow-the-sun support model ensuring round-the-clock coverage.</li>
                    <li>Weekend and off-hour shifts for critical incident handling and preventive monitoring.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Results & Improvements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>45% reduction in AD-related ticket resolution time.</li>
                <li>100% patch compliance across all domain controllers.</li>
                <li>Enhanced security posture through timely patching and audit reporting.</li>
                <li>Proactive issue resolution using daily health reports, preventing major outages.</li>
                <li>Improved user satisfaction from faster access provisioning and issue resolution.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Standout Elements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Automation-Driven Patching: Monthly patching with automated compliance verification reduced risk and admin overhead.</li>
                <li>Self-Healing Scripts: Health checks linked with auto-remediation scripts minimized manual interventions.</li>
                <li>Seamless Exchange Integration: Tight coordination between AD and Exchange ensured end-user continuity.</li>
                <li>Maintained the users information updated in Hybrid AD environment.</li>
                <li>User-Centric Support: Standardized knowledge and incident response accelerated user satisfaction and reduced backlog.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Client Testimonial</h3>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-700">
                "The AD Services framework deployed has significantly enhanced our AD stability and operational efficiency. What used to take hours is now resolved in minutes, allowing us to focus more on innovation." – IT Ops Lead, AAA
              </blockquote>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Conclusion & Next Steps</h3>
              <p className="text-slate-700 mb-2">
                Through a structured AD Services initiative, AAA strengthened its core infrastructure, reduced support overhead, and improved system reliability. Future plans include:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>For over seven years, we have been delivering unwavering, high-caliber support distinguished by consistency, precision, and operational excellence.</li>
                <li>Integrating AI-driven predictive maintenance to detect anomalies before failures occur.</li>
                <li>Extending AD automation to hybrid Azure environments.</li>
                <li>Continuous patching optimization with machine learning insights for vulnerability prioritization.</li>
              </ul>
            </div>
            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Active Directory</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Exchange Online</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">WSUS</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">PowerShell</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">ServiceNow</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">SIEM Tools</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Vulnerability Scanning</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Automated Monitoring</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Timeline</h4>
                <p className="text-slate-700">7+ years ongoing</p>
                <p className="text-slate-700">Continuous support</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Team Size</h4>
                <p className="text-slate-700">12+ AD specialists</p>
                <p className="text-slate-700">24x7 support coverage</p>
              </div>
            </div>
          </div>
        ) : isHawaiianAirlines ? (
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Client Overview</h3>
              <p className="text-slate-700 mb-2">Client: Hawaiian Airlines, Inc.</p>
              <p className="text-slate-700 mb-2">Industry: Aviation / Commercial Airlines</p>
              <p className="text-slate-700">
                Hawaiian Airlines, Inc. is a leading commercial U.S. airline headquartered in Honolulu and a subsidiary of the Alaska Air Group. As the largest operator of commercial flights to and from the state of Hawaii, it ranks as the tenth largest airline in the United States by passenger volume.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Key Challenges</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">In-flight Manuals Challenges</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Heavy, paper-based manual set – approx. 10lbs per FA, average (8) FA's / flight = 80lbs of added weight per flight</li>
                    <li>No mechanism to confirm ALL FA's update manuals and read bulletins</li>
                    <li>Updates are distributed on paper</li>
                    <li>FAA inspectors can spot-check at any time for current manual sets</li>
                    <li>Leverage current file investments, software portfolio and established processes to optimize cost and reduce risk</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Crew Communication Challenges</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Crew communication was primarily conducted via phone calls or manual, which were often inconsistent, time-consuming, and prone to errors</li>
                    <li>Common issues included:</li>
                    <li>Uncertainty about whether the right person was contacted</li>
                    <li>Lack of confirmation that the message was received and understood</li>
                    <li>During delays or re-crewing situations, poor communication led to unnecessary costs</li>
                    <li>Hawaiian Airlines was exploring alternatives such as a tablet-based crew scheduling application, which could significantly improve communication efficiency and reduce operational disruptions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Objectives</h3>
              <p className="text-slate-700 mb-2">
                To modernize Hawaiian Airlines' flight operations by implementing a secure, scalable, and fully digital Electronic Flight Bag (EFB) ecosystem—aimed at replacing paper-based manuals, streamlining crew communication, enhancing regulatory compliance, and improving operational efficiency through centralized device management, real-time content delivery, and cloud integration.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Solutions Implemented</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Overview</h4>
                  <p className="text-slate-700 mb-2">
                    Hawaiian Airlines deployed a comprehensive mobile and digital cockpit architecture to modernize flight operations, improve document accessibility, and enforce security compliance through the CID (Cockpit Information Display) and PID (Personal Information Device) ecosystems. These implementations are tightly integrated with secure infrastructure, content delivery systems, and centralized endpoint/device management.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">CID (Cockpit Information Display)</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Secure Access & Identity</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>Devices are safely connected to Hawaiian Airlines' internal systems, allowing only authorized staff to log in</li>
                        <li>A cloud-based system ensures seamless sign-in whether on the ground or in the air</li>
                        <li>Device policies and security are managed remotely for protection and compliance</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Device Management</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>All tablets are automatically updated with the latest apps, manuals, and company policies</li>
                        <li>Software tools help keep the devices secure and running smoothly</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Built-in Security</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>All communications are encrypted and verified</li>
                        <li>Remote access is available for staff working outside the airline network</li>
                        <li>Communications through Skype for Business are controlled to meet regulatory standards</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Flight-Ready Integration</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>Tablets connect with onboard aircraft systems like navigation and performance data tools</li>
                        <li>Apps like LIDO and OpsTablet help with flight planning and procedures</li>
                        <li>A monitoring tool tracks device status to ensure everything is working properly</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Manual Distribution</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>Flight manuals and important updates are delivered automatically to each tablet using secure internet connections or local file sharing</li>
                        <li>Devices use a sync app to download the latest content as soon as it's available</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Future Expansion</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>Dashboards and web portals give managers real-time visibility into device performance</li>
                        <li>The system is being upgraded to move more services into the cloud</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">PID (Personal Information Device)</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Purpose-Built Devices</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>Tablets are tailored for cockpit use, providing quick access to flight plans, procedures, and manuals</li>
                        <li>Devices are registered and managed through Hawaiian Airlines' secure systems</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Essential Apps</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>NCSync: Downloads updated flight documents and manuals</li>
                        <li>LastPass: Securely stores login credentials</li>
                        <li>EFB Monitor: Tracks the health and sync status of the tablet</li>
                        <li>Intune: Ensures each device follows company rules and security settings</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Smart Content Delivery</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>Tablets connect to Hawaiian Airlines' network using secure cloud and internal systems</li>
                        <li>Flight materials are hosted on platforms like SharePoint and Rackspace</li>
                        <li>All device activities and logs are tracked for support and accountability</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Reliable Communication & Security</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>Encrypted internet connections (HTTPS) ensure all data is protected</li>
                        <li>Security tools verify the device and user identity</li>
                        <li>The system supports secure remote access for pilots even when away from base</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Core Technologies and Tools Used</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Tool / Technology</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>Microsoft Entra AD</li>
                        <li>Intune</li>
                        <li>NCSync</li>
                        <li>SharePoint / Rackspace</li>
                        <li>LIDO, OpsTablet</li>
                        <li>EFB Monitoring Service</li>
                        <li>LastPass</li>
                        <li>Skype for Business</li>
                        <li>DirectAccess</li>
                        <li>Certificate Authority</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-1">Purpose</h5>
                      <ul className="list-disc pl-6 text-slate-700 space-y-1">
                        <li>Identity and device access management</li>
                        <li>Mobile device and application security</li>
                        <li>Syncs manuals, updates, and data across devices</li>
                        <li>Hosts flight manuals and training content</li>
                        <li>Flight operations and planning tools</li>
                        <li>Tracks health and compliance of onboard devices</li>
                        <li>Secure password and identity management for pilots</li>
                        <li>Crew communication with compliance monitoring</li>
                        <li>Enables secure offsite access</li>
                        <li>Ensures secure and authenticated communication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Results & Improvements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Replaced paper manuals with digital tablets, reducing aircraft weight by ~120 lbs per flight and improving fuel efficiency</li>
                <li>Pilots access up-to-date digital content without carrying heavy paper manuals</li>
                <li>Automated distribution of manuals, bulletins, and updates, ensuring timely and consistent access to the latest operational content</li>
                <li>Enabled confirmation tracking for bulletins and manuals, improving audit readiness and regulatory compliance</li>
                <li>Unified platform for pilots and cabin crew using the same electronic manual application (PIDs and CIDs)</li>
                <li>Enhanced user experience through intuitive interfaces, searchable content, and prioritized procedure access</li>
                <li>Eliminated printing and distribution costs, resulting in significant long-term savings</li>
                <li>Digitized training programs, offering online modules to reduce classroom scheduling pressure and improve training flexibility</li>
                <li>Centralized device and app management, enabling remote updates, security enforcement, and policy compliance via Intune</li>
                <li>Strengthened data security with encrypted communications, identity verification, and secure access controls</li>
                <li>Real-time crew communication through integrated email and messaging tools, reducing reliance on manual or paper-based methods</li>
                <li>Improved crew scheduling and re-crew coordination, reducing delays and preventing duplicate staffing costs</li>
                <li>Enhanced monitoring capabilities with tools that track device health, update status, and usage analytics</li>
                <li>Positioned for future scalability through planned cloud migration and continuous system upgrades</li>
                <li>Airline staff can monitor and support the devices from anywhere</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">ROI & Operational Efficiency</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Return on Investment (ROI)</h4>
                  <p className="text-slate-700 mb-2">
                    The implementation of the EFB program delivered substantial cost savings and operational benefits for Hawaiian Airlines, resulting in a strong return on investment:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Fuel Cost Savings: Eliminating approximately 120 lbs. of paper manuals per flight led to significant fuel efficiency improvements across hundreds of daily flights, translating into substantial annual fuel cost savings</li>
                    <li>Printing & Distribution Savings: Transitioning from printed manuals to digital distribution eliminated recurring expenses associated with printing, binding, and physically distributing thousands of pages of content to crew members</li>
                    <li>Training Cost Reduction: Online training modules reduced dependency on on-site classroom sessions, lowering costs related to travel, lodging, and scheduling logistics for over 7,000 employees</li>
                    <li>Compliance Cost Avoidance: Automated content updates and audit trails minimized regulatory compliance risks and reduced the potential cost of fines or penalties from failed FAA inspections</li>
                    <li>IT Scalability: Leveraging existing Microsoft 365 and Azure investments (e.g., Intune, Entra AD, SharePoint) avoided the need for new infrastructure spend, increasing ROI through integration and reuse of licensed tools</li>
                    <li>Labor Optimization: Improved communication tools and re-crew coordination decreased unnecessary crew payments and reduced administrative overhead</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Operational Efficiency</h4>
                  <p className="text-slate-700 mb-2">
                    The digital modernization of flight operations through the EFB initiative significantly enhanced Hawaiian Airlines' operational efficiency:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Weight Reduction: Removing paper manuals reduced aircraft weight, directly improving fuel efficiency and reducing environmental impact</li>
                    <li>Real-Time Communication: Integrated communication tools enabled faster, more accurate crew coordination, reducing delays and miscommunications</li>
                    <li>Automated Content Delivery: Instant updates to flight manuals and bulletins ensured all crew had the most current information, increasing safety and compliance readiness</li>
                    <li>Remote Management: Centralized device and application management enabled IT teams to push updates, enforce security, and resolve issues remotely, reducing downtime</li>
                    <li>Device Health Monitoring: Tools like EFB Monitor provided real-time insights into device status, helping proactively address potential disruptions</li>
                    <li>Training Flexibility: Online training delivery allowed for more flexible scheduling, reducing the strain on training facilities and staff availability</li>
                    <li>Standardized Systems: Unified platforms for both pilots and flight attendants created consistency in user experience and reduced support and onboarding time</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Standout Elements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Significant Fuel & Cost Savings through Weight Reduction: Replacing paper manuals with tablets saved ~120 lbs. per flight, leading to measurable improvements in fuel efficiency across the fleet</li>
                <li>End-to-End Digitalization of Crew Operations: Unified tablets for both flight attendants (CID) and pilots (PID) created a streamlined, paperless operational model, replacing outdated manual processes like phone calls and paper notes</li>
                <li>Enterprise-Grade Security & Compliance: Integrated Microsoft Intune, Entra AD, and Certificate Authority for identity, access, and device compliance, ensuring FAA compliance and reduced regulatory risk with real-time auditability</li>
                <li>Seamless Content & Update Management: Auto-sync of manuals, bulletins, and flight data using NCSync, SharePoint, and Rackspace, eliminating manual tracking and ensuring timely content delivery to all crew members</li>
                <li>Real-Time Device Monitoring & Remote Management: Tools like EFB Monitor provided live insights into device health, update status, and usage, enabling IT teams to support, troubleshoot, and update devices remotely—on ground or in air</li>
                <li>Smarter, More Flexible Training Ecosystem: Shifted from classroom-only to hybrid/online training, reducing scheduling pressure and logistical challenges for a large, distributed crew</li>
                <li>Future-Ready, Cloud-Integrated Architecture: Positioned for future scalability by moving services to the cloud, with real-time dashboards and secure remote access enhancing operational control</li>
                <li>Improved Crew Communication & Coordination: Integrated tools like Skype for Business and messaging apps enabled instant, trackable communication, reducing errors, miscommunication, and redundant crew scheduling</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Conclusion & Next Steps</h3>
              <p className="text-slate-700 mb-2">
                The successful deployment of the Electronic Flight Bag (EFB) solution at Hawaiian Airlines marks a significant milestone in the airline's digital transformation journey. By replacing cumbersome paper-based manuals with secure, cloud-connected tablets (CIDs and PIDs), Hawaiian Airlines has enhanced operational efficiency, reduced costs, and improved compliance with regulatory standards. The integrated mobile ecosystem not only streamlined flight crew communications and training logistics but also introduced scalable, cloud-ready infrastructure for future innovation.
              </p>
              <p className="text-slate-700 mb-2">
                With centralized device management, encrypted data access, and real-time content synchronization, the solution has empowered both flight attendants and pilots to operate more effectively—on the ground and in the air. Enhanced crew coordination, digital content delivery, and secure remote access have translated into measurable fuel savings, improved scheduling accuracy, and superior crew experience.
              </p>
              <p className="text-slate-700">
                This transformation underscores Hawaiian Airlines' commitment to operational excellence, safety, and technological leadership in the aviation sector. The foundational work done through this project positions the airline for continued innovation and scalability in an increasingly digital aviation landscape.
              </p>
            </div>
            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Microsoft Entra AD</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Intune</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">NCSync</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">SharePoint</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Rackspace</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">LIDO</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OpsTablet</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">EFB Monitor</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">LastPass</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Skype for Business</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">DirectAccess</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Certificate Authority</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Timeline</h4>
                <p className="text-slate-700">12 months</p>
                <p className="text-slate-700">Phased deployment</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Team Size</h4>
                <p className="text-slate-700">15+ aviation specialists</p>
                <p className="text-slate-700">Fleet-wide deployment</p>
              </div>
            </div>
          </div>
        ) : isWesternDigital ? (
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Client Overview</h3>
              <p className="text-slate-700 mb-2">Client: Western Digital (SanDisk)</p>
              <p className="text-slate-700 mb-2">Industry: Technology / Data Storage</p>
              <p className="text-slate-700">
                Western Digital is a global leader in data storage solutions, with a strategic decision to separate its flash memory business (SanDisk) into an independent public company. This required a comprehensive digital transformation approach to ensure business continuity while creating two fully autonomous IT environments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Key Challenges</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Complete separation of integrated IT systems without operational disruption</li>
                <li>Maintaining data integrity across complex enterprise applications</li>
                <li>Ensuring security compliance during the transition period</li>
                <li>Creating independent identity and access management systems</li>
                <li>Establishing separate network infrastructures for both entities</li>
                <li>Managing complex data dependencies and application integrations</li>
                <li>Ensuring zero business disruption during the separation process</li>
                <li>Supporting the successful public offering of the separated entity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Objectives</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Create two fully autonomous IT environments for Western Digital and SanDisk</li>
                <li>Maintain 100% business continuity throughout the separation process</li>
                <li>Ensure data integrity and security during the transition</li>
                <li>Establish independent identity and access management systems</li>
                <li>Implement separate network infrastructures with appropriate security boundaries</li>
                <li>Support the successful public offering of the separated entity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Solutions Implemented</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Comprehensive IT Infrastructure Assessment</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Conducted detailed analysis of all systems, applications, and data dependencies</li>
                    <li>Mapped complex integrations and interdependencies between business units</li>
                    <li>Identified critical systems requiring special attention during separation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Phased Separation Strategy</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Implemented a carefully orchestrated timeline to minimize business impact</li>
                    <li>Created detailed project phases with specific milestones and deliverables</li>
                    <li>Established rollback procedures for each phase to ensure business continuity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Identity System Carve-out</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Created independent Active Directory environments with proper access controls</li>
                    <li>Established separate user management systems for both organizations</li>
                    <li>Implemented role-based access control (RBAC) for enhanced security</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Data Migration Automation</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Developed automated tools for secure data transfer and validation</li>
                    <li>Implemented data integrity checks and verification processes</li>
                    <li>Created comprehensive data mapping and transformation procedures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Network Segmentation</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Established separate network infrastructures with appropriate security boundaries</li>
                    <li>Implemented network isolation and segmentation strategies</li>
                    <li>Created secure communication channels between separated entities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Application Independence</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Ensured all business-critical applications could operate independently</li>
                    <li>Created application-specific separation strategies and procedures</li>
                    <li>Implemented application testing and validation frameworks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Security Framework Implementation</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Deployed comprehensive security measures for both organizations</li>
                    <li>Implemented enhanced monitoring and threat detection systems</li>
                    <li>Established security compliance frameworks for regulatory requirements</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Results & Improvements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Two Autonomous Companies: Successfully created independent IT environments for both Western Digital and the new SanDisk entity</li>
                <li>Zero Business Disruption: Maintained 100% operational continuity throughout the separation process</li>
                <li>Enhanced Security Posture: Implemented stronger security controls and monitoring for both organizations</li>
                <li>Streamlined Operations: Optimized IT processes and reduced operational complexity</li>
                <li>Successful IPO Support: Enabled the successful public offering of the separated entity</li>
                <li>Complete Data Integrity: Achieved 100% data migration with zero data loss</li>
                <li>Independent Operations: Both companies now operate with fully autonomous IT systems</li>
                <li>Regulatory Compliance: Ensured all separation activities met regulatory requirements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">ROI & Operational Efficiency</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Return on Investment (ROI)</h4>
                  <p className="text-slate-700 mb-2">
                    The Western Digital demerger project delivered significant value through successful business separation and operational optimization:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Successful IPO: Enabled the successful public offering of the separated SanDisk entity, creating significant shareholder value</li>
                    <li>Operational Cost Reduction: Streamlined IT operations and reduced complexity for both organizations</li>
                    <li>Risk Mitigation: Avoided potential business disruption costs through careful planning and execution</li>
                    <li>Regulatory Compliance: Prevented potential fines and penalties through proper separation procedures</li>
                    <li>Enhanced Security: Reduced security risks through proper system isolation and enhanced controls</li>
                    <li>Business Continuity: Maintained revenue streams and customer relationships throughout the process</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Operational Efficiency</h4>
                  <p className="text-slate-700 mb-2">
                    The demerger project significantly enhanced operational efficiency for both organizations:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Independent Operations: Both companies now operate with fully autonomous IT systems, reducing interdependencies</li>
                    <li>Streamlined Processes: Optimized IT processes and reduced operational complexity</li>
                    <li>Enhanced Security: Implemented stronger security controls and monitoring for both organizations</li>
                    <li>Improved Agility: Both companies can now make independent technology decisions</li>
                    <li>Reduced Risk: Eliminated shared system dependencies and potential single points of failure</li>
                    <li>Better Resource Allocation: Each company can optimize its IT resources independently</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Standout Elements</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Zero Business Disruption: Achieved complete separation without any operational downtime or business impact</li>
                <li>Complex System Separation: Successfully separated highly integrated enterprise systems and applications</li>
                <li>Data Integrity Excellence: Maintained 100% data integrity throughout the migration process</li>
                <li>Regulatory Compliance: Ensured all separation activities met strict regulatory requirements</li>
                <li>Automated Migration: Developed sophisticated automation tools for secure data transfer and validation</li>
                <li>Security Enhancement: Implemented stronger security controls and monitoring for both organizations</li>
                <li>Successful IPO Support: Enabled the successful public offering of the separated entity</li>
                <li>Independent Operations: Created two fully autonomous companies with separate IT environments</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Client Testimonial</h3>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-700">
                "The demerger project was executed flawlessly with zero business disruption. NathCorp's expertise in complex system separation and their meticulous planning ensured we could successfully separate our flash business while maintaining full operational continuity." – IT Director, Western Digital
              </blockquote>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Conclusion & Next Steps</h3>
              <p className="text-slate-700 mb-2">
                The successful completion of the Western Digital demerger project represents a landmark achievement in corporate IT separation. By creating two fully autonomous companies with independent IT environments, we enabled Western Digital to successfully separate its flash memory business (SanDisk) into an independent public company while maintaining 100% business continuity.
              </p>
              <p className="text-slate-700 mb-2">
                The project demonstrated the importance of meticulous planning, comprehensive system analysis, and careful execution in complex corporate separations. Both Western Digital and the new SanDisk entity now operate with enhanced security, streamlined operations, and the ability to make independent technology decisions.
              </p>
              <p className="text-slate-700">
                This successful demerger positions both companies for continued growth and innovation in their respective markets, with fully autonomous IT environments that support their unique business needs and strategic objectives.
              </p>
            </div>
            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Active Directory</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Azure Cloud Services</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Enterprise Security Tools</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Data Migration Platforms</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Network Infrastructure</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Identity Management Systems</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Automation Tools</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Compliance Frameworks</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Timeline</h4>
                <p className="text-slate-700">18 months</p>
                <p className="text-slate-700">Phased execution</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Team Size</h4>
                <p className="text-slate-700">25+ specialists</p>
                <p className="text-slate-700">Complex separation</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 mt-6">
            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Project Overview</h3>
              <p className="text-slate-700 leading-relaxed">{caseStudy.fullCaseStudy.overview}</p>
            </div>

            {/* Key Problems */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800 flex items-center">
                <Building2 className="h-5 w-5 text-red-600 mr-2" />
                Key Problems
              </h3>
              <ul className="space-y-2">
                {caseStudy.fullCaseStudy.keyProblems.map((problem: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-red-400 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution Details */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800 flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                Solution Details
              </h3>
              <ul className="space-y-2">
                {caseStudy.fullCaseStudy.solutionDetails.map((detail: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Implementation</h3>
              <p className="text-slate-700 leading-relaxed">{caseStudy.fullCaseStudy.implementation}</p>
            </div>

            {/* Outcomes */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800 flex items-center">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                Outcomes & Results
              </h3>
              <ul className="space-y-2">
                {caseStudy.fullCaseStudy.outcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.fullCaseStudy.technologies.map((tech: string, index: number) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Timeline</h4>
                <p className="text-slate-700">{caseStudy.fullCaseStudy.timeline}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Team Size</h4>
                <p className="text-slate-700">{caseStudy.fullCaseStudy.teamSize}</p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default function IndustriesPage() {
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 })
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Industries We Serve - Real Client Success Stories"
        description="Discover how NathCorp delivers specialized solutions across Technology, Aviation, Automotive, Media, Digital Libraries, and Manufacturing with proven results from Western Digital, Hawaiian Airlines, AAA, Universal Music Group, OCLC, and 3M."
        keywords="industry solutions, Western Digital, Hawaiian Airlines, AAA, Universal Music Group, OCLC CloudLibrary, 3M, technology consulting, aviation IT, automotive solutions"
        canonicalUrl="/industries"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="Industries We Serve"
          subtitle="Real success stories from leading companies across diverse industries"
          backgroundImage="/images/industries-hero.png"
        />

        {/* Industries Overview section removed as requested */}

        {/* Client Logos Carousel */}
        <ClientLogosCarousel />

        {/* Detailed Industry Solutions */}
        <section className="py-20 bg-white" ref={contentRef}>
          <div className="container mx-auto px-4">
            <Tabs defaultValue="technology" className="w-full">
              <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide">
                <TabsList className="bg-slate-100/80 backdrop-blur-sm p-1 rounded-full border border-slate-200 flex-nowrap">
                  {industries.map((industry) => (
                    <TabsTrigger
                      key={industry.id}
                      value={industry.id}
                      className="rounded-full px-4 py-2.5 text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md transition-all duration-300"
                    >
                      {industry.name.split(" ")[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {industries.map((industry) => (
                <TabsContent key={industry.id} value={industry.id} id={industry.id}>
                  <div className="space-y-16">
                    {/* Industry Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="mb-6">
                          <span
                            className={`inline-block py-2 px-4 rounded-full bg-gradient-to-r ${industry.color} text-white text-sm font-medium mb-4`}
                          >
                            {industry.name} Solutions
                          </span>
                          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-800">{industry.description}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-slate-800 flex items-center">
                              <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                              Key Challenges
                            </h4>
                            <ul className="space-y-3">
                              {industry.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="h-2 w-2 bg-red-400 rounded-full mr-3 mt-2 shrink-0"></div>
                                  <span className="text-slate-700">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-slate-800 flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              Our Solutions
                            </h4>
                            <ul className="space-y-3">
                              {industry.solutions.map((solution, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                                  <span className="text-slate-700">{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="relative">
                          <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200/50 rounded-2xl transform rotate-3 backdrop-blur-sm"></div>
                          <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-300/30 rounded-2xl transform -rotate-3 backdrop-blur-sm"></div>
                          <Card className="glass-card relative z-10 rounded-2xl overflow-hidden border-0">
                            <CardContent className="p-0">
                              <div className="relative h-64">
                                <Image
                                  src="/images/storage.jpg"
                                  alt={`${industry.name} Industry Solutions`}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                  <h5 className="text-lg font-bold">{industry.name} Expertise</h5>
                                  <p className="text-sm opacity-90">Proven solutions for industry leaders</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </motion.div>
                    </div>

                    {/* Case Study */}
                    <div className="space-y-12">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold mb-4 text-slate-800">Featured Case Study</h3>
                        <p className="text-lg text-slate-600">Real results from industry-leading companies</p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <Card className="glass-card rounded-2xl overflow-hidden border-0 shadow-xl">
                          <CardContent className="p-0">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                              {/* Client Info */}
                              <div className={`bg-gradient-to-br ${industry.color} p-8 text-white`}>
                                <div className="mb-6">
                                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4 inline-block">
                                    <Image
                                      src={industry.caseStudy.logo || "/placeholder.svg"}
                                      alt={`${industry.caseStudy.client} Logo`}
                                      width={120}
                                      height={60}
                                      className="brightness-0 invert"
                                    />
                                  </div>
                                  <h4 className="text-2xl font-bold mb-2">{industry.caseStudy.client}</h4>
                                  <p className="text-white/90 mb-1">{industry.caseStudy.industry}</p>
                                  <p className="text-sm text-white/80 font-medium">{industry.caseStudy.focus}</p>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                  {industry.caseStudy.metrics.map((metric, metricIndex) => (
                                    <div key={metricIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                      <div className="text-2xl font-bold">{metric.value}</div>
                                      <div className="text-sm text-white/90">{metric.label}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Case Study Details */}
                              <div className="lg:col-span-2 p-8 bg-white">
                                <div className="space-y-6">
                                  <div>
                                    <h5 className="text-xl font-bold mb-3 text-slate-800">
                                      {industry.caseStudy.title}
                                    </h5>
                                  </div>

                                  <div>
                                    <div className="flex items-center mb-3">
                                      <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                        <Building2 className="h-4 w-4 text-red-600" />
                                      </div>
                                      <h5 className="text-lg font-semibold text-slate-800">Challenge</h5>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed pl-11">
                                      {industry.caseStudy.challenge}
                                    </p>
                                  </div>

                                  <div>
                                    <div className="flex items-center mb-3">
                                      <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <Users className="h-4 w-4 text-blue-600" />
                                      </div>
                                      <h5 className="text-lg font-semibold text-slate-800">Solution</h5>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed pl-11">
                                      {industry.caseStudy.solution}
                                    </p>
                                  </div>

                                  <div>
                                    <div className="flex items-center mb-3">
                                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                        <TrendingUp className="h-4 w-4 text-green-600" />
                                      </div>
                                      <h5 className="text-lg font-semibold text-slate-800">Results</h5>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed pl-11">{industry.caseStudy.results}</p>
                                  </div>

                                  <div className="pt-4 border-t border-slate-200">
                                    <Button
                                      onClick={() => setSelectedCaseStudy(industry.caseStudy)}
                                      className="luxury-button rounded-full px-6 py-2 text-white group mr-4"
                                    >
                                      <FileText className="mr-2 h-4 w-4" />
                                      Read Full Case Study
                                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Industry Stats */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white" ref={statsRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-4">Our Industry Impact</h2>
                <p className="text-xl text-blue-100">Delivering measurable results for industry leaders worldwide</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="text-4xl font-bold mb-2 text-blue-300">15+</div>
                <p className="text-blue-100">Fortune 500 clients served</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="text-4xl font-bold mb-2 text-green-300">99.9%</div>
                <p className="text-blue-100">Average system uptime achieved</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="text-4xl font-bold mb-2 text-yellow-300">50%</div>
                <p className="text-blue-100">Average cost reduction delivered</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="text-4xl font-bold mb-2 text-purple-300">15+</div>
                <p className="text-blue-100">Years of continuous service</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-slate-800 luxury-text-gradient">
                  Ready to Transform Your Industry?
                </h2>
                <p className="text-xl mb-8 text-slate-600">
                  Let's discuss how our industry-specific solutions can address your unique challenges.
                </p>
                <Button className="luxury-button rounded-full px-8 py-6 text-white text-lg group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
        {selectedCaseStudy && (
          <CaseStudyModal
            caseStudy={selectedCaseStudy}
            isOpen={!!selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
          />
        )}
      </main>
    </ThemeProvider>
  )
}
