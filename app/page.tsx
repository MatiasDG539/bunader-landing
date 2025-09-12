import { SiteHeader } from "@/components/ui/header";
import { SiteFooter } from "@/components/ui/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { DevelopmentsSection } from "@/components/home/developments-section";
// import { BrowseWebsiteSection } from "@/components/home/browse-website-section"; For now, this is commented out.
import { TestimonialsSection } from "@/components/home/reviews-section";
import { ContactSection } from "@/components/home/contact-section";
import { ValuesSection } from "@/components/home/values-section";
import CompaniesSection from "@/components/home/companies-section";
import PartnersSection from "@/components/home/partners-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <CompaniesSection />
        <PartnersSection />
        {/* <BrowseWebsiteSection /> */}
        <FeaturedProperties />
        <DevelopmentsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}