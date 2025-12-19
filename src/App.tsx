import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/Header/Header';
import { UnifiedList } from '@/components/UnifiedList/UnifiedList';
import { Home } from '@/components/Home/Home';
import { TechFilter } from '@/components/TechFilter/TechFilter';
import { TechIcon } from '@/components/TechIcon/TechIcon';
import { XMarkIcon } from '@heroicons/react/20/solid';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'results'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('results');
  };

  const handleTechSelectFromHome = (tech: string) => {
    setSelectedTechs([tech]);
    setSearchQuery(''); // Clear text search to focus on the tech
    setCurrentView('results');
  };

  const handlePageChange = (view: 'home' | 'results') => {
    setCurrentView(view);
    if (view === 'home') {
      setSearchQuery('');
      setSelectedTechs([]);
    }
  };

  // Scroll to top when switching to results
  useEffect(() => {
    if (currentView === 'results' && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentView]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50/50">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-bee-yellow/5 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-yellow-400/5 rounded-full blur-3xl opacity-60 animate-bounce-slow"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-orange-400/5 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <Header
          currentPage={currentView}
          onPageChange={handlePageChange}
        />

        {currentView === 'home' ? (
          <Home onSearch={handleSearch} onTechSelect={handleTechSelectFromHome} />
        ) : (
          <main ref={scrollRef} className="container mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-80px)]">
            <div className="mb-10 space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">

                <div className="flex flex-col md:flex-row gap-4 w-full items-center">
                  {/* Search Input */}
                  <div className="relative flex-grow group w-full md:w-auto">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-bee-yellow transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-bee-yellow/50 focus:border-bee-yellow/50 transition-all duration-200 sm:text-sm"
                      placeholder="Buscar em resultados..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Tech Filter Dropdown */}
                  <TechFilter
                    selectedTechs={selectedTechs}
                    onChange={setSelectedTechs}
                  />
                </div>
              </div>

              {/* Selected Tags Row */}
              {(selectedTechs.length > 0 || searchQuery) && (
                <div className="flex flex-wrap items-center gap-3 px-1">
                  {selectedTechs.map(tech => (
                    <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-bee-yellow/10 text-bee-black border border-bee-yellow/20 transition-all hover:bg-bee-yellow/20">
                      <TechIcon name={tech} className="w-3.5 h-3.5" showTooltip={false} />
                      {tech}
                      <button
                        onClick={() => setSelectedTechs(prev => prev.filter(t => t !== tech))}
                        className="ml-1 p-0.5 hover:bg-black/10 rounded-full transition-colors"
                      >
                        <XMarkIcon className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {(selectedTechs.length > 0 || searchQuery) && (
                    <button
                      onClick={() => { setSelectedTechs([]); setSearchQuery(''); }}
                      className="text-xs text-gray-500 hover:text-bee-black underline decoration-dotted transition-colors"
                    >
                      Limpar filtros
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-12">
              <UnifiedList searchQuery={searchQuery} selectedTechs={selectedTechs} />
            </div>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
