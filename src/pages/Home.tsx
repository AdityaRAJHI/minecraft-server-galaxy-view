
import React, { useState, useEffect } from 'react';
import { servers, ServerCategory } from '@/data/servers';
import ServerCard from '@/components/ServerCard';
import FilterBar from '@/components/FilterBar';

const Home = () => {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<ServerCategory[]>([]);
  const [filteredServers, setFilteredServers] = useState(servers);

  useEffect(() => {
    let result = servers;
    
    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(server => 
        server.name.toLowerCase().includes(searchLower) ||
        server.address.toLowerCase().includes(searchLower) ||
        server.description.toLowerCase().includes(searchLower) ||
        server.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter(server => selectedCategories.includes(server.category));
    }
    
    setFilteredServers(result);
  }, [search, selectedCategories]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-minecraft-dirt py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU3NDUzMSIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
            Minecraft Pocket Edition Servers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover the best servers for Minecraft Bedrock Edition. Connect, play, and build with friends!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="minecraft-btn px-6 py-3 text-lg">
              Browse Servers
            </button>
            <a 
              href="https://github.com/rajxvision/awesome-mcp-servers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="minecraft-btn px-6 py-3 text-lg bg-minecraft-stone border-gray-700 hover:bg-minecraft-stone/90"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      {/* Server List Section */}
      <div className="flex-grow">
        <FilterBar 
          search={search} 
          setSearch={setSearch} 
          selectedCategories={selectedCategories} 
          setSelectedCategories={setSelectedCategories} 
        />
        
        <div className="container mx-auto px-4 py-8">
          {filteredServers.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">No servers found</h2>
              <p className="text-gray-500">Try changing your search or filters</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedCategories.length > 0 
                    ? `${selectedCategories.join(', ')} Servers` 
                    : 'All Servers'}
                </h2>
                <p className="text-gray-500">{filteredServers.length} servers found</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServers.map((server) => (
                  <ServerCard key={server.id} server={server} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
