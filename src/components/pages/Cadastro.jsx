import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";


function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate the user input
        if (name === '') {
            alert('Campo obrigatório');
            return;
        }
        if (email === '') {
            alert('Campo obrigatório');
            return;
        }
        if (password === '') {
            alert('Campo obrigatório');
            return;
        }
        const data = {
            nome: name,
            email: email,
            senha: password
        };
        await axios.post("http://localhost:3000/usuarios", data)
            .then(() => {
                localStorage.setItem("isLogged", true)
                navigate("/")
                window.location.reload();
            })
            .catch(err => {
                alert(err.message);
            });
    }
    return (
        <div className="flex flex-col h-screen bg-gray-200 text-center justify-center">
            <h1 className="text-3xl font-bold">Faça seu cadastro</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div className="flex flex-col items-center p-6 gap-4">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Escreva seu nome"
                        className=" py-2 md:py-4 px-2 w-full max-w-[600px] bg-white border-b-2 border-solid border-gray-300"
                        type="text"
                        name="nomeRegister"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Escreva seu email"
                        className=" py-2 md:py-4 px-2 w-full max-w-[600px] bg-white border-b-2 border-solid border-gray-300"
                        type="email"
                        name="emailRegister"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Escreva sua senha"
                        className=" py-2 md:py-4 px-2 w-full max-w-[600px] bg-white border-b-2 border-solid border-gray-300"
                        type="password"
                        name="passwordRegister"
                    />
                    <Link to={"/login"}><span className='underline cursor-pointer'>Já possue cadastro? Entre</span></Link>
                    <button className="bg-[#C7835A] py-2 text-white font-semibold text-xl w-full max-w-[600px] md:min-w-[600px]">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}


export default Cadastro;