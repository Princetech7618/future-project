"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ToastAlert from "./ToastAlert";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
export default function EnquiryModal({ onClose }) {
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
const [toastType, setToastType] = useState("success"); // success | error
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
 date: null,    email: "",
    phone: "",
    message: "",
  });


  const validate = () => {
  if (!formData.firstName.trim())
    return "Please enter your first name";

  if (formData.firstName.length < 2)
    return "First name must be at least 2 characters";

  if (!formData.lastName.trim())
    return "Please enter your last name";

if (!formData.date)
  return "Please select your travel date";

  if (!formData.phone.trim())
    return "Please enter your phone number";

  if (!formData.phone.match(/^[0-9]{10}$/))
    return "Enter valid 10 digit phone number";

  if (!formData.email.trim())
    return "Please enter your email address";

  if (!formData.email.match(/^\S+@\S+\.\S+$/))
    return "Enter a valid email address";

  // ✅ message optional → no validation

  return null;
};


  useEffect(() => {
    gsap.fromTo(
      ".modal-content",
      { scale: 0.9, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const error = validate();

  // ❌ Agar error hai
  if (error) {
    setToastMessage(error);
    setToastType("error");
    setOpenToast(true);
    return;
  }

  // ✅ Success case
  setToastMessage("Enquiry Sent Successfully!");
  setToastType("success");
  setOpenToast(true);

  setTimeout(() => {
    onClose();
  }, 2000);
};

  return (
  <>
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px]"
      />

      {/* COMPACT MODAL BOX */}
      <div className="modal-content relative w-full max-w-md bg-white rounded-[1rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden">
        
        {/* Compact Header */}
        <div className="relative bg-[#359ade] px-6 py-4 text-white">
          <div className="relative z-10">
            <h2 className="text-lg md:text-xl font-semibold uppercase tracking-tighter">
              Quick <span className="opacity-80">Enquiry</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/20 rounded-full border border-white/20"
          >
            <CloseIcon sx={{ fontSize: 16 }} />
          </motion.button>
        </div>

        {/* Form Body - Reduced Gaps */}
        <form onSubmit={handleSubmit} className="p-5 md:p-7 space-y-3.5">
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase text-slate-600 ml-1 tracking-widest">First Name</label>
              <input
                type="text" name="firstName" placeholder="Name"
                value={formData.firstName} onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-transparent focus:border-[#359ade] focus:bg-white outline-none transition-all font-semibold text-sm text-slate-800"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase text-slate-600 ml-1 tracking-widest">Last Name</label>
              <input
                type="text" name="lastName" placeholder="Last Name"
                value={formData.lastName} onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-transparent focus:border-[#359ade] focus:bg-white outline-none transition-all font-semibold text-sm text-slate-800"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase text-slate-600 ml-1 tracking-widest">Travel Date</label>
              <div className="relative">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    value={formData.date}
    onChange={(newValue) => {
      setFormData((prev) => ({
        ...prev,
        date: newValue,
      }));
    }}
    slotProps={{
      textField: {
        placeholder: "Select Date",
        fullWidth: true,
        size: "small",
        sx: {
          backgroundColor: "#f8fafc",
          borderRadius: "12px",
          "& .MuiOutlinedInput-root": {
            fontWeight: 600,
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "1px solid #359ade",
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #359ade",
            },
          },
        },
      },
    }}
  />
</LocalizationProvider>
                {/* <EventAvailableIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" sx={{ fontSize: 16 }} /> */}
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase text-slate-600 ml-1 tracking-widest">Phone</label>
              <input
                type="tel" name="phone" placeholder="+91"
                value={formData.phone} onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-transparent focus:border-[#359ade] focus:bg-white outline-none transition-all font-semibold text-sm text-slate-800"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold uppercase text-slate-600 ml-1 tracking-widest">Email</label>
            <input
              type="email" name="email" placeholder="example@gmail.com"
              value={formData.email} onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-transparent focus:border-[#359ade] focus:bg-white outline-none transition-all font-semibold text-sm text-slate-800"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold uppercase text-slate-600 ml-1 tracking-widest">Message</label>
            <textarea
              name="message" placeholder="Interested in..."
              value={formData.message} onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-transparent focus:border-[#359ade] focus:bg-white outline-none transition-all font-semibold text-sm text-slate-800 resize-none"
              rows={2}
            />
          </div>

          {/* Submit Button - Hover color fix */}
          <motion.button
            type="submit"
            whileHover={{ backgroundColor: "#2f89c7" }}
            whileTap={{ scale: 0.97 }}
            className="w-full cursor-pointer hover:bg-[#2f89c7] bg-[#359ade] text-white py-3.5 rounded-xl font-semibold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-100 transition-colors mt-2"
          >
            Book Now <SendIcon sx={{ fontSize: 14 }} />
          </motion.button>

          <p className="text-[10px] text-center text-slate-600 uppercase font-semibold tracking-[0.2em]">
            Fast response within 24 hours
          </p>
        </form>
      </div>
    </div>
       {/* ✅ Toaster */}
<ToastAlert
  open={openToast}
  onClose={() => setOpenToast(false)}
  message={toastMessage}
  severity={toastType}
/>

    </>
  );
  
}