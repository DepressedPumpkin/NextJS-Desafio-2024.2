'use client';

import Image from "next/image"
import { Mail } from 'lucide-react';
import { PhoneIncoming } from 'lucide-react';
import { AiOutlineYoutube } from "react-icons/ai";
import { Instagram } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


export default function Contato() {
    return (
        <div className="flex flex-col items-center text-center bg-[#f9f5ee] text-[#334d35] p-10">
            <h1 className="text-4xl font-semibold mb-6">Entre em Contato Conosco</h1>
            <p className="text-lg mb-10">
                Estamos aqui para atendê-lo, se tiver dúvidas, sugestões ou precisa de assistência,
                não hesite em nos contatar
            </p>

            <div className="space-y-8 mb-10">
                <div className="flex flex-col items-center space-y-2">
                    <Mail className=""/>
                    <p>Email: <a href="mailto:discodejr@ufjf.com" className="text-[#334d35] underline hover:no-underline">discodejr@ufjf.com</a></p>
                    <p>Resposta em até 24 horas de dias úteis</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <PhoneIncoming className=""/>
                    <p>Telefone: (32) 9xxxx-xxxx</p>
                    <p>Atendimento de segunda a sexta, de 8h às 19h</p>
                </div>

                <div className="flex flex-col items-center">
                    <p>Você também pode nos encontrar pelas redes sociais:</p>
                    <div className="flex justify-center items-center space-x-4 mt-4">
                        <Instagram className="w-8 h-8 text-verde cursor-pointer"/>
                        <AiOutlineYoutube className="w-10 h-10 text-verde cursor-pointer"/>
                        <FaWhatsapp className="w-8 h-8 text-verde cursor-pointer"/>

                    </div>
                </div>
            </div>

            <div className="mt-10 text-sm">
                <p>Agradecemos o seu contato, você será respondido o mais breve possível</p>
                <p className="mt-2">Endereço: Rua Exemplo, 113, Bairro tal, Juiz de Fora - MG - 36xxxxx-xx</p>
            </div>
        </div>
    )
}