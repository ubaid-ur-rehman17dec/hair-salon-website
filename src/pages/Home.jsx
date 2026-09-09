import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import PriceSection from '../components/PriceSection';
import TeamSection from '../components/TeamSection';
import WorkingHoursSection from '../components/WorkingHoursSection';
import TestimonialSection from '../components/TestimonialSection';

export default function Home({ onOpenAppointment }) {
  return (
    <>
      <HeroCarousel onOpenAppointment={onOpenAppointment} />
      <AboutSection />
      <ServiceSection onOpenAppointment={onOpenAppointment} />
      <PriceSection />
      <TeamSection limit={4} />
      <WorkingHoursSection />
      <TestimonialSection />
    </>
  );
}
