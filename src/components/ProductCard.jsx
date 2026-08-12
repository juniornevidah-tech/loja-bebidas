import { useCart } from "../context/CartContext";

function ProductCard({ produto }) {
    const { adicionarAoCarrinho } = useCart();
    let precoComDesconto;
    if (produto.desconto > 0) {
             precoComDesconto = produto.preco * (1 - produto.desconto / 100);
        } else {
              precoComDesconto = produto.preco;
        }
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-4 flex flex-col">
            <p><img src={produto.imagem} alt={produto.nome} className="w-full h-40 object-contain mb-2"/></p>
            <span>{produto.nome}</span>
            {produto.desconto > 0 && <span className="text-gray-400 line-through text-sm">{produto.preco}</span>}
            <span className="text-vinho font-bold text-lg">{precoComDesconto.toFixed(2)}</span>
            {produto.estoque > 0 ? <span className="text-red-600">{produto.estoque} em estoque</span> : <span>Fora de estoque</span>}
            <p>{produto.descricao}</p>
            <button onClick={() => adicionarAoCarrinho(produto)} disabled={produto.estoque === 0} className="bg-vinho text-white rounded-full py-2 hover:bg-vinho-claro transition mt-auto">Adicionar</button>
        </div>
    )
}

export default ProductCard;