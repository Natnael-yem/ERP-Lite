import { Flex } from 'antd'
import Silder from '../components/home/Slider';
import Service from '../components/home/Service';
import AboutUs from '../components/home/AboutUs';
import { useFrappeGetDocList } from "frappe-react-sdk";
import { BottomBar } from '@/components/ui/BottomBar';
import Footer from '@/components/ui/Footer';
import Pricing from '@/components/home/Pricing';
const Home = () => {
    const { data } = useFrappeGetDocList('Users');
    console.log(data, "users")
    return (
        <Flex className='flex-col overflow-hidden'>
            <Silder />
            <AboutUs />
            <Pricing />
            <Service />
            {/* <BottomBar /> */}
            <Footer />
        </Flex>
    );
};

export default Home;
