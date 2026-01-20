import { ConfigProvider, Flex, Select } from "antd";
import { GrStorage } from "react-icons/gr";
import { HiMiniArrowTrendingUp, HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { MdKeyboardArrowRight, MdOutlinePayment } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosCheckmarkCircleOutline, IoMdMore } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserRoundPlus } from "react-icons/lu";
import { LiaFilterSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { useFrappeGetDocList } from "frappe-react-sdk";

export default function Dashboard() {
    const navigate = useNavigate();
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Get and decode the user email
    const encodedUserId = getCookie('user_id');
    const decodedUserId = encodedUserId ? decodeURIComponent(encodedUserId) : null;

    console.log(decodedUserId, 'email');
    if (decodedUserId) {
        localStorage.setItem('email', decodedUserId)
    }

    // const frappeFilters = decodedUserId ? [['institution_email', '=', decodedUserId]] : [];

    const { data, error, isLoading } = useFrappeGetDocList('Site', {
        fields: ['subdomain', 'domain', 'status', 'server', 'bench'],
        // filters: frappeFilters,
    });
    console.log(data)

    if (error) {
        console.error('Frappe error:', error);
    }
    return (
        <Flex className="flex-col w-[97%] space-y-5 mx-auto">
            <Flex className="text-gray-400 space-x-2 items-center">
                <HiOutlineHome className="text-[1.4rem]" />
                <MdKeyboardArrowRight className="text-[1.2rem]" />
                <p className="">Dashboard</p>
            </Flex>
            <Flex className="flex-col space-y-5">
                <p className="text-[1.5rem] text-white">Dashboard</p>
                <p className="text-gray-500">Monitor and manage your ERPNext site portfolio with real-time insights and analytics.</p>
                <Flex className="justify-between space-x-10 w-[85%]">
                    <Flex className="bg-[#0E1526] border-l border-r border-gray-600 space-y-2 p-6 rounded-[0.6rem] w-[75%] h-[10rem] items-start flex-col">
                        <Flex className="justify-between w-[100%] items-center">
                            <Flex className="bg-[#0690C6] rounded-[0.5rem] p-2">
                                <HiOutlineHome className="text-[1.7rem]" />
                            </Flex>
                            <Flex className="text-green-400 items-center space-x-1 text-[0.9rem]">
                                <HiMiniArrowTrendingUp />
                                <p>12%</p>
                            </Flex>
                        </Flex>
                        <p className="text-gray-600 text-[0.9rem]">Total Sites</p>
                        <p className="text-white text-[1.6rem]">24</p>
                    </Flex>
                    <Flex className="bg-[#0E1526] border-l border-r border-gray-600 space-y-2 p-6 rounded-[0.6rem] w-[75%] h-[10rem] items-start flex-col">
                        <Flex className="justify-between w-[100%] items-center">
                            <Flex className="bg-green-500 rounded-[0.5rem] p-2">
                                <HiOutlineUsers className="text-[1.7rem]" />
                            </Flex>
                            <Flex className="text-green-400 items-center space-x-1 text-[0.9rem]">
                                <HiMiniArrowTrendingUp />
                                <p>8%</p>
                            </Flex>
                        </Flex>
                        <p className="text-gray-600 text-[0.9rem]">Active Users</p>
                        <p className="text-white text-[1.6rem]">1,847</p>
                    </Flex>
                    <Flex className="bg-[#0E1526] border-l border-r border-gray-600 space-y-2 p-6 rounded-[0.6rem] w-[75%] h-[10rem] items-start flex-col">
                        <Flex className="justify-between w-[100%] items-center">
                            <Flex className="bg-orange-400 rounded-[0.5rem] p-2">
                                <GrStorage className="text-[1.7rem]" />
                            </Flex>
                            <Flex className="text-green-400 items-center space-x-1 text-[0.9rem]">
                                <HiMiniArrowTrendingUp />
                                <p>15%</p>
                            </Flex>
                        </Flex>
                        <p className="text-gray-600 text-[0.9rem]">Storage Used</p>
                        <p className="text-white text-[1.6rem]">342 GB</p>
                    </Flex>
                    <Flex className="bg-[#0E1526] border-l border-r border-gray-600 space-y-2 p-6 rounded-[0.6rem] w-[75%] h-[10rem] items-start flex-col">
                        <Flex className="justify-between w-[100%] items-center">
                            <Flex className="bg-red-500 rounded-[0.5rem] p-2">
                                <RiMoneyDollarCircleLine className="text-[1.7rem]" />
                            </Flex>
                            <Flex className="text-green-400 items-center space-x-1 text-[0.9rem]">
                                <HiMiniArrowTrendingUp />
                                <p>5%</p>
                            </Flex>
                        </Flex>
                        <p className="text-gray-600 text-[0.9rem]">Monthly Revenue</p>
                        <p className="text-white text-[1.6rem]">$12,450</p>
                    </Flex>
                </Flex>
                <Flex className="w-[100%] justify-between">
                    <Flex className="space-x-3">
                        <Flex onClick={() => navigate('/site-creation-wizard')} className="cursor-pointer bg-[#0690C6] items-center rounded-[0.5rem] p-2 px-6 space-x-2">
                            <AiOutlinePlusCircle className="text-[1.3rem]" />
                            <p className="text-[0.9rem] font-medium ">Create New Site</p>
                        </Flex>
                        <Flex className="bg-[#0E1526] text-white items-center rounded-[0.5rem] p-2 px-6 space-x-2">
                            <AiOutlinePlusCircle className="text-[1.3rem]" />
                            <p className="text-[0.9rem] font-medium ">Bulk Management</p>
                        </Flex>
                        <Flex className="bg-[#0E1526] text-white items-center rounded-[0.5rem] p-2 px-6 space-x-2">
                            <AiOutlinePlusCircle className="text-[1.3rem]" />
                            <p className="text-[0.9rem] font-medium ">Export Report</p>
                        </Flex>
                    </Flex>
                    <Flex className="space-x-3 items-center">
                        <Flex className="text-gray-700 items-center space-x-1">
                            <LiaFilterSolid />
                            <p>Filters:</p>
                        </Flex>
                        <Flex className="">
                            <ConfigProvider theme={{
                                components: {
                                    Select: {
                                        colorBgContainer: '#0E1526',
                                        // colorTextPlaceholder: 'white',
                                        colorIcon: 'white',
                                        colorBorder: 'transparent',
                                        colorText: 'white'
                                    }
                                }
                            }}>
                                <Select
                                    defaultValue="All Status"
                                    style={{ width: 120 }}
                                    // placeholder= 'jsghsg'
                                    // onChange={handleChange}
                                    suffixIcon={
                                        <Flex>
                                            <IoIosArrowDown className="text-white text-[1.1rem]" />
                                        </Flex>
                                    }
                                    options={[
                                        // { value: 'All Status', label: <p className="text-black">All Status</p> },
                                        { value: 'jack', label: <p className="text-black">Jack</p> },
                                        { value: 'jack', label: <p className="text-black">Jack</p> },
                                        { value: 'jack', label: <p className="text-black">Jack</p> },
                                    ]}
                                />
                            </ConfigProvider>
                        </Flex>
                        <Flex className="">
                            <ConfigProvider theme={{
                                components: {
                                    Select: {
                                        colorBgContainer: '#0E1526',
                                        // colorTextPlaceholder: 'white',
                                        colorIcon: 'white',
                                        colorBorder: 'transparent',
                                        colorText: 'white'
                                    }
                                }
                            }}>
                                <Select
                                    defaultValue="All Plans"
                                    style={{ width: 120 }}
                                    // placeholder= 'jsghsg'
                                    // onChange={handleChange}
                                    suffixIcon={
                                        <Flex>
                                            <IoIosArrowDown className="text-white text-[1.1rem]" />
                                        </Flex>
                                    }
                                    options={[
                                        // { value: 'All Status', label: <p className="text-black">All Status</p> },
                                        { value: 'jack', label: <p className="text-black">Jack</p> },
                                        { value: 'jack', label: <p className="text-black">Jack</p> },
                                        { value: 'jack', label: <p className="text-black">Jack</p> },
                                    ]}
                                />
                            </ConfigProvider>
                        </Flex>
                        <Flex className="">
                            <ConfigProvider theme={{
                                components: {
                                    Select: {
                                        colorBgContainer: '#0E1526',
                                        // colorTextPlaceholder: 'white',
                                        colorIcon: 'white',
                                        colorBorder: 'transparent',
                                        colorText: 'white'
                                    }
                                }
                            }}>
                                <Select
                                    defaultValue="Most Recent"
                                    style={{ width: 120 }}
                                    // placeholder= 'jsghsg'
                                    // onChange={handleChange}
                                    suffixIcon={
                                        <Flex>
                                            <IoIosArrowDown className="text-white text-[1.1rem]" />
                                        </Flex>
                                    }
                                    options={[
                                        // { value: 'All Status', label: <p className="text-black">All Status</p> },
                                        { value: 'jack', label: <p className="text-black">Jack</p> },
                                        { value: 'jack', label: <p className="text-black">Jack</p> },
                                        { value: 'jack', label: <p className="text-black">Jack</p> },
                                    ]}
                                />
                            </ConfigProvider>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="w-[100%] space-x-10 ">
                    <Flex className="grid grid-cols-2 gap-6 w-[60%]  ">
                        <Flex className="bg-[#0E1526] border-t border-r border-gray-600 space-y-2 p-6 rounded-[0.6rem] w-[100%] min-h-[13rem] items-start flex-col">
                            <Flex className="justify-between w-[100%] items-center">
                                <Flex className="space-x-3 items-center">
                                    <Flex className="bg-[#0690C6]  rounded-[0.5rem] p-2">
                                        <HiOutlineHome className="text-[1.7rem]" />
                                    </Flex>
                                    <Flex className="flex-col">
                                        <p className="text-white text-[1.1rem]">TechCorp ERP</p>
                                        <p className="text-gray-500">techcorp.erpnext.cloud</p>
                                    </Flex>
                                </Flex>

                                <Flex className="text-green-600 items-center space-x-1 text-[0.9rem]">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Active</p>
                                </Flex>
                            </Flex>
                            <Flex className="justify-between w-[72%]">
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Active Users</p>
                                    <p className="text-white text-[1.1rem]">124</p>
                                </Flex>
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Storage Used</p>
                                    <p className="text-white text-[1.1rem]">24 GB</p>
                                </Flex>
                            </Flex>
                            <Flex className="justify-between w-[70%]">
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]"> Plan</p>
                                    <p className="text-white text-[1.1rem]">Enterprise</p>
                                </Flex>
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Last Active</p>
                                    <p className="text-white text-[1.1rem]">5 min ago</p>
                                </Flex>
                            </Flex>
                            <Flex className="items-center space-x-2 w-[100%] pt-2">
                                <Flex className="bg-[#0690C6] justify-center w-[100%] items-center rounded-[0.5rem] p-2 px-6 space-x-2">
                                    <IoSettingsOutline className="text-[1.3rem]" />
                                    <p className="text-[0.9rem] font-medium ">Manage</p>
                                </Flex>
                                <Flex className="border border-gray-600 text-white p-[0.6rem] rounded-[0.5rem]">
                                    <IoMdMore />
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="bg-[#0E1526] border-t border-r border-gray-600 space-y-2 p-6 rounded-[0.6rem] w-[100%] min-h-[13rem] items-start flex-col">
                            <Flex className="justify-between w-[100%] items-center">
                                <Flex className="space-x-3 items-center">
                                    <Flex className="bg-[#0690C6]  rounded-[0.5rem] p-2">
                                        <HiOutlineHome className="text-[1.7rem]" />
                                    </Flex>
                                    <Flex className="flex-col">
                                        <p className="text-white text-[1.1rem]">RetailHub Solutions</p>
                                        <p className="text-gray-500">retailhub.erpnext.cloud</p>
                                    </Flex>
                                </Flex>

                                <Flex className="text-green-600 items-center space-x-1 text-[0.9rem]">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Active</p>
                                </Flex>
                            </Flex>
                            <Flex className="justify-between w-[72%]">
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Active Users</p>
                                    <p className="text-white text-[1.1rem]">84</p>
                                </Flex>
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Storage Used</p>
                                    <p className="text-white text-[1.1rem]">24 GB</p>
                                </Flex>
                            </Flex>
                            <Flex className="justify-between w-[70%]">
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]"> Plan</p>
                                    <p className="text-white text-[1.1rem]">Professional</p>
                                </Flex>
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Last Active</p>
                                    <p className="text-white text-[1.1rem]">12 min ago</p>
                                </Flex>
                            </Flex>
                            <Flex className="items-center space-x-2 w-[100%] pt-2">
                                <Flex className="bg-[#0690C6] justify-center w-[100%] items-center rounded-[0.5rem] p-2 px-6 space-x-2">
                                    <IoSettingsOutline className="text-[1.3rem]" />
                                    <p className="text-[0.9rem] font-medium ">Manage</p>
                                </Flex>
                                <Flex className="border border-gray-600 text-white p-[0.6rem] rounded-[0.5rem]">
                                    <IoMdMore />
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="bg-[#0E1526] border-t border-r border-gray-600 space-y-2 p-6 rounded-[0.6rem] w-[100%] min-h-[13rem] items-start flex-col">
                            <Flex className="justify-between w-[100%] items-center">
                                <Flex className="space-x-3 items-center">
                                    <Flex className="bg-[#0690C6]  rounded-[0.5rem] p-2">
                                        <HiOutlineHome className="text-[1.7rem]" />
                                    </Flex>
                                    <Flex className="flex-col">
                                        <p className="text-white text-[1.1rem]">TechCorp ERP</p>
                                        <p className="text-gray-500">techcorp.erpnext.cloud</p>
                                    </Flex>
                                </Flex>

                                <Flex className="text-green-600 items-center space-x-1 text-[0.9rem]">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Active</p>
                                </Flex>
                            </Flex>
                            <Flex className="justify-between w-[72%]">
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Active Users</p>
                                    <p className="text-white text-[1.1rem]">124</p>
                                </Flex>
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Storage Used</p>
                                    <p className="text-white text-[1.1rem]">24 GB</p>
                                </Flex>
                            </Flex>
                            <Flex className="justify-between w-[70%]">
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]"> Plan</p>
                                    <p className="text-white text-[1.1rem]">Enterprise</p>
                                </Flex>
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Last Active</p>
                                    <p className="text-white text-[1.1rem]">5 min ago</p>
                                </Flex>
                            </Flex>
                            <Flex className="items-center space-x-2 w-[100%] pt-2">
                                <Flex className="bg-[#0690C6] justify-center w-[100%] items-center rounded-[0.5rem] p-2 px-6 space-x-2">
                                    <IoSettingsOutline className="text-[1.3rem]" />
                                    <p className="text-[0.9rem] font-medium ">Manage</p>
                                </Flex>
                                <Flex className="border border-gray-600 text-white p-[0.6rem] rounded-[0.5rem]">
                                    <IoMdMore />
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="bg-[#0E1526] border-t border-r border-gray-600 space-y-2 p-6 rounded-[0.6rem] w-[100%] min-h-[13rem] items-start flex-col">
                            <Flex className="justify-between w-[100%] items-center">
                                <Flex className="space-x-3 items-center">
                                    <Flex className="bg-[#0690C6]  rounded-[0.5rem] p-2">
                                        <HiOutlineHome className="text-[1.7rem]" />
                                    </Flex>
                                    <Flex className="flex-col">
                                        <p className="text-white text-[1.1rem]">TechCorp ERP</p>
                                        <p className="text-gray-500">techcorp.erpnext.cloud</p>
                                    </Flex>
                                </Flex>

                                <Flex className="text-green-600 items-center space-x-1 text-[0.9rem]">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Active</p>
                                </Flex>
                            </Flex>
                            <Flex className="justify-between w-[72%]">
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Active Users</p>
                                    <p className="text-white text-[1.1rem]">124</p>
                                </Flex>
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Storage Used</p>
                                    <p className="text-white text-[1.1rem]">24 GB</p>
                                </Flex>
                            </Flex>
                            <Flex className="justify-between w-[70%]">
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]"> Plan</p>
                                    <p className="text-white text-[1.1rem]">Enterprise</p>
                                </Flex>
                                <Flex className="flex-col">
                                    <p className="text-gray-400 text-[0.9rem]">Last Active</p>
                                    <p className="text-white text-[1.1rem]">5 min ago</p>
                                </Flex>
                            </Flex>
                            <Flex className="items-center space-x-2 w-[100%] pt-2">
                                <Flex className="bg-[#0690C6] justify-center w-[100%] items-center rounded-[0.5rem] p-2 px-6 space-x-2">
                                    <IoSettingsOutline className="text-[1.3rem]" />
                                    <p className="text-[0.9rem] font-medium ">Manage</p>
                                </Flex>
                                <Flex className="border border-gray-600 text-white p-[0.6rem] rounded-[0.5rem]">
                                    <IoMdMore />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="w-[40%] ">
                        <Flex className="bg-[#0E1526] border-l border-r border-gray-600 space-y-2 p-4 rounded-[0.6rem] ms-auto w-[90%] min-h-[10rem] items-start flex-col">
                            <p className="text-[1.2rem] text-white">Recent Activity</p>
                            <Flex className="flex-col border-t space-y-3 border-gray-500">
                                <Flex className="pt-3 space-x-3 ">
                                    <AiOutlinePlusCircle className="text-[1.4rem] mt-1 text-green-700" />
                                    <Flex className="flex-col ">
                                        <p className="text-white font-medium">New Site Created</p>
                                        <p className="text-gray-500 text-[0.9rem]">TechCorp ERP site has been successfully provisioned with Enterprise plan.</p>
                                        <p className="text-gray-500 text-[0.75rem] pt-1">18 minutes ago</p>
                                    </Flex>
                                </Flex>
                                <Flex className="pt-3 space-x-3 ">
                                    <LuUserRoundPlus className="text-[1.4rem] mt-1 text-blue-700" />
                                    <Flex className="flex-col ">
                                        <p className="text-white font-medium">New User Registration</p>
                                        <p className="text-gray-500 text-[0.9rem]">TechCorp ERP site has been successfully provisioned with Enterprise plan.</p>
                                        <p className="text-gray-500 text-[0.75rem] pt-1">25 minutes ago</p>
                                    </Flex>
                                </Flex>
                                <Flex className="pt-3 space-x-3 ">
                                    <MdOutlinePayment className="text-[1.4rem] mt-1 text-orange-400" />
                                    <Flex className="flex-col ">
                                        <p className="text-white font-medium">Payment Recieved</p>
                                        <p className="text-gray-500 text-[0.9rem]">TechCorp ERP site has been successfully provisioned with Enterprise plan.</p>
                                        <p className="text-gray-500 text-[0.75rem] pt-1">18 minutes ago</p>
                                    </Flex>
                                </Flex>
                                <Flex className="pt-3 space-x-3 ">
                                    <AiOutlinePlusCircle className="text-[1.4rem] mt-1 text-green-700" />
                                    <Flex className="flex-col ">
                                        <p className="text-white font-medium">New Site Created</p>
                                        <p className="text-gray-500 text-[0.9rem]">TechCorp ERP site has been successfully provisioned with Enterprise plan.</p>
                                        <p className="text-gray-500 text-[0.75rem] pt-1">18 minutes ago</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}