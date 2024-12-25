import React from 'react'
import HeadingOne from '../Headings/HeadingOne'
import { Card, CardBody } from '@nextui-org/card';
import Image from 'next/image';

const CustomeraJourney = () => {

    const JourneyData = [
        {
            id: 1,
            title: "QR code scan",
            image: "/Images/journey/scan2.jpg",
        },
        {
            id: 2,
            title: "Submission of details",
            image: "/Images/journey/submit.jpg",
        },
        {
            id: 3,
            title: "Product sample pickup at collection point",
            image: "/Images/journey/sample.webp",
        },
        {
            id: 4,
            title: "Product feedback",
            image: "/Images/journey/review.jpg",
        },
    ];



    return (
        <section className='px-4 pt-16 pb-10 lg:py-20  lg:px-20 space-y-5 lg:space-y-10' id='how-it-works'>
            <HeadingOne>Your customer&apos;s journey</HeadingOne>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
                {JourneyData.map((perk) => (
                    <Card key={perk.id} className=" h-full flex flex-col items-center hover:scale-95 duration-300 ease-in-out ">
                        <CardBody className="overflow-visible px-2 lg:px-4 ">
                            <div className='w-full h-56  relative'>
                                <Image
                                    alt={perk.title}
                                    className=" rounded-xl object-contain"
                                    src={perk.image}
                                    fill
                                />
                            </div>
                            <h4 className="font-bold text-xl mt-2 ">{perk.title}</h4>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default CustomeraJourney