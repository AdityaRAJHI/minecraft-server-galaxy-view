
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4 max-w-md">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 bg-minecraft-dirt rounded-sm"></div>
          <div className="absolute inset-0 transform translate-y-1 translate-x-1">
            <div className="bg-minecraft-grass h-full w-full rounded-sm flex items-center justify-center text-white text-4xl font-bold">
              ?
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Oops! The server you're looking for doesn't exist or has moved to a different address.
        </p>
        
        <div className="pt-6">
          <Button asChild className="bg-minecraft-grass hover:bg-minecraft-grass/90">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Server List
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
