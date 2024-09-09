import Image from "next/image"

type CardsProps = {
    title: string
    price: number;
    image: string;
}

export default function Cards ({title, price, image}: CardsProps ) {
    return (
        <div className="bg-[#E0DDCB] shadow-md rounded-lg py-4 px-3 flex flex-col items-center text-center w-80 min-h-96 justify-between">
            <Image
                src={image}
                alt={title}
                width={900}
                height={900}
                className ="max-h-[200px] max-w-[200px] xl:max-h-[300px] xl:max-w-[300px] 2xl:max-h-[400px] 2xl:max-w-[400px]"
                />
                <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-verde font-semibold cursor-default">{title}</h1>
                <div className="flex flex-row justify-center text-center items-center gap-32 pt-4">
                <p className="text-verde font-semibold text-xl">R$ {price}</p>
                <button className="bg-amarelo text-white px-1 py-1 rounded-full hover:bg-verde transition-colors">Ver mais</button>
                </div>
        </div>
    )
}