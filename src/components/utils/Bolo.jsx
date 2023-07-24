import { useEffect, useState } from "react";
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import { Link } from "react-router-dom";

function Bolos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/produtos");
                setProducts(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);




    return (
        <div className="p-4">
            <div className="flex justify-between text-[#2A1B16]">
                <h1 className="font-bold text-4xl m-4">Bolos</h1>
                <div className="flex items-center text-xl font-semibold cursor-pointer">
                    <Link to={"/produtos"}><span>Ver tudo</span></Link>
                    <BsArrowRight />
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {products.map((produto) => (
                    <div key={produto.id} className="max-w-[10rem] ml-4 mt-4 overflow-hidden flex flex-col justify-center items-center">
                        <img className="object-scale-down h-[8rem] w-[8rem]" src={produto.imageUrl} alt={produto.nome} />
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="font-semibold">{produto.nome}</h2>
                            <p>{produto.valor}</p>
                            <Link to={`/item/${produto.id}`}><button className=" underline cursor-pointer">Ver detalhes</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bolos;
