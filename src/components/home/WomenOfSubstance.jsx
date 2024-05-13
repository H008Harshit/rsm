import Link from "next/link";

const WomenOfSubstance = () => {
    return (
        <div className="z-10 relative desktop:px-[10%] desktop:text-white px-4 py-[4%]">
            <div className="text-center text-[2.25rem] mb-8 font-semibold">
                Women Of Substance
            </div>
            <div className="flex flex-col desktop:flex-row items-center desktop:justify-evenly gap-2">
                <Link href="/article/jewels-by-priyanka">
                    <div className="w-[276px] desktop:border-none desktop:pb-0 desktop:mb-0 border-b-[1px] border-grey_light pb-6 mb-6 text-center">
                        <img className="w-[276px] h-[276px] rounded-tl-[25px] rounded-br-[25px]" src="https://magicka.in/wp-content/uploads/2023/01/11051973_821694974581405_6632120897211123443_o-e1672900031218-600x446.jpg" alt="img" />
                        <div className="mt-6 text-[1.5rem] font-bold">
                            <div>Jewels</div>
                            <div className="  font-normal text-DT2">by <br/> Priyanka Maglani</div>
                        </div>
                    </div>
                </Link>
                <Link href="/article/nazaakat-chic">
                    <div className="w-[276px] text-center">
                        <img className="w-[276px] h-[276px] rounded-tl-[25px] rounded-br-[25px]" src="https://magicka.in/wp-content/uploads/2023/01/Blue-Logo-Nazaakat-Chic-600x450.jpg" alt="img" />
                        <div className="mt-6 text-[1.5rem] font-bold">
                            <div>Nazaakat Chic</div>
                            <div className="  font-normal text-DT2">by <br/> Nita Sahney</div>
                        </div>
                    </div>
                </Link>
                {/* <div className="w-[276px] text-center">
                    <img className="w-[276px] h-[276px] rounded-tl-[25px] rounded-br-[25px]" src="https://magicka.in/wp-content/uploads/2022/06/TB-600x600.jpg" alt="img" />
                    <div className="mt-6 text-[1.5rem] font-bold">
                        <div>Tarjeet Bhasin</div>
                        <div className=" text-gray-500 font-medium">Sculp Edge</div>
                    </div>
                </div>
                <div className="w-[276px] text-center">
                    <img className="w-[276px] h-[276px] rounded-tl-[25px] rounded-br-[25px]" src="https://magicka.in/wp-content/uploads/2022/06/TB-600x600.jpg" alt="img" />
                    <div className="mt-6 text-[1.5rem] font-bold">
                        <div>Tarjeet Bhasin</div>
                        <div className=" text-gray-500 font-medium">Sculp Edge</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default WomenOfSubstance;