import { useNavigate } from 'react-router-dom'
import '../LoginForm/LoginForm.css'
import { use, useState } from 'react'

function RegisterForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        const data = await response.json()

        // data will return the name and email(only name is needed) we can redirect to a page where user can login
        // after a message saying you have been sucessfully Registered log in or go back to home page like 2 btns
        // for now we simply redirect to login page after registered
        navigate('/api/login')
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm