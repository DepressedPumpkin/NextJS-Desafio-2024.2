'use client'

import { Youtube } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


export default function Footer() {
    return (
      <footer className="bgfooter py-12 text-white">
        <div className="container mx-auto px-4 flex justify-between items-start">
          <div className="flex flex-col items-start">
            <img
              src="/logo/logo.png"
              alt="Logo DisCode"
              className=" w-3/4 h-3/4 mb-4"
            />
          </div>
  
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-2">Contato</h3>
            <p>Juiz de Fora, MG</p>
            <p>(32) 99999-9999</p>
            <p>contato@discode.com.br</p>
          </div>
  
      
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
            <Instagram className="w-6 h-6 text-white cursor-pointer" />
            <FaWhatsapp className="w-7 h-7 text-white cursor-pointer"/>
            <Youtube className="w-8 h-8 text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  