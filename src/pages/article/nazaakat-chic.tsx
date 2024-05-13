import QuesAns from "@/components/common/QuesAns";

const NazaakatChic = () => {
  return (
    <div className="desktop:mx-[10%] mx-4 my-[100px]">
      <div className="flex-col desktop:flex-row flex justify-around  items-center">
        <img
          src="https://magicka.in/wp-content/uploads/2023/01/Top-50-Brands-Header-Website-Nita-copy-2048x1219.png"
          alt="img"
          className="desktop:w-[600px] w-auto h-auto desktop:h-[350px]"
        />
        <div className="text-DH1 my-4 desktop:my-0 text-center">
          Top 50 Brand <br />
          featuring
          <br /> Nazaakat Chic
        </div>
      </div>
      <div>
        <QuesAns
          ques="Hi Nita, Tell us about your journey as an entrepreneur and about your brand - Nazaakat Chic."
          ans="I always wanted to have my own venture and in 2015, after being a homemaker for more than two decades, I finally decided to take the plunge and started Nazaakat Chic. We started with just a small Facebook page & 1 vendor, with only my friends & family as customers. Since then we have grown to become a well-known online brand with a huge catalog, multiple vendors and a loyal global customer base. Nazaakat Chic as a brand brings custom sourced & handcrafted products from skilled artisans from all corners of India. We envelope you in a riot of colours, patterns & prints when you experience our much admired pieces. Whether you’re looking for an outfit to wear to work everyday or to deck up for a big fat Indian Wedding, we have got you covered."
        />
        <div className="grid my-6 gap-6 grid-cols-2">
          <img
            className="col-span-2 desktop:col-span-1"
            src="https://magicka.in/wp-content/uploads/2023/01/Nazaakat-2-copy-2048x2048.png"
            alt="img"
          />
          <div className="col-span-2  desktop:col-span-1">
            <QuesAns
              ques="What inspired you to create this brand?"
              ans="I have always had a flair for the latest fashion trends & loved creating looks with my daughter whenever we went out. My friends & family always loved my personal brand of style and this gave me the confidence to curate my very own catalog for the world. I wanted to build a brand where I could offer premium, high quality ethic wear at affordable prices for the modern Indian progressive woman."
            />
            <QuesAns
              ques="What is the most unique element in your brand?"
              ans="We offer premium products at very affordable prices with a huge catalog that is updated daily. When you purchase a Nazaakat Chic product, it brings a smile to the face of a “kaarigar” (artisan) working tirelessly on his or her loom to bring you the most traditional & rustic masterpieces, from all corners of India."
            />
          </div>
        </div>
        <QuesAns
          ques="What challenges did you overcome at the beginning of your journey. What drives you to attain such precision?"
          ans="My journey has taught me to balance multiple facets of my business and to thrive in a completely cross-functional environment where I have learned to take care of all functions from Purchasing, Sales and Marketing to Operations, Supply Chain and Finance. To carve a niche for ourselves and survive in a highly competitive environment with already established brands, was no easy task. It took a lot of learning on the job, to get things like, identifying reliable & quality vendors, catalog selection, social media marketing efforts, etc. right.  Seven (7) years and thousands of orders later, we have proudly built an extensive women-wear range appealing to a plethora of customers while making it affordable and ensuring a premium standard of quality with a robust supply chain delivering to both metros and by-lanes of a small town alike."
        />
        <div className="grid my-6 gap-6 grid-cols-2">
          <div className="col-span-2  desktop:col-span-1">
            <QuesAns
              ques="Share your biggest achievement till now?"
              ans="I have built a trusted & reputable brand with a strong online presence completely on my own. Nazaakat Chic not only provides quality products but also a personalized & ever-so-warm customer experience. Customer satisfaction is at the heart of everything we do here at Nazaakat Chic. In a short period of time, we have built a loyal customer-base pan India along with a sizable global customer-base spanning across geographies like America, Canada, Australia, Dubai, etc."
            />
            <QuesAns
              ques="How do you define success?"
              ans="Success is waking up every morning and welcoming new challenges with the belief that you can overcome them. Success is going to bed every night with the belief that you have lived your day to the fullest."
            />
          </div>
          <img
            className="col-span-2 desktop:col-span-1"
            src="https://magicka.in/wp-content/uploads/2023/01/Nazaakat-1-copy-2048x2048.png"
            alt="img"
          />
        </div>
        <QuesAns
          ques="What is the most important advice that you can give to women?"
          ans="Aspire to be anyone that you want to be, without knowing any boundaries. Your potential is limitless provided that you set it free. Age is just a number, you are never too young or too old to be the captain of your own ship."
        />
        <div className="grid my-6 gap-6 grid-cols-2">
          <img
            className="col-span-2 desktop:col-span-1"
            src="https://magicka.in/wp-content/uploads/2023/01/Nazaakat-3-copy-2048x2048.png"
            alt="img"
          />
          <div className="col-span-2  desktop:col-span-1">
            <QuesAns
              ques="What is the most important advice that you can give to women?"
              ans="Aspire to be anyone that you want to be, without knowing any boundaries. Your potential is limitless provided that you set it free. Age is just a number, you are never too young or too old to be the captain of your own ship."
            />
            <QuesAns
              ques="Where can one reach out to you? Please provide your contact details."
              ans="Nita Sahney
              Email address: namaste@nazaakatchic.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NazaakatChic;
