import Image from "next/image";
import Hero from "./components/Hero";
import OurBreads from "./components/OurBreads";
import WhyUs from "./components/WhyUs";
import OurMenu from "./components/OurMenu";
import Banner from "./components/Banner";

export default function Home() {
  return (
<div>
  <Hero/>
  <OurBreads/>
  <WhyUs/>
  <OurMenu/>
  <Banner/>
</div>
  );
}
