import '../App.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


import Array from '../components/array'
import Form from '../components/form'


function Services() {

 
  


  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      
      
      <div id='heropic' className='hidden lg:flex md:flex'>
        <div className='bg-black h-[408px] w-screen bg-opacity-50 '>
          <div className='text-white py-24 flex flex-col items-center justify-center text-center gap-4'>
            <p className='text-[60px] font-semibold'>Our Services</p>
            <p className='w-[450px]'>We specialize in helping you build a team of expert developers.</p>
          </div>
        </div>
      </div>

                          {/*responsive Hero page */}
      <div id='herosmall' className='md:hidden lg:hidden' >
        <div className='bg-black h-full w-screen bg-opacity-50 rounded-bl-[100px]'>
          <div className='text-white py-10 lg:py-24 flex flex-col items-center justify-center text-center lg:gap-4'>
            <p className='text-[30px] md:text-[60px] lg:text-[60px] font-semibold'>Our Services</p>
            <p className='w-[450px] font-thin lg:font-normal md:font-normal p-4'>We specialize in helping you build a team of expert developers.</p>
          </div>
        </div>
      </div>

                          {/*get Quality */}

      <div className=' px-4 lg:px-20 py-10 lg:py-24 flex flex-col gap-20'>
        <div className='text-[#16205F] lg:w-[600px] flex flex-col gap-4'>
          <p className='text-[30px] lg:text-[46px]  font-semibold'>Get Quality and Efficient Website and Applications.</p>
          <p className=' w-[70%]'>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
        </div>
       {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 '> 
        
        </div>
 */}
      <Array/>
      </div>

                                        {/*Contact form */}


      <Form/>
      <Footer/>
    </div>
  )
}

export default Services