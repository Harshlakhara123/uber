import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CaptainSignup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleType, setVehicleType] = useState('car')
    const [captainData, setCaptainData] = useState({})
    const handleSubmit = async (e) => {
        e.preventDefault()
        const captainData = {
            email: email,
            password: password,
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            vehicle: {
                color: vehicleColor,
                capacity: Number(vehicleCapacity),
                plate: vehiclePlate,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if(response.status === 201){
            const data = response.data;
            setCaptainData(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleColor('')
        setVehicleCapacity('')
        setVehiclePlate('')
        setVehicleType('car')
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
                        <h3 className='text-3xl font-semibold mb-2'>Vehicle Information</h3>
                        <div className='flex flex-col gap-4 mb-7'>
                            <input
                                required
                                value={vehicleColor}
                                onChange={(e) => setVehicleColor(e.target.value)}
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-xl font-bold placeholder:text-lg'
                                type='text'
                                placeholder='Vehicle Color' />
                            <input
                                required
                                value={vehicleCapacity}
                                onChange={(e) => setVehicleCapacity(e.target.value)}
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-xl font-bold placeholder:text-lg'
                                type='number'
                                placeholder='Vehicle Capacity' />
                            <input
                                required
                                value={vehiclePlate}
                                onChange={(e) => setVehiclePlate(e.target.value)}
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-xl font-bold placeholder:text-lg'
                                type='text'
                                placeholder='Vehicle Number Plate' />
                            <select
                                required
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                                className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-xl font-bold'>
                                <option value='car'>Car</option>
                                <option value='motorcycle'>Motorcycle</option>
                                <option value='auto'>Auto</option>
                            </select>
                        </div>
                        <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-2 w-full text-xl'>Create account</button>
                    </form>
                </div>
                <p>Already have an account?<Link to='/captain-login'>  Login</Link></p>
            </div>
            <Link to='/login' className='bg-[#10b461] flex justify-center items-center text-white font-semibold text-xl mb-7 rounded px-4 py-2 w-full text-xl placeholder:text-base'>Continue as user</Link>
        </div>
    )
}

export default CaptainSignup