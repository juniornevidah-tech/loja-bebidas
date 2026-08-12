import { useCart } from "../context/CartContext"
import { useState } from "react";

function Cart({ aberta, fechar, abrirCheckout }) {
    const { carrinho, alterarQuantidade, removerDoCarrinho, aplicarCupom, subtotal, total } = useCart();
    const [codigoCupom, setCodigoCupom] = useState("");

    return (
        <>
            {aberta && <div className="fixed inset-0 bg-black/50 z-40" onClick={fechar}></div>}
            <div className={`fixed top-0 right-0 h-full w-full max-w-80 bg-white shadow-xl z-50 transition-transform duration-300 flex flex-col p-6 overflow-y-auto ${aberta ? "translate-x-0" : "translate-x-full"}`}>

                <button onClick={fechar} className="self-end text-2xl mb-4">✕</button>
                <h2 className="text-xl font-bold text-vinho mb-4">Seu Carrinho</h2>

                {carrinho.map((item) => {
                    const precoTotal = item.preco * (1 - item.desconto / 100) * item.quantidade;
                    return (
                        <div key={item.id} className="flex items-center gap-3 border-b py-3">
                            <img src={item.imagem} alt={item.nome} className="w-16 h-16 object-contain" />
                            <div className="flex flex-col flex-1">
                                <span>{item.nome}</span>
                                <span>{item.quantidade}x - R$ {precoTotal.toFixed(2)}</span>
                            </div>
                            <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)} className="w-7 h-7 border rounded hover:bg-gray-100">➕</button>
                            <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)} className="w-7 h-7 border rounded hover:bg-gray-100">➖</button>
                            <button onClick={() => removerDoCarrinho(item.id)} className="w-7 h-7 border rounded hover:bg-gray-100">🗑️</button>
                        </div>
                    );
                })}

                <div className="flex gap-2 mt-4">
                    <input type="text" value={codigoCupom} onChange={(e) => setCodigoCupom(e.target.value)} className="border rounded px-3 py-2 flex-1" placeholder="Cupom" />
                    <button onClick={() => aplicarCupom(codigoCupom)} className="px-4 py-2 border rounded hover:bg-gray-100">Aplicar</button>
                </div>

                <div className="border-t pt-4 mt-4">
                    <span className="block">Subtotal: R$ {subtotal.toFixed(2)}</span>
                    <span className="block font-bold text-vinho">Total: R$ {total.toFixed(2)}</span>
                </div>

                <button onClick={abrirCheckout} className="bg-vinho text-white rounded-full py-3 font-bold hover:bg-vinho-claro transition w-full mt-2">
                    Finalizar Pedido
                </button>
            </div>
        </>
    );
}

export default Cart;