import { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { TechIcon } from '../TechIcon/TechIcon';
import { getAllTechnologies } from '@/utils/tech.utils';

interface TechFilterProps {
    selectedTechs: string[];
    onChange: (techs: string[]) => void;
}

export const TechFilter = ({ selectedTechs, onChange }: TechFilterProps) => {
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        setTechnologies(getAllTechnologies());
    }, []);

    const filteredTechs =
        query === ''
            ? technologies
            : technologies.filter((tech) =>
                tech.toLowerCase().includes(query.toLowerCase())
            );

    return (
        <div className="w-full md:w-64 flex-shrink-0">
            <Listbox value={selectedTechs} onChange={onChange} multiple>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2.5 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border border-gray-200">
                        <span className="block truncate text-gray-700">
                            {selectedTechs.length === 0
                                ? 'Filtrar por tecnologias'
                                : `${selectedTechs.length} selecionada(s)`}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50">
                            <div className="sticky top-0 bg-white p-2 border-b border-gray-100 z-10">
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bee-yellow/50 text-sm"
                                    placeholder="Buscar tecnologia..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    // Prevent click propagation to avoid closing the dropdown
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>

                            {filteredTechs.length === 0 ? (
                                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                    Nenhuma tecnologia encontrada.
                                </div>
                            ) : (
                                filteredTechs.map((tech, techIdx) => (
                                    <Listbox.Option
                                        key={techIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-bee-yellow/10 text-bee-yellow' : 'text-gray-900'
                                            }`
                                        }
                                        value={tech}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate flex items-center gap-2 ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    <TechIcon name={tech} className="w-4 h-4" showTooltip={false} />
                                                    {tech}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-bee-yellow">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))
                            )}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};