'use server'

import { useState } from 'react';
import Image from 'next/image';
import { visualizaProduto } from '@/back/admin/actions';

export default async function ProdutoIndividual({params}: {
    params: {id:string}
}) {

    const produto = await visualizaProduto(parseInt(params.id))

  return (
    <div className="bg-[#f9f5ee] min-h-screen p-10">
      <div className="max-w-6xl mx-auto flex space-x-8">
        {/* Imagem do Produto */}
        <div className="flex-shrink-0">
            {produto && (
          <Image
            src={produto.image}
            alt={produto.title}
            width={300}
            height={300}
            className="border border-[#d56a47] p-2"/>
            )}
        </div>

        {/* Informações do Produto */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold text-[#334d35]">{produto?.title}</h1>

          {/* Preço */}
          <p className="text-2xl font-semibold text-[#334d35] mt-4">{produto?.price}</p>

          {/* Quantidade */}
          <div className="flex items-center mt-4">
            <span className="mr-2">Quantidade</span>
            <button
              
              className="border border-gray-400 px-2 py-1 rounded-md">
              -
            </button>
            <span className="mx-4">{}</span>
            <button
        
              className="border border-gray-400 px-2 py-1 rounded-md">
              +
            </button>
          </div>

          <button className="bg-[#334d35] text-white px-8 py-2 rounded-md mt-6">
            Comprar
          </button>

          {/* Informações Adicionais */}
          <div className="mt-6">
            <p className="flex items-center text-[#334d35]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 00.293.707L11 12a1 1 0 101.414-1.414L11 8.586V7z" clipRule="evenodd" />
              </svg>
              Pagamento seguro
            </p>
            <p className="flex items-center text-[#334d35] mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 011 1v1h-1v8h1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1h1V6H3V5zm11 5H6v2h8v-2zm0-4H6v2h8V6z" clipRule="evenodd" />
              </svg>
              Entrega grátis
            </p>
          </div>
        </div>
      </div>
      {/* Aba de Descrição e Trilha */}
      <div className="max-w-6xl mx-auto mt-8 border-t border-b border-gray-300">
        <div className="flex space-x-8 text-lg">
          <button
            className={`py-4 border-b-2 border-[#334d35] font-bold'`}
            >
            Descrição
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-4">
          <p className="text-[#334d35] leading-relaxed">{produto?.description}</p>
      </div>
    </div>
  );
}