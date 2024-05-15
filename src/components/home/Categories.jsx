import apparel_img from "../../../public/categories/apparels_cat.jpeg"
import access_img from "../../../public/categories/accessories.jpeg"
import handicrafts  from "../../../public/categories/handicraft.jpeg"
import beauty from "../../../public/categories/beauty_and_skin_care.jpeg"
import gift from "../../../public/categories/gift_and_home_decor.jpeg"
import jwel from "../../../public/categories/jwellery.jpg"
import Link from "next/link"




const Categories = () => {
    const cat_data = [
        {
            "title": "Apparels",
            "img": apparel_img,
            "type": "apparels",
        },
        {
            "title": "Accessories",
            "img": access_img,
            "type": "accessories",
        },
        {
            "title": "Handicrafts",
            "img": handicrafts,
            "type": "handicrafts",
        },
        {
            "title": "Beauty & Skin Care",
            "img": beauty,
            "type": "beauty",
        },
        {
            "title": "Handicraft & Home Furnishing",
            "img": gift,
            "type": "gift",
        },
        {
            "title": "Jewelleries",
            "img": jwel,
            "type": "jewellery",
        }
    ]
    return (
        <div className="desktop:px-[10%] px-4  bg-[#fff8f8] py-[4%]">
            <div className="text-DH1 font-andora font-black mb-[4%]">
                Discover Women Led <span className="text-mg_primary">Brands</span> 
            </div>
            <div className="flex flex-wrap justify-evenly gap-6 ">
            {cat_data.map((item,i)=>
                <Link key={i} href={'/'+'category/'+item.type}>
                    <div className="w-[106px] h-[116px] flex flex-col items-center gap-2">
                        <img className="h-[64px] w-[64px] rounded-full border-2 border-[#008084]" src={item.img.src} alt="cat-img"/>
                        <p className="font-lato text-center">{item.title}</p>
                    </div>
                </Link>
            )}
            </div>
        </div>
    )
}

export default Categories