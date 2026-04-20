import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Upload, Activity, Search, Share2, ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Simple Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Heart className="text-blue-500" fill="currentColor" />
          <span className="text-xl font-bold">Health<span className="text-blue-500">Wallet</span></span>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="px-4 py-2 text-slate-400 hover:text-white transition">Login</Link>
          <Link to="/register" className="bg-blue-600 px-5 py-2 rounded-lg font-bold hover:bg-blue-500 transition">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center">
        <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
          Your Health Records, <br/> Secured in One Place.
        </motion.h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
          Upload reports via WhatsApp or Web. Track your vitals automatically. Share securely with your doctors.
        </p>
        <Link to="/register" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 hover:scale-105 transition-transform">
          Create Free Account <ArrowRight size={20}/>
        </Link>
      </header>
    </div>
  );
};

export default Index;