import { Link } from "react-router-dom"
import {BLOG_DATA} from "../../utils/helper" 
const Home = () => {
  return (
    <section className="bg-off-orange min-h-screen flex items-center    ">
        <div className="blog-container max-w-292.5 mx-auto">
            <div className="blog-row flex gap-3.75">
                {BLOG_DATA.map((blog, index) => (
                    <Link to={`/blog/${blog.heading.toLowerCase().replaceAll(" ", "-")}`} key={index} className="px-3.75 pt-3.75 pb-7.5 rounded-[10px] bg-white shadow-[0px_1px_4px_0px_#0000001A]">
                        <div>
                            <img width={340} height={225} src={blog.img} alt="news" />
                        </div>
                        <h3 className="py-3.75 font-medium text-xl text-off-black">{blog.heading}</h3>
                        <p className="font-normal text-base text-gray">{blog.para}</p>
                        <button className="font-medium text-xl py-3.25 px-5.75 bg-orange cursor-pointer hover:shadow-[4px_5px_15px_0px_#FF53001A] text-white mt-6.25 rounded-[5px]">{blog.btn}</button>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Home
