import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Dashboard() {

    const [produtos, setProdutos] = useState([]);

    const [urlNewProduct, setUrlNewProduct] = useState([]);
    const [nameNewProduct, setNameNewProduct] = useState([]);
    const [descriptionNewProduct, setDescriptionNewProduct] = useState([]);
    const [valueNewProduct, setValueNewProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
            .then(response => {
                setProdutos(response.data)
            })
    }, [])


    const handleAddProduct = (e) => {
        e.preventDefault();
        const data = {
            imageUrl: urlNewProduct,
            nome: nameNewProduct,
            descricao: descriptionNewProduct,
            valor: valueNewProduct
        };
        const createProduct = async () => {
            await axios.post("http://localhost:3000/produtos", data)
                .then(() => {
                    alert("Produto criado com sucesso")
                    window.location.reload();
                })
                .catch(err => console.log(err))
        }
        createProduct();
    };
    return (
        <div className="flex flex-col mb-6">
            <div className="p-4">
                <h1 className="text-3xl font-bold">DASHBOARD</h1>
                <h2 className="text-xl font-semibold text-center mt-4">Adicionar novo produto</h2>
                <div>
                    <form onSubmit={(e) => handleAddProduct(e)}>
                        <div className="flex flex-col px-6">
                            <label className="font-semibold" htmlFor="urlImage">Adicione a URL da imagem</label>
                            <input
                                onChange={(e) => setUrlNewProduct(e.target.value)}
                                value={urlNewProduct}
                                className="h-10 border-b-2 border-solid border-gray-300"
                                name="urlImage"
                                id="urlImage"
                                type="text"
                            />

                            <label className="font-semibold" htmlFor="nomeToEdit">Adicione o nome do produto</label>
                            <input
                                onChange={(e) => setNameNewProduct(e.target.value)}
                                value={nameNewProduct}
                                className="h-10 border-b-2 border-solid border-gray-300"
                                name="nomeToEdit"
                                id="nomeToEdit"
                                type="text"
                            />

                            <label className="font-semibold" htmlFor="descricaoToEdit">Adicione a descrição do produto</label>
                            <input
                                onChange={(e) => setDescriptionNewProduct(e.target.value)}
                                value={descriptionNewProduct}
                                className="h-10 border-b-2 border-solid border-gray-300"
                                name="descricaoToEdit"
                                id="descricaoToEdit"
                                type="text"
                            />

                            <label className="font-semibold" htmlFor="valorToEdit">Adicione o valor do produto</label>
                            <input
                                onChange={(e) => setValueNewProduct(e.target.value)}
                                value={valueNewProduct}
                                className="h-10 border-b-2 border-solid border-gray-300"
                                name="valorToEdit"
                                id="valorToEdit"
                                type="text"
                            />
                            <button className="py-2 my-4 w-full bg-green-300 text-xl font-semibold" type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
            <h2 className="text-xl font-semibold text-center ">Todos os produtos</h2>
            <div className="flex  justify-center flex-wrap gap-4 mt-6   ">
                {produtos.map((produto) => {
                    return (
                        <div key={produto.id}>
                            <div className="flex flex-col w-[8rem]">
                                <img className=" h-32" src={produto.imageUrl} alt={produto.nome} />
                                <div className="">
                                    <p>{produto.nome}</p>
                                    <p className="font-semibold">R$ {produto.valor}</p>
                                    <Link to={`/dashboard/item/${produto.id}`}><span className="cursor-pointer">Editar produto</span></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Dashboard;