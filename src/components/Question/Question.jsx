import UserHeader from "../UserHeader/UserHeader"
import ActionBar from "../ActionBar/ActionBar"
import './Question.css'

function Question ({ question, onVote, user }) {

    const handleVote = async (event, delta) => {
        event.preventDefault()
        event.stopPropagation()

        try {
            const endpoint = delta > 0 ? "upvote" : "downvote"
            const response = await fetch(`http://localhost:3000/api/questions/${question.id}/${endpoint}`, {
                method: "PATCH",
            })

            if (!response.ok) {
                throw new Error(`Unable to ${endpoint} question`)
            }

            const updatedQuestion = await response.json()
            if (onVote) {
                onVote(updatedQuestion)
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="question-container">
            <UserHeader name={user.name} timeAgo={question.createdAt}/>
            <h3 className="question-title">{question.title}</h3>
            <p className="question-body">{question.body}</p>
            <div className="question-card-actions">
                <button type="button" onClick={(event) => handleVote(event, 1)} className="question-card-votes">
                    ▲ Upvote
                </button>
                <button type="button" onClick={(event) => handleVote(event, -1)} className="question-card-votes">
                    ▼ Downvote
                </button>
                <span className="question-card-votes">Votes: {question.votes || 0}</span>
            </div>
            <ActionBar answerCount={question.answers.length}/>
        </div>
    )
}

export default Question