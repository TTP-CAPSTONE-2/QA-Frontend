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
const [authUser, setAuthUser] = useState({
    isLoggedIn: false,
    user: null
})
  useEffect(() => {
    async function fetchUser () {
      const response = await fetch("http://localhost:3000/api/auth/me", {
        credentials: 'include'
      });
      const data = await response.json()
      setAuthUser(data)
    }
    fetchUser()
  }, [])
  return (
    <div className='app-container'>
      <Navbar authUser={authUser} setAuthUser={setAuthUser}/>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/questions" element={<CreateQuestion />} />
          <Route path="/api/questions/:id" element={<QuestionDetail user={authUser.user}/>} />
          <Route path="/api/login" element={<LoginForm setAuthUser={setAuthUser}/>}/>
          <Route path="/api/register" element={<RegisterForm />} />
        </Routes>
    </div>
  );
}

export default App;
