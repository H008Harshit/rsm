import SearchIcon from "../../../public/assets/svg/search-icon.svg"
import logo from "../../../public/assets/images/magickalogo.jpeg"
import Link from "next/link"

const Header = () => {
    return (
        <div className="fixed z-60 bg-[#f7f7f7] z-20 w-full flex justify-between top-0 shadow-md py-4 items-center h-[80px] px-[10vw]">
            <div className="h-full">
                <Link href='/'>
                    <img className="h-full" src={logo.src} alt="magicka-logo"/>
                </Link>
            </div>
            <div className="flex gap-8 text-DT2 font-lato justify-between">
                <Link href="https://www.magicka.in" target="_blank">
                    <p>About Us</p>
                </Link>
                <Link href="#contact-us">
                    <p>Contact</p>
                </Link>
            </div>
            {/* <div className="col-start-9 col-span-2">
                <input placeholder="Search" className="w-full bg-[#f7f8f9] flex items-center rounded-full h-[40px] px-4"/>
                    <img src={SearchIcon.src} alt="search-icon"/>
                    <span>Search</span>
            </div> */}
        </div>    
    )
}

export default Header