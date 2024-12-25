import HeroSection from "@/components/Hero";
import AboutUs from "@/components/Sections/AboutUs";
import CustomeraJourney from "@/components/Sections/CustomeraJourney";
import EnquireNow from "@/components/Sections/EnquireNow";
import Faq from "@/components/Sections/Faq";
import Ourclients from "@/components/Sections/OurClients";
import PerksOfSampling from "@/components/Sections/PerksOfSampling";
import SamplingExperience from "@/components/Sections/SamplingExperience";
import WhyPartnerWithUs from "@/components/Sections/WhyPartnerWithUs";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyPartnerWithUs />
      <PerksOfSampling />
      <AboutUs />
      <SamplingExperience />
      <CustomeraJourney />
      <Ourclients />
      <Faq />
      <EnquireNow />
    </div>
  );
}
