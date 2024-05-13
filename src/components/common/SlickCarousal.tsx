import Slider from "react-slick";


// setting example :
// var settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     // autoplay:true,
//     // autoplaySpeed:2000,
//     className: '!static',
//     useTransform: 'transform-disable',
//     nextArrow: <CarousalArrow classStyle="absolute top-4 right-4"/>,
//     prevArrow: <CarousalArrow classStyle="absolute top-4 right-14 rotate-180"/>,
//     useCss:'disable',
//     draggable: false,
//   };

const SlickCarousalWrapper = ({children,settings}:any) => {
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default SlickCarousalWrapper