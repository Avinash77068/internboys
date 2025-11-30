// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow ">
        {" "}
        {/* pt-16 to account for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
