export default function Edit() {
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
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Titulo</label>
                        <input
                            type="text"
                            id="titulo"
                            className="border border-gray-300 rounded-md w-full p-2"
                            placeholder="Insira o título" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Preço</label>
                        <input
                            type="text"
                            id="preco"
                            className="border border-gray-300 rounded-md w-full p-2"
                            placeholder="Insira o preço" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Descrição</label>
                        <input
                            type="text"
                            id="descricao"
                            className="border border-gray-300 rounded-md w-full p-2"
                            placeholder="Insira a descrição" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Trilha</label>
                        <input
                            type="text"
                            id="trilha"
                            className="border border-gray-300 rounded-md w-full p-2"
                            placeholder="Insira a trilha" />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="w-1/2 bg-gray-200 text-gray-700 rounded-md py-2 mr-2 hover:bg-gray-300">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-1/2 bg-amarelo text-white rounded-md py-2 ml-2 hover:bg-[#a7a153]">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}