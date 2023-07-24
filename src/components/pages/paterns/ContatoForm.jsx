import { GiCupcake } from 'react-icons/gi';


function ContatoForm() {
    return (

        <div className="bg-[#54433A] flex flex-col items-center gap-6 md:flex-row md:justify-evenly py-20">
            <div className='flex items-center '>
                <GiCupcake size={55} color='#FFBEC1' />
                <h1 className=' text-3xl text-[#C7835A]'><b className=' text-[#FFBEC1]'>Doceria</b>Doces</h1>
            </div>

            <div>
                <ul className='flex flex-col gap-4 cursor-pointer'>
                    <li className=' hover:underline'>Quem somos?</li>
                    <li className=' hover:underline'>Politicas de privacidade</li>
                    <li className=' hover:underline'>Programas de fidelidade</li>
                    <li className=' hover:underline'>Nossas lojas</li>
                    <li className=' hover:underline'>Quero ser franqueado</li>
                    <li className=' hover:underline'>Anuncie aqui</li>
                </ul>
            </div>
            <form>
                <h2 className='text-xl font-semibold mb-2'>Fale conosco</h2>
                <div className='flex flex-col gap-4'>
                    <div className='relative'>
                        <label className='absolute text-gray-400 left-2 text-[12px]' htmlFor="emailContato">Seu e-mail</label>
                        <input className='w-[18rem] h-[2.5rem] px-1 py-2 outline-none' type="email" name='emailContato' id='emailContato' />
                    </div>
                    <div className='relative'>
                        <label className='absolute text-gray-400 left-2 text-[12px]' htmlFor="mensagemContato">Escreva sua mensagem</label>
                        <textarea className=' outline-none w-full px-1 py-2' name="mensagemContato" id="mensagemContato" cols="30" rows="4"></textarea>
                    </div>
                    <button className='border-2 border-solid text-[#C7835A] hover:bg-[#C7835A30] transition duration-300 font-bold border-[#C7835A] max-w-[150px] py-2'>Enviar</button>
                </div>
            </form>
        </div>


    )
}


export default ContatoForm;