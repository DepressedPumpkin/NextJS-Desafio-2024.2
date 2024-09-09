'use client';

import { editProduct } from "@/back/admin/actions";
import { Product } from "@prisma/client";
import { useState } from "react";

type EditProps = {
    produto: Product;
    closeModal: () => void;
}

interface FormDataType {
    title: string;
    price: number;
    description: string;
    image: string;
}

export default function Edit({produto, closeModal}: EditProps) {

    const [formData, setFormData] = useState({
        title: produto.title || '',
        price: produto.price.toString() || '', // Converte para string para o campo de input
        description: produto.description || '',
        image: produto.image || '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Impede o comportamento padrão do formulário
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
    
        // Converte FormData em um objeto do tipo esperado, certificando-se de que 'price' seja um número
        const data: FormDataType = {
            title: formData.get('title') as string,
            price: Number(formData.get('price')), // Converte para número
            description: formData.get('description') as string,
            image: formData.get('image') as string,
        };
        
        // Chama a função updateMember com os dados do formulário
        editProduct(produto.id, data);
        closeModal();
    }    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-semibold text-center mb-6 text-amarelo">Editar</h2>

                <div className="flex justify-center mb-6">
                    <img
                        src="/image/mfdoom.png"
                        alt="Imagem do produto"
                        className="rounded" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Titulo</label>
                        <input
                            name="title"
                            type="text"
                            id="titulo"
                            value={formData.title}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-2"
                            placeholder="Insira o título" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Preço</label>
                        <input
                            name="price"
                            type="number"
                            id="preco"
                            value={formData.price}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-2"
                            placeholder="Insira o preço" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Descrição</label>
                        <input
                             name="description"
                            type="text"
                            id="descricao"
                            value={formData.description}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-2"
                            placeholder="Insira a descrição" />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="w-1/2 bg-gray-200 text-gray-700 rounded-md py-2 mr-2 hover:bg-gray-300">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-1/2 bg-amarelo text-white rounded-md py-2 ml-2 hover:bg-[#a7a153]">
                            Salvar
                        </button>
                    </div>
                    <input name="image" value="/image/mfdoom.png" className="hidden" />
                </form>
            </div>
        </div>
    );
}
