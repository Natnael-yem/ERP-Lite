import { ConfigProvider, Flex, Segmented, Switch } from "antd";
import { FaDollarSign } from "react-icons/fa6";
import { IoIosArrowRoundForward, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Element } from "react-scroll";

export default function Pricing() {
    return (
        <Element name="section4">
            <Flex className="w-[100%] flex-col space-y-7 pt-20 items-center min-h-[30rem]">
                <p className="text-[3rem] font-medium">Flexible pricing for flexible needs</p>
                <p className="text-[1.1rem] w-[40%] mx-auto text-center">Every compnay is unique. Choose the combination of modules and add-ons that fit your workflow, adapting as your needs evolve.</p>
                <ConfigProvider theme={{
                    components: {
                        Segmented: {
                            borderRadiusSM: 15,
                            borderRadius: 15
                        }
                    }
                }}>
                    <Segmented
                        options={[
                            {
                                label: (
                                    <Flex className="space-x-4">
                                        <p className="font-medium">Bill Yearly</p>
                                        <Flex className="h-[1rem] rounded-xl items-center mt-[0.4rem] bg-[#0149AC]/10">
                                            <p className="text-[#0149AC] text-[0.7rem] px-2  font-medium ">Save 20%</p>
                                        </Flex>
                                    </Flex>
                                ),
                                value: 'spring',
                            },
                            {
                                label: (
                                    <Flex className="space-x-4">
                                        <p>Bill Monthly</p>
                                    </Flex>
                                ),
                                value: 'summer',
                            }
                        ]}
                    />
                </ConfigProvider>
                <Flex className="justify-around items-center lg:w-[70%] mx-auto">
                    <Flex className="border w-[20rem] p-3 rounded-[0.7rem] flex-col space-y-1">
                        <p className="text-[1.2rem]">Starter</p>
                        <Flex className="items-center font-semibold ">
                            <FaDollarSign className="text-[2rem]" />
                            <p className="text-[2.8rem]">0</p>
                        </Flex>
                        <Flex className=" pb-4 flex-col text-gray-400 text-[0.9rem]">
                            <p>per month, per user.</p>
                            <p>*billed at $0 per year.</p>
                        </Flex>
                        <Flex className="mx-4 justify-center border shadow-md bg-[#0149AC/70 font-medium px-5 py-2 rounded-[0.7rem] items-center space-x-2">
                            <button className="">
                                Get started
                            </button>
                            <IoIosArrowRoundForward className="text-[1.7rem]" />
                        </Flex>
                        <div className="py-5">
                            <hr className="" />
                        </div>
                        <Flex className="text-gray-500 flex-col space-y-2">
                            <p className="text-[1.1rem]">Features</p>
                            <Flex className="space-y-2 flex-col text-[0.9rem]">
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Limited Features</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>No Hidden Fees</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>50 payroll payments / month</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>50 suppliers payments / month</p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="border w-[20rem] p-3 rounded-[0.7rem] flex-col space-y-1">
                        <Flex className="w-[100%] justify-between">
                            <p className="text-[1.2rem] text-[#0149AC]">Business plan</p>
                            <Flex className="border rounded-[1rem] px-3 h-[1.4rem] items-center shadow-md">
                                <p className=" text-[0.8rem] font-medium">Popular</p>
                            </Flex>
                        </Flex>
                        <Flex className="items-center space-x-4">
                            <Flex className="items-center font-semibold ">
                                <FaDollarSign className="text-[2rem]" />
                                <p className="text-[2.8rem]">0</p>
                            </Flex>
                            <p className="pt-6 text-gray-500">/per month</p>
                        </Flex>
                        <Flex className=" pb-4 flex-col text-gray-400 text-[0.9rem]">
                            <p>per month, per user.</p>
                            <p>*billed at $0 per year.</p>
                        </Flex>
                        <Flex className="mx-4 text-white justify-center border shadow-md bg-[#0149AC]/70 font-medium px-5 py-2 rounded-[0.7rem] items-center space-x-2">
                            <button className="">
                                Get started
                            </button>
                            <IoIosArrowRoundForward className="text-[1.7rem]" />
                        </Flex>
                        <div className="py-5">
                            <hr className="" />
                        </div>
                        <Flex className="text-gray-500 items-start flex-col space-y-2">
                            <p className="text-[1.1rem]">Features</p>
                            <Flex className="border border-[#0149AC] rounded-[1rem] px-3 h-[1.4rem] items-center ">
                                <p className="text-[#0149AC]  text-[0.8rem] font-medium">Everything in Baisc plus ...</p>
                            </Flex>
                            <Flex className="space-y-2 flex-col text-[0.9rem]">
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Access All Features</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>No Hidden Fees</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>50 payroll payments / month</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Unlimited users</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>50 suppliers payments / month</p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="border w-[20rem] p-3 rounded-[0.7rem] flex-col space-y-1">
                        <p className="text-[1.2rem]">Enterprise</p>
                        <Flex className="items-center font-semibold ">
                            <p className="text-[2.8rem]">Custom</p>
                        </Flex>
                        <Flex className=" pb-4 flex-col text-gray-400 text-[0.9rem]">
                            <p>Message us for custom pricing</p>
                            <p>discount for yearly billing.</p>
                        </Flex>
                        <Flex className="mx-4 justify-center border shadow-md bg-[#0149AC/70 font-medium px-5 py-2 rounded-[0.7rem] items-center space-x-2">
                            <button className="">
                                Contact Sales
                            </button>
                            <IoIosArrowRoundForward className="text-[1.7rem]" />
                        </Flex>
                        <div className="py-5">
                            <hr className="" />
                        </div>
                        <Flex className="text-gray-500 flex-col space-y-2">
                            <p className="text-[1.1rem]">Features</p>
                            <Flex className="space-y-2 flex-col text-[0.9rem]">
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Flexible Pricing Models</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Transparent Pricing Breakdowns</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Dedicated Program Manager</p>
                                </Flex>
                                <Flex className="items-center space-x-2">
                                    <IoIosCheckmarkCircleOutline />
                                    <p>Unlimited users</p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex >
        </Element>
    );
}