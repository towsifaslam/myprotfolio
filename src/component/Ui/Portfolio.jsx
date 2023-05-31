import React,{useEffect , useState} from 'react'
import data from'../../assets/data/portfolioData';
import Model from './Model';
export default function Portfolio() {
  const [nextIems,setNextItems] = useState(6)
  const [portfolio,setPortfolio] = useState(data)
  const [selectTab , setSelectTab] = useState('all')
  const [showModel,setShowModel] = useState(false)
  const[activeId,setActiveId] = useState(null)
  const LoadMoreHandler =()=>{
    setNextItems(prev => prev+3)
  }
  const showModelHandler = id=>{
    setShowModel(true);
    setActiveId(id)
  }
  useEffect(()=>{
    if(selectTab==='all'){
       setPortfolio(data)
    }
    if(selectTab ==='web-design'){
       const filterData = data.filter(item=>item.category==='Web Design')
       setPortfolio(filterData)
    }
    if(selectTab==='ux-design'){
      const filterData = data.filter(item=>item.category==='Ux')
      setPortfolio(filterData)
    }
  },[selectTab])

  return (
    <section id='portfolio'>
      <div className='container'>
        <div className='flex items-center justify-between flex-wrap'>

          <div className='mb-7 sm:mb-0'>
            <h3 className='text-headingColor text-[2rem] font-[700]'>
              My rencent projects
            </h3>
          </div>
          <div className='flex gap-3'>
            <button onClick={()=>setSelectTab('all')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>All</button>
            <button onClick={()=>setSelectTab('web-design')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Web Design</button>
            <button onClick={()=>setSelectTab('ux-design')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Ux Design</button>
            
          </div>
        </div>
         {/* :::::::: Work :::::::::: */}
         <div className='flex items-center gap-4 flex-wrap mt-12'>
          {
            portfolio.slice(0 ,nextIems)?.map((protfolio,index)=>(
              <div kye={index} data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000' className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32%] relative z-[1]'>
                <figure>
                  <img className='rounded-[8px]' src={protfolio.imgUrl} alt="" />
                </figure>
                <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden  group-hover:block'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <button onClick={()=>showModelHandler(protfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 roudned-[30px] font-[500] ease-in duration-200'>See Details</button>
                  </div>
                </div>
              </div>
            ))
          }
         </div>
         <div className='text-center mt-6'>
          <button onClick={LoadMoreHandler} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[9px] font-[500] ease-in duration-200'>Learn more</button>
         </div>
      </div>
      {
        showModel && <Model activeID={activeId} setShowMode={setShowModel}/>
      }
    </section>
  )
}
