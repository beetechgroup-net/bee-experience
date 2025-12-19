import { useState, useEffect } from 'react';
import { TechIcon } from '../TechIcon/TechIcon';

interface HomeProps {
    onSearch: (query: string) => void;
    onTechSelect: (tech: string) => void;
}

export const Home = ({ onSearch, onTechSelect }: HomeProps) => {
    const [query, setQuery] = useState('');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
            {/* Parallax Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                {/* Hexagon 1 */}
                <div
                    className="absolute top-[10%] left-[5%] opacity-20"
                    style={{ transform: `translateY(${scrollY * 0.2}px) rotate(15deg)` }}
                >
                    <svg width="200" height="200" viewBox="0 0 200 200" className="text-bee-yellow fill-current">
                        <path d="M100 0 L186.6 50 L186.6 150 L100 200 L13.4 150 L13.4 50 Z" />
                    </svg>
                </div>

                {/* Hexagon 2 */}
                <div
                    className="absolute bottom-[20%] right-[10%] opacity-10"
                    style={{ transform: `translateY(${-scrollY * 0.1}px) rotate(-10deg)` }}
                >
                    <svg width="300" height="300" viewBox="0 0 200 200" className="text-gray-900 fill-current">
                        <path d="M100 0 L186.6 50 L186.6 150 L100 200 L13.4 150 L13.4 50 Z" />
                    </svg>
                </div>

                {/* Hexagon 3 */}
                <div
                    className="absolute top-[40%] right-[25%] opacity-5"
                    style={{ transform: `translateY(${scrollY * 0.05}px) rotate(45deg)` }}
                >
                    <svg width="150" height="150" viewBox="0 0 200 200" className="text-bee-yellow fill-current">
                        <path d="M100 0 L186.6 50 L186.6 150 L100 200 L13.4 150 L13.4 50 Z" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-4xl px-4 text-center">

                {/* Profile Section */}
                <div className="mb-8 flex flex-col items-center animate-fade-in-up">
                    <div className="relative group mb-6">
                        <div className="absolute -inset-1 bg-gradient-to-r from-bee-yellow to-yellow-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                        <img
                            src="https://github.com/gabrielsmenezes.png"
                            alt="Gabriel Menezes"
                            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                        Gabriel Menezes
                    </h1>
                    <p className="text-xl md:text-2xl text-bee-yellow font-medium mb-4">
                        Software Engineer
                    </p>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                        Desenvolvedor Full Stack apaixonado por criar soluções inovadoras.
                        Especialista em construções escaláveis com <span className="font-semibold text-gray-800">React</span>, <span className="font-semibold text-gray-800">Node.js</span> e <span className="font-semibold text-gray-800">Cloud Computing</span>.
                        Transformando ideias complexas em experiências digitais fluidas.
                    </p>
                </div>

                {/* Search Section */}
                <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative group mb-16 animate-fade-in-up delay-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-bee-yellow to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1 border border-white/50">
                        <div className="pl-6 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Explore meus projetos e experiências..."
                            className="w-full px-6 py-5 text-lg text-gray-800 placeholder-gray-400 bg-transparent border-none focus:ring-0 focus:outline-none"
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="px-8 py-5 bg-gradient-to-r from-bee-yellow to-yellow-400 text-bee-black font-semibold text-lg hover:shadow-md transition-all duration-300"
                        >
                            Buscar
                        </button>
                    </div>
                </form>

                {/* Tags Section */}
                <div className="flex flex-col items-center animate-fade-in-up delay-200">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                        Expertise
                    </span>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['React', 'TypeScript', 'Node.js', 'Java', 'Cloud', 'IoT'].map((tag) => (
                            <button
                                key={tag}
                                onClick={() => onTechSelect(tag)}
                                className="px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 hover:border-bee-yellow hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                            >
                                <TechIcon name={tag} className="w-5 h-5 text-gray-400 group-hover:text-bee-yellow transition-colors" showTooltip={false} />
                                <span className="font-medium text-gray-600 group-hover:text-gray-900">{tag}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
