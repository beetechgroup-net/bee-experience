import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/Header/Header';
import { ExperienceList } from '@/components/ExperienceList/ExperienceList';
import { ProjectList } from '@/components/ProjectList/ProjectList';
import { Home } from '@/components/Home/Home';
import { TechFilter } from '@/components/TechFilter/TechFilter';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'results'>('home');
  const [activeFilter, setActiveFilter] = useState<'all' | 'experiences' | 'projects'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('results');
    // If searching by text, we might want to keep existing tech filters or clear them.
    // User request: "se eu selecionei na hora deve manter selecionado". 
    // This probably refers to selecting a tech icon.
    // If I type a text, I probably want to search within that context or globally.
    // Let's keep selectedTechs as is when text searching.
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
            <div className="mb-10 space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="relative w-full md:w-96 group">
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

                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  <TechFilter
                    selectedTechs={selectedTechs}
                    onChange={setSelectedTechs}
                  />

                  <div className="flex p-1 space-x-1 bg-gray-100/80 rounded-xl">
                    {(['all', 'experiences', 'projects'] as const).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                            px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                            ${activeFilter === filter
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                          }
                          `}
                      >
                        {filter === 'all' ? 'Todos' : filter === 'experiences' ? 'Experiências' : 'Projetos'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Search/Filter Indicators */}
              {(searchQuery || selectedTechs.length > 0) && (
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/50 p-3 rounded-lg border border-gray-100 inline-block">
                  <span>Resultados para:</span>
                  {searchQuery && <span className="font-semibold text-gray-900">"{searchQuery}"</span>}
                  {searchQuery && selectedTechs.length > 0 && <span>+</span>}
                  {selectedTechs.length > 0 && <span className="font-semibold text-gray-900">{selectedTechs.join(', ')}</span>}
                </div>
              )}
            </div>

            <div className="space-y-12">
              {(activeFilter === 'all' || activeFilter === 'experiences') && (
                <section className={activeFilter === 'all' ? 'mb-16' : ''}>
                  {activeFilter === 'all' && (
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="text-2xl font-bold text-gray-900">Experiências</h2>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>
                  )}
                  <ExperienceList searchQuery={searchQuery} selectedTechs={selectedTechs} />
                </section>
              )}

              {(activeFilter === 'all' || activeFilter === 'projects') && (
                <section>
                  {activeFilter === 'all' && (
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="text-2xl font-bold text-gray-900">Projetos</h2>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>
                  )}
                  <ProjectList searchQuery={searchQuery} selectedTechs={selectedTechs} />
                </section>
              )}
            </div>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
