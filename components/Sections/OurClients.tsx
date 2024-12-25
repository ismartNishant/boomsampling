
'use client'
import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';
import { Slide } from "react-awesome-reveal";
import HeadingOne from "../Headings/HeadingOne";


const Marquee = dynamic(() => import('../ui/marquee'), { ssr: false });

const Fade = dynamic(() => import('react-awesome-reveal').then((mod) => mod.Fade), { ssr: false });

const reviews = [
  {
    img: "/images/ourclients/cr.webp",
  },
  {
    img: "/images/ourclients/afk.webp",
  },
  {
    img: "/images/ourclients/riot.webp",
  },
  {
    img: "/images/ourclients/thefinals.webp",
  },
  {
    img: "/images/ourclients/ampverse.webp",
  },
  {
    img: "/images/ourclients/amazon_pay.webp",
  },
  {
    img: "/images/ourclients/apna.webp",
  },
  {
    img: "/images/ourclients/asaya.webp",
  },
  {
    img: "/images/ourclients/castrol.webp",
  },
  {
    img: "/images/ourclients/colors.webp",
  },
  {
    img: "/images/ourclients/doritos.webp",
  },
  {
    img: "/images/ourclients/dr_vaidya.webp",
  },
  {
    img: "/images/ourclients/dreamhack.webp",
  },
  {
    img: "/images/ourclients/eatclub.webp",
  },
  {
    img: "/images/ourclients/grabon.webp",
  },
  {
    img: "/images/ourclients/groww.webp",
  },
  {
    img: "/images/ourclients/harappa.webp",
  },
  {
    img: "/images/ourclients/hipi.webp",
  },
  {
    img: "/images/ourclients/insider.webp",
  },
  {
    img: "/images/ourclients/moj.webp",
  },
  {
    img: "/images/ourclients/mtv.webp",
  },
  {
    img: "/images/ourclients/nodwin.webp",
  },
  {
    img: "/images/ourclients/pcf.webp",
  },
  {
    img: "/images/ourclients/rapido.webp",
  },
  {
    img: "/images/ourclients/sunburn.webp",
  },
  {
    img: "/images/ourclients/swiggy.webp",
  },
  {
    img: "/images/ourclients/tata.webp",
  },
  {
    img: "/images/ourclients/times_internet.webp",
  },
  {
    img: "/images/ourclients/unsweetened_beauty.webp",
  },
  {

    img: "/images/ourclients/wakao.webp",
  },
  {
    img: "/images/ourclients/weekender.webp",
  },
  {
    img: "/images/ourclients/wishcare.webp",
  },
  {
    img: "/images/ourclients/zee.webp",
  },
  {
    img: "/images/ourclients/zomato.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string; }) => {
  return (
    <figure className={cn("relative w-32 md:w-60 cursor-pointer overflow-hidden rounded-lg md:rounded-xl border ")}>
      <div className="">
        <img className="w-full object-cover" alt="" src={img} />
      </div>
    </figure>
  );
};

const Ourclients = () => {
  return (
    <section className="px-4 lg:px-20 " id="ourclients">
      <HeadingOne >
        Our Clients
      </HeadingOne>
      <div>
        <Fade>
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl  py-3 lg:py-5">
            <Marquee pauseOnHover className="[--duration:40s] md:my-2">
              {firstRow.map((review) => (
                <ReviewCard key={review.img} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s] md:my-2">
              {secondRow.map((review) => (
                <ReviewCard key={review.img} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none  absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/5 dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/5 dark:from-background"></div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Ourclients;
