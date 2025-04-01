
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servers } from '@/data/servers';
import { Globe, Users, Copy, ExternalLink, ArrowLeft, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import NotFound from './NotFound';

const ServerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const server = servers.find(s => s.id === id);

  if (!server) {
    return <NotFound />;
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(`${server.address}:${server.port}`);
    toast.success('Server address copied to clipboard!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-minecraft-grass hover:text-minecraft-grass/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Server List
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="minecraft-container mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-sm border border-gray-200 overflow-hidden flex-shrink-0">
                <img 
                  src={server.logo || '/placeholder.svg'} 
                  alt={`${server.name} logo`} 
                  className="w-full h-full object-cover pixelated"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{server.name}</h1>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <Badge variant="outline" className="bg-minecraft-grass/10 text-minecraft-grass border-minecraft-grass/30">
                    {server.category}
                  </Badge>
                  {server.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{server.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center bg-minecraft-stone/20 rounded-full">
                    <Globe className="h-3 w-3 text-minecraft-stone" />
                  </span>
                  Server Address
                </h3>
                <div className="flex items-center">
                  <code className="bg-gray-200 px-3 py-1 rounded text-gray-800 font-mono text-sm flex-grow">
                    {server.address}:{server.port}
                  </code>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="ml-2" 
                    onClick={copyAddress}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {server.playerCount && (
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center bg-minecraft-grass/20 rounded-full">
                      <Users className="h-3 w-3 text-minecraft-grass" />
                    </span>
                    Player Count
                  </h3>
                  <div className="flex items-center">
                    <div className="bg-gray-200 px-3 py-1 rounded text-gray-800 font-mono text-sm">
                      {server.playerCount.online} / {server.playerCount.max} online
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {server.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center bg-minecraft-grass/20 rounded-full text-minecraft-grass">
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button 
                className="bg-minecraft-grass hover:bg-minecraft-grass/90 text-white"
                onClick={copyAddress}
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy Server Address
              </Button>
              
              {server.website && (
                <Button 
                  variant="outline"
                  className="border-minecraft-water text-minecraft-water hover:bg-minecraft-water/10"
                  asChild
                >
                  <a href={server.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              )}
              
              {server.discord && (
                <Button 
                  variant="outline"
                  className="border-indigo-400 text-indigo-600 hover:bg-indigo-50"
                  asChild
                >
                  <a href={server.discord} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join Discord
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>How to Join</CardTitle>
              <CardDescription>Follow these steps to connect</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>Open Minecraft Pocket Edition on your device</li>
                <li>Go to the "Play" menu and select "Servers"</li>
                <li>Scroll down and tap on "Add Server"</li>
                <li>Enter the server details:
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li>Server Name: <span className="font-semibold">{server.name}</span></li>
                    <li>Server Address: <span className="font-semibold">{server.address}</span></li>
                    <li>Port: <span className="font-semibold">{server.port}</span></li>
                  </ul>
                </li>
                <li>Tap "Play" to connect to the server</li>
              </ol>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Similar Servers</CardTitle>
              <CardDescription>You might also like these</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {servers
                  .filter(s => 
                    s.id !== server.id && 
                    (s.category === server.category || 
                      s.tags.some(tag => server.tags.includes(tag)))
                  )
                  .slice(0, 4)
                  .map(similarServer => (
                    <Link 
                      key={similarServer.id} 
                      to={`/server/${similarServer.id}`}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-sm overflow-hidden border border-gray-200">
                        <img 
                          src={similarServer.logo || '/placeholder.svg'} 
                          alt={`${similarServer.name} logo`} 
                          className="w-full h-full object-cover pixelated"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{similarServer.name}</h3>
                        <p className="text-xs text-gray-500">{similarServer.category}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServerDetail;
