import React from 'react'

export default function Fotter() {
  return (
    <footer className='bg-[#12141e] pt-12'>
     {/* ::::::::::::::::::::;Footer top ::::::::::::::::::: */}
     <div className='container'>
      <div className='sm:flex items-center justify-between md:gap-8'>
        <div className='w-full sm:w-1/2'>
          <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
            Do you want to make beautiful products ?
          </h2>
          <a href="#container">
            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
              <i class="ri-mail-line"></i>Hire me
            </button>
          </a>
        </div>
        <div className='w-full sm:w-1/2'>
          <p className='text-gray-300 leading-7 mt-4 sm:mt-0'> 
          Assalamualikum
I am Tajul Islam "Towsif"
I am hafezul queran "Hafez does not approve 
of formal religion for people. Hafez believes in a God
 that manifests in every aspect of life. We’ve rounded up the best Rumi Hafiz 
 quotes about identity and religion to give you a peek into the poet’s fearless idea of God for people."


          </p>
           <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
            <span className='text-white'>Follow me:</span>
            <span>
                  <a href="https://www.youtube.com/watch?v=FjBJJepT6Ts" target='_blank' className='text-white text-[18px] font-[600]'>
                  <i class="ri-youtube-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.facebook.com/Towsifaslam/" target='_blank' className='text-white text-[18px] font-[600]'>
                  <i class="ri-facebook-line"></i>
                  </a>
                </span>
                <span>
                  <a href="mailto:max.towsifaslamctg143@gmail.com?body=My custom mail body" target='_blank' className='text-white text-[18px] font-[600]'>
                  <i class="ri-mail-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://github.com/towsifaslam" target='_blank' className='text-white text-[18px] font-[600]'>
                  <i class="ri-github-fill"></i>
                  </a>
                </span>

           </div>
        </div>
      </div>
     {/* ::::::::::::::::::::;Footer end ::::::::::::::::::: */}
      {/* ::::::::::::::::::: footter top ::::::::::::::: */}
      <div>
        <ul className='flex items-center gap-10 mt-10 justify-center'>
          <li><a href="#about" className='text-gray-400 font-[600] '>
             About
            </a></li>
            <li><a href="#service" className='text-gray-400 font-[600] '>
             Service
            </a></li>
            <li><a href="#portfolio" className='text-gray-400 font-[600] '>
             Portfolio
            </a></li>
            <li><a href="#contact" className='text-gray-400 font-[600] '>
             Contact
            </a></li>
        </ul>
      </div>
      {/* ::::::::::::::::::: footter top end::::::::::::::: */}
       {/* ::::::::::::::::::::: footer bottom ::::::::::::::;
        */}

     </div>
    </footer>
  )
}
