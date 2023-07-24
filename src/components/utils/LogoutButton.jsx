import { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';

function LogoutButton() {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        localStorage.getItem("isLogged") ?
            setIsLogged(true) :
            setIsLogged(false)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("isLogged")
        window.location.reload();
    };
    return (
        <div aria-label='Sair' className={`${isLogged ? ' flex z-40 bg-white drop-shadow-xl rounded-full p-2 right-0 justify-center items-center fixed m-4' : 'hidden'}`}>
            <button onClick={handleLogout} className=" "> <AiOutlineLogout size={30} color='gray' /> </button>
        </div >
    )
}

export default LogoutButton;