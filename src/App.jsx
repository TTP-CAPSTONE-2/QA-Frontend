import QuestionCard from './components/QuestionCard';
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

function App() {
  return (
    <div>
      <h1>Q&A</h1>
      <h2>Questions</h2>
      <div className="grid">
        {fakeQuestions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

export default App;
