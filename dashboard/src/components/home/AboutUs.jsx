import { Flex } from "antd";
import { motion } from "motion/react"
import { MdOutlineDoubleArrow } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { IoIosClock } from "react-icons/io";
import { GiCogLock } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Amharic from '../../data/Amharic.json';
import English from '../../data/English.json';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { IoCheckmarkDone } from "react-icons/io5";
import { Pagination } from 'swiper/modules';
import { Element } from "react-scroll";


const AboutUs = () => {
    const LangSelect = localStorage.getItem('Language');
    const Language = LangSelect === 'አማርኛ' ? Amharic.amharic : English.english;
    // Create a state to store the current screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Handle resizing of window
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // const navigate = useNavigate();
    // const handleImages = (item) => {
    //     console.log(`image ${item}`)
    //     navigate('/tourism')
    // }

    // // Set initial motion values based on screen width
    const initialX = screenWidth > 459 ? -350 : -100;
    const targetX = screenWidth > 459 ? -20 : 2;
    const initialXR = screenWidth > 459 ? 350 : 100;
    const targetXR = screenWidth > 459 ? 20 : 2;
    const initialX1 = screenWidth > 1424 ? 600 : screenWidth > 1100 ? 600 : screenWidth > 940 ? 400 : 200;
    const targetX1 = screenWidth > 1424 ? 310 : screenWidth > 1100 ? 300 : screenWidth > 940 ? 210 : 1;
    const initialX3 = screenWidth > 1424 ? 400 : screenWidth > 1100 ? 600 : screenWidth > 940 ? 500 : 200;
    const targetX3 = screenWidth > 1424 ? 10 : screenWidth > 1100 ? 300 : screenWidth > 940 ? 120 : 22;
    const initialX2 = screenWidth > 940 ? 500 : screenWidth > 735 ? 300 : 200;
    const targetX2 = screenWidth > 940 ? 150 : screenWidth > 735 ? 130 : 7;
    return (
        <Element name="section2">
            <Flex className="flex-col w-[100%] items-end ">
                <Flex className="lg:flex-row-reverse flex-col-reverse bg-[#FEFEFE]/60 2xl:w-[99%] mx-auto space-x-8 justify-between items-end min-h-[100%] sm:pl-10 py-20 z-30">
                    <motion.div
                        initial={{ x: initialX }}
                        whileInView={{ x: targetX }}
                        viewport={{ once: true, amount: 0.2 }}
                        layout
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="flex lg:w-[40%] w-[70%] mx-auto z-10 ">
                        <img src="/assets/landing/dashboard/dash.jpg" alt="about" className="z-20 2xl:w-[90%] w-[30rem] 2xl:h-[85%] md:h-[28rem] object-cover rounded-2xl" />
                        <img src="/assets/landing/dashboard/Rshape.jpg" alt="shape" className="rounded-2xl opacity-50 ml-8 absolute mt-[-2.2rem] 2xl:w-[34.5rem] w-[30rem] 2xl:h-[24rem] md:h-[27rem] sm:h-[20rem] h-[15rem]" />
                        <img src="/assets/landing/dashboard/dash.webp" alt="about" className="absolute z-30 md:w-[17rem] sm:w-[17rem] w-[10rem] md:h-[14rem] sm:h-[14rem] h-[8rem] md:mt-[15rem] sm:mt-[9rem] mt-[50%] sm:ml-[-3rem] ml-[-2rem] p-2 object-cover rounded-2xl" />
                    </motion.div>
                    <motion.div
                        initial={{ x: initialXR }}
                        whileInView={{ x: targetXR }}
                        viewport={{ once: true, amount: 0.2 }}
                        layout
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="flex-col lg:mb-0 mb-16 md:space-y-10 space-y-4 lg:w-[40%] w-[90%]">
                        <Flex className="items-center space-x-2">
                            < MdOutlineDoubleArrow className="text-[#226FC5] text-[1.2rem]" />
                            <p className="font-semibold dm-sans-bold text-[1.6rem]">{Language?.aboutTitle}</p>
                            < MdOutlineDoubleArrow className="text-[#226FC5] text-[1.2rem] rotate-180" />
                        </Flex>
                        <p className=" text-[#0974BC] dm-sans-bold text-[#16243D] md:text-[3rem] sm:text-[2rem] text-[1.7rem] font-bold 2xl:w-[85%] w-[90%]">{Language?.aboutSubTitle}</p>
                        <Flex className="flex-col space-y-3 ">
                            <p className="md:text-[1.2rem] text-[1rem]lg:w-[90%] w-[95%] text-[#015FC9] font-bold">{Language?.aboutDescription}</p>
                            <p className="text-gray-700 text-[1.1rem] lg:w-[90%] w-[95%]">{Language?.aboutSubDescription}</p>
                        </Flex>
                        {/* <Flex className="flex-col space-y-3 ml-5">
                            {Language?.aboutList?.map((item) => (
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircle />
                                    <p className="text-gray-500 sm:text-[1.3rem] font-serif">{item}</p>
                                </Flex>
                            ))}
                        </Flex> */}
                    </motion.div>
                </Flex>
            </Flex>
        </Element>
    );
};

export default AboutUs;