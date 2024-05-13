import { useParams } from "next/navigation";
import frame1 from "../../../public/assets/images/Frame1.png";
import frame2 from "../../../public/assets/images/Frame2.png";
import frame3 from "../../../public/assets/images/Frame3.png";
import frame4 from "../../../public/assets/images/Frame4.png";
import frame5 from "../../../public/assets/images/Frame5.png";
import frame7 from "../../../public/assets/images/Frame7.png";

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
      img: frame4,
    },
    {
      name: "plt",
      img: frame5,
    },
    {
      name: "Bling closet 2",
      img: frame7,
    },
  ];

  const query = useParams();
  const getData = data?.find((item) => item.name === query?.brand);
  return (
    <div className="mx-[10%] desktop:justify-evenly  py-[4%] desktop:flex mt-[90px] ">
      <div className="desktop:mb-0 mb-4">
        <div className="text-[40px] font-bold underline text-primary_enabled">
          {getData?.name.toUpperCase()}
        </div>
        <div className="text-[28px] text-primary_disabled">
          20% off on all products
        </div>
      </div>
      <div>
        <img src={getData?.img?.src} alt="fram-1" className="w-90 h-[60vh]" />
      </div>
    </div>
  );
};

export default Brand;
