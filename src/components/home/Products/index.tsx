'use client';

import Image from "next/image";
import Cards from "./cards";
import { useState } from "react";

type Produto = {
  image: string;
  title: string;
  price: number;
  description: string | null;
  id: number;
};

type Produtos = {
  produtos: Produto[];
  title: string;
};

export default function Products({ produtos, title }: Produtos) {
  // Definir número de produtos por página
  const ITEMS_PER_PAGE = 8;

  // Estado para controlar a página atual
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Calcular índices para determinar os produtos a serem exibidos
  const indexInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const indexFinal = indexInicial + ITEMS_PER_PAGE;

  // Produtos exibidos na página atual
  const produtosExibidos = produtos.slice(indexInicial, indexFinal);

  // Número total de páginas
  const totalPaginas = Math.ceil(produtos.length / ITEMS_PER_PAGE);

  // Função para mudar de página
  const mudarPagina = (novaPagina: number) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center gap-20 py-12">
      <p className="text-verde text-2xl font-semibold">{title}</p>

      <div className="flex flex-wrap gap-8 justify-center max-w-max">
        {produtosExibidos.map((produto, index) => (
          <Cards key={index} image={produto.image} title={produto.title} price={produto.price} />
        ))}
      </div>

      {/* Botões de Paginação */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className={`text-verde ${paginaAtual === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => mudarPagina(paginaAtual - 1)}
          disabled={paginaAtual === 1}
        >
          &lt;
        </button>

        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index}
            className={`text-verde ${paginaAtual === index + 1 ? 'font-bold' : ''}`}
            onClick={() => mudarPagina(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`text-verde ${paginaAtual === totalPaginas ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => mudarPagina(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
        >
           &gt;
        </button>
      </div>
    </div>
  );
}
