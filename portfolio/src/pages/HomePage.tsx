import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { TechPreview } from '../components/home/TechPreview';
import { FeaturedProjects } from '../components/home/FeaturedProjects';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <TechPreview />
      <FeaturedProjects />
    </>
  );
}
