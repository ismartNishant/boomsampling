'use client'
import React from 'react'
import HeadingOne from '../Headings/HeadingOne';
import { Accordion, AccordionItem } from "@nextui-org/accordion";


const Faq = () => {

    const faqs = [
        {
            question: "What is Adani Sampling?",
            answer: "Adani Sampling is an end-to-end product sampling platform that lets you connect with potential customers from a ready audience. Through digital dashboards, the platform lends itself to merchants as well as admins to provide real-time updates on inventory, spends, customer feedback, and more."
        },
        {
            question: "How does Adani Sampling work?",
            answer: "With Adani Sampling, you get a fully curated product sampling campaign for your brand. Once you place an enquiry request, our representative connects with you. You can then sign up for your merchant dashboard post which your campaign is created. By having access to this dashboard, you can track and analyse the campaign activity."
        },
        {
            question: "What insights will I get as a merchant?",
            answer: "As a merchant registered with Adani Sampling, you get your own dashboard to monitor your product sampling campaign activity – an overview of the campaign, the total inventory, the total spends, samples distributed, and total user feedbacks."
        },
        {
            question: "Will I be able to share my feedback once my campaign is live?",
            answer: "Once you are onboarded with Adani Sampling, you will have a dedicated client manager assigned to you. Any feedback or observations you have can be shared with them and we shall do our best to enhance your experience."
        },
        {
            question: "How do I understand the merchant dashboard?",
            answer: "The merchant dashboard is an easy-to-use, digital space where you can keep track of your campaign activity. To get a walkthrough of the dashboard, please reach out to us at support@adanione.com."
        }
    ];


    return (
        <section className='px-4  pt-16 lg:py-20 lg:px-20 space-y-5 lg:space-y-10 text-center' id='FAQS'>
            <HeadingOne>
                Frequently asked questions
            </HeadingOne>
            <div className='w-full mx-auto max-w-screen-lg '>
                <Accordion variant="splitted" selectionMode="multiple"
                    className="gap-4 lg:gap-5  flex flex-col px-0"
                    defaultExpandedKeys={["0"]}
                    itemClasses={{
                        base: " text-start lg:p-4",
                        title: `text-base lg:text-xl  uppercase font-medium `,
                        indicator: "text-primary text-2xl  data-[open=true]:-rotate-90 ",
                        trigger: " flex items-start  ",
                        content: 'pt-1 text-gray-600 text-sm lg:text-base'
                    }}>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={faq.question}>
                            <p>{faq.answer}</p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default Faq