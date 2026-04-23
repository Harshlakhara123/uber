import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate();
    const { user , setUser } = React.useContext(UserDataContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, data);

        if(response.status == 200){
            const data = response.data;

            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home')
        }
        setEmail('')
        setPassword('')
    }
    return (
        <div className='mx-[20px] flex flex-col justify-between h-screen'>
            <div>
                <div>
                    <img className='w-[25%] mt-5 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h3 className='text-3xl font-semibold mb-2'>What's your email?</h3>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-xl font-bold placeholder:text-lg' type="email" placeholder='Email' />
                        <h3 className='text-3xl font-semibold mb-2'>Enter Password</h3>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-xl font-bold placeholder:text-lg' type="password" placeholder='Password' />
                        <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-2 w-full text-xl'>Login</button>
                    </form>
                </div>
                <p>Don't have an account?<Link to='/signup'>  Create new account</Link></p>
            </div>
            <Link to='/captain-login' className='bg-[#10b461] flex justify-center items-center text-white font-semibold text-xl mb-7 rounded px-4 py-2 w-full text-xl placeholder:text-base'>Continue as Captain</Link>
        </div>
    )
}

export default UserLogin