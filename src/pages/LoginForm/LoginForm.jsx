import { useNavigate } from 'react-router-dom'
import './LoginForm.css'
import { useState } from 'react'

function LoginForm({setAuthUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            }) 
        })
        const data = await response.json()
        setAuthUser(data)
        navigate('/')
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginForm