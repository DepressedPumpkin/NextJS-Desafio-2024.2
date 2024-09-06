'use client';

import Image from "next/image";
import Cards from "./cards";

export default function Products() {
    return (
        <div className="flex justify-center flex-col items-center gap-20 py-12">
            <p className="text-verde text-2xl font-semibold">Principais Produtos</p>
            <div className="flex flex-wrap gap-8 justify-center max-w-max">
                <Cards image="/image/aurora.png" title="Aurora" price="R$ 79,00" />
                <Cards image="/image/mela.png" title="Melanie" price="R$ 79,00" />
                <Cards image="/image/nas.png" title="Nas" price="R$ 79,00" />
            </div>
        </div>
    )
}