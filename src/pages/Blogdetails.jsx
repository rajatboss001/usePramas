import { useParams } from "react-router-dom"
import {BLOG_DATA} from "../utils/helper"
const Blogdetails = () => {
    const params = useParams()
    const slug = params.slug
    const DATA = BLOG_DATA.find((item) =>
    item.heading.toLowerCase().replaceAll(" ", "-") === slug )
  return (
    <section>
        <div className="blog container flex flex-col items-center py-30">
            <img width={1000} height={500} className="object-cover" src={DATA.img} alt="" />
        <h1 className="text-custom-4xl font-semibold text-center max-w-[90%] mx-auto mt-5">{DATA.heading}</h1>
        <p className="font-normal text-base mt-2.5">{DATA.para}</p>
        <button className="font-medium text-xl py-3.25 px-5.75 bg-orange cursor-pointer hover:shadow-[4px_5px_15px_0px_#FF53001A] text-white mt-6.25 rounded-[5px]">{DATA.btn}</button>
        </div>
    </section>
  )
}

export default Blogdetails;
