import data from "@/data/listing.js"

const detailPage = () => {
  return (
    <div className="mt-[68px] my-12">
      {/* photo gallery */}
      <div className="w-full px-[10%] py-[2%] text-white h-[70vh] bg-[#1D2327] ">
        <div className="grid grid-cols-2">
            <div className=" col-start-1 text-DH1 flex flex-col text-white">
                <span>{data[4]["Brand Name"]}</span>
                <span className="text-DB1">{data[4]["Category"]}</span>
            </div>
            <div className="col-end-4">
                <div className="flex items-center gap-4">
                    <div className="text-DT1 bg-[#73cf42] rounded-md px-4 py-[2px]">
                        5.0 / 5
                    </div>
                    <div className="text-DB1">1 Review</div>
                </div>
            </div>
        </div>
        
      </div>
      {/* decription  */}
      <div className="mx-[10%] mt-[20px] desktop:flex">
        <div id="WalkDetailLeft " className="w-full ">
          <p className="text-DT2 mb-[40px] text-grey_dark">
            {data[4]["Description"]}
          </p>
          {/* FAQ */}
          <p className=" text-DH2 my-4">FAQs</p>
          <div className="collapse collapse-plus border-[1px] my-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-grey_light rounded-none ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-[1px] my-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-grey_light rounded-none ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-[1px] my-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-grey_light rounded-none ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        {/* <div id="WalkDetailRight" className="desktop:w-[40%] pl-[40px]">
          <div className="sticky top-[15%]">
            Since the days of veteran directors like Mehboob Khan and Sohrab
            Modi and actors like Dev Anand and Raj Kapoor, Delhi had a thriving
            culture of single-screen theatres. Single-screen theatres in Delhi
            were part of India’s freedom struggle and sociological phenomenon.
            But sadly, most of these halls have become a thing of the past,
            overrun by an unrelenting multiplex boon.
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default detailPage;
