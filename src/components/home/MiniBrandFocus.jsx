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
        <div className="relative bg-[#fff8f8] grid grid-cols-8 py-[4%] gap-4 px-[10%]">
          {/* <SlickCarousalWrapper settings={settings}> */}
          
            <img className=" desktop:col-span-2 col-span-4 object-cover rounded-xl h-[220px]" src="https://magicka.in/wp-content/uploads/2022/06/Meets1-scaled.jpg" />
            <img className=" desktop:col-span-2 col-span-4 object-cover rounded-xl h-[220px]" src="https://magicka.in/wp-content/uploads/2022/06/MG_4181_1-scaled.jpg" />
            <img className=" desktop:col-span-2 col-span-4 object-cover rounded-xl h-[220px]" src="https://magicka.in/wp-content/uploads/2022/06/Conclaves1-scaled.jpg" />
            <img className=" desktop:col-span-2 col-span-4 object-cover rounded-xl h-[220px]" src="https://magicka.in/wp-content/uploads/2022/06/71103392_507425886738650_861724852241825792_n.jpg" />
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
    )
}

export default MiniBrandFocus