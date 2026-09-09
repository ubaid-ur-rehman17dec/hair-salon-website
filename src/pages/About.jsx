import PageHeader from '../components/PageHeader';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';

export default function About() {
  return (
    <>
      <PageHeader title="About Us" category="Pages" />
      <AboutSection />
      <TeamSection limit={4} />
    </>
  );
}
