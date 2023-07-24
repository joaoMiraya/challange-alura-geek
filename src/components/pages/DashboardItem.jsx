import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Loading from "../pages/Loading";

function DashboardItem() {

    const navigate = useNavigate();

    const [product, setProduct] = useState([]);

    const [urlToEdit, setUrlToEdit] = useState([]);
    const [nomeToEdit, setNomeToEdit] = useState([]);
    const [descricaoToEdit, setDescricaoToEdit] = useState([]);
    const [valorToEdit, setValorToEdit] = useState([]);

    const id = useParams().id;

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:3000/produtos/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    const handleDeleteProduct = () => {
        const deleteProduct = async () => {
            await axios.delete(`http://localhost:3000/produtos/${id}`);
            navigate("/dashboard")
            window.location.reload()
        };
        deleteProduct();
    }
    const handleEditProduct = (e) => {
        e.preventDefault();
        const data = {
            imageUrl: urlToEdit,
            nome: nomeToEdit,
            descricao: descricaoToEdit,
            valor: valorToEdit
        }
        const editProduct = async () => {
            await axios.patch(`http://localhost:3000/produtos/${id}`, data)
                .then(() => {
                    alert("Produto editado com sucesso")
                    window.location.reload();
                })
                .catch(err => console.log(err))
        };
        editProduct();
    }


    if (!product) {
        return <Loading />;
    }
    return (

        <div className="flex flex-col ">
            <div className="flex flex-col md:flex-row md:justify-around md:p-6 md:w-full">
                <div className="flex h-[15rem] md:h-[20rem] md:w-full">
                    <img className=" md:w-full " src={product.imageUrl} alt={product.nome} />
                </div>
                <div className="p-4 md:w-1/2">
                    <h2 className="text-2md md:text-4md font-semibold">{product.nome}</h2>
                    <span className="text-md font-semibold">R$ {product.valor}</span>
                    <p>{product.descricao}</p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold ml-6 mt-6">Editar Produto</h2>
                <form onSubmit={(e) => handleEditProduct(e)}>
                    <div className="flex flex-col px-6">
                        <label className="font-semibold" htmlFor="urlImage">Altere a URL da imagem</label>
                        <input
                            required
                            onChange={(e) => setUrlToEdit(e.target.value)}
                            value={urlToEdit}
                            className="h-10 border-b-2 border-solid border-gray-300"
                            name="urlImage"
                            id="urlImage"
                            type="text"
                        />

                        <label className="font-semibold" htmlFor="nomeToEdit">Altere o nome do produto</label>
                        <input
                            required
                            onChange={(e) => setNomeToEdit(e.target.value)}
                            value={nomeToEdit}
                            className="h-10 border-b-2 border-solid border-gray-300"
                            name="nomeToEdit"
                            id="nomeToEdit"
                            type="text"
                        />

                        <label className="font-semibold" htmlFor="descricaoToEdit">Altere a descrição do produto</label>
                        <input
                            required
                            onChange={(e) => setDescricaoToEdit(e.target.value)}
                            value={descricaoToEdit}
                            className="h-10 border-b-2 border-solid border-gray-300"
                            name="descricaoToEdit"
                            id="descricaoToEdit"
                            type="text"
                        />

                        <label className="font-semibold" htmlFor="valorToEdit">Altere o valor do produto</label>
                        <input
                            required
                            onChange={(e) => setValorToEdit(e.target.value)}
                            value={valorToEdit}
                            className="h-10 border-b-2 border-solid border-gray-300"
                            name="valorToEdit"
                            id="valorToEdit"
                            type="text"
                        />
                        <button className="py-2 my-4 w-full bg-green-300 text-xl font-semibold" type="submit">Salvar</button>
                    </div>
                </form>
            </div>
            <div className=" flex p-4 w-full justify-center bg-red-200 py-6">
                <button className="p-2 w-full text-white bg-red-500" onClick={handleDeleteProduct}>Excluir Produto</button>
            </div>
        </div>
    )
}


export default DashboardItem;