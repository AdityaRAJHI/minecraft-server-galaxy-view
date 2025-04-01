
import React from 'react';
import { Github, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About MCP Servers</h1>
        
        <div className="minecraft-container mb-8">
          <h2 className="text-2xl font-bold mb-4">What is MCP Servers?</h2>
          <p className="text-gray-700 mb-4">
            MCP Servers is a curated directory of the best Minecraft Pocket Edition (Bedrock) servers.
            Our goal is to help players discover high-quality servers that match their interests and playstyles.
          </p>
          <p className="text-gray-700 mb-4">
            This website is based on the awesome GitHub repository 
            <a 
              href="https://github.com/AdityaRAJHI/mcp-rks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-minecraft-grass hover:underline mx-1"
            >
              AdityaRAJHI/mcp-rks
            </a>
            which aims to collect and showcase the best Minecraft PE servers from around the world.
          </p>
          
          <div className="flex justify-center mt-6">
            <Button asChild>
              <a 
                href="https://github.com/AdityaRAJHI/mcp-rks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span>View on GitHub</span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="minecraft-container mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Use Our Directory?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-minecraft-grass/20 text-minecraft-grass rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Curated Selection</h3>
              <p className="text-gray-600 text-sm">
                We only list quality servers that have been vetted and tested
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-minecraft-water/20 text-minecraft-water rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Regularly Updated</h3>
              <p className="text-gray-600 text-sm">
                Our list is constantly being updated with new servers and information
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-minecraft-gold/20 text-minecraft-gold rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Community Driven</h3>
              <p className="text-gray-600 text-sm">
                Powered by the Minecraft community's recommendations and feedback
              </p>
            </div>
          </div>
        </div>
        
        <div className="minecraft-container">
          <h2 className="text-2xl font-bold mb-4">How to Contribute</h2>
          <p className="text-gray-700 mb-4">
            We welcome contributions from the Minecraft community! If you know of a great server that's not listed,
            or if you'd like to update information about an existing server, you can contribute in the following ways:
          </p>
          
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Submit a server:</strong> Use our 
              <a href="/submit" className="text-minecraft-grass hover:underline mx-1">submission form</a> 
              to suggest a new server for our directory.
            </li>
            <li>
              <strong>GitHub contribution:</strong> Submit a pull request to our 
              <a 
                href="https://github.com/AdityaRAJHI/mcp-rks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-minecraft-grass hover:underline mx-1"
              >
                GitHub repository
              </a>.
            </li>
            <li>
              <strong>Report issues:</strong> If you find incorrect information or broken links, please let us know.
            </li>
          </ul>
          
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-minecraft-grass hover:bg-minecraft-grass/90">
              <a href="/submit">Submit a Server</a>
            </Button>
            <Button asChild variant="outline">
              <a 
                href="https://github.com/AdityaRAJHI/mcp-rks/issues" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Report an Issue
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
