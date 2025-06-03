import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, MessageSquare, X, Music } from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose, isMobile = false }) => {
  return (
    <div className="bg-black w-64 h-full flex flex-col">
      <div className="flex items-center p-6">
        <Music size={24} className="text-[#1DB954] mr-2" />
        <h1 className="text-white text-2xl font-bold">Zokko</h1>
        {isMobile && (
          <button 
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-white button-transition"
          >
            <X size={24} />
          </button>
        )}
      </div>
      
      <nav className="flex-1 px-2">
        <NavLink 
          to="/"
          className={({ isActive }) => 
            `flex items-center px-4 py-3 my-1 rounded-md text-sm font-medium transition-colors ${
              isActive 
                ? 'bg-[#282828] text-white' 
                : 'text-gray-400 hover:text-white'
            }`
          }
          onClick={onClose}
        >
          <Home size={20} className="mr-3" />
          Home
        </NavLink>
        
        <NavLink 
          to="/search"
          className={({ isActive }) => 
            `flex items-center px-4 py-3 my-1 rounded-md text-sm font-medium transition-colors ${
              isActive 
                ? 'bg-[#282828] text-white' 
                : 'text-gray-400 hover:text-white'
            }`
          }
          onClick={onClose}
        >
          <Search size={20} className="mr-3" />
          Search
        </NavLink>
        
        <NavLink 
          to="/library"
          className={({ isActive }) => 
            `flex items-center px-4 py-3 my-1 rounded-md text-sm font-medium transition-colors ${
              isActive 
                ? 'bg-[#282828] text-white' 
                : 'text-gray-400 hover:text-white'
            }`
          }
          onClick={onClose}
        >
          <Library size={20} className="mr-3" />
          Library
        </NavLink>
        
        <NavLink 
          to="/chatbot"
          className={({ isActive }) => 
            `flex items-center px-4 py-3 my-1 rounded-md text-sm font-medium transition-colors ${
              isActive 
                ? 'bg-[#282828] text-white' 
                : 'text-gray-400 hover:text-white'
            }`
          }
          onClick={onClose}
        >
          <MessageSquare size={20} className="mr-3" />
          Chatbot
        </NavLink>
      </nav>
      
      <div className="p-6">
        <div className="text-xs text-gray-500">
          &copy; 2025 Zokko Music
        </div>
      </div>
    </div>
  );
};

export default Sidebar;