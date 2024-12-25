import React from 'react'
import HeadingOne from '../Headings/HeadingOne';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaUsersRays } from "react-icons/fa6";
import { LuHousePlug } from "react-icons/lu";
import { IoAirplaneOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";

const WhyPartnerWithUs = () => {
    const data = [
        {
            id: 1,
            value: '100 M+',
            description: 'Captive',
            icon: <FaUsersRays className="text-primary text-5xl" />,
        },
        {
            id: 2,
            value: '7',
            description: 'Major airports across India',
            icon: <IoAirplaneOutline  className="text-primary text-5xl" />,
        },
        {
            id: 3,
            value: '3 M+',
            description: 'Adani Electricity households',
            icon: <LuHousePlug className="text-primary text-5xl" />,
        },
        {
            id: 4,
            value: '0.6 M+',
            description: 'Adani Gas households & CNG stations',
            icon: <BsFuelPump  className="text-primary text-4xl" />,
        },
        {
            id: 5,
            value: '240',
            description: 'Fortune Marts with a diverse customer base',
            icon: <RiShoppingCart2Line className="text-primary text-5xl" />,
        },
    ];

    return (
        <section className='px-4  pt-14 lg:py-14 lg:px-20 space-y-5 lg:space-y-10 '>
            <HeadingOne>Why partner with us</HeadingOne>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col h-full">
                        <Card className="h-full flex flex-col p-5  hover:scale-105 duration-300 ease-in-out shadow shadow-primary-300/50">
                            <CardBody className="flex flex-col items-center gap-5 justify-center h-full">
                                <div className="text-6xl ">{item.icon}</div>
                                <div className="text-center space-y-1">
                                    <h3 className="text-2xl font-semibold">{item.value}</h3>
                                    <p className=" text-gray-600">{item.description}</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyPartnerWithUs




// 