import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
        <ul className='flex flex-row text-xl font-bold gap-8 p-5 pr-6 justify-start bg-[#d0d1e6]'>
            <li className=' hover:text-gray-500'><Link href="/">Home</Link></li>  
            <li className=' hover:text-gray-500'><Link href="/about">About</Link></li>
            <li className=' hover:text-gray-500'><Link href="/contact">Contact</Link></li>
        

        </ul>
    </div>
  )
}

export default Navbar