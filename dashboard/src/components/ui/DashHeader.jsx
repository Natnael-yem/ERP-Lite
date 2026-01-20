import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Siderbar";
import { useState } from "react";
import DashNav from "./DashNav";
import { useFrappeAuth } from "frappe-react-sdk";
import { Navigate } from "react-router-dom";
// import { ThemeProvider } from "../theme-provider";
const DashHeader = () => {
    const [left, setLeft] = useState(false);
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
    console.log(isValidating, 'isValidating')
    console.log(isLoading, 'isloading')
    
    if (isLoading) return <div>loading...</div>;

    return (
        // <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Flex className=" min-h-screen w-[100%] bg-[#010718]">
                {/* < Flex className="xl:inline hidden z-20" >
                    <Sidebar left={left} setLeft={setLeft} />
                </Flex > */}
                <Flex className={` z-10 flex-col w-[100%] pb-10 space-y-5 min-h-[100%]  `}>
                    <DashNav left={left} className=""/>
                    <Flex className="pt-24">
                        <Outlet />
                    </Flex>
                </Flex>
            </Flex >
        // </ThemeProvider>
    );
};

export default DashHeader;