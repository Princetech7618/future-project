
import Image from 'next/image';
import Link from 'next/link';
import PremiumCarFleet from '../components/PremiumCarFleet';
import Hero from '../components/Hero';
export default function CarsPage() {
  return (
<div className='py-8'>
      {/* Cars Hero Section */}
        <Hero 
   title="                        Reliable car rental & Travel Services
"
   subtitle="   Enjoy Comfortable on-time safe travel with our well maintained
            vehicles and professional driver class all destination"
     showSearch={false}
imagesrc ="/Images/Car1.jpg"
   />
      {/* Car Fleet Section */}
   
   
<PremiumCarFleet />


      </div>
   
  );
}
