import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import CreateQuestion from './pages/CreateQuestion';
import QuestionDetail from './pages/QuestionDetail';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/questions" element={<CreateQuestion />} />
        <Route path="/api/questions/:id" element={<QuestionDetail />} />
      </Routes>
    </div>
  );
}

export default App;
