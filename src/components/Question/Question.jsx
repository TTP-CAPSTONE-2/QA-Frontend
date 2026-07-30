import UserHeader from "../UserHeader/UserHeader"
import ActionBar from "../ActionBar/ActionBar"
import './Question.css'

function Question ({question}) {

    // Sample dummy user- will change 
    const user = {
        name: "Yeffry Fermin",
        createdAt: "2026-07-29T16:24:00.209Z"
    }

    return (
        <div className="question-container">
            <UserHeader name={user.name} timeAgo={user.createdAt}/>
            <h3 className="question-title">{question.title}</h3>
            <p className="question-body">{question.body}</p>
            <ActionBar answerCount={question.answers.length}/>
        </div>
    )
}

export default Question