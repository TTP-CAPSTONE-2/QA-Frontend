import { useParams } from 'react-router-dom'
import './AnswerForm.css'
import { useState } from 'react'

function AnswerForm ({questionId, setAnswers}) {
    const [answerInput, setAnswerInput] = useState('')
    function handleAnswerSubmit(e) {
        e.preventDefault()
        async function postAnswer() {
            const response = await fetch(`http://localhost:3000/api/questions/${questionId}/answers`, {
                method: "POST",
                body: JSON.stringify({content: answerInput}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()

            // the goal here is to return the answer and paste it on the on the answer list
            setAnswers((prevAnswers) => {
                return [...prevAnswers, data]
            })
        }

        postAnswer()
    }

    return (
        <form action="" className="answer-form"  onSubmit={handleAnswerSubmit}>
            <label htmlFor="answer">You Contribution</label>
            <textarea 
                name="" 
                id="" 
                placeholder="Write your answer here... Be clear and Helpful to the community"
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
            >
            </textarea>
            <button type='submit'>Post Answer</button>
        </form>
    )
}

export default AnswerForm