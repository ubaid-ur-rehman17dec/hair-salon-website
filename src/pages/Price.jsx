import PageHeader from '../components/PageHeader';
import PriceSection from '../components/PriceSection';
import WorkingHoursSection from '../components/WorkingHoursSection';

export default function Price() {
  return (
    <>
      <PageHeader title="Pricing Plan" category="Pages" />
      <PriceSection />
      <WorkingHoursSection />
    </>
  );
}
