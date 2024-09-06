'use client';

import Image from "next/image";
import { use, useEffect, useState } from "react";
import { get } from "http";
import getApi from "@/api/get-sessao";

type ApiProps = {
    id: number;
    title: string;
    text: string;
}

type ApiData = {
    identities: ApiProps[];
    status: number;
}

export default function Missao() {
    const [cards, setCards] = useState<ApiProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {identities} = await getApi();
                setCards(identities);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="flex flex-wrap w-full justify-center pb-16 gap-6">
            {
                cards.map((card,index) => (
                <div className="bg-verde flex flex-col items-center text-xl text-bege w-72 py-6 gap-6 rounded-lg px-6"> 
                <h1 className="">
                    {card.title}
                </h1>
                <p>
                    {card.text}
                </p>
                </div>
                ))
            }
        </div>
    )
}