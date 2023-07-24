import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login() {
    const navigate = useNavigate();
    const [emailLogin, setEmailLogin] = useState([]);
    const [passwordLogin, setPasswordLogin] = useState([]);

    const handleLogin = async (e) => {
        e.preventDefault();
        navigate("/")
        window.location.reload();
        localStorage.setItem("isLogged", true)
    }

    return (
        <div className="flex flex-col h-screen bg-gray-200 text-center justify-center">
            <h1 className="text-3xl font-bold">Inicar sessão</h1>
            <form onSubmit={(e) => handleLogin(e)}>
                <div className="flex flex-col items-center p-6 gap-4">
                    <input placeholder="Escreva seu e-mail"
                        className=" py-2 md:py-4 px-2 w-full max-w-[600px] bg-white border-b-2 border-solid border-gray-300"
                        type="text"
                        name="emailToLogin"
                        onChange={(e) => setEmailLogin(e.target.value)}
                        value={emailLogin}
                    />
                    <input placeholder="Escreva sua senha"
                        className=" py-2 md:py-4 px-2 w-full max-w-[600px] bg-white border-b-2 border-solid border-gray-300"
                        type="password"
                        name="passwordToLogin"
                        onChange={(e) => setPasswordLogin(e.target.value)}
                        value={passwordLogin}
                    />
                    <Link to={"/cadastro"}><span className='underline cursor-pointer'>Ou faça seu cadastro</span></Link>
                    <button type='submit' className="bg-[#C7835A] py-2 text-white font-semibold text-xl w-full max-w-[600px] md:min-w-[600px]">Entrar</button>
                </div>
            </form>
        </div>
    )
}


export default Login;