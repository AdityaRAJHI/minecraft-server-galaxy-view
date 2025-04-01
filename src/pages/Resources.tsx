
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Package, Database, Terminal, MessageSquare, Cloud, Users, FileText, BarChart3, Laptop, FolderOpen, Zap, Code } from 'lucide-react';

const ResourceCategory = ({ 
  title, 
  description, 
  icon: Icon, 
  anchorName,
  children 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  anchorName: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-12" id={anchorName}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-6 w-6 text-minecraft-grass" />
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
};

const ResourceLink = ({ url, title, description }: { url: string; title: string; description: string }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 hover:border-minecraft-grass transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-800">{title}</h3>
        <Button variant="ghost" size="sm" asChild>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </Button>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-minecraft-dirt py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU3NDUzMSIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            MCP Server Resources
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A curated collection of Model Context Protocol servers and tools for the Minecraft PE community.
          </p>
        </div>
      </div>

      {/* Resources Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Button variant="outline" asChild className="justify-start">
              <a href="#aggregators" className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                <span>Aggregators</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#art-and-culture" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Art & Culture</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#browser-automation" className="flex items-center gap-2">
                <Laptop className="h-5 w-5" />
                <span>Browser Automation</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#cloud-platforms" className="flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                <span>Cloud Platforms</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#code-execution" className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <span>Code Execution</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#command-line" className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                <span>Command Line</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#communication" className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <span>Communication</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#customer-data-platforms" className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Customer Data Platforms</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#databases" className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                <span>Databases</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#data-platforms" className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                <span>Data Platforms</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#developer-tools" className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Developer Tools</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <a href="#file-systems" className="flex items-center gap-2">
                <FolderOpen className="h-5 w-5" />
                <span>File Systems</span>
              </a>
            </Button>
          </div>
        </div>

        <ResourceCategory 
          title="🔗 Aggregators" 
          description="Servers for accessing many apps and tools through a single MCP server."
          icon={Package}
          anchorName="aggregators"
        >
          <ResourceLink 
            url="https://github.com/PipedreamHQ/pipedream/tree/master/modelcontextprotocol"
            title="PipedreamHQ/pipedream"
            description="Connect with 2,500 APIs with 8,000+ prebuilt tools, and manage servers for your users, in your own app."
          />
        </ResourceCategory>

        <ResourceCategory 
          title="🎨 Art & Culture" 
          description="Access and explore art collections, cultural heritage, and museum databases. Enables AI models to search and analyze artistic and cultural content."
          icon={FileText}
          anchorName="art-and-culture"
        >
          <ResourceLink 
            url="https://github.com/abhiemj/manim-mcp-server"
            title="abhiemj/manim-mcp-server"
            description="A local MCP server that generates animations using Manim."
          />
          <ResourceLink 
            url="https://github.com/burningion/video-editing-mcp"
            title="burningion/video-editing-mcp"
            description="Add, Analyze, Search, and Generate Video Edits from your Video Jungle Collection"
          />
          <ResourceLink 
            url="https://github.com/djalal/quran-mcp-server"
            title="djalal/quran-mcp-server"
            description="MCP server to interact with Quran.com corpus via the official REST API v4."
          />
          <ResourceLink 
            url="https://github.com/r-huijts/rijksmuseum-mcp"
            title="r-huijts/rijksmuseum-mcp"
            description="Rijksmuseum API integration for artwork search, details, and collections"
          />
          <ResourceLink 
            url="https://github.com/r-huijts/oorlogsbronnen-mcp"
            title="r-huijts/oorlogsbronnen-mcp"
            description="Oorlogsbronnen (War Sources) API integration for accessing historical WWII records from the Netherlands (1940-1945)"
          />
          <ResourceLink 
            url="https://github.com/samuelgursky/davinci-resolve-mcp"
            title="samuelgursky/davinci-resolve-mcp"
            description="MCP server integration for DaVinci Resolve providing tools for video editing and color grading"
          />
          <ResourceLink 
            url="https://github.com/yuna0x0/anilist-mcp"
            title="yuna0x0/anilist-mcp"
            description="A MCP server integrating AniList API for anime and manga information"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="📂 Browser Automation" 
          description="Web content access and automation capabilities. Enables searching, scraping, and processing web content in AI-friendly formats."
          icon={Laptop}
          anchorName="browser-automation"
        >
          <ResourceLink 
            url="https://github.com/34892002/bilibili-mcp-js"
            title="34892002/bilibili-mcp-js"
            description="A MCP server that supports searching for Bilibili content. Provides LangChain integration examples and test scripts."
          />
          <ResourceLink 
            url="https://github.com/Automata-Labs-team/MCP-Server-Playwright"
            title="automatalabs/mcp-server-playwright"
            description="An MCP server for browser automation using Playwright"
          />
          <ResourceLink 
            url="https://github.com/blackwhite084/playwright-plus-python-mcp"
            title="blackwhite084/playwright-plus-python-mcp"
            description="An MCP python server using Playwright for browser automation, more suitable for LLM"
          />
          <ResourceLink 
            url="https://github.com/browserbase/mcp-server-browserbase"
            title="browserbase/mcp-server-browserbase"
            description="Automate browser interactions in the cloud (web navigation, data extraction, form filling, and more)"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="☁️ Cloud Platforms" 
          description="Cloud platform service integration. Enables management and interaction with cloud infrastructure and services."
          icon={Cloud}
          anchorName="cloud-platforms"
        >
          <ResourceLink 
            url="https://github.com/alexei-led/aws-mcp-server"
            title="alexei-led/aws-mcp-server"
            description="A lightweight server that enables AI assistants to execute AWS CLI commands in a safe Docker environment"
          />
          <ResourceLink 
            url="https://github.com/alexei-led/k8s-mcp-server"
            title="alexei-led/k8s-mcp-server"
            description="A server that empowers AI assistants to securely execute Kubernetes CLI commands"
          />
          <ResourceLink 
            url="https://github.com/bright8192/esxi-mcp-server"
            title="bright8192/esxi-mcp-server"
            description="A VMware ESXi/vCenter management server based on MCP, providing simple REST API interfaces for VM management"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="👨‍💻 Code Execution" 
          description="Code execution servers. Allow LLMs to execute code in a secure environment, e.g. for coding agents."
          icon={Code}
          anchorName="code-execution"
        >
          <ResourceLink 
            url="https://github.com/pydantic/pydantic-ai/tree/main/mcp-run-python"
            title="pydantic/pydantic-ai/mcp-run-python"
            description="Run Python code in a secure sandbox via MCP tool calls"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="🖥️ Command Line" 
          description="Run commands, capture output and otherwise interact with shells and command line tools."
          icon={Terminal}
          anchorName="command-line"
        >
          <ResourceLink 
            url="https://github.com/ferrislucas/iterm-mcp"
            title="ferrislucas/iterm-mcp"
            description="A Model Context Protocol server that provides access to iTerm"
          />
          <ResourceLink 
            url="https://github.com/g0t4/mcp-server-commands"
            title="g0t4/mcp-server-commands"
            description="Run any command with run_command and run_script tools"
          />
          <ResourceLink 
            url="https://github.com/maxim-saplin/mcp_safe_local_python_executor"
            title="maxim-saplin/mcp_safe_local_python_executor"
            description="Safe Python interpreter based on HF Smolagents LocalPythonExecutor"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="💬 Communication" 
          description="Integration with communication platforms for message management and channel operations. Enables AI models to interact with team communication tools."
          icon={MessageSquare}
          anchorName="communication"
        >
          <ResourceLink 
            url="https://github.com/AbdelStark/nostr-mcp"
            title="AbdelStark/nostr-mcp"
            description="A Nostr MCP server that allows to interact with Nostr, enabling posting notes, and more"
          />
          <ResourceLink 
            url="https://github.com/adhikasp/mcp-twikit"
            title="adhikasp/mcp-twikit"
            description="Interact with Twitter search and timeline"
          />
          <ResourceLink 
            url="https://github.com/agentmail-to/agentmail-toolkit/tree/main/mcp"
            title="agentmail-toolkit/mcp"
            description="An MCP server to create inboxes on the fly to send, receive, and take actions on email"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="👤 Customer Data Platforms" 
          description="Provides access to customer profiles inside of customer data platforms"
          icon={Users}
          anchorName="customer-data-platforms"
        >
          <ResourceLink 
            url="https://github.com/iaptic/mcp-server-iaptic"
            title="iaptic/mcp-server-iaptic"
            description="Connect with iaptic to ask about your Customer Purchases, Transaction data and App Revenue statistics"
          />
          <ResourceLink 
            url="https://github.com/OpenDataMCP/OpenDataMCP"
            title="OpenDataMCP/OpenDataMCP"
            description="Connect any Open Data to any LLM with Model Context Protocol"
          />
          <ResourceLink 
            url="https://github.com/sergehuber/inoyu-mcp-unomi-server"
            title="sergehuber/inoyu-mcp-unomi-server"
            description="An MCP server to access and updates profiles on an Apache Unomi CDP server"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="🗄️ Databases" 
          description="Secure database access with schema inspection capabilities. Enables querying and analyzing data with configurable security controls."
          icon={Database}
          anchorName="databases"
        >
          <ResourceLink 
            url="https://github.com/Aiven-Open/mcp-aiven"
            title="Aiven-Open/mcp-aiven"
            description="Navigate your Aiven projects and interact with PostgreSQL, Apache Kafka, ClickHouse and OpenSearch services"
          />
          <ResourceLink 
            url="https://github.com/alexander-zuev/supabase-mcp-server"
            title="alexanderzuev/supabase-mcp-server"
            description="Supabase MCP Server with support for SQL query execution and database exploration tools"
          />
          <ResourceLink 
            url="https://github.com/aliyun/alibabacloud-tablestore-mcp-server"
            title="aliyun/alibabacloud-tablestore-mcp-server"
            description="MCP service for Tablestore, features include adding documents and semantic search"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="📊 Data Platforms" 
          description="Data Platforms for data integration, transformation and pipeline orchestration."
          icon={BarChart3}
          anchorName="data-platforms"
        >
          <ResourceLink 
            url="https://github.com/JordiNeil/mcp-databricks-server"
            title="JordiNei/mcp-databricks-server"
            description="Connect to Databricks API, allowing LLMs to run SQL queries, list jobs, and get job status"
          />
          <ResourceLink 
            url="https://github.com/keboola/keboola-mcp-server"
            title="keboola/keboola-mcp-server"
            description="Interact with Keboola Connection Data Platform for listing and accessing data from Keboola Storage API"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="💻 Developer Tools" 
          description="Tools and integrations that enhance the development workflow and environment management."
          icon={Zap}
          anchorName="developer-tools"
        >
          <ResourceLink 
            url="https://github.com/21st-dev/magic-mcp"
            title="21st-dev/Magic-MCP"
            description="Create crafted UI components inspired by the best 21st.dev design engineers"
          />
          <ResourceLink 
            url="https://github.com/admica/FileScopeMCP"
            title="admica/FileScopeMCP"
            description="Analyzes your codebase identifying important files based on dependency relationships"
          />
          <ResourceLink 
            url="https://github.com/api7/apisix-mcp"
            title="api7/apisix-mcp"
            description="MCP Server that support for querying and managing all resource in Apache APISIX"
          />
        </ResourceCategory>

        <ResourceCategory 
          title="📂 File Systems" 
          description="Provides direct access to local file systems with configurable permissions. Enables AI models to read, write, and manage files."
          icon={FolderOpen}
          anchorName="file-systems"
        >
          <ResourceLink 
            url="https://github.com/cyberchitta/llm-context.py"
            title="cyberchitta/llm-context.py"
            description="Share code context with LLMs via MCP or clipboard"
          />
          <ResourceLink 
            url="https://github.com/exoticknight/mcp-file-merger"
            title="exoticknight/mcp-file-merger"
            description="File merger tool, suitable for AI chat length limits"
          />
          <ResourceLink 
            url="https://github.com/quarkiverse/quarkus-mcp-servers/tree/main/filesystem"
            title="filesystem@quarkiverse/quarkus-mcp-servers"
            description="A filesystem allowing for browsing and editing files implemented in Java using Quarkus"
          />
        </ResourceCategory>
      </div>
    </div>
  );
};

export default Resources;
