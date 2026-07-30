function QuestionCard({ question }) {
    return (
        <div className="card">
            <h3>{question.title}</h3>
            <h4>{question.body}</h4>
        </div>
    );
}

export default QuestionCard;