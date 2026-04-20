import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 relative">
           <Heart className="text-slate-700 w-10 h-10" />
           <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        </div>
        
        <h1 className="text-8xl font-black text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Lost in the Vault</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          The health record or page you're looking for doesn't exist or has been moved to a more secure location.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/dashboard" 
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all"
          >
            <Home size={18} /> Go to Dashboard
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="bg-slate-800 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-all"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;