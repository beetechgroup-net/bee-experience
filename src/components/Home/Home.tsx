import { useState } from 'react';
import { TechIcon } from '../TechIcon/TechIcon';

interface HomeProps {
    onSearch: (query: string) => void;
    onTechSelect: (tech: string) => void;
}

export const Home = ({ onSearch, onTechSelect }: HomeProps) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-transparent">
            <div className="w-full max-w-4xl px-4 text-center">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                    Descubra o <span className="gradient-text">Extraordinário</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
                    Explore um universo de experiências e projetos inovadores.
                    Digite abaixo para começar sua jornada.
                </p>

                <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-bee-yellow to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1">
                        <div className="pl-6 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="O que você está procurando? (Ex: React, Node, Frontend...)"
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

                <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                    <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 items-center flex gap-2">
                        ✨ Populares:
                    </span>
                    {['React', 'TypeScript', 'Node.js', 'Frontend', 'Backend'].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => onTechSelect(tag)}
                            className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:border-bee-yellow hover:text-bee-yellow transition-colors cursor-pointer flex items-center gap-2 group"
                        >
                            <TechIcon name={tag} className="w-4 h-4 text-gray-400 group-hover:text-bee-yellow transition-colors" showTooltip={false} />
                            <span>{tag}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
