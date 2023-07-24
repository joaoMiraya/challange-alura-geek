import { IoIosArrowBack } from 'react-icons/io';


function VoltarBtn() {


    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <div className={'bg-white p-2 drop-shadow-xl rounded-full z-40 text-gray-400 flex justify-center items-center fixed m-4 md:hidden'} onClick={handleGoBack}>
                <IoIosArrowBack size={30} />
            </div>
        </>
    )
}

export default VoltarBtn;