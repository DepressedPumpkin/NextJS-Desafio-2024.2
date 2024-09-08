'use client';

import Image from "next/image";
import Cards from "./cards";
import { Type } from "lucide-react";

type Produto = {
    image: string;
    title: string;
    price: number;
    description: string | null;
    id: number;
}

type Produtos = {
    produtos: Produto[];
    title: string;
}


export default function Products({produtos,title}: Produtos) {
    return (
        <div className="flex justify-center flex-col items-center gap-20 py-12">
            <p className="text-verde text-2xl font-semibold">{title}</p>
            <div className="flex flex-wrap gap-8 justify-center max-w-max">
                {produtos.map((produto, index) => (
                    <Cards key={index} image={produto.image} title={produto.title} price={produto.price} />
                ))}
            </div>
        </div>
    )
}