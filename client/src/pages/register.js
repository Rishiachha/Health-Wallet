import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, User, Mail, Lock, ArrowRight } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl">
        <div className="text-center mb-8">
          <Heart className="text-blue-500 mx-auto mb-4" size={40} fill="currentColor" />
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
        </div>

        <form className="space-y-4">
          <input placeholder="Full Name" className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white outline-none focus:border-blue-500" />
          <input placeholder="Email Address" type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white outline-none focus:border-blue-500" />
          <input placeholder="Password" type="password" className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-white outline-none focus:border-blue-500" />
          
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl mt-4 flex items-center justify-center gap-2">
            Register <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-6">
          Already have an account? <Link to="/login" className="text-blue-500 font-bold">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;