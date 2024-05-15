import PhotoAlbum from "react-photo-album";
import photo1 from "../../../public/galleryimages/1.jpeg"
import photo2 from "../../../public/galleryimages/2.jpeg"
import photo3 from "../../../public/galleryimages/3.jpeg"
import photo4 from "../../../public/galleryimages/4.jpeg"
import photo5 from "../../../public/galleryimages/5.jpeg"
import photo6 from "../../../public/galleryimages/6.jpeg"
import photo7 from "../../../public/galleryimages/7.jpeg"
import photo8 from "../../../public/galleryimages/8.jpeg"
import photo9 from "../../../public/galleryimages/9.jpeg"
import photo10 from "../../../public/galleryimages/10.jpeg"
import photo11 from "../../../public/galleryimages/11.jpeg"
import photo12 from "../../../public/galleryimages/12.jpeg"
import photo13 from "../../../public/galleryimages/13.jpeg"
import photo14 from "../../../public/galleryimages/14.jpeg"
import photo15 from "../../../public/galleryimages/15.jpeg"
import photo16 from "../../../public/galleryimages/16.jpeg"
import photo17 from "../../../public/galleryimages/17.jpeg"
import SlickCarousalWrapper from "../common/SlickCarousal";

// import photo1 from "../../../public/photoGallery/Rectangle42.jpg";
// import photo2 from "../../../public/photoGallery/Rectangle43.jpg";
// import photo3 from "../../../public/photoGallery/Rectangle44.jpg";
// import photo4 from "../../../public/photoGallery/Rectangle45.jpg";
// import photo5 from "../../../public/photoGallery/Rectangle46.jpg";
// import photo6 from "../../../public/photoGallery/Rectangle47.jpg";

const PhotoLibrary = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed:3000,
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
  // const photo_data = [
  //   { src: photo1.src, width: 800, height: 600 },
  //   { src: photo2.src, width: 1600, height: 900 },
  //   { src: photo3.src, width: 1600, height: 900 },
  //   { src: photo4.src, width: 1600, height: 900 },
  //   { src: photo5.src, width: 1600, height: 900 },
  //   { src: photo6.src, width: 800, height: 600 },

  // ];
  const photos_data = [photo1, photo2, photo3, photo4, photo5, photo6,photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17]
  return (
    <div className="desktop:px-[10%] px-4 my-4 desktop:my-[4%]">
        <div className="text-DH1 mb-6 font-andora">Photo Gallery</div>
        <SlickCarousalWrapper settings={settings}>
          {photos_data.map((item,i)=>
          <img src={item.src} className="w-full object-contain h-[60vh]" alt="" key={i}/>
        )}
        </SlickCarousalWrapper>
    </div>
  );
};

export default PhotoLibrary;
