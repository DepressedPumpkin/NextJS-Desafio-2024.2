'use client';

import { deleteProduct } from "@/back/admin/actions";

type DeleteProps = {
    id: number;
    closeModal: () => void;
}

function deleteproduto(id: number, closeModal: () => void) {
    deleteProduct(id, closeModal);
    closeModal();
}

export default function Delete({id, closeModal}: DeleteProps) {
    return(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold text-center mb-2">
                Tem certeza que deseja excluir?
            </h2>
            <p className="text-sm text-gray-500 text-center mb-4">
                Essa ação não poderá ser desfeita.
            </p>
            <div className="flex justify-center gap-4">
                <button onClick={() => deleteProduct(id, closeModal)}  className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Não, cancelar
                </button>
                <button  onClick={() => deleteProduct(id, closeModal)} className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600">
                    Sim, excluir
                </button>
            </div>
        </div>
    </div>
    )
}