function QuestionCard({ question }) {
    return (
        <div className="card">
            <h3>Question: {question.title}</h3>
            <p>{question.body}</p>
        </div>
    );
}

export default QuestionCard;