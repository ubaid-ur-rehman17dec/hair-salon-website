import PageHeader from '../components/PageHeader';
import ServiceSection from '../components/ServiceSection';
import TestimonialSection from '../components/TestimonialSection';

export default function Service({ onOpenAppointment }) {
  return (
    <>
      <PageHeader title="Services" category="Pages" />
      <ServiceSection onOpenAppointment={onOpenAppointment} />
      <TestimonialSection />
    </>
  );
}
