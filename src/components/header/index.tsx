'use client'

import { useState } from "react";
import { Search as SearchIcon, X as CloseIcon, Menu } from 'lucide-react';
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-bege sticky top-0 z-20 mx-auto w-full py-4 md:px-0">
            <div className="flex items-center justify-between w-full md:w-10/12 mx-auto px-4 md:px-0">
                <nav className="md:flex items-center space-x-6 text-verde font-semibold hidden justify-between w-full">
                    <div className="flex w-full justify-start items-start">
                        <div className="bg-bege rounded-lg border-b-2 border-verde flex items-center p-1 self-start w-1/3">
                            <SearchIcon className="w-6 h-6 text-verde cursor-pointer"></SearchIcon>
                            <input
                                type="text"
                                className="w-full bg-transparent pl-2 ml-4 p-1 focus:outline-none text-verde"
                                placeholder="Pesquisar"
                            />
                        </div>
                    </div>
                    <div className="flex gap-8 items-end">
                        <a href="/" className="hover:underline">Início</a>
                        <a href="/contato" className="hover:underline">Contato</a>
                        <a href="/produtos" className="hover:underline">Produtos</a>
                        <a href="/gerenciamento" className="hover:underline">Gerenciamento</a>
                        <a href="/login" className="hover:underline">Login</a>
                    </div>

                </nav>
                <nav className="bg-bege w-full md:hidden flex justify-between items-center">
                    {isMenuOpen ? (
                        <div className="flex absolute flex-col items-center bg-bege w-full left-0 top-0 pb-2">
                            <CloseIcon onClick={toggleMenu} className="flex self-end text-verde w-6" />
                            <Link href="/" className="text-verde hover:underline">Início</Link>
                            <Link href="/contato" className="text-verde hover:underline">Contato</Link>
                            <Link href="/produtos" className="text-verde hover:underline">Produtos</Link>
                            <Link href="/gerenciamento" className="text-verde hover:underline">Gerenciamento</Link>
                            <Link href="/login" className="text-verde hover:underline">Login</Link>
                        </div>
                    ) : null}
                    <div className="bg-bege rounded-lg border-b-2 border-verde flex items-center p-1">
                        <SearchIcon className="w-6 h-6 text-verde cursor-pointer"></SearchIcon>
                        <input
                            type="text"
                            className="bg-transparent pl-2 ml-4 p-1 focus:outline-none text-[#445D56]"
                            placeholder="Pesquisar"
                        />
                    </div>
                    <Menu onClick={toggleMenu} />
                </nav>
            </div>
        </header>
    );
}



