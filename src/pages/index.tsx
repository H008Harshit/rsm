import BannerCarousel from "@/components/home/BannerCarousel";
import BrandFeature from "@/components/home/BrandFeature";
import BrandFocus from "@/components/home/BrandFocus";
import MiniBrandFocus from "@/components/home/MiniBrandFocus";
import Categories from "@/components/home/Categories";
import WomenOfSubstance from "@/components/home/WomenOfSubstance";
import bg from "../../public/assets/images/entrepreneur.png";
import home_screen from "../../public/assets/images/home_screen_banner.png"
import PhotoLibrary from "@/components/home/PhotoLibrary";
import { useState } from "react";
import home_footer from "../../public/assets/images/home-footer.png"
import Link from "next/link";
import deen from "../../public/assets/images/deeendayal.jpeg"

export default function Home() {
  const [search,setSearch] = useState('')
  return (
    <div className="mt-[80px] ">
      <BannerCarousel />
      <div className="mt-[50px] mb-8 desktop:px-[10%] px-4 text-center">
        <div className="text-[35px] font-andora font-bold text-mg_primary">
          Want to explore more brands?
          <br />
        </div>
        <span className="text-DT2 font-lato text-primary_disabled">
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
      <img src={home_screen.src} alt="home-screen-banner"/>
      <MiniBrandFocus />
      <Categories />
      <div className="relative">
        <img
          className="hidden desktop:block desktop:h-[80vh] top-790 absolute object-cover w-full"
          src={bg.src}
          alt="image"
        />
        <WomenOfSubstance />
        <div className="relative">
          <video className="w-full  object-cover h-[60vh]"  autoPlay loop>
            <source src="http://www.magicka.in/public_doc/b.mp4" />
          </video>
          <div className="absolute desktop:mx-[10%] flex flex-col desktop:flex-row text-white items-center justify-around z-10 top-[10%] desktop:top-[30%]">
            <video controls >
              <source src="https://video.fdel42-1.fna.fbcdn.net/v/t42.9040-2/70735550_2344054849169992_7559830215547944960_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjM4OCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIiwidmlkZW9faWQiOjQ4OTQ1MDExODUzNjIyN30%3D&_nc_ohc=X5AWysG6ZVMQ7kNvgGEJlCk&rl=388&vabr=216&_nc_ht=video.fdel42-1.fna&edm=AGo2L-IEAAAA&oh=00_AYD9upMxbGzjL5dX0U5wnsjY_zB6H2w9ldEywVM4dp9ymw&oe=66454585"/>
            </video>
            <div className="text-DH2 desktop:w-[40%] mt-8 desktop:mt-0 w-[90%] text-center">
                Magicka has been a gateway for women led enterprises, we see women changing the world scenario in economic welfare and social aspects through their inner strengths and industrial capabilities.
            </div>
          </div>
        </div>

        <PhotoLibrary />
        <div className="desktop:px-[10%] bg-[#fff8f8] mt-[5%] py-[5%] px-4 grid-cols-2 grid gap-10">
          <img className="desktop:col-span-1 col-span-2 h-auto mx-auto w-[80%]" src={deen.src} alt="image"/>  
          <div className="desktop:col-span-1 text-mg_primary col-span-2 mx-auto desktop:mx-0 text-DH1 w-[70%] mt-2 desktop:mt-8 text-center font-andora">Deendayal Antyodaya Yojana-National Urban Livelihoods Mission (DAY-NULM)</div>
          <div className="col-span-2 text-DT2 text-center text-grey_dark w-[80%] mx-auto font-lato">
            To reduce poverty and vulnerability of the urban poor households by enabling them to access gainful self employment and skilled wage employment opportunities,resulting in an appreciable improvement in their livelihoods on a sustainable basis,through building strong grassroots level institutions of the poor.The mission would aim at providing shelters equipped with essential services to the urban homeless in a phased manner. In addition,the mission would also address livelihood concerns of the urban street vendors by facilitating access to suitable spaces,institutional credit,social security and skills to the urban street vendors for accessing emerging market opportunities.
            <Link href="https://nulm.gov.in/">
              <div className="rounded-lg mt-4  w-fit mx-auto p-4 border-[1px] border-mg_primary text-mg_primary">Read More</div>
            </Link>
          </div>
        </div>
        <img className="mt-8" src={home_footer.src} alt="footer-banner"/>
      </div>
      {/* <Blog /> */}
    </div>
  );
}
