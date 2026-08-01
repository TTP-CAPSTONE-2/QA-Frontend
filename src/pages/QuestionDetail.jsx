import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import AnswerList from "../components/AnswerList/AnswerList"
import AnswerForm from "../components/AnswerForm/AnswerForm"
import Question from "../components/Question/Question"
import './QuestionDetail.css'
function QuestionDetail({isLoggedIn}) {
    const [question, setQuestion] = useState(null)
    const [answers, setAnswers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    const handleVote = (updatedQuestion) => {
        setQuestion((currentQuestion) => {
            if (!currentQuestion) return updatedQuestion

            return {
                ...currentQuestion,
                ...updatedQuestion,
                answers: currentQuestion.answers,
            }
        })
    }

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
        <section className="section-container">
            <Question question={question} onVote={handleVote} user={question.user}/>
            <hr className="divider" />
            <AnswerList answers={answers}/>
            {isLoggedIn ? <AnswerForm questionId={question.id} setAnswers={setAnswers}/> : <p>You Must Log in To answer questions</p>}
        </section>
    )
}

export default QuestionDetail;
