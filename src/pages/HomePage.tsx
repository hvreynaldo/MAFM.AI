import { Hero } from '../components/hero/Hero';
import { PainPoints } from '../components/sections/PainPoints';
import { Solutions } from '../components/sections/Solutions';
import { CoreServices } from '../components/sections/CoreServices/CoreServices';
import { SocialProof } from '../components/sections/SocialProof';
import { Process } from '../components/sections/Process';
import { Features } from '../components/sections/Features';
import { Offer } from '../components/sections/Offer';
import { FAQ } from '../components/sections/FAQ';

export function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solutions />
      <CoreServices />
      <SocialProof />
      <Process />
      <Features />
      <Offer />
      <FAQ />
    </>
  );
}