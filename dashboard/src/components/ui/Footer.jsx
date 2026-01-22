import { Flex } from "antd";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Amharic from '../../data/Amharic.json';
import English from '../../data/English.json';
const Footer = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/dashboard/register')
    }
    const LangSelect = localStorage.getItem('Language');
    const Language = LangSelect === 'አማርኛ' ? Amharic.amharic : English.english;
    return (
        <Flex className="w-[100%] mx-auto">
            <Flex className="text-white absolute z-30 lg:left-[14%] md:left-[10%] left-[4%] sm:px-10 mt-[-3rem] backdrop-blur-lg bg-[#2e5e81]/60 lg:w-[70%] md:w-[80%] w-[93%]  mx-auto h-[6rem] rounded-tl-[3rem] border-l-4 border-r-4 rounded-br-[3rem]">
                <Flex className="sm:flex-row flex-col justify-between items-center space-x-5 jusitify-between w-[100%] ">
                    <Flex className="sm:pt-0 pt-3">
                        <p className="text-white font-serif text-xl">{Language?.banner}</p>
                    </Flex>
                    <Flex className="sm:pb-0 pb-2">
                        <Flex className="lg:space-x-8 space-x-5 bg-[#0A75BB] lg:px-3 px-4 sm:py-2 py-1 items-center rounded-[3rem] cursor-pointer" onClick={handleRegister}>
                            <p className="font-semibold text-[1.1rem]">{Language?.register}</p>
                            < RiArrowRightDoubleFill className="text-2xl animate-bounce-right " />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <img src="/assets/landing/dashboard/footer.png" alt="footer" className='w-full lg:h-[26rem] md:h-[87%]  sm:h-[87%] h-[100%] z-10 absolute object-left object-cover' />
            <Flex className="z-20 flex-col w-[100%] min-h-[26rem] justify-between bg-black/80">
                <div className="bg-[#0974BC]/40 absolute z-20 w-full lg:h-[26rem] md:h-[87%]" />
                <Flex className=" lg:flex-row flex-col z-40 items-center justify-around   w-[100%]  pt-10">
                    <Flex className="flex-col space-y-7">
                        <Flex className='items-center flex-col mt-10'>
                            <img src="/assets/landing/dashboard/logos.png" alt="logo" className='h-[2rem] ' />
                            {/* <p className="text-white text-[1.5rem] font-semibold">{Language?.title}</p> */}
                            {/* <p className="text-white text-[1.2rem] ">{Language?.subTitle}</p> */}
                        </Flex>
                        <Flex className="items-center text-center flex-col text-white">
                            {/* <p className="">{Language?.footerLocationTitle}</p> */}
                            <p className="">{Language?.footerLocationSubTitle}</p>
                        </Flex>
                        <Flex className="space-x-4">
                            <FaFacebookF className="text-white border text-[2.2rem] p-[6px] hover:border-[#FA9419] rounded-full" />
                            <FaXTwitter className="text-white border text-[2.2rem] p-[6px] rounded-full hover:border-[#FA9419] " />
                            <FaInstagram className="text-white border text-[2.2rem] p-[6px] rounded-full hover:border-[#FA9419] " />
                            <FaLinkedinIn className="text-white border text-[2.2rem] p-[6px] rounded-full hover:border-[#FA9419] " />
                            <FaTiktok className="text-white border text-[2.2rem] p-[6px] rounded-full hover:border-[#FA9419] " />
                            <FaTelegramPlane className="text-white border text-[2.2rem] p-[6px] rounded-full hover:border-[#FA9419] " />
                        </Flex>
                    </Flex>
                    <Flex className="grid md:grid-cols-3 grid-cols-2 lg:gap-8 gap-4 space-x-5 text-white justify-around sm:pt-[4rem] py-[1.5rem] lg:w-[40%] w-[90%]">
                        <Flex className="flex-col space-y-2">
                            <Flex className="flex-col sm:space-x-4">
                                <p className="sm:text-[1rem] text-gray-400">email</p>
                                <Flex className="flex-col space-y-3">
                                    <p className="hover:text-[#FA9419]">994@ethioet.et</p>
                                </Flex>
                            </Flex>
                            <Flex className="flex-col sm:space-x-4">
                                <p className="sm:text-[1rem] text-gray-400">{Language?.phone}</p>
                                <Flex className="flex-col space-y-3">
                                    <p>251-994 or +251-980</p>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex className="w-[20rem] grid gap-7  sm:grid-cols-2 ">
                            {Language?.footerMain?.map((item) =>
                                <Flex className="flex-col">
                                    <p className="sm:text-[1rem] text-gray-400">{item?.name}</p>
                                    {item?.list?.map((lists) =>
                                        <Flex className="flex-col space-y-2">
                                            <p>{lists}</p>
                                        </Flex>
                                    )}
                                </Flex>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="w-[100%] flex-col md:pt-2 pb-2  text-white space-y-2  z-40">
                    <span className="w-[80%] mx-auto h-[1px] bg-gray-300" />
                    <Flex className="sm:flex-row flex-col w-[100%] sm:items-start items-center justify-around text-[0.9rem]">
                        <p>የቅጂ መብት © 2017 መብቱ በህግ የተጠበቀ ነው</p>
                        <p>Powered By Guba Technology</p>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Footer;