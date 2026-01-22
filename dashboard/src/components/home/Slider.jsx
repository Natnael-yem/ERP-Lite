import { Flex } from "antd";
import { AnimatePresence, motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Amharic from '../../data/Amharic.json';
import English from '../../data/English.json';
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

const Silder = () => {
    const navigate = useNavigate();
    const handleNav = () => {
        navigate('/login');
    }
    const handleRegister = () => {
        window.location.href = '/dashboard/register'
    }

    const LangSelect = localStorage.getItem('Language');
    const Language = LangSelect === 'አማርኛ' ? Amharic.amharic : English.english;
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Element name="section1" className="flex flex-col space-y-20 bg-gradient-to-b from-[#8DC63F] to-100%  to-white">
            <Flex className='h-[30rem] overflow-hidden items-end'>
                <Flex className='w-[100%] flex-col items-center  z-40 space-y-6'>
                    <Flex className="text-center">
                        <AnimatePresence mode="wait">
                            <motion.p
                                className={`${LangSelect === 'አማርኛ' ? 'xl:w-[35%] lg:w-[45%] sm:w-[50%] w-[60%] text-[1.4rem] ' : 'w-[50%] sm:w-[60%] w-[80%] text-[1.3rem] '} lg:text-[3.5rem] md:text-[2.5rem] sm:text-[2rem]   lg:ml-[20%] sm:ml-[30%] mx-auto font-medium  text-white`}
                                key={activeIndex}
                                initial={{ opacity: 0, y: -120 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {Language?.sliderTitle}
                            </motion.p>
                        </AnimatePresence>
                    </Flex>
                    <Flex className="text-center justify-center items-center ">
                        <motion.div
                            initial={{ opacity: 0, y: 120 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`${LangSelect === 'አማርኛ' ? 'xl:w-[30%] lg:w-[35%] sm:w-[50%] w-[80%] ' : 'lg:w-[55%] w-[80%] '}  ' lg:ml-[20%] sm:ml-[30%] flex flex-col items-center mx-auto space-y-7`}
                            transition={{ duration: 1, ease: "easeOut" }}>
                            <motion.p className="text-white/90 font-semibold "
                            >
                                {Language?.sliderSubTitle}
                            </motion.p>
                            <Flex className="ml-10 w-[12rem] bg-[#0149AC]/70 text-white px-5 py-2 rounded-[0.5rem] items-center space-x-2">
                                <button onClick={handleRegister} className="">
                                    {Language?.register}
                                </button>
                                <IoIosArrowRoundForward />
                            </Flex>
                        </motion.div>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="mb-6 relative z-30 w-[70%] mx-auto  bg-white/20 backdrop-blur border-r border-l border-gray-300  p-6 rounded-xl">
                <span className="absolute top-0 right-1  w-[100%] h-[1.2px]  bg-gradient-to-l from-transparent  via-gray-300 via-10% to-transparent" />
                <Flex className="h-[29rem] w-[100%]">
                    <img src="/assets/landing/dashboard/dash.png" alt="1" className="z-10 object-cover w-[100%] rounded-xl" />
                </Flex>
                {/* <span className="absolute bottom-0  left-1   w-[100%] h-[1px]  bg-gradient-to-r from-transparent  via-gray-300  via-10% to-transparent" /> */}
                <span className="absolute bottom-[0rem] z-30 left-[0rem] w-[100%] h-[30rem]  bg-gradient-to-t from-white to-transparent" />
            </Flex>
        </Element>
    );
};

export default Silder;