function Hero() {
    return (
        <section className="bg-vinho text-white text-center py-20 px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                As melhores bebidas, na porta da sua casa 🍾
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Cervejas, vinhos, destilados e muito mais, com entrega rápida e os melhores preços.
            </p>
            
                <a href="#produtos"
                className="inline-block bg-white text-vinho font-bold rounded-full px-8 py-3 hover:bg-creme transition">
                Ver Produtos
            </a>
        </section>
    )
}

export default Hero;