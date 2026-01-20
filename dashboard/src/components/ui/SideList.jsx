import { Flex } from "antd";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

const SideList = ({ index, list, handleNavigate, expandedItem }) => {
    const location = useLocation();
    
    const handleClick = (e) => {
        if (list?.sub?.length >= 1) {
            e.stopPropagation();
            handleNavigate(null, index); 
        } else {
            handleNavigate(list?.route, index);
        }
    };

    const handleArrowClick = (e) => {
        e.stopPropagation();
        handleNavigate(null, index); 
    };

    return (
        <Flex 
            onClick={handleClick}
            className={`${
                list?.route === location.pathname 
                    ? 'text-[#0D9394] bg-[#0D9394]/10' 
                    : ' text-[--text-sidebar] hover:bg-[--hover-bg] rounded-md hover:text-[--hover-text]'
            } justify-between items-center w-[100%] py-3 px-2   rounded-lg cursor-pointer`}
        >
            <Flex className="space-x-2 items-center">
                <span className="sm:text-[1.5rem]">{list?.icon}</span>
                <p className="sm:text-[1rem] text-[0.95rem]">{list?.name}</p>
            </Flex>
            
            {list?.sub?.length >= 1 && (
                expandedItem === index ? (
                    <IoIosArrowDown 
                        onClick={handleArrowClick}
                        className="text-[1.2rem]"
                    />
                ) : (
                    <IoIosArrowForward 
                        onClick={handleArrowClick}
                        className="text-[1.2rem]"
                    />
                )
            )}
        </Flex>
    );
};

export default SideList;