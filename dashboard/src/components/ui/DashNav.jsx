import { Badge, ConfigProvider, Flex, Input, Modal } from "antd";
import { LuSearch } from "react-icons/lu";
import { BiSun } from "react-icons/bi";
import { IoIosArrowDropleftCircle, IoMdNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { CgLogOff } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineCalendarDateRange, HiOutlineHome } from "react-icons/hi2";
import SideList from "./SideList";
import { GoDotFill } from "react-icons/go";
import { FaCloudMoon } from "react-icons/fa";
import { useTheme } from "../theme-provider";
import { PiCertificate } from "react-icons/pi";
import { BsCalendar2Event, BsCreditCard2Front } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiHardDrive } from "react-icons/fi";

const navlist = [
    { name: 'Dashboard', route: '/dashboard', icon: <LuLayoutDashboard /> },
    {
        name: 'Commercial Registration',
        icon: <TfiWrite />,
        sub: [
            { subRoute: '/new_registration', name: 'New Commercial Registration' },
            { subRoute: '/new_profession', name: 'New Profession Registration' },
        ]
    },
    {
        name: 'Business License',
        icon: < PiCertificate />,
        sub: [
            { subRoute: '/license', name: 'License' },
            { subRoute: '/addproduct', name: 'Amend Business License' },
            { subRoute: '/categorylist', name: 'Business License Renewal' },
            { subRoute: '/addproduct', name: 'Replace Business License' },
            { subRoute: '/addproduct', name: 'Cancel Business License' },
        ]
    },
    { name: 'Feedback', route: '/feedback', icon: <HiOutlineCalendarDateRange /> },
    { name: 'Appointment', route: '/appointment', icon: <BsCalendar2Event /> },
];
const DashNav = ({ left }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [expandedItem, setExpandedItem] = useState(null);
    const [bar, setBar] = useState(false);
    const [user, setUser] = useState(false);
    const [menu, setMenu] = useState(false);
    const { theme, setTheme } = useTheme();
    console.log(theme)
    const handleShowTheme = () => {
        if (theme === 'light') {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    const handleHamburger = () => {
        setMenu(true);
    }

    const handleSearch = () => {
        setBar(true);
    }

    const handleNavigate = (route, index) => {
        console.log(index)
        if (route) {
            navigate(`${route}`)
            setMenu(false);
        } else {
            setExpandedItem(expandedItem === index ? null : index);
        }
    }
    console.log(expandedItem)

    const handleOk = () => {

    }

    const handleProfile = () => {
        setUser(!user);
    }

    const handleUser = () => {
        navigate('/profile');
        setUser(false);
    }

    const handleArrow = () => {
        setMenu(false);
    }

    const handleShow = () => {

    }

    return (
        <Flex className={`w-[100%] transition-all duration-400 ease-in-out  fixed z-20 shadow-md border-b border-gray-600 items-center px-9  py-4 justify-between rounded-md  bg-[#0E1526] `}>
            <Flex className="items-center space-x-4 ">
                <Flex className="bg-[#0690C6] rounded-[0.5rem] p-1">
                    <HiOutlineHome className="text-[2rem]" />
                </Flex>
                <p className="dm-sans-bold text-white text-[1.3rem]">ERPNext SaaS </p>
            </Flex>
            <Flex className="space-x-5">
                <Flex onClick={() => navigate('/dashboard')} className={`${location.pathname === '/dashboard' ?  'bg-[#0690C6]' : 'text-gray-400'} cursor-pointer  items-center rounded-[0.5rem] p-1 px-4 space-x-2`}>
                    <HiOutlineHome className="text-[1.3rem]" />
                    <p className="text-[0.9rem]">Dashboard</p>
                </Flex>
                <Flex  onClick={() => navigate('/sites')} className={`${location.pathname === '/sites' ?  'bg-[#0690C6]' : 'text-gray-400'} cursor-pointer  items-center rounded-[0.5rem] p-1 px-4 space-x-2`}>
                    <FiHardDrive className="text-[1.3rem]" />
                    <p className="text-[0.9rem]">Sites</p>
                </Flex>
                <Flex  onClick={() => navigate('/billing')} className={`${location.pathname === '/billing' ?  'bg-[#0690C6]' : 'text-gray-400'} cursor-pointer items-center rounded-[0.5rem] p-1 px-4 space-x-2`}>
                   <BsCreditCard2Front className="text-[1.3rem]" />
                    <p className="text-[0.9rem]">Billing</p>
                </Flex>
            </Flex>
            <Flex className="items-center space-x-3 cursor-pointer" >
                < LuSearch className="text-[1.2rem] sm:hidden block" onClick={handleSearch} />
                <Flex className="text-[--icon]" onClick={handleShowTheme}>
                    {theme === 'light' ?
                        < FaCloudMoon className="text-[1.5rem] text-white" /> :
                        <BiSun className="text-[1.5rem] text-white" />}

                </Flex>
                <ConfigProvider
                    theme={{
                        components: {
                            Badge: {
                                dotSize: 8,
                            }
                        }
                    }}>
                    <Badge dot={true} className="" offset={[-6, 6]}>
                        < IoMdNotificationsOutline className="text-[1.6rem] text-white" />
                    </Badge>
                </ConfigProvider>
                <ConfigProvider
                    theme={{
                        components: {
                            Badge: {
                                dotSize: 9,
                            }
                        }
                    }}>
                    <Badge dot={true} color="green" offset={[-6, 27]} className="w-[30px]">
                        <img onClick={handleProfile} src="/assets/landing/dashboard/guba2g.png" alt="" className="cursor-pointer rounded-full h-7 w-14 object-cover" />
                    </Badge>
                </ConfigProvider>
                {user &&
                    <>
                        <Flex className="flex-col absolute bg-[#0E1526] text-white top-[4.9rem] right-10 rounded-md  z-50 shadow-lg w-[15rem] h-[15rem] ">
                            <Flex className="cursor-pointer  pt-3  pb-2">
                                <Flex onClick={handleUser} className="py-2 hover:bg-gray-00 w-[100%] px-5 space-x-5 items-center">
                                    <ConfigProvider
                                        theme={{
                                            components: {
                                                Badge: {
                                                    dotSize: 9,
                                                }
                                            }
                                        }}>
                                        <Badge dot={true} color="green" offset={[-6, 35]}>
                                            <img onClick={handleProfile} src="/assets/landing/dashboard/1.png" alt="" className="rounded-full h-10" />
                                        </Badge>
                                    </ConfigProvider>
                                    <Flex className="flex-col ">
                                        <p className="font-semibold">John Doe</p>
                                        <p className="text-[--text-sidebar] text-[0.9rem]">Admin</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <hr />
                            <Flex className="text-[--text-color] space-y-5 public-sans-body flex-col pt-5 px-6 pb-4">
                                {/* <Flex className="cursor-pointer items-center space-x-4">
                                    <FaRegUser className="text-[1.2rem]" />
                                    <p>My Profile</p>
                                </Flex> */}
                                {/* <Flex className="cursor-pointer items-center space-x-4">
                                    <IoSettingsOutline className="text-[1.3rem]" />
                                    <p>Settings</p>
                                </Flex> */}
                                <Flex className="cursor-pointer items-center space-x-4">
                                    <CgLogOff className="text-[1.3rem]" />
                                    <p>Log Out</p>
                                </Flex>
                            </Flex>

                        </Flex>
                    </>
                }
            </Flex>
            {menu && (
                <Flex className="flex xl:hidden ">
                    <div onClick={() => setMenu(false)} className="cursor-pointer absolute z-30 w-[100%] min-h-screen bottom-0 top-[-1rem] left-[2rem]  bg-[#90979E]/40" />
                    <Flex className="pl-3 absolute z-30 bg-[--foreground] min-h-screen  top-[-1rem] left-[-2rem]">
                        <Flex className="bg-[--foreground] w-[255px] shadow pr-7" >
                            <Flex className="fixed top-7 z-20 justify-end w-[17rem] cursor-pointer" onClick={handleArrow}>
                                <IoIosArrowDropleftCircle className="text-[#0D9394] text-[2.2rem] bg-[--foreground] rounded-full p-1" />
                            </Flex>
                            <Flex className="w-[100%] mx-auto flex-col ">
                                <Flex className=" z-10 items-center h-20 pl-3 fixed bg-[--foreground] ">
                                    <img src="/assets/landing/dashboard/logom.png" alt="logo" className='h-[3.9rem] pb-3' />
                                    <img src="/assets/landing/dashboard/name.png" alt="logo" className='sm:h-[2.9rem] h-[2.5rem] w-[100%]' />
                                </Flex>
                                <span className="fixed top-[60px] z-10 bg-[--foreground]/40 h-6 w-[16.8%]" />
                                <Flex className="pt-[4.4rem] w-[95%] flex-col space-y-2 public-sans-body mt-5 mx-4">
                                    {navlist?.map((list, index) =>
                                        <Flex>
                                            <Flex key={index} className={` flex-col  w-[100%] cursor-pointer  `}>
                                                <SideList list={list} handleNavigate={handleNavigate} handleShow={handleShow} index={index} />
                                                <Flex className={` px-4 rounded-md `}>
                                                    {list?.sub?.length >= 1 && expandedItem === index &&
                                                        <>
                                                            <Flex className="flex-col space-y-2 pl-1 pt-2">
                                                                {list?.sub?.map((item) => (
                                                                    <>
                                                                        <Flex onClick={() => handleNavigate(item?.subRoute, index)} className="items-center space-x-5 w-[100%] rounded-md px- py-1 px-1 hover:bg-[--hover-bg] ">
                                                                            <Flex className={`items-center rounded-full`}>
                                                                                <GoDotFill className={`${item?.subRoute == location.pathname ? 'text-[#0D9394] bg-[#0D9394]/20 rounded-full' : 'text-gray-400'}  `} />
                                                                            </Flex>
                                                                            <Flex className="flex-col" >
                                                                                <p className="public-sans-body  hover:text-[--hover-text] text-[--text-sidebar] sm:text-[1rem] text-[0.95rem]">{item?.name}</p>
                                                                            </Flex>

                                                                        </Flex>
                                                                    </>
                                                                ))}
                                                            </Flex>
                                                        </>
                                                    }
                                                </Flex>

                                            </Flex>
                                            {list?.route === location.pathname &&
                                                <span className=" absolute  mt-[0.1rem] ml-[14.7rem] h-11 w-1 bg-[#0D9394] rounded-l-md" />
                                            }
                                        </Flex>
                                    )}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            )}

        </Flex>
    );
};

export default DashNav;