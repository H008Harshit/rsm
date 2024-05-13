import SlickCarousalWrapper from "../common/SlickCarousal";
import Banner1 from "../../../public/assets/images/banner-1.jpg";
import Banner2 from "../../../public/assets/images/banner-2.jpg";
import Banner3 from "../../../public/assets/images/banner-3.jpg";
const BannerCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: "inline-dot",
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    appendDots: (dots: number) => <ul>{dots}</ul>,
    customPaging: (i: number) => (
      <div className="w-[6px] h-[6px] bg-white  rounded-full" />
    ),
  };
  return (
    <SlickCarousalWrapper settings={settings}>
      <img className="desktop:h-[70vh] h-auto" src={Banner1.src} alt="Banner-1" />
      <img className="desktop:h-[70vh] h-auto" src={Banner2.src} alt="Banner-2" />
      <img className="desktop:h-[70vh] h-auto" src={Banner3.src} alt="Banner-3" />
    </SlickCarousalWrapper>
  );
};

export default BannerCarousel;
