import { Routes, Route } from 'react-router-dom';
import QuestionCard from './components/QuestionCard';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

const fakeQuestions = [
  {
    id: 1,
    title: 'test',
    body: 'test',
  },
  {
    id: 2,
    title: 'test2',
    body: 'test2',
  },
];

// function HomePage() {
//   return (
//     <>
//       <h1>Q&A</h1>
//       <h2>Questions</h2>
//       <div className="grid">
//         {fakeQuestions.map((question) => (
//           <QuestionCard key={question.id} question={question} />
//         ))}
//       </div>
//     </>
//   );
// }

function CreateQuestionPage() {
  return (
    <div>
      <h1>Create a question</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/questions" element={<CreateQuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;
