function QuestionCard({ question, onVote }) {
    const handleUpvote = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/questions/${question.id}/upvote`, {
                method: "PATCH",
            });

            if (!response.ok) {
                throw new Error("Unable to upvote question");
            }

            const updatedQuestion = await response.json();
            onVote(updatedQuestion);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="card">
            <h3>{question.title}</h3>
            <h4>{question.body}</h4>
            <button onClick={handleUpvote} style={{ marginTop: 12 }}>
                ▲ Upvote ({question.votes || 0})
            </button>
        </div>
    );
}

export default QuestionCard;