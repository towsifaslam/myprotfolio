import React from 'react'

export default function Contact() {
  return (
    <section id='contact' className='pb-16'>
      <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8"></h2>
      <div className='container'>
        <div className='md:flex justify-between items-center '>
          <div className='w-full md:w-1/2 h-[300px]  sm:h-[450px]'>
          <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4708.768082961307!2d91.82411787620767!3d22.348469679651977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd898b376f82d%3A0x20066e07022e5090!2sKazir%20Dewri%2C%20Chattogram!5e1!3m2!1sen!2sbd!4v1685249382074!5m2!1sen!2sbd" className='w-full h-full border-0 '  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
          </div>
          <div className='w-full mt-8  md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            <form action="" className='w-full  '>
              <div className='mb-5'>
                <input type="text" placeholder='Enter your name' className='w-full p-3 focus::outline-none rounded-[5px]' />
              </div>
              <div className='mb-5'>
                <input type="email" placeholder='Enter your email' className='w-full p-3 focus::outline-none rounded-[5px]' />
              </div>
              <div className='mb-5'>
                <textarea rows={4} type="text" placeholder='What do you wanna to say' className='w-full p-3 focus::outline-none rounded-[5px]' />
              </div>
              <button className='w-full p-3 foucs:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-in duration-150'> Send Message </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}
