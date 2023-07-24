import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Loading from "../pages/Loading";


function ItemComponent() {
    const [product, setProduct] = useState([]);
    const [alterProduct, setAlterProduct] = useState([]);

    const id = useParams().id;

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:3000/produtos/${id}`);
            setProduct(response.data);
            const alterProductResponse = await axios.get(`http://localhost:3000/produtos`)
            setAlterProduct(alterProductResponse.data)
        };
        fetchProduct();
    }, [id]);

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

            <div className="p-2">
                <h1 className=" text-2md font-bold mb-4">Produtos similares</h1>
                <div className="flex  overflow-x-auto gap-4 mb-4">
                    {alterProduct.map((alterProduct) => {
                        return (
                            <div key={alterProduct.id} className="">
                                <div className="flex flex-col w-[8rem]">
                                    <img className=" h-32" src={alterProduct.imageUrl} alt={alterProduct.nome} />
                                    <div className="">
                                        <p>{alterProduct.nome}</p>
                                        <p className="font-semibold">R$ {alterProduct.valor}</p>
                                        <Link to={`/item/${alterProduct.id}`}><span>Ver produto</span></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default ItemComponent;