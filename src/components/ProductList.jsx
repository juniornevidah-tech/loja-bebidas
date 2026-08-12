import ProductCard from "./ProductCard";
import dados from "../page/bebidas-data.json";

function ProductList({ buscar, categoriaSelecionada }) {

    const produtosFiltrados = dados.produtos.filter((produto) => {
        const correspondeCategoria = categoriaSelecionada ? produto.categoria === categoriaSelecionada : true;
        const correspondeBusca = produto.nome.toLowerCase().includes(buscar.toLowerCase());
        return correspondeCategoria && correspondeBusca;
    })

    return (
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
    {produtosFiltrados.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
    ))}
    </div>
    )
}

export default ProductList;