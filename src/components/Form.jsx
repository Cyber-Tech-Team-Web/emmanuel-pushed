import React from 'react'
import image from '../assets/contact.jpg'


function Form() {
  return (
<div className='flex flex-col lg:flex-row text-[#16205F] items-center pl-4 pr-4 lg:pr-0 lg:pl-20 relative py-10 '>
        <div>
          {/* <Image src='/images/contact.jpg' alt='image' width={900} height={800}/> */}
          <img src={image} alt="image"  className='lg:w-[900px] lg:h-[900px] '/>
        </div>
        <div className='w-[90%] lg:w-[50%] flex flex-col gap-14 bg-white  lg:p-20 rounded-tl-[100px] lg:absolute right-10'>
          <div>
            <p className='pt-4 lg:pt-0 text-[30px] lg:text-[46px] font-semibold leading-tight lg:w-[500px] text-[#16205F]'>Connect with our great team today!</p>
          </div>
          <form action="">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2 pb-5'>
                <label className='font-semibold'>Company</label>
                <input type="text" placeholder='Your company name' required className=' border  lg:w-[300px] h-[48px] p-2 rounded-lg'/>
              </div>
              <div className='flex flex-col gap-2 pb-5'>
                <label className='font-semibold'>Your Name</label>
                <input type="text" placeholder='John Doe' required className=' border lg:w-[300px] h-[48px] p-2 rounded-lg'/>
              </div>
              <div className='flex flex-col gap-2 pb-5'>
                <label className='font-semibold'>Phone Number</label>
                <input type="text" placeholder='ex. +234 8949 444' required className=' border lg:w-[300px] h-[48px] p-2 rounded-lg'/>
              </div>
              <div className='flex flex-col gap-2 pb-5'>
                <label className='font-semibold'>Email</label>
                <input type="email" placeholder='ex. johndoe@gmail.com'required className=' border lg:w-[300px] h-[48px] p-2 rounded-lg'/>
              </div>
              <div className='flex flex-col'>
                <label className='font-semibold' >Project Details</label>
                <textarea placeholder='tell us about your project' required className=' border lg:w-[610px] h-[100px] p-2 rounded-lg'></textarea>
              </div>
            </div>
              <div className='flex   gap-2 py-2'>
                <input type="checkbox" name="checkmail" id="checkmail" />
                <p>By sending this form I confirm that I have read and accept the <strong>Privacy Policy</strong></p>
              </div>
              <button type='submit' className='h-[40px] lg:w-[300px] w-[100%]  bg-gradient-to-r from-[#ED7901] to-[#FCB81F] mt-4 rounded-lg'>Get Consultation</button>
          </form>
        </div>
      </div>  )
}

export default Form