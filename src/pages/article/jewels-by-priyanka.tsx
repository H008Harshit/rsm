import QuesAns from "@/components/common/QuesAns";

const Article = () => {
  return (
    <div className="desktop:mx-[10%] mx-4 my-[100px]">
      <div className=" flex-col desktop:flex-row flex justify-around  items-center">
        <img
          src="https://magicka.in/wp-content/uploads/2023/01/11051973_821694974581405_6632120897211123443_o-e1672900031218-600x446.jpg"
          alt="img"
          className="desktop:w-[600px] w-auto h-auto desktop:h-[350px]"
        />
        <div className="text-DH1 my-4 desktop:my-0 text-center">
          Top 50 Brand <br />
          featuring
          <br /> Jewels by Priyanka
        </div>
      </div>
      <div>
        <QuesAns
          ques="Hi Priyanka, tell us about your journey as an entrepreneur and about your brand - Jewels by Priyanka."
          ans="Born in a family of jewellers, I had an artist’s mind since childhood. I completed jewellery designing and manufacturing from Iigj Delhi; Gemmology from arch Jaipur, diamond grading from GIA. I joined family business in 2008 ,this is our 3rd generation in jewellery, our store is in place since 1942."
        />
        <div className="grid my-6 gap-6 grid-cols-2">
          <img
            className="col-span-2  desktop:col-span-1"
            src="https://magicka.in/wp-content/uploads/2023/01/Jewels-by-Priyanka-1-copy-2048x2048.png"
            alt="img"
          />
          <div className="col-span-2  desktop:col-span-1">
            <QuesAns
              ques="What inspired you to create this brand?"
              ans="When I started traveling I realized how difficult is to carry real jewellery for destination weddings and for short travel trips, thus I started my brand Jewelsbypriyanka – silver and gold plated jewellery loaded with precious n semi-precious stones."
            />
            <QuesAns
              ques="What is the most unique element in your brand?"
              ans="Unique element about my work are my gemstones."
            />
            <QuesAns
              ques="What drives you to attain such precision?"
              ans="Success is what motivates me to do a good job. Knowing the fact that my hard work and perseverance will help me achieve greater professional success is what keeps me going."
            />
          </div>
        </div>
        <QuesAns
          ques="Who is your inspiration?"
          ans="My brothers are my inspiration, I always wanted to be like them honest,  positive and hard working. They are my guru and it’s because of them I have started learning about jewellery at the age 17."
        />
        <div className="grid my-6 gap-6 grid-cols-2">
          <div className="col-span-2  desktop:col-span-1">
            <QuesAns
              ques="What is your favorite quote?"
              ans="“Success usually comes to them who are too busy to be looking for it.”"
            />
            <QuesAns
              ques="Tell us about your greatest achievement."
              ans="My greatest achievement till now is my own brand Jewels by Priyanka."
            />
            <QuesAns
              ques="How do you define success?"
              ans="The definition of success to me means doing something that makes you happy, and something that you enjoy. It also means often not taking the path of least resistance, but opening yourself to new challenges that enable you to grow and develop mentally, spiritually and professionally."
            />
          </div>
          <img
            className="col-span-2 desktop:col-span-1"
            src="https://magicka.in/wp-content/uploads/2023/01/Jewels-by-Priyanka-2-2048x2048.png"
            alt="img"
          />
        </div>
        <QuesAns
          ques="Where do you see yourself in the next 5 years?"
          ans="There is only one world , the world pressing against you at this minute. There is only one minute in which you are alive, this minute- here and now. The only way to live is by accepting each minute as an unrepeatable Miracle. So I just want to well live today with every tomorrow a vision of hope."
        />
        <div className="grid my-6 gap-6 grid-cols-2">
          <img
            className="col-span-2 desktop:col-span-1"
            src="https://magicka.in/wp-content/uploads/2023/01/Jewels-by-Priyanka-3-2048x2048.png"
            alt="img"
          />
          <div className="col-span-2  desktop:col-span-1">
            <QuesAns
              ques="What is the most important advice that you can give to women?"
              ans="Giving one’s life means choosing from the multitude of possibilities a certain goal and then patiently working towards it ,even when you are tired or puzzled or afraid. Don’t we do that for our children. Similarly you have to love your work not just it’s high points but its day-in-day-out efforts It means sticking to one’s own purpose through a thousand storms and fires from within as well as from without and experimenting, failing, trying again until both the purpose and oneself are refined and ready. Women have a reservoir of courage, energy and wisdom of which we seldom use hundred percent. If we don’t short circuit ourselves emotionally then we are millionaires."
            />
            <QuesAns
              ques="Where can one reach out to you? Please provide your contact details."
              ans="Facebook: jewelsbypriyanka, Instagram: jewelsbypriyanka"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
