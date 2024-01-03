import React from 'react'

//it takes message to display and onClick event which is fitted on OK button
export default function Notification({ message, onClick }) {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen z-50 backdrop-blur-2xl flex justify-center items-center  text-white '>
            <div className='h-[40%] w-[70%] md:w-[40%] bg-blue-500 flex flex-col justify-center items-center gap-16 rounded-3xl p-4'>
                <p className='font-extrabold text-3xl text-center'>{message}</p>
                <button className='px-3 py-2 bg-purple-800 rounded-2xl'
                    onClick={onClick}
                >
                    OK
                </button>
            </div>

        </div>
    )
}
