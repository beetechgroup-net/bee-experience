import { Header } from './components/Header/Header';
import { ExperienceList } from './components/ExperienceList/ExperienceList';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
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
      </main>
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Bee Experiences. Desenvolvido com React e TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

