import React from 'react';
import { motion } from "framer-motion";
import DashboardLayout from "../components/DashboardLayout";
import { Heart, Activity, Droplets, Plus, ArrowUpRight, FileText } from "lucide-react";

const Dashboard = () => {
  const vitals = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', icon: Heart, color: 'text-red-400', bg: 'bg-red-400/10' },
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: Activity, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { label: 'Blood Sugar', value: '98', unit: 'mg/dL', icon: Droplets, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-3xl font-bold text-white">Health Dashboard</h1>
            <p className="text-slate-400">Your health telemetry and records.</p>
          </motion.div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
            <Plus size={20} /> New Upload
          </button>
        </header>

        {/* Vital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {vitals.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.bg} p-3 rounded-xl`}><stat.icon className={stat.color} size={24} /></div>
                <span className="text-green-400 text-xs font-bold flex items-center bg-green-400/10 px-2 py-1 rounded-full">
                  <ArrowUpRight size={12} className="mr-1" /> STABLE
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-slate-500 text-sm font-medium">{stat.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for Recent Activity */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-6">Recent Reports</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-slate-800/20 rounded-xl border border-slate-800/50 hover:bg-slate-800/40 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg"><FileText size={20}/></div>
                  <div>
                    <p className="text-sm font-semibold text-white">Medical Report #{item}042</p>
                    <p className="text-xs text-slate-500">Dec 24, 2025 • PDF Format</p>
                  </div>
                </div>
                <button className="text-blue-400 text-xs font-bold hover:text-blue-300">VIEW PDF</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;