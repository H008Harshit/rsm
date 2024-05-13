import CarousalArrow from "@/components/common/CarousalArrow";
import SlickCarousalWrapper from "@/components/common/SlickCarousal";
import frame1 from "../../../public/assets/images/Frame1.png"
import frame2 from "../../../public/assets/images/Frame2.png"
import frame3 from "../../../public/assets/images/Frame3.png"
import frame4 from "../../../public/assets/images/Frame4.png"
import frame5 from "../../../public/assets/images/Frame5.png"
import frame7 from "../../../public/assets/images/Frame7.png"
import Link from "next/link";

// const data = []
const BrandFocus = () => {
  const data = [
    {
        name: "Sculptedge",
        img : frame1
    },
    {
        name: "Sculptyou",
        img : frame2
    },
    {
        name: "Plum luxure",
        img : frame3
    },
    {
        name: "Bling closet",
        img : frame4
    },
    {
        name: "plt",
        img : frame5
    },
    {
        name: "Bling closet 2",
        img : frame7
    },
]
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        className: " brand-focus-section",
        useTransform: "transform-disable",
        nextArrow: <CarousalArrow classStyle="hidden desktop:flex z-0 bg-white !absolute top-[160px]  right-[-30px]  " />,
        prevArrow: (
          <CarousalArrow classStyle="hidden desktop:flex  z-0 bg-white absolute top-[160px] left-[-25px] z-20 rotate-180" />
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
        <div className="relative bg-[#fff8f8] py-[4%] z-0 px-4 desktop:px-[10%]">
          <div className="grid mb-8 grid-cols-4">
            <p className="desktop:col-span-2 col-span-4 text-DH2 font-bold text-[#3f3c4b]">CURATED BRANDS & EXCITING DEALS</p>
            {/* <div className="col-end-6">Explore More Deals</div> */}
          </div>
          <SlickCarousalWrapper settings={settings}>
            {data.map((item,i)=><Link key={i} href={'/curated-brands/'+item.name}>
              <img className="object-cover rounded-xl h-[350px]" src={item?.img?.src}  />
            </Link>)}
          </SlickCarousalWrapper>
        </div>
    )
}

export default BrandFocus