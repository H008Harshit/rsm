const QuesAns = ({ques,ans}) => {
    return (
        <div className="mt-4 font-['Open_Sans'] ">
            <div className="text-[28px] text-black">
                {ques}
            </div>
            <div className="text-[20px] mt-2 text-justify text-[#2f2f2fb9]">
                {ans}
            </div>
        </div>
    )
}

export default QuesAns;