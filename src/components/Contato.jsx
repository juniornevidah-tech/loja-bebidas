import { useState } from "react";

function Contato() {
    const [contato, setContato] = useState({ nome: "", email: "", mensagem: "" });
    const [erros, setErros] = useState({});

    function validarContato() {
        const novosErros = {};

        if (!contato.nome) novosErros.nome = "Nome é obrigatório"
        if (!contato.email) novosErros.email = "Email é obrigatório"
        if (!contato.mensagem) novosErros.mensagem = "Mensagem é obrigatória"
        setErros(novosErros)
        return Object.keys(novosErros).length === 0
    }

    return (
        <section className="bg-creme py-16 px-6">
            <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-bold text-vinho mb-2 text-center">Fale Conosco</h2>
                <p className="text-gray-500 text-center mb-8">Dúvidas, sugestões ou pedidos especiais? Manda pra gente.</p>

                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nome</label>
                        <input
                            type="text"
                            value={contato.nome}
                            onChange={(e) => setContato({ ...contato, nome: e.target.value })}
                            className={`border rounded-lg px-3 py-2 w-full bg-white ${erros.nome ? "border-red-600" : "border-gray-300"}`}
                        />
                        {erros.nome && <span className="text-red-600 text-sm">{erros.nome}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={contato.email}
                            onChange={(e) => setContato({ ...contato, email: e.target.value })}
                            className={`border rounded-lg px-3 py-2 w-full bg-white ${erros.email ? "border-red-600" : "border-gray-300"}`}
                        />
                        {erros.email && <span className="text-red-600 text-sm">{erros.email}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Mensagem</label>
                        <textarea
                            value={contato.mensagem}
                            onChange={(e) => setContato({ ...contato, mensagem: e.target.value })}
                            rows={4}
                            className={`border rounded-lg px-3 py-2 w-full bg-white resize-none ${erros.mensagem ? "border-red-600" : "border-gray-300"}`}
                        ></textarea>
                        {erros.mensagem && <span className="text-red-600 text-sm">{erros.mensagem}</span>}
                    </div>

                    <button
                        onClick={() => {
                            if (validarContato()) {
                                alert('Mensagem enviada!')
                                setContato({ nome: "", email: "", mensagem: "" })
                            }
                        }}
                        className="bg-vinho text-white rounded-full py-3 font-bold hover:bg-vinho-claro transition w-full mt-2"
                    >
                        Enviar Mensagem
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contato;