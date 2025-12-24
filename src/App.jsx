import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import TrustSection from './components/TrustSection';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  const clinicName = "Dental Care Lahore";

  useEffect(() => {
    document.title = `${clinicName} – Professional Healthcare Services`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", `Visit ${clinicName} for trusted healthcare services in Lahore. Book appointments online easily.`);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <Team />
        <Location />
      </main>
      <Footer />
    </div>
  );
}