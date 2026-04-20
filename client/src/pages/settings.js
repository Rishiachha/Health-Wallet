import React, { useState } from 'react';
import DashboardLayout from "../components/DashboardLayout";
import { User, Shield, Bell, Lock, Save, Trash2, Smartphone } from "lucide-react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567"
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile Settings Saved Locally!");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Account Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation for Settings */}
          <div className="space-y-2">
            {['Profile', 'Security', 'Notifications', 'Data'].map((item) => (
              <button key={item} className={`w-full text-left px-4 py-3 rounded-xl transition-all ${item === 'Profile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}>
                {item}
              </button>
            ))}
          </div>

          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-blue-500" />
                <h2 className="text-xl font-bold text-white">Personal Information</h2>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2 text-left ml-1">Full Name</label>
                  <input 
                    type="text" 
                    value={profile.name}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none"
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2 text-left ml-1">Email Address</label>
                  <input 
                    type="email" 
                    value={profile.email}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none"
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-500 transition-all">
                  <Save size={18}/> Save Changes
                </button>
              </form>
            </section>

            {/* Danger Zone */}
            <section className="bg-red-500/5 border border-red-500/20 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Trash2 className="text-red-500" />
                <h2 className="text-xl font-bold text-red-500">Danger Zone</h2>
              </div>
              <p className="text-slate-400 text-sm mb-6">Permanently delete your health records and account data. This action cannot be undone.</p>
              <button className="bg-red-500/10 text-red-500 border border-red-500/50 px-6 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all">
                Delete My Account
              </button>
            </section>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;