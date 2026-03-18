import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import AboutSection from "@/components/sections/AboutSection";
import CourseCategoriesSection from "@/components/sections/CourseCategoriesSection";
import PlatformFeaturesSection from "@/components/sections/PlatformFeaturesSection";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "UniHub • Educação Corporativa Interativa",
  description:
    "Descubra como sua empresa pode se tornar mais inovadora, eficiente e produtiva com os programas de educação corporativa interativa e cursos profissionalizantes da UniHub.",
  openGraph: {
    title: "UniHub • Educação Corporativa Interativa",
    description:
      "Transformando empresas através do conhecimento. Programas de educação corporativa com certificações internacionais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <CourseCategoriesSection />
      <PlatformFeaturesSection />
      <AnalyticsSection />
      <CertificationsSection />
      <PricingSection />
      <ContactCTASection />
    </main>
  );
}
