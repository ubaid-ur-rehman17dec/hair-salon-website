import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import GallerySection from '../components/GallerySection';
import TeamSection from '../components/TeamSection';
import WorkingHoursSection from '../components/WorkingHoursSection';
import TestimonialSection from '../components/TestimonialSection';

export default function Home({ onOpenAppointment }) {
  return (
    <>
      <HeroCarousel onOpenAppointment={onOpenAppointment} />
      <AboutSection />
      <ServiceSection onOpenAppointment={onOpenAppointment} />
      <GallerySection limit={6} />
      <TeamSection />
      <WorkingHoursSection />
      <TestimonialSection />
    </>
  );
}
