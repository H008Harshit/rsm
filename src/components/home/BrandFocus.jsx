import CarousalArrow from "@/components/common/CarousalArrow";
import SlickCarousalWrapper from "@/components/common/SlickCarousal";
import frame1 from "../../../public/assets/images/Frame1.png"
import frame2 from "../../../public/assets/images/Frame2.png"
import frame3 from "../../../public/assets/images/Frame3.png"
import frame4 from "../../../public/assets/images/Frame4.png"
import frame5 from "../../../public/assets/images/Frame5.png"
import frame7 from "../../../public/assets/images/Frame7.png"

const BrandFocus = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        className: " brand-focus-section",
        useTransform: "transform-disable",
        nextArrow: <CarousalArrow classStyle=" bg-white absolute top-[160px]  right-[-30px]  " />,
        prevArrow: (
          <CarousalArrow classStyle=" bg-white absolute top-[160px] left-[-25px] z-20 rotate-180" />
        ),
        useCss: "disable ",
        draggable: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              nextArrow : false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow : false,
              prevArrow : false
            }
          },
        ]
      };
    return (
        <div className="relative bg-[#fff8f8] py-[4%] px-4 desktop:px-[10%]">
          <div className="grid mb-8 grid-cols-4">
            <p className="desktop:col-span-2 col-span-4 text-DH2 font-bold text-[#3f3c4b]">CURATED BRANDS & EXCITING DEALS</p>
            {/* <div className="col-end-6">Explore More Deals</div> */}
          </div>
          <SlickCarousalWrapper settings={settings}>
            <img className="object-cover rounded-xl h-[350px]" src={frame1.src} />
            <img className="object-cover rounded-xl h-[350px]" src={frame2.src} />
            <img className="object-cover rounded-xl h-[350px]" src={frame3.src} />
            <img className="object-cover rounded-xl h-[350px]" src={frame4.src} />
            <img className="object-cover rounded-xl h-[350px]" src={frame5.src} />
            <img className="object-cover rounded-xl h-[350px]" src={frame7.src} />
          </SlickCarousalWrapper>
        </div>
    )
}

export default BrandFocus