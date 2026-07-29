import { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import './App.css'

const fakeQuestion = {
  id: 1,
  title: "test",
  body: "test",
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Q&A</h1>
        <QuestionCard question={fakeQuestion} />
    </>
  );
}

export default App
