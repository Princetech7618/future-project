"use client";
import React from "react";
import { Snackbar, Alert as MuiAlert, Slide } from "@mui/material";
function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

export default function ToastAlert({
  open,
  onClose,
  message = "Success!",
  severity = "success", // success | error | warning | info
}) {
  // 🎨 Dynamic Colors
  const getBgColor = () => {
    switch (severity) {
      case "success":
        return "#359ade"; // blue brand
      case "error":
        return "#ef4444"; // red
      case "warning":
        return "#f59e0b"; // orange
      case "info":
        return "#3b82f6"; // light blue
      default:
        return "#359ade";
    }
  };

  return (
 <Snackbar
  open={open}
  autoHideDuration={4000}
  onClose={onClose}
  anchorOrigin={{ vertical: "top", horizontal: "right" }}
  TransitionComponent={SlideTransition}
  sx={{
    zIndex: (theme) => theme.zIndex.modal + 1, // 🔥 always top
    mt: "80px", // ✅ navbar ke niche push karega
  }}
>
      <MuiAlert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          bgcolor: getBgColor(),
          color: "#fff",
          fontWeight: "600",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          alignItems: "center",
        }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}