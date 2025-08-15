import { HeroSection } from "@/components/HeroSection";
import { SalesSection } from "@/components/SalesSection";
import { FileUploadSection } from "@/components/FileUploadSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SalesSection />
      <FileUploadSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
};

export default Index;
