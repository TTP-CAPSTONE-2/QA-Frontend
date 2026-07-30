function QuestionCard({ question, onVote }) {
    const handleVote = async (event, delta) => {
        event.preventDefault();
        event.stopPropagation();

        try {
            const endpoint = delta > 0 ? "upvote" : "downvote";
            const response = await fetch(`http://localhost:3000/api/questions/${question.id}/${endpoint}`, {
                method: "PATCH",
            });

            if (!response.ok) {
                throw new Error(`Unable to ${endpoint} question`);
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
            <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
                <button type="button" onClick={(event) => handleVote(event, 1)}>
                    ▲ Upvote
                </button>
                <button type="button" onClick={(event) => handleVote(event, -1)}>
                    ▼ Downvote
                </button>
                <span>Votes: {question.votes || 0}</span>
            </div>
        </div>
    );
}

export default QuestionCard;