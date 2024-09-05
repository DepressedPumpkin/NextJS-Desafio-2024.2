'use client';

import Image from "next/image";

export default function Products ()
{
    return (
        <section className="bg-bege w-full h-full">
            <div className="flex justify-center items-center flex-col lg:">
                <h1 className="flex justify-center text-verde text-xl pt-6">Principais Produtos</h1>
                <Image
                src='/image/aurora.png'
                alt="aurora diva"
                width={500}
                height={500}
                className="w-1/2 pt-12"
                />
                <h1 className="flex justify-center text-verde text-xl">Aurora</h1>
                <p className="flex justify center text-verde text-xl">R$79,00</p>
                <Image
                src='/image/nas.png'
                alt="nas"
                width={500}
                height={500}
                className="w-1/2 pt-12"
                />
                <h1 className="flex justify-center text-verde text-xl">Nas</h1>
                <p className="flex justify center text-verde text-xl">R$79,00</p>
                <Image
                src='/image/eagles.png'
                alt="eagles"
                width={500}
                height={500}
                className="w-1/2 pt-12"
                />
                <h1 className="flex justify-center text-verde text-xl">Eagles</h1>
                <p className="flex justify center text-verde text-xl">R$79,00</p>
            </div> 

        </section>
    )

}