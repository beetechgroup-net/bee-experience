import { useState } from 'react';
import { Header } from './components/Header/Header';
import { ExperienceList } from './components/ExperienceList/ExperienceList';
import { ProjectList } from './components/ProjectList/ProjectList';
import { Home } from './components/Home/Home';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'results'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'experiences' | 'projects'>('all');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('results');
  };

  const handlePageChange = (page: 'home' | 'results') => {
    setCurrentView(page);
    if (page === 'home') {
      setSearchQuery('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header currentPage={currentView} onPageChange={handlePageChange} />

      {currentView === 'home' ? (
        <Home onSearch={handleSearch} />
      ) : (
        <main className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {searchQuery ? (
                <>
                  Resultados para <span className="gradient-text">"{searchQuery}"</span>
                </>
              ) : (
                <>
                  Todas as <span className="gradient-text">Experiências e Projetos</span>
                </>
              )}
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              {searchQuery
                ? 'Confira o que encontramos com base na sua pesquisa'
                : 'Explore minhas experiências profissionais e projetos desenvolvidos'
              }
            </p>

            {/* Barra de Pesquisa na página de resultados */}
            <div className="max-w-2xl mx-auto mt-8 mb-8 relative group">
              <div className="relative flex items-center bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 focus-within:ring-2 focus-within:ring-bee-yellow focus-within:border-transparent transition-all">
                <div className="pl-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar..."
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-transparent border-none focus:ring-0 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="pr-4 text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Filtros */}
            <div className="flex justify-center flex-wrap gap-2 mt-6">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${activeFilter === 'all'
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveFilter('experiences')}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${activeFilter === 'experiences'
                    ? 'bg-bee-yellow text-bee-black shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                Experiências
              </button>
              <button
                onClick={() => setActiveFilter('projects')}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${activeFilter === 'projects'
                    ? 'bg-bee-yellow text-bee-black shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                Projetos
              </button>
            </div>
          </div>

          <div className="space-y-16">
            {(activeFilter === 'all' || activeFilter === 'experiences') && (
              <ExperienceList searchQuery={searchQuery} />
            )}

            {(activeFilter === 'all' || activeFilter === 'projects') && (
              <ProjectList searchQuery={searchQuery} />
            )}
          </div>
        </main>
      )}

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Bee Experience. Desenvolvido com React e TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
