import { Flex } from 'antd'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Amharic from '../../data/Amharic.json';
import English from '../../data/English.json';
const Navbar = ({ setLang, lang }) => {
    // console.log(Amharic.amharic.login)
   
    const [langCheck, setLangCheck] = useState(false);
    const [menu, setMenu] = useState(false);
    const LangSelect = localStorage.getItem('Language');
    const Language = LangSelect === 'አማርኛ' ? Amharic.amharic : English.english;
     const [nav, setNav] = useState(Language?.navbar[0]?.name || 'Home');
    const navigate = useNavigate();
    const handleNav = () => {
        navigate('/login');
    };
    const handleMenu = () => {
        setMenu(!menu);
        console.log('skh')
    }
    const handleLang = (data) => {
        console.log(data)
        setLang(data);
        setLangCheck(false);
        localStorage.setItem('Language', data);
    }
    const Languages = ['English', 'አማርኛ', 'Afan Oromia'];
    const selectLang = Languages?.filter((item) => item == lang);
    const UnselectLang = Languages?.filter((item) => item != lang);
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menu]);
    const handleScroll = (name) => {
        setNav(name);
        const filternav = Language?.navbar?.filter((item) => item.name === name);
        navigate(`${filternav[0]?.link}`);
    }

    return (
        <Flex className='my-8 h-[4.5rem]  bg-gradient-to-b from-white to-100%  to-white/40 rounded-3xl w-[70%] mx-auto border-r border-l border-gray-300'>
            <Flex className='items-center justify-between lg:pl-[6%] w-[95%] '>
                <Flex className='items-center  space-x-2'>
                    <img src="/assets/landing/dashboard/guba2.png" alt="logo" className='lg:h-[3.5rem] h-[3.4rem] py-2' />
                    {/* <img src="./name.png" alt="logo" className='lg:h-[3.5rem] h-[3rem]' /> */}
                    <Flex className='sm:flex hidden flex-col items-center pt-3'>
                        {/* <p className='md:text-[1rem] text-[0.95rem] font-bold'>{Language?.title}</p> */}
                        {/* <p className='text-[#0B75BC] text-[0.86rem]'>{Language?.subTitle}</p> */}
                    </Flex>
                </Flex>
                <Flex className='items-center '>
                    <Flex className='md:flex hidden p-4  items-center space-x-8 rounded-lg '>
                        {Language?.navbar?.map((item) =>
                            <>
                                <Flex className={`${nav === item?.name ? "text-black/90" : 'text-black/70'} flex-col items-center space-y-2 cursor-pointer`}>
                                    <p className=' text-[1.05rem]' onClick={() => handleScroll(item?.name)}>{item?.name}</p>
                                    {nav === item?.name &&
                                        <Flex className='justify-center'>
                                            <span className='h-[2px] w-10 bg-[#015FC9] z-10 dm-sans-bold' />
                                        </Flex>
                                    }
                                </Flex>
                            </>
                        )}
                        {/* <Flex className='space-x-3 cursor-pointer'>
                            <IoSearchOutline className='text-[1.4rem] text-black/60' />
                            <BsCart3 className='text-[1.4rem] text-black/60' />
                        </Flex> */}
                    </Flex>
                    {/* <Flex className='p-4 px-7 bg-[#015FC9] text-white rounded-r-lg'>
                        <p className='text-[0.9rem] font-bold'>Get a Quote</p>
                    </Flex> */}
                </Flex>
                <Flex className='items-center space-x-3'>
                    {/* <FaPhoneFlip className='text-[#0CE0FF] border rounded-full p-3 text-[3.2rem]' /> */}
                    <Flex className='flex space-x-5 cursor-pointer items-center sm:flex hidden'>
                        <p className='font-bold' onClick={() => setLangCheck(!langCheck)}>{selectLang}</p>
                        <p className='font-bold cursor-pointer lg:inline md:hidden sm:flex hidden' onClick={handleNav}>{Language.login}</p>
                    </Flex>
                    {langCheck &&
                        <Flex className='bg-white/90 space-y-1 flex-col absolute z-40 shadow top-[3rem] lg:right-[8%] right-[2%] rounded border  p-4 z-30 h-[9.7rem] w-[10rem]'>
                            <Flex className='pb-1'>
                                <span className='h-[1.4px] ms-auto w-[50%] bg-[#F69517]'></span>
                            </Flex>
                            <Flex className=' hover:bg-[#0875BD]/70  relative cursor-pointer px-2 py-1 rounded-tr-md rounded-bl-md hover:text-white'>
                                <p >{selectLang}</p>
                            </Flex>
                            <Flex className='flex-col space-y-1 '>
                                {UnselectLang?.map((item) => (
                                    <Flex onClick={() => handleLang(item)} className='hover:bg-[#0875BD]/70  relative cursor-pointer px-2 py-1 rounded-tr-md rounded-bl-md hover:text-white'>
                                        <p >{item}</p>

                                    </Flex>
                                ))}
                            </Flex>
                            <Flex className='pt-2'>
                                <span className='h-[1.7px] me-auto w-[50%] bg-[#F69517]'></span>
                            </Flex>
                        </Flex>
                    }
                    <Flex className='sm:hidden cursor-pointer' onClick={handleMenu}>
                        < RxHamburgerMenu className='text-[1.4rem] cursor-pointer' />
                    </Flex>
                    {menu &&
                        <Flex className='absolute bg-white top-0 z-50 right-0 w-[80%] min-h-[100%]'>
                            <IoClose className='absolute right-3 top-3 text-[1.9rem] cursor-pointer' onClick={handleMenu} />
                            <Flex className='flex-col w-[90%]  space-y-5 p-6 pt-10 '>
                                <Flex className='flex-col space-y-5 w-[80%]'>
                                    {Language?.navbar?.map((item) =>
                                        <>
                                            <Flex className={`${nav === item?.name ? "text-black/70" : 'text-black/50'} hover:bg-gray-200  flex-col px-4 py-2 rounded-lg space-y-2  cursor-pointer`}>
                                                <p className='font-semibold' onClick={() => setNav(item?.name)}>{item?.name}</p>
                                            </Flex>
                                        </>
                                    )}
                                </Flex>
                                <hr />
                                <Flex className='flex-col space-y-2 justify-end items-end'>
                                    {UnselectLang?.map((item) => (
                                        <Flex onClick={() => handleLang(item)} className='hover:bg-[#0875BD]/70  relative cursor-pointer px-2 py-1 rounded-tr-md rounded-bl-md hover:text-white'>
                                            <p >{item}</p>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>

                            <Flex className='absolute bottom-0 right-0 w-[50%] rotate-180 h-[40%]'>
                                <img src="/assets/landing/dashboard/shapess.png" alt="logo" className='w-[100%] pb-3' />
                            </Flex>
                        </Flex>
                    }
                </Flex>
            </Flex>

        </Flex>
    );
};

export default Navbar;