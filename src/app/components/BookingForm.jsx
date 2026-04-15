// "use client";

// import React, { useState } from "react";
// import dayjs from "dayjs";
// import { ThemeProvider } from "@mui/material/styles";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { MapPin, Calendar, Phone } from "lucide-react";

// export default function BookingForm({
//   data,
//   brandTheme,
//   datePickerStyles,
//   onSuccess,
// }) {
//   const [pickupCity, setPickupCity] = useState("");
//   const [pickupDate, setPickupDate] = useState(null);
//   const [dropDate, setDropDate] = useState(null);
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//  const isFormValid =
//   pickupCity.trim() !== "" &&
//   pickupDate &&
//   dropDate &&
//   /\S+@\S+\.\S+/.test(email) &&   // ✅ proper email
//   /^[0-9]{10}$/.test(phone);     // ✅ only 10 digit number

//   const handleBooking = () => {
//     if (!isFormValid) return;

//     const payload = {
//       car: data.slug,
//       pickupCity,
//       pickupDate,
//       dropDate,
//       email,
//       phone,
//     };

//     console.log("Booking:", payload);

//     onSuccess("Booking Successful ", "success");
//       // ✅ RESET FORM
//   setPickupCity("");
//   setPickupDate(null);
//   setDropDate(null);
//   setEmail("");
//   setPhone("");
//   };

//   return (
//     <div className="bg-white rounded-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
      
//       <div className="p-6 sm:p-7">

//         {/* Price */}
//         <div className="mb-6">
//           <p className="text-xs text-slate-900 mb-1">Starting from</p>
//           <div className="flex items-baseline gap-3 flex-wrap">
//             <span className="text-3xl sm:text-4xl font-semibold text-[#359ade]">
//               Rs.{data.pricePerDay.toLocaleString("en-IN")} /day
//             </span>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="space-y-3 mb-6">


     

