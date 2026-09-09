import ServiceSection from '../components/ServiceSection';
import TestimonialSection from '../components/TestimonialSection';

export default function Service({ onOpenAppointment }) {
  return (
    <div className="pt-4">
      <ServiceSection onOpenAppointment={onOpenAppointment} />
      <TestimonialSection />
    </div>
  );
}
