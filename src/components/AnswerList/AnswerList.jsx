import './AnswerList.css'
function AnswerList({ answers }) {
    return (
        <div className="answers-section">
            <h4>Answers</h4>

            {answers.map((answer) => {
                return (
                    <div className="answer-card" key={answer.id}>
                        <p>{answer.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AnswerList