import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import AnswerList from "../components/AnswerList"
import AnswerForm from "../components/AnswerForm"

function QuestionDetail() {
    const [question, setQuestion] = useState(null)
    const [answers, setAnswers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const fetchQuestion = async () => {
            const response = await fetch(`http://localhost:3000/api/questions/${id}`)
            const data = await response.json()
            setQuestion(data)
            setAnswers(data.answers)
            setIsLoading(false)
        }
        fetchQuestion()
    }, [id])
    if(isLoading) return <p>Loading....</p>
    if(!question) return <p>Question not found</p>

    return (
        <>
            <div className="question-container">
                <h3 className="question-title">{question.title}</h3>
                <p className="question-body">{question.body}</p>
            </div>
            <AnswerList answers={answers}/>
            <AnswerForm questionId={question.id} setAnswers={setAnswers}/>
        </>



        // <QuestionView question={question}/>
    )
}

export default QuestionDetail