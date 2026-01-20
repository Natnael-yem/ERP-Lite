import { ConfigProvider, Flex, Input, Progress } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
    HiOutlineGlobeAlt,
    HiOutlineHome,
    HiOutlineIdentification,
} from "react-icons/hi2";
import {
    RiArrowLeftSLine,
    RiArrowRightSLine,
    RiInformation2Line,
} from "react-icons/ri";
import { PiFoldersBold } from "react-icons/pi";
import { FaDollarSign, FaRegCircleUser } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";
import { GoCheck } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { IoIosArrowRoundForward, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { useFrappeCreateDoc } from "frappe-react-sdk";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const STEPS = [
    { name: "Site Name", description: 'Choose your site name' },
    { name: "Plan", description: 'Select Plans' },
    { name: "Domain", description: 'Configure domain' },
    { name: "Admin", description: 'Setup admin account' },
    { name: "Deploy", description: 'Deploy your site' },
];

export default function SiteCreationWizard() {
    const { createDoc, loading } = useFrappeCreateDoc();
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate()

    const {
        control,
        handleSubmit,
        trigger,
        getValues,
        setValue,
    } = useForm({
        mode: "onTouched",
        defaultValues: {
            site_name: "",
            plan: "",
            domain: "demo.erpnext.cloud",
            admin_email: "",
            admin_phone: "",
            admin_password: "",
        },
    });


    /* -------------------- Navigation -------------------- */
    const stepFields = {
        0: ["site_name"],
        1: ["plan"],
        2: ["domain"],
        3: ["admin_email", "admin_phone", "admin_password"],
    };

    const handleNext = async () => {
        const fields = stepFields[currentStep];
        if (fields) {
            const valid = await trigger(fields);
            if (!valid) return;
        }
        setCurrentStep((s) => s + 1);
    };

    const handleBack = () => {
        setCurrentStep((s) => s - 1);
    };

    const onSubmit = (data) => {
        console.log("FINAL SUBMITTED DATA:", data);
        // alert("Site deployment started 🚀");
        if (data) {
            console.log(data)
            // createDoc('Site', data)
            //     .then((response) => {
            //         console.log('Success:', response);
            //         toast.success('Completed Successfully');
            //         navigate('/dashboard');
            //     })
            //     .catch((error) => {
            //         console.error('Error:', error);
            //     });
        }
    };

    /* -------------------- Step Content -------------------- */
    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <Flex className="w-[100%] items-start space-x-4">
                        <Flex className="w-[70%] flex-col space-y-3">
                            <Flex className=" bg-[#0E1526] p-5 rounded-[0.5rem] space-y-2 flex-col">
                                <p className="text-[1.1rem] font-medium text-white">Choose Your Site Name</p>
                                <p className="text-gray-500 text-[0.85rem]">Select a unique name for your ERPNext site. This will be used as your subdomain.</p>
                                <Flex className="w-[100%] flex-col space-y-1 pt-2">
                                    <p className="text-white text-[0.85rem]">Site Name<span className="text-red-500 pl-1">*</span></p>
                                    <ConfigProvider theme={{ components: { Input: { colorBgContainer: '#010718', colorText: 'white', colorBorder: 'gray', borderRadiusSM: 10 } } }}>
                                        <Controller
                                            name="site_name"
                                            control={control}
                                            rules={{
                                                required: "Site name is required",
                                                pattern: {
                                                    value: /^[a-z][a-z0-9-]{1,28}[a-z0-9]$/,
                                                    message: "Invalid site name",
                                                },
                                            }}
                                            render={({ field, fieldState }) => (
                                                <>
                                                    <Input size="large" {...field} placeholder="my-company" />
                                                    {fieldState.error && (
                                                        <p className="text-red-500 text-sm">
                                                            {fieldState.error.message}
                                                        </p>
                                                    )}
                                                </>
                                            )}
                                        />
                                    </ConfigProvider>
                                </Flex>
                                <p className="text-gray-500 text-[0.9rem]">Your site will be available at: <span className="text-blue-500">demo.erpnext.cloud</span></p>
                                <Flex className=" space-y-4 flex-col bg-[#182433] p-3 rounded-[1rem]">
                                    <Flex className="items-center space-x-2">
                                        <RiInformation2Line className="text-blue-600 text-[1.2rem]" />
                                        <p className="text-white">Naming Guidelines</p>
                                    </Flex>
                                    <Flex className="flex-col space-y-1">
                                        <Flex className="items-center space-x-3">
                                            <GoCheck className="text-blue-700" />
                                            <p className="text-gray-500 text-[0.9rem]">Use lowercase letters, numbers and hypens only</p>
                                        </Flex>
                                        <Flex className="items-center space-x-3">
                                            <GoCheck className="text-blue-700" />
                                            <p className="text-gray-500 text-[0.9rem]">Must start with a letter</p>
                                        </Flex>
                                        <Flex className="items-center space-x-3">
                                            <GoCheck className="text-blue-700" />
                                            <p className="text-gray-500 text-[0.9rem]">Length between 3-30 characters</p>
                                        </Flex>
                                        <Flex className="items-center space-x-3">
                                            <GoCheck className="text-blue-700" />
                                            <p className="text-gray-500 text-[0.9rem]">Cannot start or end with a hypen</p>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="w-[30%] space-y-3 bg-[#0E1526] p-5 rounded-[0.5rem] flex-col">
                            <Flex className="space-x-2 items-center">
                                <GiMoneyStack className="text-blue-400 text-[1.6rem]" />
                                <p className="text-[1.1rem] text-white">Cost Summary</p>
                            </Flex> <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">ERPNext Template</p>
                                <p className="text-gray-300">$39.00/month</p>
                            </Flex>
                            <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">Custom Domain</p>
                                <p className="text-gray-300">$0.00/month</p>
                            </Flex>
                            <hr className="border border-gray-800" />
                            <Flex className="justify-between w-[100%]">
                                <p className="text-white font-medium ">Total</p>
                                <p className="text-blue-400 font-medium">$39.00/month</p>
                            </Flex>
                            <Flex className="space-x-2 items-center border-gray-700 rounded-[0.5rem] py-3 px-7 border-t border-r">
                                <BsStars className="text-blue-600" />
                                <p className="text-gray-500 text-[0.8rem]">Start with a 14 day free trial. No credit card required.</p>
                            </Flex>
                            <Flex className="flex-col space-y-3">
                                <p className="text-white">What's Included:</p>
                                <Flex className="flex-col space-y-1">
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Unlimited users and transactions</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">50GB strorage space</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Daily automated backups</p>
                                    </Flex> <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Free SSL Certificate</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">24/7 technical support</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">99.9% uptime SLA</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                );

            case 1:
                return (
                    <Flex className="w-[100%] items-start space-x-4">
                        <Flex className="w-[70%] flex-col space-y-3">
                            <Flex className=" bg-[#0E1526] p-5 rounded-[0.5rem] space-y-2 flex-col">
                                <p className="text-[1.1rem] font-medium text-white">Select your Plan</p>
                                <p className="text-gray-500 text-[0.85rem]">Choose a pre-configured ERPNext plan optimized for your industry.</p>

                                <Flex className="justify-between items-center w-[100%] mx-auto">
                                    <Flex
                                        onClick={() => setValue("plan", "Starter")}
                                        className={`border w-[18rem] cursor-pointer p-3 rounded-[0.7rem] flex-col space-y-1 ${getValues("plan") === "Starter"
                                            ? "border-blue-500 shadow-blue-900"
                                            : "hover:border-blue-500"} `}
                                    >
                                        <p className="text-[1.2rem] text-white">Starter</p>
                                        <Flex className="items-center  text-white font-semibold ">
                                            <FaDollarSign className="text-[2rem]" />
                                            <p className="text-[2.8rem]">0</p>
                                        </Flex>
                                        <Flex className=" pb-4 flex-col text-gray-400 text-[0.9rem]">
                                            <p>per month, per user.</p>
                                            <p>*billed at $0 per year.</p>
                                        </Flex>
                                        <Flex className="mx-4 justify-center text-white border shadow-md bg-[#0149AC/70 font-medium px-5 py-2 rounded-[0.7rem] items-center space-x-2">
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
                                    <Flex
                                        onClick={() => setValue("plan", "Business")}
                                        className={`border w-[18rem] cursor-pointer p-3 rounded-[0.7rem] flex-col space-y-1 ${getValues("plan") === "Business"
                                            ? "border-blue-500 shadow-blue-900"
                                            : "hover:border-blue-500"} `}
                                    >                                        <Flex className="w-[100%] justify-between">
                                            <p className="text-[1.2rem] text-[#0149AC]">Business plan</p>
                                            <Flex className="border text-white rounded-[1rem] px-3 h-[1.4rem] items-center shadow-md">
                                                <p className=" text-[0.8rem] font-medium">Popular</p>
                                            </Flex>
                                        </Flex>
                                        <Flex className="items-center space-x-4">
                                            <Flex className="text-white items-center font-semibold ">
                                                <FaDollarSign className="text-[2rem]" />
                                                <p className="text-[2.8rem]">0</p>
                                            </Flex>
                                            <p className="pt-6 text-gray-500">/per month</p>
                                        </Flex>
                                        <Flex className=" pb-4 flex-col text-gray-400 text-[0.9rem]">
                                            <p>per month, per user.</p>
                                            <p>*billed at $0 per year.</p>
                                        </Flex>
                                        <Flex className="mx-4 text-white justify-center shadow-md bg-[#0149AC]/70 font-medium px-5 py-2 rounded-[0.7rem] items-center space-x-2">
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
                                    <Flex
                                        onClick={() => setValue("plan", "Enterprise")}
                                        className={`border w-[18rem] cursor-pointer p-3 rounded-[0.7rem] flex-col space-y-1 ${getValues("plan") === "Enterprise"
                                            ? "border-blue-500 shadow-blue-900"
                                            : "hover:border-blue-500"} `}
                                    >
                                        <p className="text-[1.2rem] text-white">Enterprise</p>
                                        <Flex className="items-center font-semibold ">
                                            <p className="text-[2.8rem] text-white ">Custom</p>
                                        </Flex>
                                        <Flex className=" pb-4 flex-col text-gray-400 text-[0.9rem]">
                                            <p>Message us for custom pricing</p>
                                            <p>discount for yearly billing.</p>
                                        </Flex>
                                        <Flex className="mx-4 text-white justify-center border shadow-md bg-[#0149AC/70 font-medium px-5 py-2 rounded-[0.7rem] items-center space-x-2">
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
                            </Flex>
                        </Flex>
                        <Flex className="w-[30%] space-y-3 bg-[#0E1526] p-5 rounded-[0.5rem] flex-col">
                            <Flex className="space-x-2 items-center">
                                <GiMoneyStack className="text-blue-400 text-[1.6rem]" />
                                <p className="text-[1.1rem] text-white">Cost Summary</p>
                            </Flex> <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">ERPNext Template</p>
                                <p className="text-gray-300">$39.00/month</p>
                            </Flex>
                            <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">Custom Domain</p>
                                <p className="text-gray-300">$0.00/month</p>
                            </Flex>
                            <hr className="border border-gray-800" />
                            <Flex className="justify-between w-[100%]">
                                <p className="text-white font-medium ">Total</p>
                                <p className="text-blue-400 font-medium">$39.00/month</p>
                            </Flex>
                            <Flex className="space-x-2 items-center border-gray-700 rounded-[0.5rem] py-3 px-7 border-t border-r">
                                <BsStars className="text-blue-600" />
                                <p className="text-gray-500 text-[0.8rem]">Start with a 14 day free trial. No credit card required.</p>
                            </Flex>
                            <Flex className="flex-col space-y-3">
                                <p className="text-white">What's Included:</p>
                                <Flex className="flex-col space-y-1">
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Unlimited users and transactions</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">50GB strorage space</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Daily automated backups</p>
                                    </Flex> <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Free SSL Certificate</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">24/7 technical support</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">99.9% uptime SLA</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                );

            case 2:
                return (
                    <Flex className="w-[100%] items-start space-x-4">
                        <Flex className="w-[70%] flex-col space-y-3">
                            <Flex className=" bg-[#0E1526] p-5 rounded-[0.5rem] space-y-2 flex-col">
                                <p className="text-[1.1rem] font-medium text-white">Configure Your Domain</p>
                                <p className="text-gray-500 text-[0.85rem]">Choose between a free subdomain or correct your custom domain.</p>

                                <Flex className=" items-start pt-5 w-[100%] flex-col space-y-6 mx-auto">
                                    <Flex className="border w-[40%] border-blue-500 shadow-md shadow-blue-900 p-6 rounded-[0.7rem] flex-col space-y-1">
                                        <Flex className="justify-between text-blue-500 text-[1.3rem] ">
                                            <HiOutlineGlobeAlt />
                                            <IoIosCheckmarkCircleOutline />
                                        </Flex>
                                        <p className="text-[1.2rem] text-white">Free SubDomain</p>
                                        <Flex className=" pb-4 flex-col text-gray-400 text-[0.9rem]">
                                            <p>Use our free subdomain to get started immediately.</p>
                                        </Flex>
                                        <Flex className="mx-4 justify-center bg-[#182433] text-white font-thin text-blue-500 px-5 py-2 rounded-[0.7rem] items-center space-x-2">
                                            <p>demo.erpnext.cloud</p>
                                        </Flex>
                                    </Flex>
                                    <Flex className="space-x-2 items-center border-gray-700 rounded-[0.5rem] py-3 px-7 border-t border-r">
                                        <BsStars className="text-blue-600" />
                                        <Flex className="flex-col">
                                            <p className="text-white">Free SSL Certificate Included</p>
                                            <p className="text-gray-500 text-[0.8rem]">We automatically provision and renew SSL Certificates for your domain to ensure secure connections.</p>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="w-[30%] space-y-3 bg-[#0E1526] p-5 rounded-[0.5rem] flex-col">
                            <Flex className="space-x-2 items-center">
                                <GiMoneyStack className="text-blue-400 text-[1.6rem]" />
                                <p className="text-[1.1rem] text-white">Cost Summary</p>
                            </Flex> <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">ERPNext Template</p>
                                <p className="text-gray-300">$39.00/month</p>
                            </Flex>
                            <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">Custom Domain</p>
                                <p className="text-gray-300">$0.00/month</p>
                            </Flex>
                            <hr className="border border-gray-800" />
                            <Flex className="justify-between w-[100%]">
                                <p className="text-white font-medium ">Total</p>
                                <p className="text-blue-400 font-medium">$39.00/month</p>
                            </Flex>
                            <Flex className="space-x-2 items-center border-gray-700 rounded-[0.5rem] py-3 px-7 border-t border-r">
                                <BsStars className="text-blue-600" />
                                <p className="text-gray-500 text-[0.8rem]">Start with a 14 day free trial. No credit card required.</p>
                            </Flex>
                            <Flex className="flex-col space-y-3">
                                <p className="text-white">What's Included:</p>
                                <Flex className="flex-col space-y-1">
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Unlimited users and transactions</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">50GB strorage space</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Daily automated backups</p>
                                    </Flex> <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Free SSL Certificate</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">24/7 technical support</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">99.9% uptime SLA</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                );

            case 3:
                return (
                    <Flex className="w-[100%] items-start space-x-4">
                        <Flex className="w-[70%] flex-col space-y-3">
                            <Flex className=" bg-[#0E1526] p-5 rounded-[0.5rem] space-y-2 flex-col">
                                <p className="text-[1.1rem] font-medium text-white">Setup Admin Account</p>
                                <p className="text-gray-500 text-[0.85rem]">Configure the administrator account for your ERPNext site.</p>
                                <Flex className="flex-col space-y-3">
                                    <Flex className="w-[100%] flex-col space-y-1 pt-2">
                                        <p className="text-white text-[0.85rem]">Admin Email <span className="text-red-500 pl-1">*</span></p>
                                        <ConfigProvider theme={{ components: { Input: { colorBgContainer: '#010718', colorText: 'white', colorBorder: 'gray', borderRadiusSM: 10 } } }}>
                                            <Controller
                                                name="admin_email"
                                                control={control}
                                                rules={{ required: "Email is required" }}
                                                render={({ field }) => <Input size="large" {...field} />}
                                            />
                                        </ConfigProvider>
                                    </Flex>
                                    <Flex className="w-[100%] flex-col space-y-1 pt-2">
                                        <p className="text-white text-[0.85rem]">Admin Phone Number<span className="text-red-500 pl-1">*</span></p>
                                        <ConfigProvider theme={{ components: { Input: { colorBgContainer: '#010718', colorText: 'white', colorBorder: 'gray', borderRadiusSM: 10 } } }}>


                                            <Controller
                                                name="admin_phone"
                                                control={control}
                                                rules={{ required: "Phone No is required" }}
                                                render={({ field }) => (
                                                    <Input size="large"  {...field} />
                                                )}
                                            />
                                        </ConfigProvider>
                                    </Flex>
                                    <Flex className="w-[100%] flex-col space-y-1 pt-2">
                                        <p className="text-white text-[0.85rem]">Admin Password<span className="text-red-500 pl-1">*</span></p>
                                        <ConfigProvider theme={{ components: { Input: { colorBgContainer: '#010718', colorText: 'white', colorBorder: 'gray', borderRadiusSM: 10 } } }}>
                                            <Controller
                                                name="admin_password"
                                                control={control}
                                                rules={{ required: "Password is required" }}
                                                render={({ field }) => (
                                                    <Input.Password size="large"  {...field} />
                                                )}
                                            />
                                        </ConfigProvider>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="w-[30%] space-y-3 bg-[#0E1526] p-5 rounded-[0.5rem] flex-col">
                            <Flex className="space-x-2 items-center">
                                <GiMoneyStack className="text-blue-400 text-[1.6rem]" />
                                <p className="text-[1.1rem] text-white">Cost Summary</p>
                            </Flex> <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">ERPNext Template</p>
                                <p className="text-gray-300">$39.00/month</p>
                            </Flex>
                            <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">Custom Domain</p>
                                <p className="text-gray-300">$0.00/month</p>
                            </Flex>
                            <hr className="border border-gray-800" />
                            <Flex className="justify-between w-[100%]">
                                <p className="text-white font-medium ">Total</p>
                                <p className="text-blue-400 font-medium">$39.00/month</p>
                            </Flex>
                            <Flex className="space-x-2 items-center border-gray-700 rounded-[0.5rem] py-3 px-7 border-t border-r">
                                <BsStars className="text-blue-600" />
                                <p className="text-gray-500 text-[0.8rem]">Start with a 14 day free trial. No credit card required.</p>
                            </Flex>
                            <Flex className="flex-col space-y-3">
                                <p className="text-white">What's Included:</p>
                                <Flex className="flex-col space-y-1">
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Unlimited users and transactions</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">50GB strorage space</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Daily automated backups</p>
                                    </Flex> <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Free SSL Certificate</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">24/7 technical support</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">99.9% uptime SLA</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                );

            case 4:
                const values = getValues();
                return (
                    <Flex className="w-[100%] items-start space-x-4">
                        <Flex className="w-[70%] flex-col space-y-3">
                            <Flex className=" bg-[#0E1526] p-5 rounded-[0.5rem] space-y-2 flex-col">
                                <Flex className="justify-between">
                                    <p className="text-[1.1rem] font-medium text-white">Deployment Progress</p>
                                    <p className="text-[0.9rem] text-blue-700 font-mono">0 / 7</p>
                                </Flex>
                                <Flex className="w-[100%]">
                                    <ConfigProvider theme={{
                                        components: {
                                            Progress: {
                                                remainingColor: '#182433'
                                            }
                                        }
                                    }}>
                                        <Progress percent={50} showInfo={false} />
                                    </ConfigProvider>
                                </Flex>
                                <Flex className="flex-col space-y-3 pt-5">
                                    <Flex className="justify-between bg-[#182433] p-4 rounded-[0.5rem]">
                                        <Flex className="items-center space-x-3">
                                            <FiClock className="text-gray-500" />
                                            <p className="text-gray-500">Validating configuration</p>
                                        </Flex>
                                        <p className="text-gray-500">-5s</p>
                                    </Flex>
                                    <Flex className="justify-between bg-[#182433] p-4 rounded-[0.5rem]">
                                        <Flex className="items-center space-x-3">
                                            <FiClock className="text-gray-500" />
                                            <p className="text-gray-500">Provisioning database</p>
                                        </Flex>
                                        <p className="text-gray-500">-30s</p>
                                    </Flex>
                                    <Flex className="justify-between bg-[#182433] p-4 rounded-[0.5rem]">
                                        <Flex className="items-center space-x-3">
                                            <FiClock className="text-gray-500" />
                                            <p className="text-gray-500">Installing ERPNext</p>
                                        </Flex>
                                        <p className="text-gray-500">-2m</p>
                                    </Flex>
                                    <Flex className="justify-between bg-[#182433] p-4 rounded-[0.5rem]">
                                        <Flex className="items-center space-x-3">
                                            <FiClock className="text-gray-500" />
                                            <p className="text-gray-500">Configuring domain</p>
                                        </Flex>
                                        <p className="text-gray-500">-15s</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="w-[30%] space-y-3 bg-[#0E1526] p-5 rounded-[0.5rem] flex-col">
                            <Flex className="space-x-2 items-center">
                                <p className="text-[1.1rem] text-white">Summary</p>
                            </Flex>
                            <div className="text-gray-300 space-y-2">
                                <Flex className="w-[100%] justify-between">
                                    <p className="text-gray-500 text-[0.9rem]">Site Name</p>
                                    <p>{values.site_name}</p>
                                </Flex>
                                <Flex className="w-[100%] justify-between">
                                    <p className="text-gray-500 text-[0.9rem]">Plan</p>
                                    <p>{values.plan}</p>
                                </Flex>
                                <Flex className="w-[100%] justify-between">
                                    <p className="text-gray-500 text-[0.9rem]">Domain</p>
                                    <p>{values.domain}</p>
                                </Flex>
                                <p className="text-gray-500 text-[0.9rem]">Admin Account</p>
                                <Flex className="w-[100%] px-5 justify-between">
                                    <p className="text-gray-500 text-[0.9rem]">Email</p>
                                    <p>{values.admin_email}</p>
                                </Flex>
                                <Flex className="w-[100%] px-5 justify-between">
                                    <p className="text-gray-500 text-[0.9rem]">Phone Number</p>
                                    <p>{values.admin_phone}</p>
                                </Flex>
                            </div>
                            <Flex className="space-x-2 items-center">
                                <GiMoneyStack className="text-blue-400 text-[1.6rem]" />
                                <p className="text-[1.1rem] text-white">Cost Summary</p>
                            </Flex>
                            <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">ERPNext Template</p>
                                <p className="text-gray-300">$39.00/month</p>
                            </Flex>
                            <Flex className="w-[100%] justify-between items-center">
                                <p className="text-gray-500 text-[0.9rem]">Custom Domain</p>
                                <p className="text-gray-300">$0.00/month</p>
                            </Flex>
                            <hr className="border border-gray-800" />
                            <Flex className="justify-between w-[100%]">
                                <p className="text-white font-medium ">Total</p>
                                <p className="text-blue-400 font-medium">$39.00/month</p>
                            </Flex>
                            <Flex className="space-x-2 items-center border-gray-700 rounded-[0.5rem] py-3 px-7 border-t border-r">
                                <BsStars className="text-blue-600" />
                                <p className="text-gray-500 text-[0.8rem]">Start with a 14 day free trial. No credit card required.</p>
                            </Flex>
                            <Flex className="flex-col space-y-3">
                                <p className="text-white">What's Included:</p>
                                <Flex className="flex-col space-y-1">
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Unlimited users and transactions</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">50GB strorage space</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Daily automated backups</p>
                                    </Flex> <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">Free SSL Certificate</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">24/7 technical support</p>
                                    </Flex>
                                    <Flex className="items-center space-x-3">
                                        <GoCheck className="text-blue-700" />
                                        <p className="text-gray-500 text-[0.9rem]">99.9% uptime SLA</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                );

            default:
                return null;
        }
    };

    /* -------------------- UI -------------------- */
    return (
        <Flex className="flex-col w-[95%] mx-auto space-y-5">
            {/* Breadcrumb */}
            <Flex className="text-gray-400 space-x-2 items-center">
                <HiOutlineHome />
                <MdKeyboardArrowRight />
                <p>Site Creation Wizard</p>
            </Flex>

            {/* Steps Indicator */}
            <Flex className="justify-between bg-[#0E1526] p-5 rounded-[0.5rem]">
                {STEPS.map((step, i) => (
                    <Flex key={i} className="items-center ">
                        <Flex className="space-y-2 flex-col items-center">
                            <div
                                className={`p-2 rounded-full text-[1.5rem] p-3 ${i <= currentStep
                                    ? "bg-blue-600 text-white"
                                    : "border border-gray-600 text-gray-500"
                                    }`}
                            >
                                {i === 0 && <HiOutlineIdentification />}
                                {i === 1 && <PiFoldersBold />}
                                {i === 2 && <HiOutlineGlobeAlt />}
                                {i === 3 && <FaRegCircleUser />}
                                {i === 4 && <GrDeploy />}
                            </div>

                            <Flex className="flex-col items-center">
                                <p className={i <= currentStep ? "text-white" : "text-gray-500"}>
                                    {step.name}
                                </p>
                                <p
                                    className={
                                        i <= currentStep
                                            ? "text-gray-400 text-[0.9rem]"
                                            : "text-[0.9rem] text-gray-500"
                                    }
                                >
                                    {step.description}
                                </p>
                            </Flex>
                        </Flex>

                        {/* ✅ Divider only if NOT last step */}
                        {i !== STEPS.length - 1 && (
                            <div className="h-[1px] w-[8rem] bg-gray-400" />
                        )}
                    </Flex>
                ))}
            </Flex>

            {/* Step Content */}
            <Flex className=" py-3 rounded flex-col space-y-3">
                {renderStep()}
            </Flex>

            {/* Navigation */}
            <Flex className="justify-between">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className=""
                >
                    <Flex className=" disabled:opacity-40 bg-gray-800 py-2 px-10 rounded-[0.5rem] items-center">
                        <RiArrowLeftSLine className="text-[1.3rem] text-gray-400" />
                        <p className="text-gray-400 ">Back</p>
                    </Flex>
                </button>

                {currentStep === STEPS.length - 1 ? (
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className="px-6 py-2 bg-green-600 rounded"
                    >
                        🚀 Deploy
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className=""
                    >
                        <Flex className="bg-blue-600 py-2 px-10 rounded-[0.5rem] items-center">
                            <p className="">Next</p>
                            <RiArrowRightSLine className="text-[1.3rem]" />
                        </Flex>
                    </button>
                )}
            </Flex>
        </Flex>
    );
}
