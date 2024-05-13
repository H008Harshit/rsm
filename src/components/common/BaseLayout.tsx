import Header from "../header/Header.jsx"

const BaseLayout = ({children}:any) => {
    return <div>
        <Header/>
        {children}
        <div className="desktop:px-[10%] px-4 py-[6%] bg-[#E6000033]">
            <div>
                <div className=" grid gap-8 grid-cols-3">
                    <div className="desktop:col-span-1 col-span-3">
                        <img src="https://magicka.in/wp-content/uploads/2022/05/m_PNG_White-2048x819.png" alt="logo-footer" />
                        <p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts they live</p>
                    </div>
                    <div className="desktop:col-span-1 col-span-3 py-4">
                        <p className="text-DT1 text-[#81685B]">Complete Range</p>
                        <div className="flex py-6 px-4 flex-wrap">
                            <div className="w-[50%] h-[50px]">
                                Home
                            </div>
                            <div className="w-[50%] h-[50px]">
                                Home
                            </div>
                            <div className="w-[50%] h-[50px]">
                                Home
                            </div>
                        </div>
                    </div>
                    <div className="desktop:col-span-1 col-span-3 py-4">
                        <p className="text-DT1 text-[#81685B]">Subscribe Now</p>
                        <div className="text-DB1 py-2 ">Don’t miss our future updates!<br/> Get Subscribed Today!</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="bg-[#9800009E] mb-4 px-[10%] py-[2%] text-DB2 justify-between text-white flex items-center">
                <div>
                Copyright © 2022 magicka | Powered by Magicka Growth Partners
                </div>
                <div>
                Main Page Contact Us
                </div>
            </div>
    </div>
}

export default BaseLayout;