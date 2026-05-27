import { AreasSection } from "../components/home/areas-section";
import { CollectionsSection } from "../components/home/collections-section";
import { HeroSection } from "../components/home/hero-section";
import { MadeToMeasureSection } from "../components/home/made-to-measure-section";
import { SupplierSection } from "../components/home/supplier-section";
import { TrustedSection } from "../components/home/trusted-section";
import { VarietySection } from "../components/home/variety-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedSection />
      <VarietySection />
      <SupplierSection />
      <CollectionsSection />
      <MadeToMeasureSection />
      <AreasSection />
    </main>
  );
}
