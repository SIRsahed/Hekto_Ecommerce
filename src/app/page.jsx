import AdvertiseProduct from "@/components/AdvertiseProduct";
import Banner from "@/components/Banner";
import FeaturedProduct from "@/components/FeaturedProduct";
import LatestProduct from "@/components/LatestProduct";
import TrendingProducts from "@/components/TrendingProducts";
import WhatOffer from "@/components/WhatOffer";

export default function Home() {
  return (
    <>
      <Banner/>
      <FeaturedProduct/>
      <LatestProduct/>
      <WhatOffer/>
      <AdvertiseProduct/>
      <TrendingProducts/>
    </>
  );
}
