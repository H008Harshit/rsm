import active_story_banner from "../../../public/listing_images/active_story/BANNER1.jpg";
import desi_swag from "../../../public/listing_images/desi_swag/desi_swag.jpeg";
import qala_katha from "../../../public/listing_images/qala_katha/qala_katha.jpeg";
import happiness_unwrapped from "../../../public/listing_images/happiness_unwrapped/happiness_unwrapped.jpeg";
import data from "@/data/listing.js";
import Link from "next/link";

const featured_brand = data[0];
const side_1 = data[1];
const side_2 = data[2];
const side_3 = data[3];

const BrandFeature = () => {
  return (
    <div className="desktop:px-[10%] mb-8 px-4">
      <div>
        <div className="grid grid-cols-6 desktop:gap-10 ">
          <div className=" cursor-pointer col-span-6 desktop:col-span-4">
            <Link href={featured_brand?.slug+'/detail'}>
              <img className="desktop:h-[55vh] object-contain desktop:object-cover w-full" src={featured_brand?.prod_images[0]?.src} alt="image" />
              <p className="my-1 text-DB2 flex items-center gap-2">
                <div className="w-2 rounded-full bg-[#222] h-2" />
                {featured_brand?.brand_category}
              </p>
              <h1 className="text-[3em] font-black">{featured_brand?.brand_name}</h1>
              <p className="text-grey_dark">
                {featured_brand?.description.length>450?featured_brand?.description?.slice(0, 450)+'...':featured_brand?.description}
              </p>
            </Link>
          </div>
          <div className="w-full col-span-6 mt-6 desktop:col-span-2">
            <div>
              <h1 className="text-[3em] leading-10 font-black">Brand Feature</h1>
              <div className=" cursor-pointer border-b-2">
                <Link href={side_1.slug+'/detail'}>
                  <div className="grid gap-4 my-4 grid-cols-3">
                    <p className=" text-grey_dark col-span-2">
                      {side_1.description.slice(0, 100)}
                    </p>
                    <img
                      className="w-[100px] h-[100px] col-span-1"
                      src={side_1.prod_images[0].src}
                      alt="image"
                    />
                  </div>
                  <p className=" text-MH1 my-2 ">{side_1.brand_name}</p>
                </Link>
              </div>
              <div className=" cursor-pointer border-b-2">
                <Link href={side_2.slug+'/detail'}>
                  <div className="grid gap-4 my-4 grid-cols-3">
                    <p className=" text-grey_dark col-span-2">
                      {side_2.description.slice(0, 100)}
                    </p>
                    <img
                      className="w-[100px] h-[100px] col-span-1"
                      src={side_2.prod_images[0].src}
                      alt="image"
                    />
                  </div>
                  <p className=" text-MH1 my-2 ">{side_2.brand_name}</p>
                </Link>
              </div>
              <div className=" cursor-pointer border-b-2">
                <Link href={side_3.slug+'/detail'}>
                  <div className="grid gap-4 my-4 grid-cols-3">
                    <p className=" text-grey_dark col-span-2">
                    {side_3.description.slice(0, 100)}
                    </p>
                    <img
                      className="w-[100px] h-[100px] col-span-1"
                      src={side_3.prod_images[0].src}
                      alt="image"
                    />
                  </div>
                  <p className=" text-MH1 my-2 ">{side_3.brand_name}</p>
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
