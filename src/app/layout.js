// "use client";
// import { useState } from "react";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import EnquiryModal from "./components/EnquiryModal";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],           // Hindi + English ke liye "latin" ya "latin-ext" bhi le sakte ho
//   weight: ["400", "500", "600", "700"], // jitne weights chahiye utne daal do (variable font ke liye sab daal sakte ho)
//   display: "swap",              // best practice – flash of invisible text avoid karta hai
//   variable: "--font-poppins",   // yeh recommended hai Tailwind ke saath use karne ke liye
// });

// export default function RootLayout({ children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <html lang="en" className={poppins.variable}>
//       <body className="font-poppins">
//         {/* Navbar */}
//         <Navbar onQuickEnquiryClick={() => setIsOpen(true)} />

//         {/* Page Content */}
//         <main className="mt-24">{children}</main>

//         {/* Footer */}
//         <Footer />

//         {/* Modal */}
//         {isOpen && <EnquiryModal onClose={() => setIsOpen(false)} />}
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import ClientWrapper from "./components/ClientWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins">
        <ClientWrapper>
          <main className="mt-24">{children}</main>
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}