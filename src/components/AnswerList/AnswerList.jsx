import ActionBar from '../ActionBar/ActionBar'
import UserHeader from '../UserHeader/UserHeader'
import './AnswerList.css'
function AnswerList({ answers}) {
    return (
        <div className="answers-section">
            <h4>{answers.length} Answers</h4>
            {/* Here we can do a filter later */}
            {answers.map((answer) => {
                return (
                    <div className="answer-card" key={answer.id}>
                        <UserHeader name={answer.user.name} timeAgo={answer.createdAt}/>
                        <p className='answer-content'>{answer.content}</p>
                        <ActionBar answerCount={answers.length}/>
                    </div>
                )
            })}
        </div>
    )
}

export default AnswerList