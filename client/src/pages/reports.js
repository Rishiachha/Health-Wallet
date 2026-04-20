import React, { useState } from 'react';
import DashboardLayout from "../components/DashboardLayout";
import { Search, FileText, Plus, Filter, Download } from "lucide-react";

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const reports = [
    { id: 1, name: "Blood Test - Annual", date: "Dec 20, 2025", type: "Diagnostic" },
    { id: 2, name: "Chest X-Ray", date: "Nov 15, 2025", type: "Imaging" },
    { id: 3, name: "Cardiology Report", date: "Oct 02, 2025", type: "Specialist" },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Medical Reports</h1>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center gap-2">
            <Plus size={18}/> Upload PDF
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-3.5 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Search by report name or doctor..." 
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:border-blue-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-3">
          {reports.map(report => (
            <div key={report.id} className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl flex items-center justify-between hover:bg-slate-800/50 transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500"><FileText/></div>
                <div>
                  <h3 className="font-semibold text-white">{report.name}</h3>
                  <p className="text-slate-500 text-sm">{report.date} • {report.type}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:text-white"><Download size={18}/></button>
                <button className="text-blue-500 text-sm font-bold px-3 py-1 hover:underline">VIEW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;