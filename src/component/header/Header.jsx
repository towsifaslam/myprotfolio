import React,{useEffect, useRef} from 'react'

export default function Header() {
  const headRef = useRef(null);
  const menuRef = useRef(null)
  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
        headRef.current.classList.add('sticky_header')
      }
      else{
        headRef.current.classList.remove('sticky_header')
      }
    }
 
    )
  }
  useEffect(()=>{
    stickyHeaderFunc()
    return window.removeEventListener('scroll',stickyHeaderFunc)
  },[])
  const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
  return (
    <header ref={headRef} className=' bg-white w-full h-[80px] leading-[80px] flex items-center'>
      <div className='container'>
        <div className=' flex items-center justify-between'
      >
          {/* ::::::::::::::::::::logo::::::::::: */}
          <div className='flex items-center gap-[10px]'>
            <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>T</span>
             <div className='leading-[20px]'>
              <h2 className='text-xl text-smallTextColor font-[700]'>Towsif</h2>
              <p className=' text-smallTextColor text-[14px] font-[500]'>Aslam</p>
             </div>
          </div>
          {/* ::::::::::::::::::::logo end::::::::::: */}
          {/* ::::::::::::::::::::menu start :::::::::::: */}
           <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className='hidden md:flex items-center gap-10'>
              <li><a className=' text-smallTextColor font-[600]' href="#about">About</a></li>
              <li><a className=' text-smallTextColor font-[600]' href="#service">Service</a></li>
              <li><a className=' text-smallTextColor font-[600]' href="#portfolio">Portfolio</a></li>
              <li><a className=' text-smallTextColor font-[600]' href="#contact">Conact</a></li>
            </ul>
           </div>
          {/* ::::::::::::::::::::menu end::::::::::: */}
          {/* ::::::::::::::::::::menu right::::::::::: */}
          <div className='flex items-center gap-4'>
            <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'>
           <a href="#contact" > <i class="ri-send-plane-line"></i> Lets's Talk</a>
            </button>
            <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
            <i class="ri-menu-line"></i>
            </span>

          </div>
          {/* ::::::::::::::::::::menu end::::::::::: */}




        </div></div>
    </header>
  )
}
