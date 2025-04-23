import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FeaturedProperties } from "@/components/featured-properties";
import { BrowseWebsiteSection } from "@/components/browse-website-section";
import { TestimonialsSection } from "@/components/reviews-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturedProperties />
        <BrowseWebsiteSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}