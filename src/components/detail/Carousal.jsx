import SlickCarousalWrapper from "../common/SlickCarousal";
import Banner1 from "../../../public/assets/images/banner-1.jpg";
import Banner2 from "../../../public/assets/images/banner-2.jpg";
import Banner3 from "../../../public/assets/images/banner-3.jpg";
const Carousal = ({images}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: "inline-dot",
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="w-[6px] h-[6px] bg-white  rounded-full" />
    ),
  };
  return (
    <SlickCarousalWrapper settings={settings}>
      {images?.map((img,i)=>{
        if(i!==0){
          return <img className="h-[40vh]" src={img.src} alt="alt" key={i} />
        }
      })}
    </SlickCarousalWrapper>
  );
};

export default Carousal;
