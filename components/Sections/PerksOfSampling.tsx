import React from 'react';
import HeadingOne from '../Headings/HeadingOne';
import { Card, CardBody } from '@nextui-org/card';
import Image from 'next/image';

const perksData = [
    {
        id: 1,
        title: "Millions within reach",
        description:
            "1 in every 4 domestic traveller passes through Adani airports, creating footfall for your product sampling campaign.",
        image: "/Images/perks/people.jpg", // Replace with actual image path
    },
    {
        id: 2,
        title: "Real-time tracking",
        description:
            "Access real-time data through a personal console, and track your product sampling campaign.",
        image: "/Images/perks/analytics.jpg", // Replace with actual image path
    },
    {
        id: 3,
        title: "Awareness and re-marketing",
        description:
            "The audience engages with your product at multiple touchpoints, and further reconnects with your brand via SMS, WhatsApp and email.",
        image: "/Images/perks/awareness.jpg", // Replace with actual image path
    },
    {
        id: 4,
        title: "Genuine feedback",
        description:
            "Get real insights into your product. Not just that – happy testers become your personal brand ambassadors too.",
        image: "/Images/perks/reviews.jpg", // Replace with actual image path
    },
];

const PerksOfSampling = () => {
    return (
        <section className="px-4 lg:px-20 space-y-5">
            <HeadingOne>Perks of Sampling</HeadingOne>
            <div className="space-y-4">
                <p className="text-gray-600">
                    Strategised campaigns to target the right audience, understand sentiments, and use those findings for a cost-effective launch.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
                    {perksData.map((perk) => (
                        <Card key={perk.id} className=" h-full flex flex-col items-center hover:scale-95 duration-300 ease-in-out">
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
                                <p className="mt-2 text-gray-600 text-sm">{perk.description}</p>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PerksOfSampling;
