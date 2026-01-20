import { Flex } from "antd"
import Amharic from '../../data/Amharic.json';
import English from '../../data/English.json';
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export const BottomBar = () => {
    const navigate = useNavigate();
    const handleNav = () => {
        navigate('/login');
    }
    const LangSelect = localStorage.getItem('Language');
    const Language = LangSelect === 'አማርኛ' ? Amharic.amharic : English.english;
    return (
        <Flex className="md:inline fixed hidden z-50 bottom-8 w-[100%] h-[5rem] justify-center items-center">
            <Flex className="space-x-2 w-[32rem] mx-auto bg-[#4D4D4D]/90 rounded-md px-3 text-center text-gray-500">
                <Flex className="bg-[#222222] my-2 rounded-md">
                    <img src="/assets/landing/dashboard/logom2.png" alt="logo" className='lg:h-[3.8rem] h-[3.2rem] p-1' />
                </Flex>
                <Flex className="bg-[#3E3E3E] my-2 space-x-2 px-2 rounded-md">
                    {Language.nav?.map((item, index) =>
                        <Link to={`section${index + 1}`} duration={500} smooth={true} key={index} className={`font-semibold flex border  border-white/20 my-2 w-[5.9rem] rounded-md items-center text-white justify-center cursor-pointer hover:border-white hover:text-white`}>
                            <p>{item?.name}</p></Link>
                    )}
                </Flex>
                <button onClick={handleNav} className="m-3 bg-[#E9E9E9] hover:bg-[#CACACA] sm:text-black text-white  px-8 py-2 rounded-md ">{Language?.login}</button>
            </Flex>
        </Flex>
    )
}