//           {/* Email */}
//           <div>
//             <label className="text-[10px] font-bold uppercase mb-1 px-1 block">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-[#c7e9ff] px-4 py-3 rounded-xl text-sm outline-none"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="text-[10px] font-bold uppercase mb-1 px-1 block">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//                 pattern="[0-9]*"
//   maxLength={10}
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full bg-[#c7e9ff] px-4 py-3 rounded-xl text-sm outline-none"
//             />
//           </div>


//                {/* Dates */}
//           <ThemeProvider theme={brandTheme}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

//                 <div className="group">
//                   <label className="text-[10px] font-bold uppercase mb-1 px-1 block">
//                     Pickup Date
//                   </label>
//                   <div className="flex items-center gap-2 bg-[#c7e9ff] rounded-xl px-3 py-2">
//                     <Calendar className="w-4 h-4 text-[#359ade]" />
//                     <DesktopDatePicker
// value={pickupDate ? dayjs(pickupDate) : null}
// onChange={(v) => setPickupDate(v ? v.format("YYYY-MM-DD") : null)}  
//                     slotProps={datePickerStyles}
//                     />
//                   </div>
//                 </div>

//                 <div className="group">
//                   <label className="text-[10px] font-bold uppercase mb-1 px-1 block">
//                     Drop Date
//                   </label>
//                   <div className="flex items-center gap-2 bg-[#c7e9ff] rounded-xl px-3 py-2">
//                     <Calendar className="w-4 h-4 text-[#359ade]" />
//                     <DesktopDatePicker
//                      value={dropDate ? dayjs(dropDate) : null}
// onChange={(v) => setDropDate(v ? v.format("YYYY-MM-DD") : null)}
//                       slotProps={datePickerStyles}
//                     />
//                   </div>
//                 </div>

//               </div>
//             </LocalizationProvider>
//           </ThemeProvider>

          
//           {/* Pickup */}
//           <div className="group">
//             <label className="block text-[10px] font-bold text-slate-900 uppercase mb-1 px-1">
//               Pickup Location
//             </label>
//             <div className="flex items-center gap-3 bg-[#c7e9ff] rounded-2xl px-4 py-3">
//               <MapPin className="w-4 h-4 text-[#359ade]" />
//               <input
//                 type="text"
//                 value={pickupCity}
//                 onChange={(e) => setPickupCity(e.target.value)}
//                 placeholder="Enter city or landmark"
//                 className="bg-transparent outline-none w-full text-sm"
//               />
//             </div>
//           </div>

//         </div>

//         {/* CTA */}
//         <button
//           onClick={handleBooking}
//           disabled={!isFormValid}
//           className={`w-full py-4 rounded-2xl font-semibold transition-all
//             ${
//               isFormValid
//                 ? "bg-[#359ade] hover:bg-[#2d82bb] text-white shadow-lg cursor-pointer"
//                 : "bg-slate-200 text-slate-400 cursor-not-allowed"
//             }`}
//         >
//           {isFormValid ? "Book Now" : "Fill Details to Book"}
//         </button>

//         {/* Call Button */}
//         <button className="w-full mt-3 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-black py-3 rounded-2xl text-sm">
//           <Phone className="w-4 h-4 text-[#359ade]" />
//           Call to Book
//         </button>

//       </div>
//     </div>
//   );
// }




"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MapPin, Calendar, Phone } from "lucide-react";
import { FaCar } from "react-icons/fa";
export default function BookingForm({
  data,
  brandTheme,
  datePickerStyles,
  onSuccess,

}) {
  const [pickupCity, setPickupCity] = useState("");
  const [pickupDate, setPickupDate] = useState(null);
  const [dropDate, setDropDate] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid =
    pickupCity.trim() !== "" &&
    pickupDate &&
    dropDate &&
    /\S+@\S+\.\S+/.test(email) &&
    /^[0-9]{10}$/.test(phone);

  const handleBooking = () => {
    if (!isFormValid) return;

    const payload = {
      car: data.slug,
      pickupCity,
      pickupDate,
      dropDate,
      email,
      phone,
    };

    console.log("Booking:", payload);

    onSuccess("Booking Successful ", "success");

    setPickupCity("");
    setPickupDate(null);
    setDropDate(null);
    setEmail("");
    setPhone("");
  };

  return (
    <div className="bg-white rounded-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
      <div className="p-6 sm:p-7">

        {/* Price */}
        <div className="mb-6">
          <p className="text-xs text-slate-900 mb-1">Starting from</p>
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-3xl sm:text-4xl font-semibold text-[#359ade]">
Rs.{data.pricePerDay?.toLocaleString("en-IN") || "0"} /day
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-3 mb-6">

          {/* Email */}
          <div>
            <label className="text-[10px] font-bold uppercase mb-1 px-1 block">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#c7e9ff] px-4 py-3 rounded-xl text-sm outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-[10px] font-bold uppercase mb-1 px-1 block">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              maxLength={10}
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
              className="w-full bg-[#c7e9ff] px-4 py-3 rounded-xl text-sm outline-none"
            />
          </div>

          {/* Dates */}
          <ThemeProvider theme={brandTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {/* Pickup Date */}
                <div>
                  <label className="text-[10px] font-bold uppercase mb-1 px-1 block">
                    Pickup Date
                  </label>

                  <div className="relative bg-[#c7e9ff] rounded-xl px-3 py-2">
                    {/* <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#359ade]" /> */}

                    <DesktopDatePicker
                      value={pickupDate ? dayjs(pickupDate) : null}
                      onChange={(v) =>
                        setPickupDate(v ? v.format("YYYY-MM-DD") : null)
                      }
                      format="DD/MM/YYYY"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          variant: "standard",
                                           sx: {
        "& .MuiSvgIcon-root": {
          color: "#359ade", // 🔥 icon color
        },
                           },
                          InputProps: {
                            disableUnderline: true,
                            style: {
                              paddingLeft: "5px",
                              fontSize: "12px",
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Drop Date */}
                <div>
                  <label className="text-[10px] font-bold uppercase mb-1 px-1 block">
                    Drop Date
                  </label>

                  <div className="relative bg-[#c7e9ff] rounded-xl px-3 py-2">
                    {/* <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#359ade]" /> */}

                    <DesktopDatePicker
                      value={dropDate ? dayjs(dropDate) : null}
                      onChange={(v) =>
                        setDropDate(v ? v.format("YYYY-MM-DD") : null)
                      }
                      format="DD/MM/YYYY"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          variant: "standard",
                           sx: {
        "& .MuiSvgIcon-root": {
          color: "#359ade", // 🔥 icon color
        },
                           },
                          InputProps: {
                            disableUnderline: true,
                            style: {
                              paddingLeft: "5px",
                              fontSize: "12px",
                              
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>

              </div>
            </LocalizationProvider>
          </ThemeProvider>

          {/* Pickup Location */}
          <div>
            <label className="block text-[10px] font-bold text-slate-900 uppercase mb-1 px-1">
              Pickup Location
            </label>
            <div className="flex items-center gap-3 bg-[#c7e9ff] rounded-2xl px-4 py-3">
              <MapPin className="w-4 h-4 text-[#359ade]" />
              <input
                type="text"
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                placeholder="Enter city or landmark"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

        </div>

        {/* CTA */}
      <button
  onClick={handleBooking}
  disabled={!isFormValid}
  className={`w-full py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2
    ${
      isFormValid
        ? "bg-[#359ade] hover:bg-[#2d82bb] text-white shadow-lg cursor-pointer"
        : "bg-slate-200 text-slate-400 cursor-not-allowed"
    }`}
>
  <FaCar className="w-5 h-5" />
  {isFormValid ? "Book Now" : "Fill Details to Book"}
</button>

        {/* Call Button */}
  <button
  onClick={() => window.location.href = "tel:+919876543210"} // 👈 apna number daal
  className=" cursor-pointer  bg-[#359ade] hover:bg-[#2d82bb] w-full mt-3 flex items-center justify-center gap-2  border border-white/10 text-white  py-3 rounded-2xl text-sm"
>
  <Phone className="w-4 h-4 text-white" />
  Call to Book
</button>

      </div>
    </div>
  );
}