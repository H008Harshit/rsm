import PhotoAlbum from "react-photo-album";
import photo1 from "../../../public/photoGallery/Rectangle42.jpg";
import photo2 from "../../../public/photoGallery/Rectangle43.jpg";
import photo3 from "../../../public/photoGallery/Rectangle44.jpg";
import photo4 from "../../../public/photoGallery/Rectangle45.jpg";
import photo5 from "../../../public/photoGallery/Rectangle46.jpg";
import photo6 from "../../../public/photoGallery/Rectangle47.jpg";

const PhotoLibrary = () => {
  const photo_data = [
    { src: photo1.src, width: 800, height: 600 },
    { src: photo2.src, width: 1600, height: 900 },
    { src: photo3.src, width: 1600, height: 900 },
    { src: photo4.src, width: 1600, height: 900 },
    { src: photo5.src, width: 1600, height: 900 },
    { src: photo6.src, width: 800, height: 600 },
  ];
  return (
    <div className="desktop:px-[10%] px-4 my-4 desktop:my-[4%]">
        <div className="text-DH1 mb-6">Photo Gallery</div>
      <PhotoAlbum layout="rows" photos={photo_data} />
    </div>
  );
};

export default PhotoLibrary;
