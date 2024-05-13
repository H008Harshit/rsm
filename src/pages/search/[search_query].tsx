import data from "@/data/listing";
import Link from "next/link";
import { useParams } from "next/navigation";

const Search = () => {
  const search = useParams();
  const searched_query = search?.search_query;

  const searched_data = data.filter((item, i) =>
    item.brand_name.toLowerCase().includes(searched_query)
  );

  console.log(searched_data);

  return (
    <div className="mt-[100px] mb-[30px] mx-[10%]">
      <div className="text-DH1">
        Result for{" "}
        <i>
          <q>{searched_query}</q>
        </i>
      </div>
      <div className="flex flex-wrap gap-10">
        {searched_data.length>0 && searched_data.map((item, i) => (
          <Link href={"/" + item.slug + "/detail"}>
            <div className="hover:underline w-[350px] mt-[20px]">
              <img
                className="object-cover rounded-xl w-full h-[350px]"
                src={item.prod_images[0].src}
              />
              <div className="text-DT2 my-2">{item.brand_name}</div>
            </div>
          </Link>
        ))}
        {searched_data.length===0 && <div className="text-center text-DT2 mt-4 ">No Result Found! <Link className="underline text-blue" href={'/'}>Click here to go Back</Link></div>}
      </div>
    </div>
  );
};

export default Search;
