const PhotoGallery = ({images}) => {
  console.log("hey", images);
  return (
    <div id="photo-container" className="mt-[15px] desktop:flex h-[520px]">
      <div id="left" className="w-[50%] h-[100%] relative">
          <img
            src={images && images[0]?.src}
            className="h-[100%] w-[100%] contrast-125 pl-[4.5px] pb-[4.5px] object-cover"
            alt="right_image"
          />
      </div>
      <div id="right" className="flex flex-wrap w-[50%]">
        {images?.map((img, i) => {
          if (i !== 0 && i<5) {
            return (
              <img
                key={i}
                src={img.src}
                className=" w-[50%] h-[50%] contrast-125 pl-[4.5px] pb-[4.5px] object-cover" 
                alt="right_image"
                />
            );
          }
        })}
      </div>
    </div>
  );
};


export default PhotoGallery