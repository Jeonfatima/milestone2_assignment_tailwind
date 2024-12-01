import React from 'react'

const About = () => {
  return (
    <div>
        <h1 className='text-center h-[50%] m-4 font-bold text-4xl text-green-800'>
        Welcome To About Page
        </h1>
        <div id='about' className=' flex justify-center max-w-[80%] p-5  gap-2 pl-[20%]  text-white sm:grid-cols-1'>
            <div  className='bg-[#74a06c] border-4 text-2xl rounded-xl  w-[10%] flex items-center justify-center h-20'>A</div>
            <div className='bg-[#a1d197] border-4 text-2xl rounded-xl  w-[10%] flex items-center justify-center h-20'>B</div>
            <div className='bg-[#82be77] border-4 text-2xl rounded-xl  w-[10%] flex items-center justify-center h-20'>O</div>
            <div className='bg-[#96c28a] border-4 text-2xl rounded-xl  w-[10%] flex items-center justify-center h-20'>U</div>
            <div className='bg-[#82bf78] border-4 text-2xl rounded-xl  w-[10%] flex items-center justify-center h-20'>T</div>
           
        </div>
    </div>
    
  )
}

export default About