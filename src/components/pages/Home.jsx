import Bolos from "../utils/Bolo";
import Doces from "../utils/Doces";
import Diversos from "../utils/Diversos";

function Home() {


    return (

        <div className="container flex flex-col">
            <div className="w-full sm:w-screen xl:h-3/5 bg-[url('/briagadeiroBG.jpg')] bg-cover bg-left-top relative bg-no-repeat">
                <div className="flex flex-col p-4 text-center relative overflow-hidden">
                    <svg className="absolute mix-blend-soft-light bottom-[-70px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#BBA79C" d="M33.6,-52.8C46.8,-50.7,62.8,-48.1,67.9,-39.2C73,-30.3,67.3,-15.2,67.9,0.4C68.6,16,75.8,31.9,73.4,45.5C71,59.1,59,70.3,45.2,77.5C31.4,84.6,15.7,87.8,1.1,85.9C-13.4,83.9,-26.8,76.8,-41.3,70C-55.7,63.1,-71.1,56.6,-80.1,44.9C-89.1,33.3,-91.7,16.7,-84.7,4.1C-77.6,-8.5,-61,-17.1,-52.4,-29.4C-43.8,-41.6,-43.1,-57.6,-35.7,-63.1C-28.3,-68.5,-14.2,-63.3,-2,-60C10.2,-56.6,20.5,-54.9,33.6,-52.8Z" transform="translate(100 100)" />
                    </svg>
                    <div className="z-10 relative w-full flex flex-col gap-2">
                        <h1 className="text-4xl xl:text-6xl font-bold text-[#fff]">Semana promocional</h1>
                        <p className="text-[#fff] xl:text-2xl">Produtos com até 30% de desconto</p>
                        <button className="bg-[#C7835A95] hover:bg-[#C7835A] transition duration-300 drop-shadow-2xl self-end md:self-center m-4 text-white font-bold rounded-md py-4 px-8">Ver produtos</button>
                    </div>
                </div>
            </div>
            <section>
                <Bolos />
            </section>

            <section>
                <Doces />
            </section>

            <section>
                <Diversos />
            </section>
        </div>

    )
}

export default Home;