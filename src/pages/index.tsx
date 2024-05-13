import BaseLayout from "@/components/common/BaseLayout";
import BannerCarousel from "@/components/home/BannerCarousel";
import BrandFeature from "@/components/home/BrandFeature";
import BrandFocus from "@/components/home/BrandFocus";
import MiniBrandFocus from "@/components/home/MiniBrandFocus";
import Categories from "@/components/home/Categories";
import WomenOfSubstance from "@/components/home/WomenOfSubstance";
import Blog from "@/components/home/Blog";
import bg from "../../public/assets/images/entrepreneur.png";

export default function Home() {
  return (
    <div className="mt-[80px] ">
      <BannerCarousel />
      <BrandFeature />
      <BrandFocus />
      <MiniBrandFocus />
      <Categories />
      <div className="relative">
        <img
          className="desktop:h-[80vh] absolute h-auto object-cover w-full"
          src={bg.src}
          alt="image"
        />
        <WomenOfSubstance />
      </div>
      {/* <Blog /> */}
    </div>
  );
}
