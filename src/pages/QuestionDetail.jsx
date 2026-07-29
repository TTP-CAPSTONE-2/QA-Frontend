import { useEffect, useState } from "react"
import QuestionView from "../components/QuestionView"
import { useParams } from "react-router-dom"

function QuestionDetail() {
    const [question, setQuestion] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    
    useEffect(() => {
        const fetchQuestion = async () => {
            const response = await fetch(`http:localhost:3000/api/questions/${id}`)
            const data = await response.json()

            setQuestion(data)
            setIsLoading(false)
        }
        fetchQuestion()
    }, [id])
    if(isLoading) return <p>Loading....</p>
    if(!question) return <p>Question not found</p>

    return (
        <QuestionView question={question}/>
    )
}

export default QuestionDetail