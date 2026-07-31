import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import './App.css';
import CreateQuestion from './pages/CreateQuestion';
import QuestionDetail from './pages/QuestionDetail';
import LoginForm from './pages/LoginForm/LoginForm';


function App() {
  return (
    <div className='app-container'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/questions" element={<CreateQuestion />} />
          <Route path="/api/questions/:id" element={<QuestionDetail />} />
          <Route path="/api/login" element={<LoginForm />}/>
        </Routes>
    </div>
  );
}

export default App;
