import { Button, Checkbox, ConfigProvider, Flex, Input, Modal } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFrappePostCall } from "frappe-react-sdk";
import { toast } from "react-hot-toast"
import Amharic from '../data/Amharic.json';
import English from '../data/English.json';
import { HiOutlineHome } from "react-icons/hi2";

const Register = () => {
    const LangSelect = localStorage.getItem('Language');
    const Language = LangSelect === 'አማርኛ' ? Amharic.amharic : English.english;
    const [showRequirement, setShowRequirement] = useState(false);
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const { call } = useFrappePostCall("frappe.core.doctype.user.user.sign_up");

    const onSubmit = async (data) => {
        console.log(data)
        try {
            if (data) {
                const response = await call({
                    email: data?.email,
                    full_name: data?.tin_no,
                    redirect_to: '/press/login'
                });
                if (response && response?.message?.[0] === 1) {
                    toast.success(response?.message?.[1])
                    navigate('/login');
                } else {
                    toast.error('not successfull')
                }
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            alert('Something went wrong. Please check the console.');
        }
    };


    const handleLogin = () => {
        navigate('/login');
    }
    const handleShow = () => {
        setShowRequirement(true);
    }
    const handleOk = () => {
        setShowRequirement(false);
    }

    return (
        <Flex className="justify-center itens-center h-screen w-full shadow-xl">
            <div className="bg-[#010718] absolute z-20 h-screen w-full" />
            <img src="/assets/tourism/home/shape-2.png" alt="login" className=" top-[-2rem] animate-login absolute right-0 object-cover" />
            <Flex className="z-30 rounded-xl my-auto justify-around  min-h-[90%] 2xl:w-[30%] lg:w-[80%] md:w-[70%] w-[90%] bg-[#182433]  mt-6">
                <Flex className=" w-[100%] flex-col items-center ">
                    <Flex className="flex-col pt-6 pb-6  items-center relative ">
                        <Flex className="bg-[#0690C6] rounded-[0.5rem] p-1">
                            <HiOutlineHome className="text-[2.5rem]" />
                        </Flex>
                        <p className="dm-sans-bold text-white pt-4 sm:text-[2rem]">ERPNext SaaS Portal</p>
                        <p className="dm-sans-light text-gray-500">Launch and manage your ERPNext cloud instances</p>
                    </Flex>
                    <p className="dm-sans-light sm:text-[2rem] text-[1.4rem] text-white">Register</p>
                    <form
                        className="flex-col w-[90%] mx-auto flex justify-around h-[97%] pt-2 "
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Flex className="flex-col  sm:space-y-6 space-y-3">
                            <Flex className="flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-3 ">
                                <Flex className="w-[100%] flex-col ">
                                    <p className="dm-sans-light poppins-semibold text-white">{Language?.tinNo}</p>
                                    <Controller
                                        name="tin_no"
                                        control={control}
                                        rules={{
                                            required: "Tin No is required",
                                            pattern: {
                                                value: /^[0-9]+$/,
                                                minLength: {
                                                    value: 10,
                                                    message: "Tin No must be at least 10 characters",
                                                },
                                                message: "Only numeric values are allowed",
                                            },
                                        }}
                                        render={({ field }) => (
                                            <Input
                                                size="small"
                                                {...field}
                                                label="tin_no"
                                                className="w-[100%] py-2" />
                                        )} />
                                    {errors?.tin_no && (
                                        <p className="text-red-500 dm-sans-light pl-10 text-sm">{errors?.tin_no?.message}</p>
                                    )}
                                </Flex>
                                <Flex className="w-[100%]  flex-col">
                                    <p className="dm-sans-light text-white">{Language?.phone}</p>
                                    <Controller
                                        name="phone_number"
                                        control={control}
                                        rules={{
                                            required: "Phone Number is required",
                                            minLength: {
                                                value: 10,
                                                message: "Phone Number must be at least 10 characters",
                                            },
                                            pattern: {
                                                value: /^09[0-9]{8}$/,
                                                message: "Only numeric values are allowed and must start with 09",
                                            },

                                        }}
                                        render={({ field }) => (
                                            <Input
                                                size="small"
                                                {...field}
                                                className="w-[100%] py-2"
                                                label="phone"
                                            />
                                        )} />
                                    {errors?.phone_number && (
                                        <p className="text-red-500 dm-sans-light pl-4 text-sm">{errors?.phone_number?.message}</p>
                                    )}
                                </Flex>
                            </Flex>
                            <Flex className="flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-3">
                                <Flex className="w-[100%] flex-col ">
                                    <p className="dm-sans-light text-white">{Language?.FullNameinEnglish}</p>
                                    <Controller
                                        name="full_name_in_english"
                                        control={control}
                                        rules={{
                                            required: "Full Name is required",
                                            maxLength: {
                                                value: 40,
                                                message: "Full Name must be at most 40 characters",
                                            },
                                        }}
                                        render={({ field }) => (
                                            <Input
                                                size="small"
                                                {...field}
                                                label="full_name_english"
                                                className="w-[100%] py-2" />
                                        )} />
                                    {errors?.full_name_in_english && (
                                        <p className="text-red-500 dm-sans-light pl-10 text-sm">{errors?.full_in_name_english?.message}</p>
                                    )}
                                </Flex>
                                {/* <Flex className="w-[100%]  flex-col">
                                    <p className="dm-sans-light">{Language?.FullNameinAmharic}</p>
                                    <Controller
                                        name="full_name_in_amharic"
                                        control={control}
                                        rules={{
                                            required: "Full Name is required",
                                            // validate: isAmharic,
                                            maxLength: {
                                                value: 40,
                                                message: "Full Name must be at most 40 characters",
                                            },
                                            pattern: {
                                                value: /^[\u1200-\u137F\s]+$/,
                                                message: "Only amharic characters are allowed",
                                            },

                                        }}
                                        render={({ field }) => (
                                            <Input
                                                size="small"
                                                {...field}
                                                className="w-[100%] py-2"
                                                label="full_name_in_amharic"
                                            />
                                        )} />
                                    {errors?.full_name_in_amharic && (
                                        <p className="text-red-500 dm-sans-light pl-10 text-sm">{errors?.full_name_in_amharic?.message}</p>
                                    )}
                                </Flex> */}
                            </Flex>
                            <Flex className="flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-2">
                                <Flex className="w-[100%] flex-col ">
                                    <p className="dm-sans-light text-white">{Language?.email}</p>
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Enter a valid email address",
                                            },
                                            maxLength: {
                                                value: 40,
                                                message: "Email must be at most 40 characters",
                                            },
                                        }}
                                        render={({ field }) => (
                                            <Input
                                                size="small"
                                                {...field}
                                                label="email"
                                                type="email"
                                                className="w-[100%] py-2" />
                                        )} />
                                    {errors?.email && (
                                        <p className="text-red-500 dm-sans-light pl-10 text-sm">{errors?.email?.message}</p>
                                    )}
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="sm:pt-0 pt-4 pb-3">
                            <ConfigProvider theme={{
                                components: {
                                    Button: {
                                        colorPrimary: '#0873BA',
                                        colorPrimaryHover: '#0873BA',
                                        colorPrimaryActive: '#0873BA'
                                    }
                                }
                            }}>
                                <Button type="primary" size="large" htmlType="submit" className=" dm-sans-bold w-[100%]">Register</Button>
                            </ConfigProvider>
                        </Flex>
                    </form>
                    <Flex className="space-x-3 pb-4">
                        <p>{Language?.haveAccount}</p>
                        <p className="hover:underline underline-offset-10 text-white cursor-pointer" onClick={handleLogin}>Have an account? <span className="font-mono text-blue-400">{Language?.login}</span></p>
                    </Flex>
                </Flex>
            </Flex>

        </Flex >
    );
};

export default Register;