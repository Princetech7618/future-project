"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import dayjs from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  ShieldCheck, Fuel, Settings, Zap, Star, MapPin, Calendar,
  ChevronRight, ChevronLeft, Check, ArrowLeft, Users, Gauge,
  Wind, Thermometer, Bluetooth, Music, Camera, Lock, Heart,
  Share2, Info, Clock, CreditCard, X, Phone,
} from "lucide-react";
import { createTheme } from "@mui/material/styles";


import BookingForm from "../../components/BookingForm";
import ToastAlert from "../../components/ToastAlert";


// 1. Theme Definition (FIX: brandTheme was missing)
const brandTheme = createTheme({
  palette: {
    primary: { main: '#359ade' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { 
          borderRadius: '20px', 
          marginTop: '10px', 
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' 
        }
      }
    }
  }
});

// 2. DatePicker Styles (Cursor & Brand Color)
const datePickerStyles = {
  textField: {
    fullWidth: true,
    variant: "standard",
    placeholder: "Select Date",
    InputProps: {
      disableUnderline: true,
      className: "w-full",
    },
    sx: {
      "& .MuiInputBase-root": {
        fontSize: '0.75rem',
        fontWeight: '600',
        color: '#0f172a',
        cursor: 'default', // Text area par default arrow
      },
      "& input": { 
        cursor: 'default' 
      }
    }
  },
  openPickerButton: {
    sx: {
      cursor: 'pointer', // Sirf calendar button par pointer
      '&:hover': {
        backgroundColor: 'rgba(53, 154, 222, 0.08)',
      }
    }
  },
  openPickerIcon: {
    sx: {
      color: '#359ade', // Brand Blue Color
    }
  }
};

const fleet = [
  {
    slug: "luxury-fleet",
    title: "Luxury Fleet",
    tagline: "Presidential Elegance",
    desc: "Premium sedans crafted for the discerning traveller. Experience unmatched comfort and sophistication on every city journey.",
    image: "/Images/luxerycars.jpg",
    seats: "4 Seats",
    pricePerDay: 5000,
    originalPrice: 7500,
    rating: 4.9,
    reviews: 128,
    category: "Luxury Sedan",
    fuelType: "Diesel",
    transmission: "Automatic",
    year: "2024",
    mileage: "18 km/l",
    topSpeed: "240 km/h",
    color: "Pearl White",
    engine: "3.0L V6",
    badge: "Most Booked",
    tags: ["Premium", "City Tour", "Airport Transfer"],
    amenities: [
      { icon: "bluetooth", label: "Bluetooth" },
      { icon: "music", label: "Premium Sound" },
      { icon: "camera", label: "360 Camera" },
      { icon: "thermometer", label: "Climate Control" },
      { icon: "lock", label: "Keyless Entry" },
      { icon: "wind", label: "Sunroof" },
    ],
    includes: [
      "Driver included",
      "Fuel included",
      "Toll charges",
      "Free cancellation",
    ],
    about:
      "Our luxury fleet represents the pinnacle of automotive excellence. Each vehicle is meticulously maintained and comes equipped with premium amenities to ensure your journey is as comfortable as it is stylish.",
  },
  {
    slug: "suv-muv",
    title: "SUV / MUV",
    tagline: "Conquer Every Terrain",
    desc: "Rugged, powerful builds engineered for mountain expeditions and off-road adventures without compromising comfort.",
    image: "/Images/suv.jpg",
    seats: "6-7 Seats",
    pricePerDay: 7500,
    originalPrice: 10000,
    rating: 4.8,
    reviews: 94,
    category: "SUV / MUV",
    fuelType: "Diesel",
    transmission: "Manual / Auto",
    year: "2024",
    mileage: "14 km/l",
    topSpeed: "180 km/h",
    color: "Metallic Grey",
    engine: "2.4L Turbo",
    badge: "Adventure Ready",
    tags: ["Off-Road", "Family", "Group Travel"],
    amenities: [
      { icon: "bluetooth", label: "Bluetooth" },
      { icon: "music", label: "Surround Sound" },
      { icon: "camera", label: "Rear Camera" },
      { icon: "thermometer", label: "Dual-Zone AC" },
      { icon: "lock", label: "4WD Lock" },
      { icon: "wind", label: "Roof Rails" },
    ],
    includes: [
      "Driver included",
      "Fuel included",
      "Toll charges",
      "Free cancellation",
    ],
    about:
      "Built for those who refuse to be limited by terrain. Our SUV/MUV fleet combines raw power with refined comfort, making them the ideal companion for both mountain getaways and urban adventures.",
  },
  {
    slug: "van-fleet",
    title: "Van Fleet",
    tagline: "Journey Together",
    desc: "Spacious, comfortable travel solutions for large groups — perfect for corporate events, family trips, and pilgrimages.",
    image: "/Images/traveler2.jpg",
    seats: "12-16 Seats",
    pricePerDay: 9000,
    originalPrice: 12000,
    rating: 4.7,
    reviews: 67,
    category: "Luxury Van",
    fuelType: "Diesel",
    transmission: "Manual",
    year: "2023",
    mileage: "12 km/l",
    topSpeed: "150 km/h",
    color: "Glacier White",
    engine: "2.8L CRDi",
    badge: "Group Special",
    tags: ["Corporate", "Group", "Pilgrimage"],
    amenities: [
      { icon: "bluetooth", label: "Bluetooth" },
      { icon: "music", label: "Entertainment" },
      { icon: "camera", label: "CCTV Camera" },
      { icon: "thermometer", label: "Full AC" },
      { icon: "lock", label: "Secure Lock" },
      { icon: "wind", label: "Luggage Space" },
    ],
    includes: [
      "Driver included",
      "Fuel included",
      "Toll charges",
      "Free cancellation",
    ],
    about:
      "When your group needs to travel together in comfort, our Van Fleet delivers. With generous seating, ample luggage space, and modern entertainment systems, every journey becomes a shared experience.",
  },
];
const policies = [
    { icon: <X />, title: "Cancellation Policy", desc: "Free cancellation up to 24 hours before pickup. 50% refund within 24 hours." },
    { icon: <Clock />, title: "Overtime Policy", desc: "Additional charges of Rs.500/hr apply if returned late beyond 30 minutes." },
    { icon: <CreditCard />, title: "Payment Terms", desc: "100% payment required at the time of booking. All digital modes accepted." },
    { icon: <ShieldCheck />, title: "Insurance", desc: "All vehicles are comprehensively insured. Personal accident cover included." },
  ];

