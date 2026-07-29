import AnswerList from "./AnswerList"
import AnswerForm from "./AnswerForm"
import "./QuestionView.css"

function QuestionView({ question }) {
    return (
        <>
            <div className="question-container">
                <h3 className="question-title">{question.title}</h3>
                <p className="question-body">{question.body}</p>

            </div>
            <AnswerList answers={question.answers}/>
            <AnswerForm qId={question.id}/>
        </>
        
    )
}

export default QuestionView