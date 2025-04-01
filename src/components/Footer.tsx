
import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-12 py-8 border-t border-gray-200 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About MCP Servers</h3>
            <p className="text-gray-600">
              A curated list of awesome Minecraft Pocket Edition (Bedrock) servers
              that you can join and play with friends.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/AdityaRAJHI/mcp-rks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-minecraft-grass hover:underline flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a href="/submit" className="text-minecraft-grass hover:underline">
                  Submit Your Server
                </a>
              </li>
              <li>
                <a href="/about" className="text-minecraft-grass hover:underline">
                  About This Project
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <span className="text-gray-500 text-sm">
                  This site is not affiliated with Mojang Studios
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MCP Servers Directory. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500" /> by the Minecraft community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
