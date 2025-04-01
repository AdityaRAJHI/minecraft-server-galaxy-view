
import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-minecraft-grass rounded-sm flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">MCP Servers</h1>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link to="/submit" className="text-gray-600 hover:text-gray-900 transition-colors">
            Submit Server
          </Link>
          <a 
            href="https://github.com/AdityaRAJHI/mcp-rks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
