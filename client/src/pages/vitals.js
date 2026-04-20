import React from 'react';
import DashboardLayout from "../components/DashboardLayout";
import { Activity, Heart, Droplets, Thermometer, Plus } from "lucide-react";

const Vitals = () => {
  const stats = [
    { name: "Blood Sugar", val: "98", unit: "mg/dL", icon: Droplets, color: "text-cyan-400" },
    { name: "Heart Rate", val: "72", unit: "bpm", icon: Heart, color: "text-red-400" },
    { name: "Blood Pressure", val: "120/80", unit: "mmHg", icon: Activity, color: "text-blue-400" },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Vital Signs</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"><Plus size={18}/> Log Vital</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* List of Vitals */}
          <div className="space-y-4">
            {stats.map(s => (
              <div key={s.name} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <s.icon className={s.color} size={28}/>
                  <div>
                    <p className="text-slate-400 text-sm">{s.name}</p>
                    <p className="text-2xl font-bold text-white">{s.val} <span className="text-sm font-normal text-slate-500">{s.unit}</span></p>
                  </div>
                </div>
                <div className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">NORMAL</div>
              </div>
            ))}
          </div>

          {/* Simple Chart Placeholder */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[300px]">
             <Activity className="text-slate-800 mb-4" size={60} />
             <p className="text-slate-500">Graph analytics will appear here as you log data.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Vitals;