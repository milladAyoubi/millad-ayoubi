// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Cta from '@/components/Cta';
import Parallax from '@/components/parallax';



export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      
      <Work />
      <Parallax/>
    
      <About />
      
      <Cta />
    </main>
  );
}
