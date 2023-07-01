const ReviewCard = ({ ques }) => {
    const { question, ans} = ques;
    
    return (
        <div  tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100">
            <div className="collapse-title text-xl font-medium">
              <h2>{question}</h2>
            </div>
            <div className="collapse-content">
                <p>{ans}</p>
               
            </div>
        </div>
    );
};

export default ReviewCard;