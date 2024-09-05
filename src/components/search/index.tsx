'use client';


import { Search as SearchIcon} from 'lucide-react';

export default function Search() {
    return(
        <form className="flex basis-full" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6 my-10">
            <div className="relative flexx w-full items-center">
                    <SearchIcon className="w-7 h-7 absolute text-black/50 left-4"/>
                    <input
                    id="search"
                    name="search"
                    type="text"
                    className="w-full rounded-xl px-16 py-6 text-yellow-500 bg-zinc-900 hover:bg-zinc-800 caret-white transition-all duration-300"
                    placeholder="Pesquisar..."
                    />
                </div>
            </div>
        </form>
    )
}