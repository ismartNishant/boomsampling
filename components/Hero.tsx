import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-[#FCF8F1] bg-opacity-30  px-4 mx-auto sm:px-20 py-5 relative">
            <div className="grid items-center grid-cols-1 gap-12 lg:gap-5 lg:grid-cols-2">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <p className="text-base font-semibold tracking-wider text-primary uppercase">
                            India’s first
                        </p>
                        <h1 className=" text-5xl font-bold text-black tracking-wider sm:text-7xl leading-tight lg:leading-[80px]">
                            Phygital Sampling Platform that is
                        </h1>
                        <div>
                            <div className="relative inline-flex sm:inline ">
                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                <span className="relative text-4xl font-semibold"> Business </span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-fit">
                        <Button
                            as={Link}
                            className="inline-flex  h-10 lg:h-12 justify-center gap-2 items-center bg-primary/5 shadow-xl shadow-primary/15 text-lg lg:font-semibold isolation-auto border-primary before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 lg:py-2 overflow-hidden border-2 rounded-full group"
                            href="/parties"
                        >
                            Request Demo
                            <svg
                                className="w-6 h-6 lg:w-8 lg:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-primary group-hover:border-none p-1 lg:p-2 rotate-45"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="fill-primary group-hover:fill-primary"
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>

                <div className="z-10 w-full max-w-xl ml-auto">
                    <Image
                        className="w-full"
                        src="/Images/hero-img.png"
                        alt="Hero Image"
                        width={800}
                        height={500} // Adjust the dimensions as needed
                    />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 overflow-hidden z-0">
                <Image
                    className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:object-cover lg:scale-75"
                    src="/Images/bgpattern.png"
                    alt="Background Pattern"
                    width={8920} // Adjust width based on the actual image size or desired dimensions
                    height={1080} // Adjust height based on the actual image size or desired dimensions
                />
            </div>
        </section>
    );
};

export default HeroSection;
