import { useTranslation } from 'react-i18next';

interface HeaderProps {
  currentPage: 'home' | 'results';
  onPageChange: (page: 'home' | 'results') => void;
}

export const Header = ({ currentPage, onPageChange }: HeaderProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={`bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm transition-all duration-300 ${currentPage === 'home' ? 'bg-transparent border-transparent shadow-none' : ''}`}>
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => onPageChange('home')}>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-bee-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-10 h-10"
                >
                  <ellipse cx="50" cy="50" rx="30" ry="25" fill="#212121" stroke="#FFC107" strokeWidth="2" />
                  <ellipse cx="40" cy="50" rx="8" ry="25" fill="#FFC107" />
                  <ellipse cx="50" cy="50" rx="8" ry="25" fill="#FFC107" />
                  <ellipse cx="60" cy="50" rx="8" ry="25" fill="#FFC107" />
                  <circle cx="50" cy="30" r="12" fill="#212121" stroke="#FFC107" strokeWidth="2" />
                  <circle cx="46" cy="28" r="2" fill="#FFC107" />
                  <circle cx="54" cy="28" r="2" fill="#FFC107" />
                  <line x1="46" y1="22" x2="44" y2="18" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
                  <line x1="54" y1="22" x2="56" y2="18" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="44" cy="18" r="1.5" fill="#FFC107" />
                  <circle cx="56" cy="18" r="1.5" fill="#FFC107" />
                  <ellipse cx="35" cy="45" rx="8" ry="12" fill="#FFC107" fillOpacity="0.4" stroke="#212121" strokeWidth="1" />
                  <ellipse cx="65" cy="45" rx="8" ry="12" fill="#FFC107" fillOpacity="0.4" stroke="#212121" strokeWidth="1" />
                  <path d="M 70 50 L 75 48 L 75 52 Z" fill="#212121" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold gradient-text">{t('header.title')}</h1>
              <p className="text-sm text-gray-600 font-medium">{t('header.subtitle')}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => onPageChange('home')}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${currentPage === 'home'
                  ? 'text-bee-black'
                  : 'text-gray-600 hover:text-bee-yellow'
                  }`}
              >
                {t('header.home')}
              </button>
              <button
                onClick={() => onPageChange('results')}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${currentPage === 'results'
                  ? 'bg-gradient-to-r from-bee-yellow to-yellow-400 text-bee-black shadow-md'
                  : 'text-gray-600 hover:text-bee-yellow hover:bg-gray-50'
                  }`}
              >
                {t('header.explore')}
              </button>
            </nav>

            <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
              <button
                onClick={() => changeLanguage('pt')}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i18n.language === 'pt'
                  ? 'bg-bee-yellow text-bee-black shadow-sm'
                  : 'text-gray-500 hover:bg-gray-100'
                  }`}
              >
                PT
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i18n.language === 'en'
                  ? 'bg-bee-yellow text-bee-black shadow-sm'
                  : 'text-gray-500 hover:bg-gray-100'
                  }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
