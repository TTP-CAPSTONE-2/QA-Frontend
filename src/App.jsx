import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import './App.css';
import CreateQuestion from './pages/CreateQuestion';
import QuestionDetail from './pages/QuestionDetail';


function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/questions" element={<CreateQuestion />} />
          <Route path="/api/questions/:id" element={<QuestionDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
