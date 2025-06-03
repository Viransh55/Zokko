import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from 'lucide-react';

// Contexts
import { PlayerProvider } from './context/PlayerContext';
import { ChatbotProvider } from './context/ChatbotContext';

// Components
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import ChatbotButton from './components/ChatbotButton';

// Pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';
import ChatbotPage from './pages/ChatbotPage';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <PlayerProvider>
      <ChatbotProvider>
        <Router>
          <div className="flex h-screen overflow-hidden bg-black">
            {/* Sidebar - desktop */}
            <div className="hidden md:block sidebar-layer h-full">
              <Sidebar />
            </div>
            
            {/* Sidebar - mobile overlay */}
            {sidebarOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-70 z-30 md:hidden">
                <div className="w-64 h-full">
                  <Sidebar onClose={() => setSidebarOpen(false)} isMobile={true} />
                </div>
              </div>
            )}
            
            {/* Main content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Mobile header */}
              <div className="md:hidden bg-[#111] p-4 flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="text-gray-400 hover:text-white mr-4 button-transition"
                >
                  <Menu size={24} />
                </button>
                <h1 className="text-xl font-bold text-white">Zokko</h1>
              </div>
              
              {/* Page content */}
              <div className="flex-1 overflow-y-auto">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/library" element={<LibraryPage />} />
                  <Route path="/chatbot" element={<ChatbotPage />} />
                </Routes>
              </div>
              
              {/* Music player */}
              <MusicPlayer />
            </div>
            
            {/* Chatbot button - only show on routes other than /chatbot */}
            <Routes>
              <Route path="/chatbot" element={null} />
              <Route path="*" element={<ChatbotButton />} />
            </Routes>
          </div>
        </Router>
      </ChatbotProvider>
    </PlayerProvider>
  );
};

export default App;