import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Contato from "./components/Contato.jsx";
import Hero from "./components/Hero.jsx";
function App() {
  const [siderAberta, setSiderAberta] = useState(false);
  const [buscarProdutos, setBuscarProdutos] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [checkoutAberto, setCheckoutAberto] = useState(false);

  return (
    <div>
      <Header abrirSidebar={() => setSiderAberta(true)} buscar={buscarProdutos} aoBuscar={setBuscarProdutos}
       abrirCarrinho={() => setCarrinhoAberto(true)}/>
        <Sidebar aberta={siderAberta} fechar={() => setSiderAberta(false)} aoSelecionarCategoria={setCategoriaSelecionada}/>
          <Hero />
          <ProductList buscar={buscarProdutos} categoriaSelecionada={categoriaSelecionada}/>
          <Contato />
          <Cart aberta={carrinhoAberto} fechar={() => setCarrinhoAberto(false)} abrirCheckout={() => setCheckoutAberto(true)}/>
            <Checkout aberto={checkoutAberto} fechar={() => setCheckoutAberto(false)}/>
    </div>
  )
}

export default App;
