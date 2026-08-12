import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);
    const [cupom, setCupom] = useState(null);

    const subtotal = carrinho.reduce((acc, item) => item.preco * (1- item.desconto /100) * item.quantidade + acc, 0 );

    const total = subtotal * (cupom === "BEMVINDO10" ? 0.9 : 1);

    function adicionarAoCarrinho(produto) {
        const itemExistente = carrinho.find((item) => item.id === produto.id);
        if (itemExistente) {
            if(itemExistente.quantidade + 1 <= produto.estoque) {
                setCarrinho(carrinho.map((item) => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item));
            } else {
                alert("Sem produto no Carrinho")
                return
            }
        } else {
            setCarrinho([...carrinho, {...produto, quantidade: 1}])
        }
    }

    function removerDoCarrinho(id){
        setCarrinho(carrinho.filter((item) => item.id !== id));

    }

    function alterarQuantidade(id, novaQuantidade) {
        if (novaQuantidade > carrinho.find((item) => item.id === id).estoque) {
            alert("Sem produto no Carrinho")
            return
        }
        if (novaQuantidade <= 0) {
            removerDoCarrinho(id);
        
        } else {
            setCarrinho(carrinho.map((item) => item.id === id ? { ...item, quantidade: novaQuantidade } : item));
        }
    }

    function aplicarCupom(codigo) {
        if (codigo === "BEMVINDO10") {
            alert("Cupom aplicado com sucesso! Voce recebeu 10% de desconto na sua compra.")
        } else {
            alert("Cupom invalido. Por favor, tente novamente.")
            return
        }
        setCupom(codigo);
    }

    function limparCarrinho() {
        setCarrinho([])
    }

    return (
        <CartContext.Provider value={{ carrinho, setCarrinho, cupom, setCupom, adicionarAoCarrinho, removerDoCarrinho, alterarQuantidade, aplicarCupom, total, subtotal, limparCarrinho }}>
            {children}
        </CartContext.Provider>
    );

}

export function useCart() {
        return useContext(CartContext)
    }
export default CartProvider;