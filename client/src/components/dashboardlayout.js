import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Activity, Share2, Settings, LogOut, Heart } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Reports', icon: FileText, path: '/reports' },
    { name: 'Vitals', icon: Activity, path: '/vitals' },
    { name: 'Sharing', icon: Share2, path: '/sharing' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-[#020617] p-6 flex flex-col fixed h-full z-50">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Health<span className="text-blue-500">Wallet</span></span>
        </div>
        
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                location.pathname === item.path ? 'bg-blue-600/10 text-blue-400' : 'hover:bg-slate-900 text-slate-400 hover:text-blue-400'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <button onClick={handleLogout} className="flex items-center gap-3 p-3 text-slate-500 hover:text-red-400 mt-auto transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;