const AmenityIcon = ({ icon }) => {
  const icons = {
    bluetooth: <Bluetooth className="w-4 h-4" />,
    music: <Music className="w-4 h-4" />,
    camera: <Camera className="w-4 h-4" />,
    thermometer: <Thermometer className="w-4 h-4" />,
    lock: <Lock className="w-4 h-4" />,
    wind: <Wind className="w-4 h-4" />,
  };
  return icons[icon] || <Check className="w-4 h-4" />;
};

export default function CarDetailsPage() {
  const { slug } = useParams();
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [pickupCity, setPickupCity] = useState("");
// const [pickupDate, setPickupDate] = useState(null);
// const [dropDate, setDropDate] = useState(null);

  const data = fleet.find((item) => item.slug === slug) || fleet[0];

  const images = [data.image, data.image, data.image, data.image];
  const discount = Math.round(
    ((data.originalPrice - data.pricePerDay) / data.originalPrice) * 100
  );

  const tabs = ["overview", "features", "policies"];
const [toast, setToast] = useState({
  open: false,
  message: "",
  severity: "success",
});

const handleToast = (msg, type) => {
  setToast({ open: true, message: msg, severity: type });
};

  return (
    <div className="min-h-screen bg-white ">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-28 xl:pb-12 pt-6">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-start">

          {/* ══ LEFT COLUMN ══ */}
          <div className="w-full xl:flex-1 min-w-0 space-y-5">

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 aspect-video group">
              <img
                src={images[activeImg]}
                alt={data.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 to-transparent" />

              {data.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[#359ade] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-sky-500/30">
                    {data.badge}
                  </span>
                </div>
              )}

              <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
                {data.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="bg-[#359ade] backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveImg((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => setActiveImg((i) => (i + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all hover:scale-105"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
                {activeImg + 1} / {images.length}
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-white font-bold text-sm">{data.rating}</span>
                <span className="text-white text-xs">({data.reviews} reviews)</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    activeImg === idx
                      ? "border-[#359ade] shadow-lg shadow-sky-500/30 scale-95"
                      : "border-white/10 opacity-60 hover:opacity-90 hover:border-white/30"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl border border-white/5 overflow-hidden">
              <div className="flex border-b border-white/5">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3.5 text-xs font-bold uppercase tracking-widest transition-all ${
                      activeTab === tab
                        ? "text-[#359ade] border-b-2 border-[#359ade] bg-white"
                        : "text-slate-800 hover:text-slate-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-5 sm:p-6">
                {/* OVERVIEW */}
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-black text-xs font-bold uppercase tracking-widest mb-1">{data.category}</p>
                      <h1 className="text-2xl sm:text-3xl font-semibold text-[#359ade] leading-tight mb-1">{data.title}</h1>
                      <p className="text-slate-600 text-sm leading-relaxed">{data.desc}</p>
                    </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  {[
    { icon: <Users className="w-4 h-4" />, label: "Capacity", val: `${data.seats} Seats` },
    { icon: <Fuel className="w-4 h-4" />, label: "Mileage", val: data.mileage },
    { icon: <Gauge className="w-4 h-4" />, label: "Top Speed", val: data.topSpeed },
    { icon: <Settings className="w-4 h-4" />, label: "Engine", val: data.engine },
  ].map((s, i) => (
    <div 
      key={i} 
      className="group relative bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      {/* Decorative background element for a premium touch */}
      <div className="absolute -right-2 -top-2 w-12 h-12 bg-sky-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out opacity-50" />
      
      <div className="relative flex flex-col gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#359ade] group-hover:text-white transition-colors duration-300">
          {s.icon}
        </div>
        
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em] mb-0.5">
            {s.label}
          </p>
          <p className="text-[13px] font-bold text-slate-900 leading-tight">
            {s.val}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

               <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
    <div className="p-1.5 bg-sky-50 rounded-lg">
      <Info className="w-4 h-4 text-[#359ade]" />
    </div>
    About this vehicle
  </h3>
  <p className="text-slate-600 text-sm leading-relaxed">
    {data.about}
  </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
  {[
    { label: "Fuel Type", val: data.fuelType },
    { label: "Transmission", val: data.transmission },
    { label: "Year", val: data.year },
  ].map((d, i) => (
    <div 
      key={i} 
      className="bg-slate-50/80 rounded-xl p-3 sm:p-4 border border-slate-100 
      transition-all hover:bg-white hover:shadow-md group"
    >
      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 text-[#359ade]">
        {d.label}
      </p>
      <p className="text-sm sm:text-base font-semibold text-slate-900 leading-tight break-words">
        {d.val}
      </p>
    </div>
  ))}
</div>
                  </div>
                )}

                {/* FEATURES */}
                {activeTab === "features" && (
                  <div className="space-y-6">
              <div className="w-full">
  {/* Header Section */}
  <div className="flex items-center justify-between mb-5 px-1">
    <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
      <div className="w-1 h-4 bg-[#359ade] rounded-full" /> 
      In-Car Amenities
    </h3>
    <span className="text-[9px] sm:text-[10px] font-semibold text-slate-900 bg-slate-200 px-2.5 py-1 rounded-lg uppercase tracking-tighter sm:tracking-normal">
      {data.amenities.length} Features
    </span>
  </div>

  {/* Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
    {data.amenities.map((a, i) => (
      <div 
        key={i} 
        className="group flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 
        bg-white rounded-2xl p-3 border border-slate-100 shadow-sm 
        hover:shadow-md hover:border-sky-100 transition-all duration-300 cursor-default text-center sm:text-left"
      >
        {/* Icon */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 flex items-center justify-center 
        text-slate-500 group-hover:bg-sky-50 group-hover:text-[#359ade] transition-colors duration-300 flex-shrink-0">
          <AmenityIcon icon={a.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* Text */}
        <span className="text-xs sm:text-sm text-slate-700 font-bold tracking-tight 
        group-hover:text-slate-900 transition-colors 
        break-words leading-tight">
          {a.label}
        </span>
      </div>
    ))}
  </div>
</div>         
  {/* Left Column: What's Included */}
  <div className="flex-1">
    <h3 className="text-sm font-extrabold text-slate-900 mb-5 flex items-center gap-2 uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-[#359ade] animate-ping" />
      What's Included
    </h3>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-6">
      {data.includes.map((inc, i) => (
        <div key={i} className="group flex items-center gap-3 py-1">
          <div className="w-6 h-6 rounded-full bg-[#e1f0fa] shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Check className="w-3.5 h-3.5 text-[#359ade] stroke-[3px]" />
          </div>
          <span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
            {inc}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Right Column: Safety Card */}
  <div className="lg:max-w-full">
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-3xl p-5 shadow-sm">
      {/* Subtle background decoration */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-sky-200/20 rounded-full blur-2xl" />
      
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 bg-[#359ade] rounded-lg shadow-lg shadow-sky-200">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <p className="text-[#359ade] text-[11px] font-semibold  uppercase tracking-[0.15em]">
            Safety First
          </p>
        </div>
        
        <p className="text-slate-600 text-[13px] leading-relaxed font-medium">
          All vehicles undergo <span className="text-slate-900 font-bold text-nowrap">mandatory safety checks</span> every 30 days. Our drivers are verified and background-checked.
        </p>
      </div>
    </div>
  </div>

                  </div>
                )}

                {/* POLICIES */}
                {activeTab === "policies" && (
                 <div className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-4">
  {policies.map((p, i) => (
    <div
      key={i}
      className="w-full group bg-white backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 ease-out flex gap-3 sm:gap-4 items-start"
    >
      
      {/* Icon */}
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#d8efff] text-[#359ade] group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(p.icon, { size: 18 })}
      </div>
      
      {/* Content */}
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-slate-900 tracking-wide">
          {p.title}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed font-medium">
          {p.desc}
        </p>
      </div>

    </div>
  ))}
</div>
                )}
              </div>
            </div>
          </div>

          {/* ══ RIGHT COLUMN — BOOKING ══ */}
          <div className="w-full xl:w-96 flex-shrink-0">
            <div className="xl:sticky xl:top-20 space-y-4">

              {/* Price & Booking Card */}
             <BookingForm
  data={data}
  brandTheme={brandTheme}
  datePickerStyles={datePickerStyles}
  onSuccess={handleToast}
/>

<ToastAlert
  open={toast.open}
  onClose={() => setToast({ ...toast, open: false })}
  message={toast.message}
  severity={toast.severity}
/>

              {/* Why Choose */}
         <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
  
  <p className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-4">
    Why choose this vehicle?
  </p>

  <div className="space-y-3">
    {[
      { icon: <ShieldCheck className="w-4 h-4" />, text: "100% verified and insured fleet" },
      { icon: <Users className="w-4 h-4" />, text: "Professionally trained drivers" },
      { icon: <Clock className="w-4 h-4" />, text: "24/7 customer support" },
      { icon: <Zap className="w-4 h-4" />, text: "Instant booking confirmation" },
    ].map((h, i) => (
      <div key={i} className="flex items-start gap-3">

        {/* Icon */}
        <div className="w-8 h-8 rounded-xl bg-[#359ade]/10 flex items-center justify-center text-[#359ade] flex-shrink-0">
          {h.icon}
        </div>

        {/* Text */}
        <span className="text-sm text-slate-600 leading-snug">
          {h.text}
        </span>

      </div>
    ))}
  </div>

</div>

              {/* Other Vehicles */}
            <div className="bg-white rounded-xl border border-white/5 p-5 shadow-lg">
  
  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
    Other Packages
  </p>

  <div className="space-y-3">
    {fleet
      .filter((f) => f.slug !== data.slug)
      .map((v, i) => (
        <a
          key={i}
          href={`/cars/${v.slug}`}
          className="flex items-center gap-3 p-3 rounded-xl bg-[#f8fbff] border border-transparent hover:border-[#359ade]/30 hover:shadow-md transition-all group"
        >

          {/* Image */}
          <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200">
            <img
              src={v.image}
              alt={v.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 truncate">
              {v.title}
            </p>
            <p className="text-xs text-slate-500">
              {v.seats} • Comfortable Ride
            </p>
          </div>

          {/* Price */}
          <div className="text-right flex-shrink-0">
            <p className="text-sm font-bold text-[#359ade]">
              ₹{v.pricePerDay.toLocaleString("en-IN")}
            </p>
            <p className="text-[10px] text-slate-400">/day</p>
          </div>

        </a>
      ))}
  </div>
</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}