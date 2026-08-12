import dados from "../page/bebidas-data.json"

function Sidebar({ aberta, fechar, aoSelecionarCategoria }) {
    return (
        <>
            {aberta && <div className="fixed inset-0 bg-black/50 z-40" onClick={fechar}></div>}
            <div className={`fixed top-0 left-0 h-full w-[85vw] max-w-xs bg-white shadow-xl z-50 transition-transform duration-300 flex flex-col p-6 ${aberta ? "translate-x-0" : "-translate-x-full"}`}>

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold text-vinho">Categorias</h1>
                    <button onClick={fechar} className="text-2xl hover:scale-110 transition">✕</button>
                </div>

                <ul className="flex flex-col gap-1">
                    {dados.categorias.map((categoria) => {
                        return (
                            <li key={categoria.id}>
                                <button
                                    onClick={() => {
                                        aoSelecionarCategoria(categoria.id);
                                        fechar();
                                    }}
                                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-creme hover:text-vinho transition flex items-center justify-between group"
                                >
                                    <span>{categoria.nome}</span>
                                    <span className="text-gray-300 group-hover:text-vinho transition">›</span>
                                </button>
                            </li>
                        )
                    })}
                </ul>

                <button
                    onClick={() => {
                        aoSelecionarCategoria(null);
                        fechar();
                    }}
                    className="mt-auto text-sm text-gray-500 hover:text-vinho transition underline"
                >
                    Ver todas as categorias
                </button>
            </div>
        </>
    )
}

export default Sidebar;