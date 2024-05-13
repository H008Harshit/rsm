import CarousalArrow from "@/components/common/CarousalArrow";
import SlickCarousalWrapper from "@/components/common/SlickCarousal";

const Blog = () => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "blog",
    infinite: false,
    initialSlide:0,
    useTransform: "transform-disable",
    nextArrow: (
      <CarousalArrow classStyle="z-0 bg-white absolute top-[175px]  right-[-30px]  " />
    ),
    prevArrow: (
      <CarousalArrow classStyle="z-0 bg-white absolute top-[175px] left-[-25px] z-20 rotate-180" />
    ),
    useCss: "disable ",
    draggable: false,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 2,
      //   },
      // },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 320,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  return (
    <div className="relative bg-[#fff8f8] py-[4%] px-[10%]">
      <div className="grid mb-8 grid-cols-4">
        <p className="col-span-2 lg:text-xl font-bold text-[#3f3c4b]">
          Explore Western Wear
        </p>
        {/* <div className="col-end-6">Explore More Deals</div> */}
      </div>
      <SlickCarousalWrapper settings={settings}>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/650d3c4a61123459496eef82_1695366218094.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/11/655612c306825509b0be8511_1700139715380.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/65005c3240666701450e25c5_1694522418232.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/650d3c4a61123459496eef82_1695366218094.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/11/655612c306825509b0be8511_1700139715380.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/65005c3240666701450e25c5_1694522418232.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/650d3c4a61123459496eef82_1695366218094.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/11/655612c306825509b0be8511_1700139715380.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/65005c3240666701450e25c5_1694522418232.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/650d3c4a61123459496eef82_1695366218094.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/11/655612c306825509b0be8511_1700139715380.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/65005c3240666701450e25c5_1694522418232.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/650d3c4a61123459496eef82_1695366218094.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/11/655612c306825509b0be8511_1700139715380.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/65005c3240666701450e25c5_1694522418232.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/650d3c4a61123459496eef82_1695366218094.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/11/655612c306825509b0be8511_1700139715380.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        <div className=" hover:underline w-[350px]">
          <img
            className="object-cover rounded-xl w-full h-[350px]"
            src="https://imgmediagumlet.lbb.in/media/2023/09/65005c3240666701450e25c5_1694522418232.jpg?fm=webp&w=480&h=480&dpr=2"
          />
          <div className="text-DB1 my-2">
            Love The Iconic Dr. Martens 1460 Boots? 8 Alternatives To Buy For
            Fall
          </div>
        </div>
        
      </SlickCarousalWrapper>
    </div>
  );
};

export default Blog;
