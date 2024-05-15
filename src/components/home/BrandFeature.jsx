import main from "../../../public/assets/images/main.png";
import data from "@/data/listing.js";
import Link from "next/link";
import powered from "../../../public/assets/images/powered_by.png"

const side_1 = data[1];
const side_2 = data[2];
const side_3 = data[14];
const side_4 = data[15];
const side_5 = data[5];
const side_6 = data[7];

console.log(data);
const BrandFeature = () => {
  return (
    <div className="desktop:px-[10%] my-4 px-4">
      <div>
        <div className="grid grid-cols-6 desktop:gap-10 ">
          <div className=" cursor-pointer col-span-6 desktop:col-span-2">
            {/* <Link href={featured_brand?.slug+'/detail'}> */}
            <img
              className="desktop:h-auto object-contain desktop:object-cover w-full"
              src={main.src}
              alt="image"
            />
            {/* <p className="my-1 text-DB2 flex items-center gap-2">
                <div className="w-2 rounded-full bg-[#222] h-2" />
                {featured_brand?.brand_category}
              </p>
              <h1 className="text-[3em] font-black">{featured_brand?.brand_name}</h1>
              <p className=text-DB1"text-grey_dark">
                {featured_brand?.description.length>450?featured_brand?.description?.slice(0, 450)+'...':featured_brand?.description}
              </p> */}
            {/* </Link> */}
          </div>
          <div className="w-full col-span-6 desktop:col-span-2">
            <div>
              <div className=" cursor-pointer border-b-2">
                <Link href={side_1?.slug + "/detail"}>
                  <div className="mt-4 desktop:mt-0 grid gap-4 mb-4 grid-cols-3">
                    <div className="col-span-2">
                      <p className="h-[60px] text-MH1 font-andora">{side_1?.brand_name}</p>
                      <p className=" font-lato text-DB1 text-grey_dark h-[80px]">
                        {side_1?.description.slice(0, 80)+"..."}
                      </p>
                      {side_1.powered_by && <div className="flex items-center my-2 gap-4">
                        <p className="text-DB1 font-lato">Powered By</p>
                        <img className="w-[60px] h-[30px]" src={powered.src} alt="powered-by"/>
                      </div>}
                    </div>
                    <img
                      className="w-[100px] h-[100px] col-span-1"
                      src={side_1?.prod_images[0].src}
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              <div className=" cursor-pointer border-b-2">
                <Link href={side_2?.slug + "/detail"}>
                  <div className="grid gap-4 my-4 grid-cols-3">
                    <div className="col-span-2">
                      <p className="h-[60px] text-MH1 font-andora">{side_2?.brand_name}</p>
                      <p className=" font-lato text-DB1 text-grey_dark h-[80px]">
                        {side_2?.description.slice(0, 80)+"..."}
                      </p>
                      {side_2.powered_by && <div className="flex items-center my-2 gap-4">
                        <p className="text-DB1 font-lato">Powered By</p>
                        <img className="w-[60px] h-[30px]" src={powered.src} alt="powered-by"/>
                      </div>}
                    </div>
                    <img
                      className="w-[100px] h-[100px] col-span-1"
                      src={side_2?.prod_images[0].src}
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              <div className=" cursor-pointer border-b-2">
                <Link href={side_3?.slug + "/detail"}>
                  <div className="grid gap-4 my-4 grid-cols-3">
                    <div className="col-span-2">
                      <p className="h-[60px] text-MH1 font-andora">{side_3?.brand_name}</p>
                      <p className=" font-lato text-DB1 text-grey_dark h-[80px]">
                        {side_3?.description.slice(0, 80)+"..."}
                      </p>
                      {side_3.powered_by && <div className="flex items-center my-2 gap-4">
                        <p className="text-DB1 font-lato">Powered By</p>
                        <img className="w-[60px] h-[30px]" src={powered.src} alt="powered-by"/>
                      </div>}
                    </div>
                    <img
                      className="w-[100px] h-[100px] col-span-1"
                      src={side_3?.prod_images[0].src}
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full col-span-6 desktop:col-span-2">
            <div>
              <div className=" cursor-pointer border-b-2">
                <Link href={side_4?.slug + "/detail"}>
                  <div className="mt-4 desktop:mt-0 grid gap-4 mb-4 grid-cols-3">
                    <div className="col-span-2">
                      <p className="h-[60px] text-MH1 font-andora">{side_4?.brand_name.slice(0,30)+'...'}</p>
                      <p className=" font-lato text-DB1 text-grey_dark h-[80px]">
                        {side_4?.description.slice(0, 80)+"..."}
                      </p>
                      {side_4.powered_by && <div className="flex items-center my-2 gap-4">
                        <p className="text-DB1 font-lato">Powered By</p>
                        <img className="w-[60px] h-[30px]" src={powered.src} alt="powered-by"/>
                      </div>}
                    </div>
                    <img
                      className="w-[100px] h-[100px] col-span-1"
                      src={side_4?.prod_images[0].src}
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              <div className=" cursor-pointer border-b-2">
                <Link href={side_5?.slug + "/detail"}>
                  <div className="grid gap-4 my-4 grid-cols-3">
                    <div className="col-span-2">
                      <p className="h-[60px] text-MH1 font-andora">{side_5?.brand_name}</p>
                      <p className=" font-lato text-DB1 text-grey_dark h-[80px]">
                        {side_5?.description.slice(0, 80)+"..."}
                      </p>
                      {side_5.powered_by && <div className="flex items-center my-2 gap-4">
                        <p className="text-DB1 font-lato">Powered By</p>
                        <img className="w-[60px] h-[30px]" src={powered.src} alt="powered-by"/>
                      </div>}
                    </div>
                    <img
                      className="w-[100px] h-[100px] col-span-1"
                      src={side_5?.prod_images[0].src}
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              <div className=" cursor-pointer border-b-2">
                <Link href={side_6?.slug + "/detail"}>
                  <div className="grid gap-4 my-4 grid-cols-3">
                    <div className="col-span-2">
                      <p className="h-[60px] text-MH1 font-andora">{side_6?.brand_name}</p>
                      <p className=" font-lato text-DB1 text-grey_dark h-[80px]">
                        {side_6?.description.slice(0, 80)+"..."}
                      </p>
                      {side_6.powered_by && <div className="flex items-center my-2 gap-4">
                        <p className="text-DB1 font-lato">Powered By</p>
                        <img className="w-[60px] h-[30px]" src={powered.src} alt="powered-by"/>
                      </div>}
                    </div>
                    <img
                      className="w-[100px] h-[100px] col-span-1"
                      src={side_6?.prod_images[0].src}
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BrandFeature;
