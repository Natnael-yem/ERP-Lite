import { Flex } from "antd";
import { useState } from "react";
import { BiError } from "react-icons/bi";
import { FiClock, FiRefreshCw } from "react-icons/fi";
import { GoCheckCircle, GoInfo } from "react-icons/go";
import { HiOutlineBolt, HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { IoMdMore } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TiCloudStorageOutline } from "react-icons/ti";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: "00:00", pv: 800 },
    { name: "04:00", pv: 1600 },
    { name: "08:00", pv: 2400 },
    { name: "12:00", pv: 4000 },
    { name: "16:00", pv: 4800 },
    { name: "20:00", pv: 5600 }
];


export default function Sites() {
    const [filterlist, setFilterList] = useState('Overview')
    const filter = ['Overview', 'Users', 'Settings', 'Backups', 'Analytics']
    return (
        <Flex className="flex-col w-[97%] space-y-5 mx-auto">
            <Flex className="text-gray-400 space-x-2 items-center">
                <HiOutlineHome className="text-[1.4rem]" />
                <MdKeyboardArrowRight className="text-[1.2rem]" />
                <p className="">Dashboard</p>
                <MdKeyboardArrowRight className="text-[1.2rem]" />
                <p className="text-white">Site Managment</p>
            </Flex>
            <Flex className="space-y-6 bg-[#0E1526] p-5 rounded-[0.5rem] space-y-2 flex-col border-r border-t border-gray-600">
                <Flex className="items-center justify-between">
                    <Flex className="flex-col space-y-1 items-start">
                        <p className="font-mono text-white text-[1.3rem]">demo-site-01.erpnext.cloud</p>
                        <Flex className="text-green-600 items-center space-x-2 text-[0.85rem] border px-3 rounded-[0.5rem] py-[1px] border-green-600/30 ">
                            <GoCheckCircle />
                            <p>Active</p>
                        </Flex>
                    </Flex>
                    <Flex className="items-center bg-blue-500 py-1 px-4 space-x-2 rounded-[0.4rem]">
                        <FiRefreshCw />
                        <p className="text-[0.9rem] ">Restart Site</p>
                    </Flex>
                </Flex>
                <Flex className="justify-between w-[85%]">
                    <Flex className="flex-col space-y-1">
                        <Flex className="items-center  space-x-2">
                            <FiClock className="text-blue-500 text-[0.9rem]" />
                            <p className="text-gray-500 text-[0.7rem]">UPTIME</p>
                        </Flex>
                        <p className="text-white">99.98 %</p>
                    </Flex>
                    <Flex className="flex-col space-y-1">
                        <Flex className="items-center  space-x-2">
                            <HiOutlineBolt className="text-blue-500 text-[0.9rem]" />
                            <p className="text-gray-500 text-[0.7rem]">RESPONSE TIME</p>
                        </Flex>
                        <p className="text-white">142ms</p>
                    </Flex>
                    <Flex className="flex-col space-y-1">
                        <Flex className="items-center  space-x-2">
                            <TiCloudStorageOutline className="text-blue-500 text-[0.9rem]" />
                            <p className="text-gray-500 text-[0.7rem]">LAST BACKUP</p>
                        </Flex>
                        <p className="text-white">2 hours ago</p>
                    </Flex>
                    <Flex className="flex-col space-y-1">
                        <Flex className="items-center  space-x-2">
                            <HiOutlineUsers className="text-blue-500 text-[0.9rem]" />
                            <p className="text-gray-500 text-[0.7rem]">ACTIVE USERS</p>
                        </Flex>
                        <p className="text-white">47</p>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="space-y-6 bg-[#0E1526] p-5 rounded-[0.5rem] space-y-2 flex-col border border-gray-700">
                <Flex className="space-x-7">
                    {filter?.map((item) =>
                        <p onClick={() => setFilterList(item)} className={`cursor-pointer ${filterlist === item ? 'bg-blue-500' : 'text-gray-500'} px-3 py-1 rounded-[0.5rem]`}>{item}</p>
                    )}
                </Flex>
                <Flex className="w-[100%] space-x-6">
                    <Flex className="w-[50%] p-4 flex-col space-y-4 rounded-[0.5rem] border border-gray-600">
                        <p className="text-[1.1rem] text-white font-mono">Performanace Metrics</p>
                        <Flex>
                            <LineChart
                                style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                                responsive
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis width="auto" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                {/* <RechartsDevtools /> */}
                            </LineChart>
                        </Flex>
                    </Flex>
                    <Flex className="w-[50%] flex-col space-y-4 p-4 rounded-[0.5rem] border border-gray-600">
                        <Flex className="justify-between w-[100%]">
                            <p className="text-[1.1rem] text-white font-mono">System Alerts</p>
                            <p className="text-blue-500 text-[0.8rem]">3 Active</p>
                        </Flex>
                        <Flex className=" flex-col border border-gray-600 p-3 rounded-[0.5rem]">
                            <Flex className="items-center space-x-3">
                                <BiError className="text-yellow-600" />
                                <p className="text-white">High CPU Usage</p>
                            </Flex>
                            <p className="text-gray-500 text-[0.8rem]">CPU usage has exceeded 80% for the last 15 minutes. Consider upgrading your plan.</p>
                            <p className="text-gray-500 text-[0.8rem]">15 minutes ago</p>
                        </Flex>
                        <Flex className=" flex-col border border-gray-600 p-3 rounded-[0.5rem]">
                            <Flex className="items-center space-x-3">
                                <GoInfo className="text-blue-500" />
                                <p className="text-white">Backup Completed</p>
                            </Flex>
                            <p className="text-gray-500 text-[0.8rem]">CPU usage has exceeded 80% for the last 15 minutes. Consider upgrading your plan.</p>
                            <p className="text-gray-500 text-[0.8rem]">2 hours ago</p>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="w-[100%] p-4 flex-col space-y-4 rounded-[0.5rem] border border-gray-600">
                    <p className="text-[1.1rem] text-white font-mono">Quick Actions</p>
                    <Flex className=" ml-10 grid grid-cols-2 gap-5 justify-between">
                        <Flex className="space-x-2">
                            <LuRefreshCw className="mt-1 text-blue-400" />
                            <Flex className="flex-col ">
                                <p className="text-blue-400">Restart Site</p>
                                <p className="text-gray-500 text-[0.8rem]">Restart the ERPNext instance</p>
                            </Flex>
                        </Flex>
                        <Flex className="space-x-2">
                            <LuRefreshCw className="mt-1 text-blue-400" />
                            <Flex className="flex-col ">
                                <p className="text-orange-400">Maintenance Mode</p>
                                <p className="text-gray-500 text-[0.8rem]">Enable maintenace mode</p>
                            </Flex>
                        </Flex>
                        <Flex className="space-x-2">
                            <LuRefreshCw className="mt-1 text-blue-400" />
                            <Flex className="flex-col ">
                                <p className="text-blue-400">Migrate Site</p>
                                <p className="text-gray-500 text-[0.8rem]">Move to diffrent server</p>
                            </Flex>
                        </Flex>
                        <Flex className="space-x-2">
                            <LuRefreshCw className="mt-1 text-blue-400" />
                            <Flex className="flex-col ">
                                <p className="text-red-400">Delete Site</p>
                                <p className="text-gray-500 text-[0.8rem]">Permanently remove site</p>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    );
}