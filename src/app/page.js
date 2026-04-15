"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hero from "./components/Hero";
import { FaSmile, FaHandPeace, FaHotel, FaPhone } from "react-icons/fa";
import PopularTourPackages from "./components/PopularTourPackages";
import WhyChooseUs from "./components/whychooseus";
import ExploreDestinations from "./components/ExploreDestinations";
import WhyChooseGhumakkar from "./components/WhyChooseGhumakkar";
import Testimonials from "./components/Testimonials";
import { useRouter } from "next/navigation";

export default function Home() {
    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState("");
  const router = useRouter();

const handleSearch = () => {
  if (!location) return alert("Select location");

  router.push(
    `/packages?location=${location}&start=${startDate}&end=${endDate}`
  );
};

  return (
    <div className=" py-8">
      {/* Hero Section */}
      <Hero
        title="Welcome to Ghumakkar Masti"
        subtitle="Fuel Your Wanderlust. Live the Masti."
        startDate={startDate}
        endDate={endDate}
        location={location}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onLocationChange={setLocation}
        onSearchClick={handleSearch}
  locationOptions ={ ["Kashmir Tour","Shimla Manali Tour","Sikkim Darjeeling Tour","Andaman Tour","Rajasthan Tour","Goa Tour","Golden Triangle Tour"]}

  descriptionLeft="Fuel your wanderlust with unforgettable travel experiences, curated getaways, and memories that last a lifetime."
              descriptionRight="From quick weekend escapes to grand dream vacations, we craft unforgettable journeys filled with joy and discovery."
              buttonText="Search Trips"
                    />

      {/* Popular Tour Packages Section */}
      <PopularTourPackages/>


    

      {/* Explore Destinations Section */}
     <ExploreDestinations />

      {/* Why Choose Ghumakkar Masti Section */}
    <WhyChooseGhumakkar />
     <WhyChooseUs />

<Testimonials />

    </div>
  );
}
