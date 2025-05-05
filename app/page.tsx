import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { BrowseWebsiteSection } from "@/components/home/browse-website-section";
import { TestimonialsSection } from "@/components/home/reviews-section";
import { ContactSection } from "@/components/home/contact-section";
import { ValuesSection } from "@/components/home/values-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <BrowseWebsiteSection />
        <FeaturedProperties />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}