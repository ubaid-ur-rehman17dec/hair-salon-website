import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';

export default function About() {
  return (
    <div className="pt-4">
      <AboutSection />
      <TeamSection limit={4} />
    </div>
  );
}
