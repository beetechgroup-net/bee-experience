import { useState } from 'react';
import { Header } from './components/Header/Header';
import { ExperienceList } from './components/ExperienceList/ExperienceList';
import { ProjectList } from './components/ProjectList/ProjectList';
import { Home } from './components/Home/Home';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'results'>('home');
  const [searchQuery, setSearchQuery] = useState('');

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
          </div>

          <div className="space-y-16">
            <ExperienceList searchQuery={searchQuery} />
            <ProjectList searchQuery={searchQuery} />
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
