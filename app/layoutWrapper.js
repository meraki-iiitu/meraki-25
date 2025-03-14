"use client"; 
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>{children}</main>
      {pathname !== "/" && <Footer />}
    </div>
  );
}
