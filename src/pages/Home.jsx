import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { Link } from "react-router-dom";

function Home() {
    const [questions, setQuestions] = useState([]);
    const [loading ,setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await fetch("http://localhost:3000/api/questions");
                const data = await response.json();
                setQuestions(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to get Questions!");
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    //Upvote and Downvote Questions
    const handleVote = (updatedQuestion) => {
        setQuestions((currentQuestions) =>
            currentQuestions.map((question) =>
                question.id === updatedQuestion.id ? updatedQuestion : question
            )
        );
    };
    //Delete a Question
    const handleDelete = (deletedId) => {
        setQuestions((currentQuestions) =>
            currentQuestions.filter((question) => question.id !== deletedId)
    );
};

    if (loading) {
        return (
            <p style={{ padding: 16 }}>Loading...</p>
        )
    }

    return (
        <>
        <h1>Q&A</h1>
        <h2>Questions</h2>
        <div className="grid">
            {questions.map((question) => (
                <Link 
                to={`/api/questions/${question.id}`}
                key={question.id}
                style={
                    {
                        textDecoration: 'none', 
                        color: 'inherit' 
                    }
                }
                >
                    <QuestionCard 
                    key={question.id} 
                    question={question} 
                    onVote={handleVote} 
                    onDelete={handleDelete}
                    />
                </Link>
                
            ))}
        </div>
    </>
  );
}

export default Home;