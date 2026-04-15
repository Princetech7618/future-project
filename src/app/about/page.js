
import Image from 'next/image';
import AboutSection from '../components/About';
import AboutPageContent from '../components/About2';
import TrustedPartners from '../components/TrustedPartners';
import Hero from '../components/Hero';
export default function AboutPage() {
  return (
  <div className='py-8'>
      {/* About Hero Section */}
   <Hero 
   title="            About Ghumakkar Masti"
   subtitle="            Crafting Journeys, Creating Memories"
     showSearch={false}
imagesrc ="/Images/About.jpg"
   />

      {/* About Content Section 1 */}
     <AboutSection />

      {/* About Content Section 2 */}
    <AboutPageContent />

    {/* trusted aptners */}

<TrustedPartners />

      </div>
   
  );
}
