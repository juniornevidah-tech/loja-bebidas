
import dados from "../page/bebidas-data.json"
import { useCart } from "../context/CartContext";

function Header({ abrirSidebar, buscar, aoBuscar, abrirCarrinho }) {
    const { carrinho } = useCart();

    const somaTotal = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    return(
        <header className="flex justify-between items-center sticky top-0 z-50 bg-white shadow-md px-6 py-4">
            <h1 className="text-2xl font-bold text-vinho">{dados.loja.nome}</h1>
            <input type="text" value={buscar} onChange={(e) => aoBuscar(e.target.value)} className="border rounded-full px-4 py-2" placeholder="Procura..."/>
            <span onClick={abrirCarrinho}>Carrinho({somaTotal})</span>
            <button onClick={abrirSidebar} className="text-2xl hover:scale-110 transition">≡</button>
        </header>
    )
}

export default Header;
