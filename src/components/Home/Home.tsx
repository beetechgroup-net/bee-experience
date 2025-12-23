import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { TechIcon } from '../TechIcon/TechIcon';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface HomeProps {
    onSearch: (query: string) => void;
    onTechSelect: (tech: string) => void;
}

interface ExpertiseConfig {
    id: string;
    techs: string[];
    color: string;
}

const expertisesConfig: ExpertiseConfig[] = [
    {
        id: "frontend",
        techs: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        color: "from-blue-400 to-blue-600"
    },
    {
        id: "backend",
        techs: ["Node.js", "Java", "Quarkus", "PostgreSQL"],
        color: "from-green-400 to-green-600"
    },
    {
        id: "cloud",
        techs: ["Docker", "Nginx", "CI/CD", "Linux"],
        color: "from-orange-400 to-orange-600"
    },
    {
        id: "iot",
        techs: ["IoT", "Security", "Encryption", "Architecture"],
        color: "from-purple-400 to-purple-600"
    }
];

const ExpertiseSection = ({ config, index, onTechSelect }: { config: ExpertiseConfig, index: number, onTechSelect: (tech: string) => void }) => {
    const { t } = useTranslation();
    const isEven = index % 2 === 0;

    return (
        <section
            className="min-h-screen flex items-center justify-center relative py-12 md:py-20 overflow-hidden"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-5`}></div>

            <div
                className={`container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >

                {/* Text Content */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${config.color} uppercase tracking-wider`}>
                            Expertise #{index + 1}
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
                    >
                        {t(`home.expertises.${config.id}.title`)}
                    </h2>

                    <p
                        className="text-lg md:text-2xl text-gray-500 font-light"
                    >
                        {t(`home.expertises.${config.id}.description`)}
                    </p>

                    <div
                        className="prose prose-base md:prose-lg text-gray-600 border-l-4 border-gray-200 pl-6 italic"
                    >
                        "{t(`home.expertises.${config.id}.experience`)}"
                    </div>

                    <div
                        className="pt-6"
                    >
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">{t('home.technologies')}</h4>
                        <div className="flex flex-wrap gap-2">
                            {config.techs.map((tech) => (
                                <button
                                    key={tech}
                                    onClick={() => onTechSelect(tech)}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700 hover:border-bee-yellow hover:text-bee-yellow hover:scale-105 transition-all duration-300"
                                >
                                    <TechIcon name={tech} className="w-5 h-5" showTooltip={false} />
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visual/Decorative */}
                <div className="flex-1 flex justify-center">
                    <div
                        className={`relative w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-br ${config.color} opacity-10 blur-3xl`}
                        style={{ transform: `scale(1)` }}
                    ></div>
                    <div className="absolute">
                        <div
                            className={`text-9xl text-gray-200 opacity-20 font-black`}
                        >
                            {index + 1}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export const Home = ({ onSearch, onTechSelect }: HomeProps) => {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div className="relative flex flex-col items-center bg-transparent">

            {/* Hero Section (Full Screen) */}
            <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
                {/* Parallax Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                    <div className="absolute top-[10%] left-[5%] opacity-20" style={{ transform: `rotate(15deg)` }}>
                        <svg width="200" height="200" viewBox="0 0 200 200" className="text-bee-yellow fill-current">
                            <path d="M100 0 L186.6 50 L186.6 150 L100 200 L13.4 150 L13.4 50 Z" />
                        </svg>
                    </div>
                    <div className="absolute bottom-[20%] right-[10%] opacity-10" style={{ transform: `rotate(-10deg)` }}>
                        <svg width="300" height="300" viewBox="0 0 200 200" className="text-gray-900 fill-current">
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

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                            {t('home.name')}
                        </h1>
                        <p className="text-xl md:text-2xl text-bee-yellow font-medium mb-4">
                            {t('home.role')}
                        </p>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                            <Trans
                                i18nKey="home.bio"
                                components={[
                                    <span className="font-semibold text-gray-800" key="0" />,
                                    <span className="font-semibold text-gray-800" key="1" />,
                                    <span className="font-semibold text-gray-800" key="2" />
                                ]}
                            />
                        </p>
                    </div>

                    {/* Search Section */}
                    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative group mb-12 animate-fade-in-up delay-100">
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
                                placeholder={t('home.search.placeholder')}
                                className="w-full px-4 py-3 md:px-6 md:py-5 text-base md:text-lg text-gray-800 placeholder-gray-400 bg-transparent border-none focus:ring-0 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 md:px-8 md:py-5 bg-gradient-to-r from-bee-yellow to-yellow-400 text-bee-black font-semibold text-base md:text-lg hover:shadow-md transition-all duration-300"
                            >
                                {t('home.search.button')}
                            </button>
                        </div>
                    </form>

                    <button
                        onClick={scrollToContent}
                        className="animate-bounce p-2 text-gray-400 hover:text-bee-yellow transition-colors"
                    >
                        <ChevronDownIcon className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {/* Scroll-telling Sections */}
            <div className="w-full bg-white">
                {expertisesConfig.map((config, index) => (
                    <ExpertiseSection
                        key={index}
                        config={config}
                        index={index}
                        onTechSelect={onTechSelect}
                    />
                ))}
            </div>

            {/* Final CTA / Tags */}
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 bg-gray-50 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">{t('home.stack')}</h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
                    {['React', 'TypeScript', 'Node.js', 'Java', 'Quarkus', 'Docker', 'Kubernetes', 'AWS', 'IoT', 'Security'].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => onTechSelect(tag)}
                            className="px-5 py-2.5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-bee-yellow hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                        >
                            <TechIcon name={tag} className="w-5 h-5 text-gray-400 group-hover:text-bee-yellow transition-colors" showTooltip={false} />
                            <span className="font-medium text-gray-600 group-hover:text-gray-900">{tag}</span>
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};
