import { useCallback, useEffect, useState } from 'react';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { CosmicLabSection } from './components/CosmicLabSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { VisionSection } from './components/VisionSection';
import { NAV_ITEMS } from './data/portfolioData';
import { resolveActiveSection } from './utils/portfolioHelpers';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleNavigate = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const positions = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        return {
          id: item.id,
          top: el ? el.getBoundingClientRect().top : Number.POSITIVE_INFINITY,
        };
      });
      setActiveSection(resolveActiveSection(positions, 160));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-canvas-dark text-on-surface">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="w-full pt-16 flex-1 bg-canvas-dark">
        <div className="max-w-[1320px] mx-auto px-[4vw] w-full">
          <div className="flex flex-col w-full relative overflow-hidden">
            {/* Prismatic Aura Environmental Lighting Sweeps */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-40 left-1/4 w-[780px] h-[520px] bg-gradient-to-tr from-aura-violet/30 via-aura-orange/20 to-transparent rounded-full blur-[110px] -rotate-12 opacity-70"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[1400px] -right-32 w-[620px] h-[480px] bg-gradient-to-bl from-aura-violet/25 via-primary/15 to-transparent rounded-full blur-[100px] opacity-60"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[2800px] -left-[100px] w-[600px] h-[600px] bg-gradient-to-r from-aura-orange/15 via-aura-violet/20 to-transparent rounded-full blur-[120px] opacity-50"
            />

            <HeroSection onNavigate={handleNavigate} />
            <VisionSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationsSection />
            <CosmicLabSection />
            <ContactSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
