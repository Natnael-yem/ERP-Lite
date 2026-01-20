import { Flex } from 'antd';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { LiaPinterestP } from "react-icons/lia";
const AnnouncementBar = () => {
    return (
        <Flex className='bg-[#16243D] w-[100%] text-white p-3'>
            <Flex className='w-[80%] mx-auto items-center justify-between'>
                <Flex className='space-x-7'>
                    <Flex className='items-center space-x-2'>
                        <IoLocationSharp className='text-[#F7961B]'/>
                        <p className='text-[0.86rem] text-white/60'>Bole, Addis Ababa</p>
                    </Flex>
                    <Flex className='items-center space-x-2'>
                        <MdEmail className='text-[#F7961B]'/>
                        <p className='text-[0.86rem] text-white/60'>needhelp@company.com</p>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex className='space-x-6 items-center'>
                        <p className='text-[0.86rem] text-white/60'>FAQs</p>
                        <p className='text-[0.86rem] text-white/60'>About</p>
                        <FaTwitter />
                        < RiFacebookFill />
                        < LiaPinterestP />
                        < GrInstagram />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default AnnouncementBar;