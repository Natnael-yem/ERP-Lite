import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Flex } from "antd";
// import AnnouncementBar from "./Announcement Bar";

const Header = ({ setLang, lang }) => {
    return (
        <div>
            <Flex className="fixed w-[100%] z-50 ">
                <Navbar setLang={setLang} lang={lang} />
            </Flex>
            <Flex className="z-10 ">
                <Outlet />
            </Flex>
        </div>
    );
};

export default Header;