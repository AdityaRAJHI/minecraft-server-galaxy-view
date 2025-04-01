
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useMobile from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-minecraft-grass shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/placeholder.svg" 
                alt="MCP Servers Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="font-bold text-white text-lg">MCP Servers</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/resources" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
              <Link to="/submit" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Submit Server
              </Link>
              <Link to="/about" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Button variant="secondary" size="sm" asChild>
                <a 
                  href="https://github.com/AdityaRAJHI/mcp-rks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-minecraft-grass-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-minecraft-grass-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:bg-minecraft-grass block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/resources"
              className="text-white hover:bg-minecraft-grass block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/submit"
              className="text-white hover:bg-minecraft-grass block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Server
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-minecraft-grass block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="https://github.com/AdityaRAJHI/mcp-rks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-minecraft-grass flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
