import { useEffect, useState } from "react";
import { BsCalendar3 } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';

  
const Articles = () => {
    const [articles, setarticles] = useState([]);
    useEffect(() => {
        fetch('articles.json')
            .then(res => res.json())
            .then(data => {
                setarticles(data);
                console.log(data);
            })
    }, [])
    return (
    <div className="mx-auto my-40 ">
          <h2 className="text-4xl font-bold text-center mb-5 text-[#e51f6e]">Our Articles</h2>
      <p className="max-w-2xl  mx-auto mb-9 text-justify px-2"> Explore our collection of articles showcasing thrilling wildlife adventures, dedicated conservation efforts, and intriguing facts about fascinating animals from around the world.
     </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                articles.map(article => <div
                    key={article._id} className="border-2 shadow-xl shadow-[#fad2e2] rounded-xl hover:bg-[#ed629a] hover:text-white">
                    <div className="relative ">
                        <img src={article.image} alt="Article" className="w-full h-[250px] rounded-xl p-1" />

                        <div className="absolute bottom-0  transform bg-gray-800 grid grid-cols-3 gap-4 px-3 py-2 ml-1">
                            <div className="flex items-center justify-center gap-4">
                                <BsCalendar3 className="text-white" />
                                <span className="text-white   text-sm font-bold">
                                    {article.date}
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <AiOutlineEye className="text-white" />
                                <span className="text-white   text-sm font-bold">
                                    {article.totalSee}
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <BiCommentDetail className="text-white" />
                                <span className="text-white   text-sm font-bold">
                                    {article.totalComments}
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="px-3 py-4">
                        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                        <p className=" mb-6"> {
                            article.description.length < 100 ?
                                article.description
                                :
                                article.description.slice(0, 100) + "..."
                        }
                        </p>


                    </div>
                </div>)}

        </div>
    </div>
    );
};

export default Articles;