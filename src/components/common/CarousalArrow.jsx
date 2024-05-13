import EnableArrow from "../../../public/assets/svg/enable-arrow.svg";
import DisableArrow from "../../../public/assets/svg/disable-arrow.svg";

const CarousalArrow = ({ onClick, classStyle, style, className, isListingCard = false }) => {
    const disableClass = className?.includes('slick-disabled') ? ' border-grey_light' : ''
    return (
        <div onClick={onClick} id="arrow" className={` ${classStyle} w-[50px] h-[50px] border-2 rounded-full border-grey_dark flex items-center cursor-pointer justify-center  ${isListingCard ? "top-[-5%]" : ""} ${disableClass}`}>
            <img src={disableClass ? DisableArrow.src : EnableArrow.src} alt="forward-icon" className="m-2 z-10 ease-in-out duration-200 cursor-pointer hover:translate-x-1" />
        </div>
    )
}


export default CarousalArrow;