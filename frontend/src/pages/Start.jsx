import React from 'react'
import { Link } from 'react-router-dom'
const Start = () => {
    return (
        <div className='h-screen w-screen flex flex-col justify-between'>
            <div className='bg-cover md:bg-[url(https://images.unsplash.com/photo-1639349124037-3332f1a5a626?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHViZXJ8ZW58MHwwfDB8fHww)] bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-[85%] bg-red-600'>
                <img className='w-[25%] ml-15 pt-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            </div>
            <div className='h-[15%] bg-white flex flex-col items-center'>
                <h2 className='text-4xl font-bold py-4'>
                    Get started with Uber
                </h2>
                <Link to='/login' className="bg-black text-white rounded-[10px] w-[90%] py-2 font-semibold text-2xl flex justify-center items-center">
                    Continue
                </Link>
            </div>
        </div>
    )
}

export default Start