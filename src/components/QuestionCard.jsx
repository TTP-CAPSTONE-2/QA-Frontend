function QuestionCard({ question, onVote, onDelete }) {
    //Function to Upvote or Downvote Quesiton card
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

    //Function to delete question cards
    const handleDelete = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        try {
            const response = await fetch(`http://localhost:3000/api/questions/${question.id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Unable to delete question!");
            };

            if (onDelete) {
                onDelete(question.id);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="question-card">
            <h3>{question.title}</h3>
            <h4>{question.body}</h4>
            <div className="question-card-actions">
                <button type="button" onClick={handleDelete} className="question-card-delete">
                    Delete
                </button>
                <button type="button" onClick={(event) => handleVote(event, 1)} className="question-card-votes">
                    ▲ Upvote
                </button>
                <button type="button" onClick={(event) => handleVote(event, -1)} className="question-card-votes">
                    ▼ Downvote
                </button>
                <span>Votes: {question.votes || 0}</span>
            </div>
        </div>
    );
}

export default QuestionCard;