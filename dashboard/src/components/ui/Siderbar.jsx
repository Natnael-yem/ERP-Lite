import { Flex } from "antd";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import SideList from "./SideList";
import { PiCertificate } from "react-icons/pi";
import { BsCalendar2Event } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { LuLayoutDashboard } from "react-icons/lu";
import Amharic from '../../data/Amharic.json';
import English from '../../data/English.json';

const Sidebar = ({ left, setLeft }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [expandedItem, setExpandedItem] = useState(null);
    const [leftInside, setLeftInside] = useState(true);
    const LangSelect = localStorage.getItem('Language');
    const Language = LangSelect === 'አማርኛ' ? Amharic.amharic : English.english;

    const navlist = [
        { name: 'Dashboard', route: '/dashboard', icon: <LuLayoutDashboard /> },
        {
            name: 'Registration',
            icon: <TfiWrite />,
            sub: [
                { subRoute: '/new_registration', name: 'New Commercial Registration' },
                { subRoute: '/new_profession', name: 'New Profession Registration' },
            ]
        },
        {
            name: 'Professional Qualification',
            icon: < PiCertificate />,
            sub: [
                { subRoute: '/license', name: 'License' },
                { subRoute: '/addproduct', name: 'Amend Business License' },
            ]
        },
        { name: 'Feedback', route: '/feedback', icon: <HiOutlineCalendarDateRange /> },
        { name: 'Appointment', route: '/appointment', icon: <BsCalendar2Event /> },
    ];

    const handleNavigate = (route, index) => {
        if (route) {
            navigate(route);
            setExpandedItem(null);
        } else {
            setExpandedItem(expandedItem === index ? null : index);
        }
    };

    const handleArrow = () => {
        setLeft(!left);
        localStorage.setItem('left', left);
        if (!left) {
            setLeftInside(true);
        }
    };

    const handleEnter = () => {
        if (left) {
            setLeftInside(false);
        }
    };

    const handleLeave = () => {
        setLeftInside(true);
        setExpandedItem(null);
    };

    return (
        <Flex className="xl:flex hidden w-[100%]  z-20 transition-all duration-300 ease-in-out border-l-2">
            {left ? (
                <Flex
                    className={`z-20 fixed transition-all duration-300 ease-in-out shadow-md ${leftInside ? 'w-[90px]' : 'w-[265px]'
                        } bg-[--foreground] min-h-screen`}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    <Flex className="w-full mx-auto flex-col">
                        <Flex className="w-full items-center h-20 px-4">
                            <img src="/assets/landing/dashboard/logom.png" alt="logo" className="h-[4.3rem] pb-3" />
                            {!leftInside && <img src="/assets/landing/dashboard/name.png" alt="logo" className="h-[2.9rem]" />}
                        </Flex>
                        <Flex className="w-[85%] flex-col space-y-2 mt-4 mx-4">
                            {Language?.navlist.map((list, index) => (
                                <div key={index}>
                                    <Flex
                                        onClick={() => handleNavigate(list.route, index)}
                                        className={`flex items-center cursor-pointer space-x-3 py-3 px-4  rounded-md transition-colors duration-300 ease-in-out ${list.route === location.pathname
                                            ? 'text-[#0D9394] bg-[#0D9394]/10 '
                                            : 'text-[#384551] hover:bg-gray-100 '
                                            }`}
                                    >
                                        <span className="text-[1.6rem]">{list.icon}</span>
                                        {!leftInside && (
                                            <Flex className="items-center justify-between w-[100%]">
                                                <p className="public-sans-body">{list.name}</p>
                                                {list?.sub?.length >= 1 && (
                                                    expandedItem === index ? (
                                                        <IoIosArrowDown onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleNavigate(null, index);
                                                        }} />
                                                    ) : (
                                                        <IoIosArrowForward onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleNavigate(null, index);
                                                        }} />
                                                    )
                                                )}
                                            </Flex>
                                        )}
                                    </Flex>
                                    {list?.sub?.length >= 1 && expandedItem === index && (
                                        <Flex className="py-3 px-4 rounded-md">
                                            <Flex className="flex-col space-y-6 pl-4 ">
                                                {list.sub.map((item, subIndex) => (
                                                    <Flex
                                                        key={subIndex}
                                                        className="cursor-pointer items-center space-x-5 w-[100%]"
                                                        onClick={() => handleNavigate(item.subRoute)}
                                                    >
                                                        <Flex className="items-center rounded-full">
                                                            <GoDotFill className={`${item.subRoute === location.pathname
                                                                ? 'text-[#0D9394] bg-[#0D9394]/20 rounded-full'
                                                                : 'text-gray-400'
                                                                }`} />
                                                        </Flex>
                                                        <Flex className="flex-col">
                                                            <p className="public-sans-body text-gray-700">
                                                                {item.name}
                                                            </p>
                                                        </Flex>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        </Flex>
                                    )}
                                    {list.route === location.pathname && (
                                        <span
                                            className={`${leftInside ? 'ml-[4.4rem]' : ''
                                                } transition duration-600 ease-in-out absolute mt-[-2.9rem] h-11 w-1 bg-[#0D9394] rounded-l-md`}
                                        />
                                    )}
                                </div>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex className="transition-all duration-300 ease-in-out">
                        {!leftInside && (
                            <Flex
                                className="absolute ml-[-16px] mt-8 cursor-pointer"
                                onClick={handleArrow}
                            >
                                <IoIosArrowDropleftCircle className="text-[#0D9394] text-[2.2rem] bg-gray-100 rounded-full p-1 transition-transform duration-300 ease-in-out transform rotate-180" />
                            </Flex>
                        )}
                    </Flex>
                </Flex>
            ) : (
                <Flex className="bg-[--foreground] w-[265px] min-h-screen z-20">
                    <Flex
                        className="fixed top-7 z-20 justify-end 2xl:w-[18.5%] xl:w-[22%] cursor-pointer"
                        onClick={handleArrow}
                    >
                        <IoIosArrowDropleftCircle className="text-[#0D9394] text-[2.2rem] bg-gray-100 rounded-full p-1" />
                    </Flex>
                    <Flex className="w-[100%] mx-auto flex-col h-screen">
                        <Flex className="w-[17%] z-10 items-center pl-3 h-20 fixed bg-[--foreground]">
                            <img src="/assets/landing/dashboard/logom.png" alt="logo" className="h-[4.3rem] pb-3" />
                            <img src="/assets/landing/dashboard/name.png" alt="logo" className="h-[2.9rem]" />
                        </Flex>
                        <Flex className="overflow-auto w-[95%] flex-col space-y-2  public-sans-body mt-20">
                            {navlist.map((list, index) => (
                                <Flex key={index}>
                                    <Flex className="flex-col w-[100%] cursor-pointer ml-2">
                                        <SideList
                                            list={list}
                                            handleNavigate={handleNavigate}
                                            expandedItem={expandedItem}
                                            index={index}
                                        />
                                        {list?.sub?.length >= 1 && expandedItem === index && (
                                            <Flex className="py-3 px-2 rounded-md">
                                                <Flex className="flex-col space-y-6 pl-2">
                                                    {list.sub.map((item, subIndex) => (
                                                        <Flex
                                                            key={subIndex}
                                                            className="items-center space-x-2 w-[100%]"
                                                            onClick={() => handleNavigate(item.subRoute)}
                                                        >
                                                            <Flex className="items-center hover:bg-[--hover-bg] rounded-full hover:">
                                                                <GoDotFill className={`${item.subRoute === location.pathname
                                                                    ? 'text-[#0D9394] bg-[#0D9394]/20 rounded-full'
                                                                    : 'text-gray-400'
                                                                    }`} />
                                                            </Flex>
                                                            <Flex className="flex-col">
                                                                <p className="public-sans-body text-[--text-sidebar] text-[0.96em]">
                                                                    {item.name}
                                                                </p>
                                                            </Flex>
                                                        </Flex>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        )}
                                    </Flex>
                                    {list.route === location.pathname && (
                                        <span className="absolute mt-[0.1rem] ml-[15.4rem] h-11 w-1 bg-[#0D9394] rounded-l-md" />
                                    )}
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};

export default Sidebar;