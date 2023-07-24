import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TodosProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
            .then(response => {
                setProdutos(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="flex flex-col h-screen md:p-16 ">
            <h1 className="text-3xl font-semibold ml-4 my-6">Todos os produtos: </h1>
            <div className=" flex justify-center gap-4 flex-wrap">
                {produtos.map((produto) => {
                    return (
                        <div key={produto.id} className="">
                            <div>
                                <img className="h-32" src={produto.imageUrl} alt={produto.nome} />
                            </div>
                            <div>
                                <p>{produto.nome}</p>
                                <p className="font-semibold">{produto.valor}</p>
                                <Link to={`/item/${produto.id}`}>Ver produto</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodosProdutos;   