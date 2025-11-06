import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative h-10 w-40">
                <img
                  src="/images/logo.png"
                  alt="NathCorp Logo"
                  className="absolute h-full w-full object-contain"
                />
              </div>
            </div>
            <p className="text-blue-100 mb-6">
              NathCorp is a leading provider of digital transformation and IT solutions, helping businesses navigate the
              complexities of modern technology with innovative, secure, and scalable solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center text-blue-100 hover:bg-blue-700/50 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center text-blue-100 hover:bg-blue-700/50 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center text-blue-100 hover:bg-blue-700/50 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center text-blue-100 hover:bg-blue-700/50 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-blue-100">123 Tech Park, Innovation Street, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-blue-100">info@nathcorp.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter to receive updates and news about our latest products and services.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-blue-900/30 border-blue-800/50 text-white placeholder:text-blue-200/50 pr-12"
                />
                <Button className="absolute right-0 top-0 h-full rounded-l-none bg-blue-700 hover:bg-blue-600">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-blue-300/70">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800/50 mt-16 pt-8 text-center text-blue-300/70">
          <p>© {new Date().getFullYear()} NathCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
