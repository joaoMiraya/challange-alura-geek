const date = new Date();
const ano = date.getFullYear();

function Footer() {


    return (

        <footer className="bg-black py-4 text-white text-center">
            <p>Desenvolvido por João Miraya - {ano} </p>
        </footer>


    )
}
export default Footer;