import {useRef} from 'react'
import React from 'react'
import logo from '../assets/logo.png'
import {LuMenuSquare} from 'react-icons/lu'
import {FaRegWindowClose} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar() {

    const menuRef = useRef(null);
    const closeRef = useRef(null);
    const listRef = useRef(null);
    const cont = useRef(null)


    const menuOpen = () => {
        
        menuRef.current.style.display = 'none'
        closeRef.current.style.display = 'block'
        listRef.current.style.display = 'flex'
        cont.current.style.position = 'fixed'
    };

    function menuClose  () {
         closeRef.current.style.display = 'none'
         menuRef.current.style.display = 'block'
        listRef.current.style.display = 'none'
        cont.current.style.position = 'relative'

    }

  return (
    <div ref={cont} className='w-screen  relative z-20'>
        <div className='flex justify-between bg-white items-center py-4 px-4 lg:px-24 '>
            <div >
                <img src={logo} alt="" className='w-[80px]' />
            </div>

            <div className='hidden lg:flex'>
                <ul className=' flex gap-12 text-[18px] font-semibold '>
                   <Link to={'/'}> <li className='hover:text-[#3A0879] cursor-pointer'>Home</li></Link>
                    <Link to={'/team'}><li className='hover:text-[#3A0879] cursor-pointer'>Team</li></Link>
                    <Link to={'/services'}> <li className='hover:text-[#3A0879] cursor-pointer'>Services</li></Link>
                    <Link to={'/technologies'}> <li className='hover:text-[#3A0879] cursor-pointer'>Technologies</li></Link>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Contact Us</li>
                </ul>
            </div>

            <div className='hidden lg:flex'>
                <button className='border-[2px] w-[150px] h-[35px] border-[#3A0879] rounded-md text-[#3A0879] font-semibold'>Sign In</button>
            </div>
            <div ref={menuRef} onClick={menuOpen} className='flex lg:hidden'>
                <LuMenuSquare size={40} className='text-[#3A0879]'/>
            </div>
            <div  ref={closeRef} onClick={menuClose} className='hidden relative'>
                <FaRegWindowClose size={35} className='text-[#3A0879] fixed right-4 top-9 z-50 ' />
            </div>
            

        </div>
        <div ref={listRef} className='hidden'>
                <ul className=' flex flex-col items-center w-[100%] h-screen bg-white gap-14 py-8 fixed z-50'>
                <Link to={'/'}> <li className='hover:text-[#3A0879] cursor-pointer'>Home</li></Link>
                <Link to={'/team'}><li className='hover:text-[#3A0879] cursor-pointer'>Team</li></Link>
                    <Link to={'/services'}> <li className='hover:text-[#3A0879] cursor-pointer'>Services</li></Link>
                    <Link to={'/technologies'}> <li className='hover:text-[#3A0879] cursor-pointer'>Technologies</li></Link>
                    <li className='hover:text-[#3A0879] cursor-pointer'>Contact Us</li>
                    <li className='text-center py-1 border-[2px] w-[150px] h-[35px] border-[#3A0879] rounded-md text-[#3A0879] font-semibold'>Sign In</li>

                </ul>
            </div>
    </div>
  )
}

export default Navbar