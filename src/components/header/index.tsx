'use client';

import { Suspense, useState } from "react";
import { Search as SearchIcon, X as CloseIcon, Menu } from 'lucide-react';
import Link from "next/link";
import { useRouter } from 'next/navigation'; 
import Search from '@/components/search'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); 
  const [searchQuery, setSearchQuery] = useState(''); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      router.push(`/produtos?search=${encodeURIComponent(query.trim())}`); 
    }
  };

  return (
    <header className="bg-bege sticky top-0 z-20 mx-auto w-full py-4 md:px-0">
      <div className="flex items-center justify-between w-full md:w-10/12 mx-auto px-4 md:px-0">
        {/* Navbar para Desktop */}
        <nav className="md:flex items-center space-x-6 text-verde font-semibold hidden justify-between w-full">
          {/* Barra de Pesquisa Funcional */}
          <div className="flex w-full justify-start items-start">
            <div className=" rounded-lg flex items-center p-1 self-start w-1/3">
            <Suspense> 
              <Search onSearch={handleSearch} /> {/* Componente de pesquisa funcional */}
              </Suspense>
            </div>
          </div>
          {/* Links de Navegação */}
          <div className="flex gap-8 items-end">
            <Link href="/" className="hover:underline">Início</Link>
            <Link href="/contato" className="hover:underline">Contato</Link>
            <Link href="/produtos" className="hover:underline">Produtos</Link>
            <Link href="/admin" className="hover:underline">Gerenciamento</Link>
            <Link href="/login" className="hover:underline">Login</Link>
          </div>
        </nav>

        {/* Navbar para Mobile */}
        <nav className="bg-bege w-full md:hidden flex justify-between items-center">
          {isMenuOpen ? (
            <div className="flex absolute flex-col items-center bg-bege w-full left-0 top-0 pb-2">
              <CloseIcon onClick={toggleMenu} className="flex self-end text-verde w-6" />
              <Link href="/" className="text-verde hover:underline">Início</Link>
              <Link href="/contato" className="text-verde hover:underline">Contato</Link>
              <Link href="/produtos" className="text-verde hover:underline">Produtos</Link>
              <Link href="/admin" className="text-verde hover:underline">Gerenciamento</Link>
              <Link href="/login" className="text-verde hover:underline">Login</Link>
            </div>
          ) : null}
          {/* Barra de Pesquisa Funcional no Mobile */}
          <div className="bg-bege rounded-lg border-verde flex items-center p-1">
            <Search onSearch={handleSearch} /> {/* Componente de pesquisa funcional */}
          </div>
          <Menu onClick={toggleMenu} />
        </nav>
      </div>
    </header>
  );
}