import BaseLayout from "@/components/common/BaseLayout";
import BannerCarousel from "@/components/home/BannerCarousel";
import BrandFeature from "@/components/home/BrandFeature";
import BrandFocus from "@/components/home/BrandFocus";
import MiniBrandFocus from "@/components/home/MiniBrandFocus";
import Categories from "@/components/home/Categories";
import WomenOfSubstance from "@/components/home/WomenOfSubstance";
import bg from "../../public/assets/images/entrepreneur.png";
import contact from "../../public/assets/images/contact.png";
import PhotoLibrary from "@/components/home/PhotoLibrary";
import { useState } from "react";

export default function Home() {
  const [search,setSearch] = useState('')
  return (
    <div className="mt-[80px] ">
      <BannerCarousel />
      <div className="mt-[50px] mb-8 desktop:px-[10%] px-4 text-center">
        <div className="text-[35px] font-bold text-primary_enabled">
          Want to explore more brands?
          <br />
        </div>
        <span className="text-DT2 text-primary_disabled">
          Every Woman Entrepreneur has a unique Brand Story to tell. Let’s join
          hands to provide these entrepreneurs the right platform.
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(search);
            window.location.href= '/search/'+search
            setSearch('')
          }}
        >
          <div className="flex  mx-auto justify-center  my-6">
            <input
              name="search-brand"
              value={search}
              onChange={(e)=>{e.preventDefault();setSearch(e.target.value)}}
              placeholder="Enter the Brand Name"
              className=" px-6 desktop:w-[50%] w-full rounded-l-full bg-grey_light_variant"
            />
            <button type="submit" className=" text-DT2 text-white p-4 rounded-r-full bg-primary_enabled">
              Search
            </button>
          </div>
        </form>
      </div>
      <BrandFeature />
      <BrandFocus />
      <MiniBrandFocus />
      <Categories />
      <div className="relative">
        <img
          className="desktop:h-[80vh] absolute h-[105vh] object-cover w-full"
          src={bg.src}
          alt="image"
        />
        <WomenOfSubstance />
        <PhotoLibrary />
      </div>
      {/* <Blog /> */}
    </div>
  );
}
