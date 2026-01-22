
import { Empty, Flex, Modal } from "antd";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect, useState } from "react"
import { PiPlusBold } from "react-icons/pi";
import Amharic from '../../data/Amharic.json';
import English from '../../data/English.json';
import { GiArchiveRegister } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useFrappeGetDocList } from "frappe-react-sdk";
import { Element } from "react-scroll";

const Service = () => {
    const {
        handleSubmit,
        control,
        register,
        formState: { errors, isValid },
        trigger,
        getValues,
        watch,
    } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
    });
    const mainCategory = useWatch({ control, name: 'main_category' });
    const subCategory = useWatch({ control, name: 'sub_category' });
    const filterSub = useWatch({ control, name: 'sub_sub_category' });

    const { data: main = [] } = useFrappeGetDocList('main_categories', {
        fields: ['service_name', 'service_name_amharic'],
    });
    console.log(main)
    const { data: sub = [] } = useFrappeGetDocList('sub_categories', {
        fields: ['sub_category_name', 'main_service_name', 'sub_category_name_amharic', 'description', 'description_amharic'],
    });
    console.log(sub)
    const { data: subSub = [] } = useFrappeGetDocList('sub_sub_categories', {
        fields: ['sub_sub_category_name', 'sub_sub_category_name_amharic', 'sub_category_name', 'sub_description', 'sub_description_amharic'],
        limit: 500,
    });
    console.log(subSub)
    const Mainoptionss = main?.map((item) => ({
        label: item?.service_name_amharic,
        value: item?.service_name,
    }));
    console.log(Mainoptionss)

    const suboptionss = sub?.filter((item) => item?.main_service_name === mainCategory)
        .map((item) => ({
            label: item?.sub_category_name_amharic,
            value: item?.sub_category_name,
        }));
    console.log(suboptionss)
    const SubSuboptionss = subSub?.filter((item) => item?.sub_category_name === subCategory)
        .map((item) => ({
            label: item?.sub_sub_category_name_amharic,
            value: item?.sub_sub_category_name,
        }));
    const filterSubCategory = subSub?.filter((item) => item?.sub_sub_category_name === filterSub);
    console.log(filterSubCategory);
    const filterCategory = sub?.filter((item) => item?.sub_category_name === subCategory);
    console.log(filterSubCategory?.[0]?.sub_description_amharic, 'jgh');
    console.log(filterSubCategory?.sub_description_amharic, 'jgh');
    console.log(filterCategory?.[0]?.description_amharic, 'hhjh')
    const LangSelect = localStorage.getItem('Language');
    const Language = LangSelect === 'አማርኛ' ? Amharic.amharic : English.english;
    const [show, setShow] = useState(false);
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()));
    useEffect(() => {
        const controls = animate(count, 99, { duration: 10 })
        return () => controls.stop()
    }, []);
    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [show]);
    const handleService = () => {
        setShow(true);
    }
    const handleOk = () => {
        setShow(false);
    }
    return (
        <Element name="section3">
            <Flex className="flex-col py-16 min-h-[100%] items-center space-y-10 mb-10 z-20 mt-10">
                {/* <Flex className="sm:px-28 px-10  md:flex-row flex-col w-[100%] mx-auto justify-between md:items-center">
                    <Flex className="flex-col lg:w-[50%] md:w-[70%] ">
                        <Flex className="items-center space-x-2">
                            < MdOutlineDoubleArrow className="text-[#226FC5] text-[1.2rem]" />
                            <p className="font-semibold dm-sans-bold text-[1.6rem]">{Language?.serviceTitle}</p>
                            < MdOutlineDoubleArrow className="text-[#226FC5] text-[1.2rem] rotate-180" />
                        </Flex>
                        <p className="dm-sans-bold text-[#16243D] lg:text-[3rem] sm:text-[2.4rem] text-[1.7rem] font-bold sm:w-[80%] w-[100%] ">{Language?.serviceSubTitle}</p>
                    </Flex>
                    <Flex className="lg:w-[37%] md:w-[70%] w-[100%] pt-5">
                        <p className="text-gray-600 text-[1.1rem]">{Language?.serviceDescription}</p>
                    </Flex>
                </Flex> */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="w-[100%] rounded-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d28410.438093942514!2d38.76333762677307!3d9.025446643869829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x164b85e958306331%3A0x589ef7b23000f67d!2sEthio%20Telecom%20Head%20Quarter%20%7C%20Biherawi%20%7C%2C%202QC3%2BC3W%2C%20Churchill%20Ave%2C%20Addis%20Ababa!3m2!1d9.021065199999999!2d38.7526978!5e0!3m2!1sen!2set!4v1769065096842!5m2!1sen!2set"
                            width="1400"
                            height="200"
                            className="rounded-2xl"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </Flex>
        </Element>
    );
};

export default Service;