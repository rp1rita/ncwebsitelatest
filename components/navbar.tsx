"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Services",
    href: "/services",
    submenu: [
      {
        title: "App Development",
        href: "/services/app-development",
        description: "Custom mobile and web applications",
      },
      {
        title: "Digital Transformation",
        href: "/services/digital-transformation",
        description: "End-to-end business modernization",
      },
      { title: "QA & Testing", href: "/services/qa-testing", description: "Comprehensive quality assurance services" },
      { title: "Support Services", href: "/services/support", description: "24/7 technical support and maintenance" },
      {
        title: "Technology Consulting",
        href: "/services/technology-consulting",
        description: "Strategic technology guidance",
      },
      { title: "AI Services", href: "/services/ai-services", description: "Artificial intelligence solutions" },
      { title: "DevOps", href: "/services/devops", description: "Development and operations automation" },
      { title: "Cloud Services", href: "/services/cloud-services", description: "Cloud migration and management" },
      {
        title: "Active Directory",
        href: "/services/active-directory",
        description: "Hybrid work environment solutions",
      },
      { title: "Security", href: "/services/security", description: "Comprehensive security services" },
      {
        title: "Modern Deployment",
        href: "/services/modern-deployment",
        description: "Efficient deployment solutions",
      },
      { title: "Data Management", href: "/services/data-management", description: "Data organization and analytics" },
    ],
  },
  {
    title: "Products",
    href: "/products",
    submenu: [
      { title: "EZ Migrate", href: "/products#ez-migrate" },
      { title: "Pro-Work Portfolio", href: "/products#pro-work" },
      { title: "SecureShield", href: "/products#secure-shield" },
    ],
  },
  // { title: "Clients", href: "/clients" },
  { title: "Industries", href: "/industries" },
  { title: "Careers", href: "/careers" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showClickAnimation, setShowClickAnimation] = useState(false);

  const isTransparentHeader = true;

  useEffect(() => {
    setIsScrolled(!isTransparentHeader || window.scrollY > 10);
    const handleScroll = () =>
      setIsScrolled(window.scrollY > 10 || !isTransparentHeader);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentHeader]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setShowClickAnimation(true);
    setTimeout(() => setShowClickAnimation(false), 700);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md"
          : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.img
            src="/images/logo.png"
            alt="NathCorp Logo"
            className="h-10 w-40 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {navItems.map((item) =>
                item.submenu ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-sm font-medium bg-transparent px-0 py-0 hover:text-blue-600 transition-colors cursor-pointer",
                        !isScrolled && "text-white hover:text-white/80"
                      )}
                      onClick={handleNavClick}
                    >
                      <span className="relative">
                        {item.title}
                        {showClickAnimation && (
                          <motion.span
                            className="absolute w-5 h-5 bg-blue-400/30 rounded-full pointer-events-none"
                            initial={{ opacity: 0.8, scale: 0 }}
                            animate={{ opacity: 0, scale: 2 }}
                            transition={{ duration: 0.7 }}
                            style={{
                              left: clickPosition.x,
                              top: clickPosition.y,
                              transformOrigin: "center center",
                            }}
                          />
                        )}
                      </span>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      {/* box-style dropdown */}
                      <div
                        className={cn(
                          "bg-white shadow-lg border border-gray-200 rounded-lg p-6",
                          item.title === "Services" ? "w-[800px]" : "w-[540px]"
                        )}
                      >
                        <ul
                          className={cn(
                            "grid gap-6",
                            item.title === "Services"
                              ? "grid-cols-4"
                              : "grid-cols-3"
                          )}
                        >
                          {item.submenu.map((sub) => (
                            <li key={sub.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={sub.href}
                                  className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                                  onClick={handleNavClick}
                                >
                                  <div className="text-sm font-semibold text-slate-900">
                                    {sub.title}
                                  </div>
                                  {"description" in sub && (
                                    <p className="text-xs text-slate-600">
                                      {(sub as any).description}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "text-sm font-medium relative cursor-pointer hover:text-blue-600 transition-colors",
                          !isScrolled && "text-white hover:text-white/80",
                          pathname === item.href &&
                            "font-bold underline decoration-2 underline-offset-4"
                        )}
                        onClick={handleNavClick}
                      >
                        <span className="relative">
                          {item.title}
                          {showClickAnimation && (
                            <motion.span
                              className="absolute w-5 h-5 bg-blue-400/30 rounded-full pointer-events-none"
                              initial={{ opacity: 0.8, scale: 0 }}
                              animate={{ opacity: 0, scale: 2 }}
                              transition={{ duration: 0.7 }}
                              style={{
                                left: clickPosition.x,
                                top: clickPosition.y,
                                transformOrigin: "center center",
                              }}
                            />
                          )}
                        </span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={!isScrolled ? "text-white hover:text-white/80" : ""}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-6 py-6">
              {navItems.map((item) => (
                <div key={item.title} className="border-b pb-2">
                  {item.submenu ? (
                    <div className="space-y-3">
                      <div
                        className={cn(
                          "text-lg font-medium"
                        )}
                      >
                        {item.title}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="block text-sm hover:text-blue-600 transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        pathname === item.href && "font-bold text-blue-700"
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
