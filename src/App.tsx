import { useState } from 'react';
import { Header } from './components/Header/Header';
import { ExperienceList } from './components/ExperienceList/ExperienceList';
import { ProjectList } from './components/ProjectList/ProjectList';

function App() {
  const [currentPage, setCurrentPage] = useState<'all' | 'experiences' | 'projects'>('all');

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="container mx-auto px-4 py-16">
        {currentPage === 'all' ? (
          <>
            <div className="mb-12 text-center">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Minhas <span className="gradient-text">Experiências e Projetos</span>
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Explore minhas experiências profissionais e projetos desenvolvidos, 
                descobrindo as tecnologias e soluções que criei ao longo da minha carreira
              </p>
            </div>
            <div className="space-y-16">
              <ExperienceList />
              <ProjectList />
            </div>
          </>
        ) : currentPage === 'experiences' ? (
          <>
            <div className="mb-12 text-center">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Minhas <span className="gradient-text">Experiências</span>
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Explore minhas experiências profissionais em desenvolvimento de software, 
                projetos e tecnologias que transformam ideias em realidade
              </p>
            </div>
            <ExperienceList />
          </>
        ) : (
          <>
            <div className="mb-12 text-center">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Meus <span className="gradient-text">Projetos</span>
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Descubra os projetos que desenvolvi, as tecnologias utilizadas e as técnicas aplicadas 
                para criar soluções inovadoras e eficientes
              </p>
            </div>
            <ProjectList />
          </>
        )}
      </main>
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
