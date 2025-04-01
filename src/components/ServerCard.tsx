
import React from 'react';
import { Link } from 'react-router-dom';
import { MinecraftServer } from '@/data/servers';
import { ExternalLink, Users, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ServerCardProps {
  server: MinecraftServer;
}

const ServerCard: React.FC<ServerCardProps> = ({ server }) => {
  return (
    <div className="minecraft-container flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-sm flex-shrink-0 overflow-hidden border border-gray-200">
          <img 
            src={server.logo || '/placeholder.svg'} 
            alt={`${server.name} logo`} 
            className="w-full h-full object-cover pixelated"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{server.name}</h3>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <span className="font-mono">{server.address}</span>
            <span>:</span>
            <span className="font-mono">{server.port}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-3 flex-grow">{server.description}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        <Badge variant="outline" className="bg-minecraft-grass/10 text-minecraft-grass border-minecraft-grass/30">
          {server.category}
        </Badge>
        {server.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
            {tag}
          </Badge>
        ))}
        {server.tags.length > 3 && (
          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
            +{server.tags.length - 3}
          </Badge>
        )}
      </div>

      {server.playerCount && (
        <div className="text-sm text-gray-600 flex items-center gap-1 mb-3">
          <Users className="w-4 h-4" />
          <span>
            {server.playerCount.online} / {server.playerCount.max} players online
          </span>
        </div>
      )}

      <div className="flex mt-auto pt-3 border-t border-gray-100 gap-2">
        <Button 
          variant="default" 
          className="w-full bg-minecraft-grass hover:bg-minecraft-grass/90 text-white"
          asChild
        >
          <Link to={`/server/${server.id}`}>View Details</Link>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon"
          className="flex-shrink-0"
          onClick={() => {
            navigator.clipboard.writeText(`${server.address}:${server.port}`);
            // In a real app, we'd show a toast here
          }}
          title="Copy Server Address"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default ServerCard;
