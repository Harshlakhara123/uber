import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const captain = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

        if(response.status === 200){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }
        setEmail('')
        setPassword('')
    }
    return (
        <div className='mx-[20px] flex flex-col justify-between h-screen'>
            <div>
                <div>
                    <img className='w-[25%] mt-5 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
                <p>Don't have an account?<Link to='/captain-signup'>Create new account</Link></p>
            </div>
            <Link to='/login' className='bg-[#2b066a] flex justify-center items-center text-white font-semibold text-xl mb-7 rounded px-4 py-2 w-full text-xl placeholder:text-base'>Continue as User</Link>
        </div>
    )
}

export default CaptainLogin