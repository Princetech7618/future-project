"use client";

import Image from "next/image";
import React, { useState } from "react";

// MUI
import { TextField, Button, MenuItem } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Hero = ({
  title,
  subtitle,
  startDate,
  endDate,
  location,
  onStartDateChange,
  onEndDateChange,
  onLocationChange,
  onSearchClick,
  locationOptions = [],
  descriptionLeft,
  descriptionRight,
  buttonText,
  showSearch = true,
  imagesrc,
}) => {
  const [open, setOpen] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  return (
    <div className="px-3 sm:px-5">
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100">
        {/* Background Image */}
        <Image
          src={imagesrc || "/Images/hero2.jpg"}
          alt="Mountains"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-3 sm:px-6 py-8 sm:py-10 min-h-[350px] sm:min-h-[450px]">
          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-2 text-sm sm:text-lg md:text-xl font-medium">
            {subtitle}
          </p>

          {/* Search Section */}
          {showSearch && (
            <div className="mt-6 w-full max-w-5xl">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center shadow-lg ">
                  {/* Start Date */}
                  <DatePicker
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    disableScrollLock
                    label="Start Date"
                    value={startDate}
                    onChange={(val) => {
                      onStartDateChange(val);
                      setOpen(false); // 👈 select hote hi close
                    }}
                    slotProps={{
                      textField: {
                        size: "small",
                        fullWidth: true,
                        sx: {
                          backgroundColor: "white",
                          borderRadius: "6px",
                        },
                      },
                    }}
                  />

                  {/* End Date */}
                  <div className="w-full">
                    <DatePicker
                      open={openEnd}
                      onOpen={() => setOpenEnd(true)}
                      onClose={() => setOpenEnd(false)}
                      disableScrollLock
                      label="End Date"
                      value={endDate}
                      onChange={(val) => {
                        onEndDateChange(val);
                        setOpenEnd(false); // 👈 select hote hi close
                      }}
                      minDate={startDate} // 🔥 optional (best UX)
                      slotProps={{
                        textField: {
                          size: "small",
                          fullWidth: true,
                          sx: {
                            backgroundColor: "white",
                            borderRadius: "6px",
                          },
                        },
                      }}
                    />
                  </div>

                  {/* Location */}
                  <div className="w-full">
                    <TextField
                      select
                      label="Location"
                      value={location}
                      onChange={(e) => onLocationChange(e.target.value)}
                      size="small"
                      fullWidth
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "6px",
                      }}
                      SelectProps={{
                        MenuProps: {
                          disableScrollLock: true,
                          PaperProps: {
                            sx: {
                              "& .MuiMenuItem-root": {
                                fontSize: "14px",
                                minHeight: "20px",
                              },
                            },
                          },
                        },
                      }}
                    >
                      {/* 👇 YE HAI ITEMS */}
                      {locationOptions.map((loc) => (
                        <MenuItem
                          key={loc.toLowerCase()}
                          value={loc.toLowerCase()}
                        >
                          {loc}
                        </MenuItem>
                      ))}
                    </TextField>{" "}
                  </div>

                  {/* Button */}
                  <div className="w-full lg:w-auto cursor-pointer">
                    <Button
                      onClick={onSearchClick}
                      disabled={!location || !startDate}
                      variant="contained"
                      fullWidth
                      sx={{
                        borderRadius: "6px",
                        px: 4,
                        py: 1.2,
                        backgroundColor: "#359ade",
                        whiteSpace: "nowrap",
                        height: "40px",
                        "&:hover": {
                          backgroundColor: "#2f89c7",
                        },
                        // Disabled state ke liye color yahan add karein:
                        "&.Mui-disabled": {
                          backgroundColor: "#cccccc", // Aap apna pasandida color yahan dalein
                          color: "#666666", // Text color ke liye
                        },
                      }}
                    >
                      {buttonText}
                    </Button>
                  </div>
                </div>
              </LocalizationProvider>
            </div>
          )}

          {/* Bottom Text */}
          <div className="mt-6 sm:mt-8 px-2 sm:px-6 flex flex-col md:flex-row justify-between gap-4 max-w-6xl w-full">
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 text-center md:text-left md:max-w-sm">
              {descriptionLeft}
            </p>

            <p className="text-sm sm:text-lg md:text-xl text-gray-200 text-center md:text-right md:max-w-sm">
              {descriptionRight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// "use client";

// import Image from "next/image";
// import React from "react";
// import { TextField, Button, MenuItem } from "@mui/material";
// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const Hero = ({
//   title ,
//   subtitle ,
//   startDate,
//   endDate,
//   location,
//   onStartDateChange,
//   onEndDateChange,
//   onLocationChange,
//   onSearchClick,
//   locationOptions ,
//     descriptionLeft,
//   descriptionRight,
//   buttonText ,
// }) => {
//   const [openStart, setOpenStart] = React.useState(false);
//   const [openEnd, setOpenEnd] = React.useState(false);

//   return (
//     <div className="px-3 sm:px-5">
//       <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100">
//         {/* Background Image */}
//         <Image
//           src="/Images/hero2.jpg"
//           alt="Mountains"
//           fill
//           sizes="100vw"
//           className="object-cover"
//           priority
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-3 sm:px-6 py-8 sm:py-10 min-h-[500px] sm:min-h-[600px]">
//           {/* Heading */}
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             {title}
//           </h1>

//           <p className="mt-2 text-sm sm:text-lg md:text-xl font-medium">{subtitle}</p>

//           {/* Search Section */}
//           <div className="mt-6 w-full max-w-5xl">
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center shadow-lg">

//                 {/* Start Date */}
//                 <DatePicker
//                   open={openStart}
//                   onOpen={() => setOpenStart(true)}
//                   onClose={() => setOpenStart(false)}
//                   disableScrollLock
//                   label="Start Date"
//                   value={startDate}
//                   onChange={(val) => {
//                     onStartDateChange(val);
//                     setOpenStart(false);
//                   }}
//                   slotProps={{
//                     textField: {
//                       size: "small",
//                       fullWidth: true,
//                       sx: { backgroundColor: "white", borderRadius: "6px" },
//                     },
//                   }}
//                 />

//                 {/* End Date */}
//                 <DatePicker
//                   open={openEnd}
//                   onOpen={() => setOpenEnd(true)}
//                   onClose={() => setOpenEnd(false)}
//                   disableScrollLock
//                   label="End Date"
//                   value={endDate}
//                   onChange={(val) => {
//                     onEndDateChange(val);
//                     setOpenEnd(false);
//                   }}
//                   minDate={startDate}
//                   slotProps={{
//                     textField: {
//                       size: "small",
//                       fullWidth: true,
//                       sx: { backgroundColor: "white", borderRadius: "6px" },
//                     },
//                   }}
//                 />

//                 {/* Location */}
//                 <TextField
//                   select
//                   label="Location"
//                   value={location}
//                   onChange={(e) => onLocationChange(e.target.value)}
//                   size="small"
//                   fullWidth
//                   sx={{ backgroundColor: "white", borderRadius: "6px" }}
//                 >
//                   {locationOptions.map((loc) => (
//                     <MenuItem key={loc.toLowerCase()} value={loc.toLowerCase()}>
//                       {loc}
//                     </MenuItem>
//                   ))}
//                 </TextField>

//                 {/* Search Button */}
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   onClick={onSearchClick}
//                   sx={{
//                     borderRadius: "6px",
//                     px: 4,
//                     py: 1.2,
//                     backgroundColor: "#359ade",
//                     whiteSpace: "nowrap",
//                     height: "40px",
//                     "&:hover": { backgroundColor: "#2f89c7" },
//                   }}
//                 >

//   {buttonText}
//                 </Button>
//               </div>
//             </LocalizationProvider>
//           </div>

//           {/* Bottom Text */}
//           <div className="mt-6 sm:mt-8 px-2 sm:px-6 flex flex-col md:flex-row justify-between gap-4 max-w-6xl w-full">
//             <p className="text-sm sm:text-lg md:text-xl text-gray-200 text-center md:text-left md:max-w-sm">
//                   {descriptionLeft}

//             </p>

//             <p className="text-sm sm:text-lg md:text-xl text-gray-200 text-center md:text-right md:max-w-sm">

//   {descriptionRight}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
