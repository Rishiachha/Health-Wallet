import React from 'react';
import DashboardLayout from "../components/DashboardLayout";
import { UserPlus, ShieldCheck, Mail, X } from "lucide-react";

const Sharing = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Secure Sharing</h1>
        <p className="text-slate-400 mb-8">Grant doctors or family access to your medical records.</p>

        <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-3xl mb-8 flex gap-4 items-center">
           <ShieldCheck className="text-blue-500" size={32}/>
           <p className="text-sm text-blue-200">Shared users can only <b>view</b> your data. They cannot delete or change your records.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-8">
          <h3 className="font-bold text-white mb-4">Invite Member</h3>
          <div className="flex gap-3">
            <input type="email" placeholder="doctor@hospital.com" className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-500 transition">Send Invite</button>
          </div>
        </div>

        <h3 className="font-bold text-white mb-4">Current Access</h3>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400 font-bold">DS</div>
               <div>
                 <p className="text-white font-medium text-sm">Dr. Sarah Smith</p>
                 <p className="text-slate-500 text-xs">sarah@cityclinic.com</p>
               </div>
             </div>
             <button className="text-red-400 hover:bg-red-400/10 p-2 rounded-lg transition"><X size={18}/></button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Sharing;