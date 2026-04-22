import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [captainData, setCaptainData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
            fullName: {
                firstName: firstName,
                lastName: lastName
            }
        }
        setCaptainData(data)
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }
    return (
        <div className='mx-[20px] flex flex-col justify-between h-screen'>
            <div>
                <div>
                    <img className='w-[25%] mt-5 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h3 className='text-3xl font-semibold mb-2'>What's your name?</h3>
                        <div className='flex gap-2'>
                            <input
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-xl font-bold placeholder:text-lg' type="text" placeholder='First Name' />
                            <input
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-xl font-bold placeholder:text-lg' type="text" placeholder='Last Name' />
                        </div>
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
                <p>Already have an account?<Link to='/captain-login'>  Login</Link></p>
            </div>
            <Link to='/login' className='bg-[#10b461] flex justify-center items-center text-white font-semibold text-xl mb-7 rounded px-4 py-2 w-full text-xl placeholder:text-base'>Continue as user</Link>
        </div>
    )
}

export default CaptainSignup