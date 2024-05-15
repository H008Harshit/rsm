import CarousalArrow from "@/components/common/CarousalArrow";
import SlickCarousalWrapper from "@/components/common/SlickCarousal";

const MiniBrandFocus = () => {
  // var settings = {
  //     dots: false,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     className: "mini-brand-focus-section",
  //     useTransform: "transform-disable",
  //     nextArrow: <CarousalArrow classStyle=" bg-white absolute top-[45px]  right-[-30px]  " />,
  //     prevArrow: (
  //       <CarousalArrow classStyle=" bg-white absolute top-[45px] left-[-25px] z-20 rotate-180" />
  //     ),
  //     useCss: "disable ",
  //     draggable: false,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 2,
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         }
  //       },
  //       {
  //         breakpoint: 320,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         }
  //       },
  //     ]
  //   };
  return (
    <div className="relative  grid grid-cols-8 py-[6%] gap-2 px-[10%]">
      {/* <SlickCarousalWrapper settings={settings}> */}
      <div class="desktop:col-span-2 col-span-4 object-cover rounded-xl relative inline-block">
        <img
          className=" h-[220px]"
          src="https://magicka.in/wp-content/uploads/2022/06/Meets1-scaled.jpg"
        />

        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-white desktop:text-DT1 text-MT1 font-bold shadow-lg p-4">
          Business Connect Meets
          </span>
        </div>
      </div>

      <div class="desktop:col-span-2 col-span-4 object-cover rounded-xl relative inline-block">
        <img
          className=" h-[220px]"
          src="https://magicka.in/wp-content/uploads/2022/06/MG_4181_1-scaled.jpg"
        />

        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-white desktop:text-DT1 text-MT1 font-bold shadow-lg p-4">
          Memberships
          </span>
        </div>
      </div>
      <div class=" desktop:col-span-2 col-span-4 object-cover rounded-xl  relative inline-block">
        <img
          className=" h-[220px]"
          src="https://magicka.in/wp-content/uploads/2022/06/Conclaves1-scaled.jpg"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-white desktop:text-DT1 text-MT1 font-bold shadow-lg p-4">
          Conclaves & Summits
          </span>
        </div>
      </div>
      <div class="desktop:col-span-2 col-span-4 object-cover rounded-xl h-[220px] relative inline-block">
        <img
          className=" "
          src="https://magicka.in/wp-content/uploads/2022/06/71103392_507425886738650_861724852241825792_n.jpg"
        />

        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-white desktop:text-DT1 text-MT1 font-bold shadow-lg p-4">
          Growth Partners
          </span>
        </div>
      </div>

      {/* <img className="object-cover rounded-xl h-[120px]" src="https://imgshopnewgumlet.lbb.in/config_images/2024/May/08/1715168963720_ifOHfCWGE_VsaHRn1-zJNwftqvdanU1WhpTCmL-U-zE" />
            <img className="object-cover rounded-xl h-[120px]" src="https://imgshopnewgumlet.lbb.in/config_images/2024/May/08/1715168963412_sRc9lkyNKBNpCjhUBCTMcmjkOjlKfJVUQ--81gM9Bi0" />
            <img className="object-cover rounded-xl h-[120px]" src="https://imgshopnewgumlet.lbb.in/config_images/2024/May/08/1715168963720_ifOHfCWGE_VsaHRn1-zJNwftqvdanU1WhpTCmL-U-zE" />
            <img className="object-cover rounded-xl h-[120px]" src="https://imgshopnewgumlet.lbb.in/config_images/2024/May/08/1715168963412_sRc9lkyNKBNpCjhUBCTMcmjkOjlKfJVUQ--81gM9Bi0" />
            <img className="object-cover rounded-xl h-[120px]" src="https://imgshopnewgumlet.lbb.in/config_images/2024/May/08/1715168963720_ifOHfCWGE_VsaHRn1-zJNwftqvdanU1WhpTCmL-U-zE" />
            <img className="object-cover rounded-xl h-[120px]" src="https://imgshopnewgumlet.lbb.in/config_images/2024/May/08/1715168963412_sRc9lkyNKBNpCjhUBCTMcmjkOjlKfJVUQ--81gM9Bi0" />
            <img className="object-cover rounded-xl h-[120px]" src="https://imgshopnewgumlet.lbb.in/config_images/2024/May/08/1715168963720_ifOHfCWGE_VsaHRn1-zJNwftqvdanU1WhpTCmL-U-zE" />
            <img className="object-cover rounded-xl h-[120px]" src="https://imgshopnewgumlet.lbb.in/config_images/2024/May/08/1715168963412_sRc9lkyNKBNpCjhUBCTMcmjkOjlKfJVUQ--81gM9Bi0" /> */}
      {/* </SlickCarousalWrapper> */}
    </div>
  );
};

export default MiniBrandFocus;
