import { Button, Checkbox, ConfigProvider, Flex, Input } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFrappeAuth } from 'frappe-react-sdk'
import Amharic from '../data/Amharic.json';
import English from '../data/English.json';
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const Login = () => {
    const LangSelect = localStorage.getItem('Language');
    const Language = LangSelect === 'አማርኛ' ? Amharic.amharic : English.english;
    const {
        currentUser,
        isValidating,
        isLoading,
        login,
        logout,
        error,
        updateCurrentUser,
        getUserCookie,
    } = useFrappeAuth();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    console.log(currentUser)
    console.log(isValidating)

    useEffect(() => {
        if (currentUser) {
            navigate('/dashboard');
            console.log(currentUser)
        }

    }, [currentUser]);


    const onSubmit = async (data) => {
        console.log("Form submitted successfully!", data);

        login({ username: data?.email, password: data?.password });

        // navigate('/dashboard');

    };
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = () => {
        navigate('/register');
    }


    return (
        <Flex className="bg-[#010718] justify-center flex-col items-center min-h-[45rem] w-full">
            {/* <div className="bg-gray-300/60 absolute z-20 h-screen w-full" /> */}
            <Flex className="flex-col pt-14 pb-6  items-center relative ">
                <Flex className="bg-[#0690C6] rounded-[0.5rem] p-1">
                    <HiOutlineHome className="text-[2.5rem]" />
                </Flex>
                <p className="dm-sans-bold text-white pt-4 sm:text-[2rem]">ERPNext SaaS Portal</p>
                <p className="dm-sans-light text-gray-500">Launch and manage your ERPNext cloud instances</p>
            </Flex>
            <Flex className="border border-gray-800 shadow-xl shadow-[#0E1526] backdrop-blur  shadow pt-4 z-30 rounded-xl my-auto justify-around pb-10 sm:h-[70%]  sm:w-[28rem] w-[20rem] space-y-4 flex-col items-center bg-[#0E1526]">
                <Flex className="flex-col items-center text-white">
                    <p className="dm-sans-bold sm:text-[2rem]">Welcome Back</p>
                    <p className="dm-sans-light ">Sign In your ERPNext SaaS account</p>
                </Flex>
                <form
                    className="flex-col w-[80%] mx-auto sm:space-y-8 space-y-4  "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Flex className="w-[100%] flex-col space-y-1">
                        <p className="dm-sans-light text-[0.9rem] text-white ">{Language?.email}</p>
                        <ConfigProvider theme={{
                            components: {
                                Input: {
                                    colorBgContainer: '#010718',
                                    colorText: 'white',
                                    colorBorder: 'gray'
                                }
                            }
                        }}>
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
                                        prefix={
                                            <Flex>
                                                <MdOutlineMail />
                                            </Flex>
                                        }
                                        className="w-[100%] py-2" />
                                )} />
                        </ConfigProvider>
                        {errors?.email && (
                            <p className="text-red-500 dm-sans-light pl-10 text-sm">{errors?.email?.message}</p>
                        )}
                    </Flex>
                    <Flex className="w-[100%]  flex-col space-y-1">
                        <p className="dm-sans-light text-[0.9rem] text-white">{Language?.password}</p>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Password is required",
                                // minLength: {
                                //     value: 6,
                                //     message: "Password must be at least 6 characters",
                                // },
                            }}
                            render={({ field }) => (
                                <ConfigProvider theme={{
                                    components: {
                                        Input: {
                                            colorBgContainer: '#010718',
                                            colorText: 'white',
                                            colorBorder: 'gray'
                                        }
                                    }
                                }}>
                                    <Input
                                        size="small"
                                        type={showPassword ? "text" : "password"}
                                        {...field}
                                        className="w-[100%] py-2"
                                        label="password"
                                        prefix={<CiLock />}
                                        suffix={
                                            <Flex
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="cursor-pointer text-[1.2rem]"
                                            >
                                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                                            </Flex>
                                        }
                                    />
                                </ConfigProvider>
                            )} />
                        {errors?.password && (
                            <p className="text-red-500 dm-sans-light pl-10 text-sm">{errors?.password?.message}</p>
                        )}
                        <Flex className="justify-end items-center dm-sans-light w-[100%] pt-2">
                            {/* <Flex className="sm:space-x-4 space-x-1">
                                <Checkbox />
                                <p className="text-end  sm:text-[0.9rem] text-[0.8rem]">Remember Me</p>
                            </Flex> */}
                            <p className="text-end text-white sm:text-[0.9rem] text-[0.8rem]">{Language?.forgetPassword}</p>
                        </Flex>
                    </Flex>

                    <Flex className="">
                        <ConfigProvider theme={{
                            components: {
                                Button: {
                                    colorPrimary: '#0690C6',
                                    colorPrimaryHover: '#0690C6',
                                    colorPrimaryActive: '#0690C6'
                                }
                            }
                        }}>
                            <Button type="primary" size="large" htmlType="submit" className=" dm-sans-bold w-[100%]">Sign In</Button>
                        </ConfigProvider>
                    </Flex>
                </form>
                <Flex className="w-[80%] space-x-2 pt-3">
                    <p className="text-gray-300">Don't have an account?</p>
                    <button onClick={handleRegister} className=" dm-sans-bold text-[#0873BA]">Create Account</button>
                </Flex>
            </Flex >
            <p className="text-white py-4 text-[1.2rem]"> Trusted by 10,00+ Business Worldwide</p>
        </Flex >
    );
};

export default Login;