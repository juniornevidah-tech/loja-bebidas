import { useState } from "react"
import { useCart } from "../context/CartContext";

function Checkout({ aberto, fechar }) {
    const [informacoes, setInformacoes] = useState({ nome: "", email: "", endereco: "", numeroCartao: "", validade: "", cvv: "" })
    const [erros, setErros] = useState({ nome: "", email: "" });
    const { limparCarrinho } = useCart();

    function validaFuncao() {
        const novosErros = {}
        if (!informacoes.nome) novosErros.nome = "Nome é obrigatório"
        if (!informacoes.email) novosErros.email = "Email é obrigatório"
        if (!informacoes.endereco) novosErros.endereco = "Endereço obrigatório"
        if (!informacoes.numeroCartao) novosErros.numeroCartao = "Número do cartão obrigatório"
        if (!informacoes.validade) novosErros.validade = "Validade obrigatória"
        if (!informacoes.cvv) novosErros.cvv = "CVV obrigatório"
        setErros(novosErros);
        return Object.keys(novosErros).length === 0;
    }

    return (
        aberto && (
            <>
                <div className="fixed inset-0 bg-black/50 z-40" onClick={fechar}></div>
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-96 max-h-[90vh] overflow-y-auto shadow-2xl">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-vinho">Finalizar Compra</h2>
                            <button onClick={fechar} className="text-2xl hover:scale-110 transition">✕</button>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Nome</label>
                                <input
                                    type="text"
                                    value={informacoes.nome}
                                    onChange={(e) => setInformacoes({ ...informacoes, nome: e.target.value })}
                                    className={`border rounded-lg px-3 py-2 w-full ${erros.nome ? "border-red-600" : "border-gray-300"}`}
                                />
                                {erros.nome && <span className="text-red-600 text-sm">{erros.nome}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    value={informacoes.email}
                                    onChange={(e) => setInformacoes({ ...informacoes, email: e.target.value })}
                                    className={`border rounded-lg px-3 py-2 w-full ${erros.email ? "border-red-600" : "border-gray-300"}`}
                                />
                                {erros.email && <span className="text-red-600 text-sm">{erros.email}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Endereço</label>
                                <input
                                    type="text"
                                    value={informacoes.endereco}
                                    onChange={(e) => setInformacoes({ ...informacoes, endereco: e.target.value })}
                                    className={`border rounded-lg px-3 py-2 w-full ${erros.endereco ? "border-red-600" : "border-gray-300"}`}
                                />
                                {erros.endereco && <span className="text-red-600 text-sm">{erros.endereco}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Número do cartão</label>
                                <input
                                    type="number"
                                    value={informacoes.numeroCartao}
                                    onChange={(e) => setInformacoes({ ...informacoes, numeroCartao: e.target.value })}
                                    className={`border rounded-lg px-3 py-2 w-full ${erros.numeroCartao ? "border-red-600" : "border-gray-300"}`}
                                />
                                {erros.numeroCartao && <span className="text-red-600 text-sm">{erros.numeroCartao}</span>}
                            </div>

                            <div className="flex gap-3">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-1">Validade</label>
                                    <input
                                        type="date"
                                        value={informacoes.validade}
                                        onChange={(e) => setInformacoes({ ...informacoes, validade: e.target.value })}
                                        className={`border rounded-lg px-3 py-2 w-full ${erros.validade ? "border-red-600" : "border-gray-300"}`}
                                    />
                                    {erros.validade && <span className="text-red-600 text-sm">{erros.validade}</span>}
                                </div>

                                <div className="w-24">
                                    <label className="block text-sm font-medium mb-1">CVV</label>
                                    <input
                                        type="number"
                                        value={informacoes.cvv}
                                        onChange={(e) => setInformacoes({ ...informacoes, cvv: e.target.value })}
                                        className={`border rounded-lg px-3 py-2 w-full ${erros.cvv ? "border-red-600" : "border-gray-300"}`}
                                    />
                                    {erros.cvv && <span className="text-red-600 text-sm">{erros.cvv}</span>}
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    if (validaFuncao()) {
                                        limparCarrinho();
                                        alert('Pedido confirmado!')
                                        fechar()
                                    }
                                }}
                                className="bg-vinho text-white rounded-full py-3 font-bold hover:bg-vinho-claro transition w-full mt-2"
                            >
                                Confirmar Compra
                            </button>
                        </div>

                    </div>
                </div>
            </>
        )
    )
}

export default Checkout;
