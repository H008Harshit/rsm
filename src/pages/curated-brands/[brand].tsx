import { useParams } from "next/navigation";
import frame1 from "../../../public/assets/images/Frame1.png";
import frame2 from "../../../public/assets/images/Frame2.png";
import frame3 from "../../../public/assets/images/Frame3.png";
import frame4 from "../../../public/assets/images/Frame4.png";
import frame5 from "../../../public/assets/images/Frame5.png";
import frame7 from "../../../public/assets/images/Frame7.png";
import frame8 from "../../../public/assets/images/Frame8.png";

const Brand = () => {
  const data = [
    {
      name: "Sculptedge",
      img: frame1,
    },
    {
      name: "Sculptyou",
      img: frame2,
    },
    {
      name: "Plum luxure",
      img: frame3,
    },
    {
      name: "Bling closet",
      img: frame8,
    },
    {
      name: "plt",
      img: frame5,
    },
    // {
    //   name: "Bling closet 2",
    //   img: frame7,
    // },
  ];

  const query = useParams();
  const getData = data?.find((item) => item.name === query?.brand);
  return (
    <div className=" desktop:justify-around desktop:mx-[10%] desktop:gap-8 py-[4%] desktop:flex mt-[90px] ">
      <div className="desktop:mb-0 w-[60%] mb-4">
        <div className="text-[32px] mb-2 font-andora font-bold ">
          {getData?.name.toUpperCase()}
        </div>
        <div className="text-DH2 w-fit py-2 font-andora border-grey_light border-b-[1px]">
          Flat 20% off for all !🛍️
        </div>
        <div className="my-2 text-grey_dark font-lato text-DB1">
          We recommend buying their Convoluted Matcha Green Flats <br/> and White
          Pearl Motif Wedges
        </div>
        <div className="text-DH2 font-andora mt-4 w-fit py-2 border-grey_light border-b-[1px]">
          How This Works? 🤔
        </div>
        <div className="my-2 text-DB1 font-lato text-grey_dark">
          Enter your details in the form below and Keep an eye out for <br/>emails
          from us, as all lucky giveaway winners will hear from <br/> us there first.
          Happy winning!
        </div>
        <div className="text-DH2 font-andora mt-4 py-2">
          Sign Up Now
        </div>
        <div className="my-2">
          <input required placeholder="Name*" className="border-b-[1px] mt-4 w-[60%] border-grey_light py-2 "/>
          <input required placeholder="Phone Number*" className="border-b-[1px] mt-4 w-[60%] border-grey_light py-2 "/>
          <input required placeholder="Address*" className="border-b-[1px] mt-4 w-[60%] border-grey_light py-2 "/>
          <button className="w-[60%] bg-mg_primary text-white text-DT2 p-2 mt-6 rounded-full">Submit</button>
        </div>
      </div>
      <div className="w-[40%]">
        <img src={getData?.img?.src} alt="fram-1" className="w-110 h-[80vh]" />
      </div>
    </div>
  );
};

export default Brand;
