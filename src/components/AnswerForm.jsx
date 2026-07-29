import { useParams } from 'react-router-dom'
import './AnswerForm.css'

function AnswerForm ({qId}) {
    
    function handleAnswerSubmit(e) {
        // here we make a post reques to the answer shit
    }

    return (
        <form action="" onSubmit={handleAnswerSubmit}>
            <label htmlFor="answer">You Contribution</label>
            <textarea name="" id="" placeholder="Write your answer here... Be clear and Helpful to the community"></textarea>
            <button>Post Answer</button>
        </form>
    )
}

export default AnswerForm