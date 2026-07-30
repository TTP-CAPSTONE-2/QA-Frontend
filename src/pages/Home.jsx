import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";

function Home() {
    const [questions, setQuestions] = useState([]);
    const [loading ,setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        async function fetchQuestions() {
            const response = await fetch("http://localhost:3000/api/questions");
            const data = await response.json();
            setQuestions(data);
            setLoading(false);
        };

        fetchQuestions();
    }, []);

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
                <QuestionCard key={question.id} question={question} />
            ))}
        </div>
    </>
  );
}

export default Home;