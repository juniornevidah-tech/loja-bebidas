import dados from "../page/bebidas-data.json"
import { useCart } from "../context/CartContext";

function Header({ abrirSidebar, buscar, aoBuscar, abrirCarrinho }) {
    const { carrinho } = useCart();

    const somaTotal = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    return(
        <header className="flex flex-wrap md:flex-nowrap justify-between items-center gap-3 sticky top-0 z-50 bg-white shadow-md px-4 py-3 md:px-6 md:py-4">
            <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-vinho flex items-center justify-center text-xl">
                    🍷
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-vinho">{dados.loja.nome}</h1>
            </div>
            <input type="text" value={buscar} onChange={(e) => aoBuscar(e.target.value)} className="order-3 md:order-none w-full md:w-auto flex-1 min-w-0 border rounded-full px-4 py-2"/>
            <div className="flex items-center gap-4 flex-shrink-0">
                <span onClick={abrirCarrinho} className="whitespace-nowrap cursor-pointer">Carrinho({somaTotal})</span>
                <button onClick={abrirSidebar} className="text-2xl hover:scale-110 transition">≡</button>
            </div>
        </header>
    )
}

export default Header;
