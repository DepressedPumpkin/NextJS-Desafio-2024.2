'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, Square } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { SquarePen } from 'lucide-react';


const produtos = [
  {
    id: 1,
    nome: 'The Beatles - Abbey Road',
    preco: 'R$ 70,00',
    descricao: 'Descrição',
    trilha: 'Trilha',
    imagem: '/images/abbey-road.jpg',
  },
  {
    id: 2,
    nome: 'Pink Floyd - The Dark Side of the Moon',
    preco: 'R$ 80,00',
    descricao: 'Descrição 2',
    trilha: 'Trilha 2',
    imagem: '/images/dark-side.jpg',
  },
  {
    id: 3,
    nome: 'Led Zeppelin - IV',
    preco: 'R$ 90,00',
    descricao: 'Descrição 3',
    trilha: 'Trilha 3',
    imagem: '/images/led-zeppelin.jpg',
  },
  {
    id: 4,
    nome: 'Nirvana - Nevermind',
    preco: 'R$ 85,00',
    descricao: 'Descrição 4',
    trilha: 'Trilha 4',
    imagem: '/images/nevermind.jpg',
  },
  {
    id: 5,
    nome: 'Queen - A Night at the Opera',
    preco: 'R$ 75,00',
    descricao: 'Descrição 5',
    trilha: 'Trilha 5',
    imagem: '/images/night-opera.jpg',
  },
  {
    id: 6,
    nome: 'The Rolling Stones - Sticky Fingers',
    preco: 'R$ 65,00',
    descricao: 'Descrição 6',
    trilha: 'Trilha 6',
    imagem: '/images/sticky-fingers.jpg',
  },
  {
    id: 7,
    nome: 'AC/DC - Back in Black',
    preco: 'R$ 78,00',
    descricao: 'Descrição 7',
    trilha: 'Trilha 7',
    imagem: '/images/back-in-black.jpg',
  },
];

const ITEMS_PER_PAGE = 3; // Número de itens por página

export default function Gerenciamento() {
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Cálculo dos índices de produtos para a página atual
  const indexInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const indexFinal = indexInicial + ITEMS_PER_PAGE;
  const produtosExibidos = produtos.slice(indexInicial, indexFinal);

  // Total de páginas
  const totalPaginas = Math.ceil(produtos.length / ITEMS_PER_PAGE);

  // Função para alterar a página
  const mudarPagina = (novaPagina) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <div className="bg-bege min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        <div className='flex justify-between'>
        <h1 className="text-3xl font-bold text-[#d56a47] mb-6">Gerenciamento</h1>
        <button className="bg-[#334d35] text-white px-4 py-2 rounded-md mb-4">
          + Criar Produto
        </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-[#d56a47]">
            <thead className="bg-bege">
              <tr className="border-b border-[#d56a47]">
                <th className="px-4 py-2 text-left text-[#d56a47]">Produto</th>
                <th className="hidden tb:table-cell px-4 py-2 text-left text-[#d56a47]">Preço</th>
                <th className="hidden tb:table-cell px-4 py-2 text-left text-[#d56a47]">Descrição</th>
                <th className="hidden tb:table-cell px-4 py-2 text-left text-[#d56a47]">Trilha</th>
                <th className="px-4 py-2 text-left text-[#d56a47]">Ação</th>
              </tr>
            </thead>
            <tbody>
              {produtosExibidos.map((produto) => (
                <tr key={produto.id} className="bg-bege odd:bg-[#E4DFD1] border-b border-[#d56a47] ">
                  <td className="px-4 py-2 flex items-center space-x-4">
                    <Image src="/image/eagles.png" alt="eagles" width={50} height={50} />
                    <span className="text-[#d56a47]">{produto.nome}</span>
                  </td>
                  <td className="hidden tb:table-cell px-4 py-2">{produto.preco}</td>
                  <td className="hidden tb:table-cell px-4 py-2">{produto.descricao}</td>
                  <td className="hidden tb:table-cell px-4 py-2">{produto.trilha}</td>
                  <td className="px-4 py-2 table-cell space-x-2  gap-2 ">
                    <button className="text-[#000000] pl-2">
                      <Eye/>
                    </button>
                    <button className="text-[#A30D11]">
                      <Trash2/>
                    </button>
                    <button className="text-[#355852]">
                      <SquarePen/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            className={`text-[#334d35] ${paginaAtual === 1 ? 'opacity-50' : ''}`}
            onClick={() => mudarPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPaginas }, (_, index) => (
            <button
              key={index}
              className={`text-[#334d35] ${paginaAtual === index + 1 ? 'font-bold' : ''}`}
              onClick={() => mudarPagina(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`text-[#334d35] ${paginaAtual === totalPaginas ? 'opacity-50' : ''}`}
            onClick={() => mudarPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
