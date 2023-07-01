import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import faq from "../../../assets/FAQs.gif"
const Question = () => {
    const [questions, setquestions] = useState([]);
    useEffect(() => {
        fetch('question.json')
            .then(res => res.json())
            .then(data => {
                setquestions(data)
            })
    }, [])
    return (
        <div className="mx-auto mt-16">
            <h2 className="text-4xl font-bold text-center  text-gray-600 mb-16">Frequently Asked Questions</h2>
            {/* <p className="max-w-xl border-l-8 border-r-8 border-orange-500 mx-auto mb-14 text-justify px-2"> Explore the most commonly asked questions about Zoo Land. Find answers regarding our toy offerings, returns and exchanges, toy safety to enhance your shopping experience.
            </p> */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                <img className="w-1/2 mx-auto" src={faq} alt="" />
                <div className="my-8 w-3/4 ">

                    {
                        questions.map(ques => <ReviewCard
                            key={ques.id}
                            ques={ques}
                        ></ReviewCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Question;