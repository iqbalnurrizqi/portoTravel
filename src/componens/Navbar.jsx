import React, {useState} from 'react';
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
            <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer hover:text-sky-500' size={30}/>
            <div className={nav? 'ease-in-out duration-1000 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/80 px-4 py-7 flex-col z-10' :'absolute top-0 h-screeen left-[-100%] ease-in-out duration-1000 z-10' }>
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <li className='font-bold text-3xl p-8 cursor-pointer hover:text-sky-500'>Home</li>
                    <li className='font-bold text-3xl p-8 cursor-pointer hover:text-sky-500'>Destination</li>
                    <li className='font-bold text-3xl p-8 cursor-pointer hover:text-sky-500'>Resarvation</li>
                    <li className='font-bold text-3xl p-8 cursor-pointer hover:text-sky-500'>Amenities</li>
                    <li className='font-bold text-3xl p-8 cursor-pointer hover:text-sky-500'>Rooms</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;