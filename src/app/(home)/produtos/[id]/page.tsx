'use server'

import { useState } from 'react';
import Image from 'next/image';
import { visualizaProduto } from '@/back/admin/actions';
import { Truck } from 'lucide-react';
import { Shield } from 'lucide-react';



export default async function ProdutoIndividual({params}: {
    params: {id:string}
}) {

    const produto = await visualizaProduto(parseInt(params.id))

  return (
    <div className="bg-[#f9f5ee] min-h-screen p-10 ">
      <div className="max-w-6xl mx-auto flex-col space-x-8 md:flex md:flex-row items-center flex">
        {/* Imagem do Produto */}
        <div className="flex-shrink-0">
            {produto && (
          <Image
            src={produto.image}
            alt={produto.title}
            width={300}
            height={300}
            className="border border-verde p-2"/>
            )}
        </div>

        {/* Informações do Produto */}
        <div className="flex-grow max-w-80 md:max-w-full">
            <div className='pt-6 md:pt-0'>
          <h1 className="text-3xl font-bold text-[#334d35]">{produto?.title}</h1>
          </div>

          {/* Preço */}
          <p className="text-2xl font-semibold text-[#334d35] mt-4">R$ {produto?.price}</p>


          <button className="bg-[#334d35] text-white px-8 py-2 rounded-md mt-6">
            Comprar
          </button>

          {/* Informações Adicionais */}
          <div className="flex flex-col gap-2 mt-6">
            <p className="flex items-center text-[#334d35] gap-2">
            <Shield className='w-6'/>
              Pagamento seguro
            </p>
            <p className="flex items-center text-[#334d35] mt-2 gap-2">
                <Truck className='w-6'/>
              Entrega grátis
            </p>
          </div>
        </div>
      </div>

      {/* Aba de Descrição */}
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