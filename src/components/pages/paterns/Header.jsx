import { GiCupcake } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className=' bg-gradient-to-t from-[#54433A] to-[#2A1B16]'>
            <div className='container flex justify-around items-center py-6'>
                <Link to={"/"}><div className='flex items-center cursor-pointer '>
                    <GiCupcake size={35} color='#FFBEC1' />
                    <h1 className=' text-xl text-[#C7835A]'><b className=' text-[#FFBEC1]'>Doceria</b>Doces</h1>
                </div></Link>
                <form className='hidden md:block'>
                    <input className='bg-gray-100 p-1 w-[300px] rounded-3xl outline-none'
                        type="search"
                        name='busca-header'
                        id='busca-header'
                        placeholder='O que deseja encontrar?'
                    />
                    <button type='submit' className=' relative right-8 top-1'><AiOutlineSearch size={20} className='text-gray-400' /></button>
                </form>
                {localStorage.getItem("isLogged") ?
                    <Link to={"/dashboard"} className='border-solid border-[1px] border-[#FFBEC1] py-2 px-6 text-[#FFBEC1] duration-400 hover:bg-[#FFBEC120]'>Dashboard</Link> :
                    <Link to={"/login"}><span className='border-solid border-[1px] border-[#FFBEC1] py-2 px-6 text-[#FFBEC1] duration-400 hover:bg-[#FFBEC120]'>Login</span></Link>
                }                <form className='block md:hidden mr-2'>
                    <label className='absolute z-10 drop-shadow-xl p-1 rounded-full bg-[#54433A]' htmlFor="busca-mobile"><AiOutlineSearch className=" text-[#C7835A]" size={25} /></label>
                    <input
                        className='w-8 h-8 bg-transparent outline-none'
                        type="search"
                        name='busca-mobile'
                        id='busca-mobile'
                    />
                </form>
            </div>
        </nav>
    )
}

export default Header;