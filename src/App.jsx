import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import './App.css';
import CreateQuestion from './pages/CreateQuestion';
import QuestionDetail from './pages/QuestionDetail';
import LoginForm from './pages/LoginForm/LoginForm';
import RegisterForm from './pages/RegisterForm/RegisterForm';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchUser () {
      const response = await fetch("http://localhost:3000/api/auth/me", {
        credentials: 'include'
      });
      const data = await response.json()
      console.log(data)
      setUser(data)
    }
    fetchUser()
  }, [])
  return (
    <div className='app-container'>
      <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/questions" element={<CreateQuestion />} />
          <Route path="/api/questions/:id" element={<QuestionDetail user={user}/>} />
          <Route path="/api/login" element={<LoginForm />}/>
          <Route path="/api/register" element={<RegisterForm />} />
        </Routes>
    </div>
  );
}

export default App;
