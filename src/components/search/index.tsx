'use client';

import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';

type SearchProps = {
  onSearch: (query: string) => void; 
};

export default function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <form className="flex basis-full" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <div className="flex w-full items-center rounded-full border border-verde bg-bege p-2 px-4">
        {/* Ícone de Pesquisa */}
        <SearchIcon className="w-5 h-5 text-verde mr-2" />
        {/* Campo de Pesquisa */}
        <input
          id="search"
          name="search"
          type="text"
          className="w-full bg-transparent focus:outline-none text-verde placeholder:text-verde"
          placeholder="Pesquisar"
          value={query}
          onChange={handleSearch} 
        />
      </div>
    </form>
  );
}