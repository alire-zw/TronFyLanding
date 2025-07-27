import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Steps from '@/components/Steps';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Steps />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
