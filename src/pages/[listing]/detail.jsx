import PhotoGallery from "@/components/detail/PhotoGallery";
import map from "../../../public/assets/svg/map.svg";
import phone from "../../../public/assets/svg/phone.svg";
import link from "../../../public/assets/svg/link.svg";
import fb from "../../../public/assets/svg/fb.svg";
import insta from "../../../public/assets/svg/insta.svg";
import { useParams } from "next/navigation";
import data from "@/data/listing.js";
import Carousal from "@/components/detail/Carousal";
import powered from "../../../public/assets/images/powered_by.png"
import Link from "next/link";
import listing from "../../../public/assets/images/listing_footer.png"
const detailPage = () => {
  const param = useParams();
  const list_slug = param?.listing;

  const list_data = data?.find((item) => list_slug === item.slug);
  console.log(list_data);

  return (
    <div className="mt-[80px] ">
      {/* photo gallery */}
      <div className="mb-8 desktop:hidden">
        <Carousal images={list_data?.prod_images} />
      </div>
      <div className="w-full desktop:px-[10%] px-4  py-4 text-white desktop:bg-[rgba(230,0,0,0.2)] ">
        <div className="grid grid-cols-2">
          <div className=" col-span-2 desktop:flex justify-between  ">
            <div className="text-DH1 flex flex-col ">
              <span className=" font-andora text-black">{list_data?.brand_name}</span>
              <span className="text-DT2 font-lato text-grey_dark">
                {list_data?.brand_category}
              </span>
            </div>
            {list_data?.powered_by && <div className="flex items-center my-2 gap-4">
              <p className="text-DT1 text-black">Powered By</p>
              <img className="desktop:w-[100px] w-[60px] h-[30px] desktop:h-[50px]" src={powered.src} alt="powered-by"/>
            </div>}
          </div>
          {/* <div className="desktop:col-end-4">
            <div className="flex items-center gap-4">
              <div className="text-DT1 bg-[#73cf42] rounded-md px-4 py-[2px]">
                5.0 / 5
              </div>
              <div className=" text-grey_dark text-DB1">1 Review</div>
            </div>
          </div> */}
        </div>
        <div className="hidden desktop:block">
          <PhotoGallery images={list_data?.prod_images} />
        </div>
      </div>
      {/* decription  */}
      <div className="desktop:mx-[10%] mx-4 mt-[20px]">
        <div className="desktop:flex">
          <div id="WalkDetailLeft " className="w-full desktop:w-[60%]">
            <p className="text-DT2 font-lato mb-[40px] text-justify text-grey_dark">
              {list_data?.description}
            </p>
            {/* FAQ */}
            <p className="font-andora text-DH2 my-4">FAQs</p>
            <div className="collapse collapse-plus border-[1px] my-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-grey_light rounded-none ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-DT2 font-medium">
                Which material is used?
              </div>
              <div className="collapse-content">
                <p className=" text-grey_dark">
                  Wired paper machey with texture and power coat. Very strong
                  and sturdy. Light in weight.
                </p>
              </div>
            </div>
            {/* <div className="collapse collapse-plus border-[1px] my-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-grey_light rounded-none ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-DT2 font-medium">
                Which material is used?
              </div>
              <div className="collapse-content">
                <p className=" text-grey_dark">
                  Wired paper machey with texture and power coat. Very strong
                  and sturdy. Light in weight.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus border-[1px] my-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-grey_light rounded-none ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-DT2 font-medium">
                Which material is used?
              </div>
              <div className="collapse-content">
                <p className=" text-grey_dark">
                  Wired paper machey with texture and power coat. Very strong
                  and sturdy. Light in weight.
                </p>
              </div>
            </div> */}
          </div>
          <div
            id="WalkDetailRight"
            className="desktop:w-[40%] font-lato desktop:pl-[40px]"
          >
            <div className="sticky top-[15%]">
              <div className="w-full border-[1px] rounded-md border-grey_light p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.039693082625!2d73.00021897486639!3d19.06199235241274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c15027d37ae7%3A0xeb2f406b16485837!2sGuru%20Mahima%20Heights%20CHS!5e0!3m2!1sen!2sin!4v1715515905983!5m2!1sen!2sin"
                  height="300"
                  style={{ border: 0 }}
                  className="w-full"
                  loading="lazy"
                />
                <div className="p-4 flex gap-2 border-b-[1px] border-grey_light items-center">
                  <img src={map.src} alt="map-svg" className="w-6 h-6 " />
                  <p className="text-DB2">
                    1301 Gurumahima heights Plot no. 12, Sector 14 Off Palm
                    Beach Road, Sanpada Navi Mumbai 400705
                  </p>
                </div>
                {list_data?.Phone && <div className="p-4 flex gap-2 border-b-[1px] border-grey_light items-center">
                  <img src={phone.src} alt="map-svg" className="w-6 h-6 " />
                  <p className="text-DB2">{list_data?.Phone}</p>
                </div>}
                <Link href={'/'}>
                <div className="p-4 flex gap-2 border-b-[1px] border-grey_light items-center">
                  <img src={link.src} alt="map-svg" className="w-6 h-6 " />
                  <p className="text-DB2">website link</p>
                </div>
                <div className="p-4 flex gap-6  items-center">
                  <img src={fb.src} alt="fb-svg" className="w-6 h-6 " />
                  <img src={insta.src} alt="insta-svg" className="w-6 h-6 " />
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-6  h-[1px] bg-grey_light" />
        <div>
          <div className="text-DH2 my-6 font-andora">Meet Owner</div>
          <div className="grid grid-cols-8">
            <div className="col-span-8 desktop:mb-0 mb-4 desktop:col-span-2">
              <img
                src={list_data?.owner_pic?.src || list_data?.logo?.src}
                alt="owner-image"
                className="w-[200px] h-[200px] rounded-full object-cover"
              />
            </div>
            <div className="desktop:col-span-6 col-span-8">
              <div className="text-DH2 font-andora mb-4">{list_data?.brand_owner}</div>
              <div className="text-DT2  text-grey_dark text-justify">
                {list_data?.owner_bio}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="mt-6" src={listing.src} alt="footer"/>
    </div>
  );
};

export default detailPage;
