import React from 'react'

const Sidebar = ({showSideBar, setShowSideBar}) => {
  return (
    <div className={`w-[80%] md:w-full h-screen bg-slate-100 rounded-tr-[16px] rounded-br-[16px] md:flex md:flex-col ${showSideBar ? "absolute flex flex-col z-[2] " :"hidden"}`}>
      <div className="w-full relative">
        {showSideBar && <button className="p-[15px] bg-slate-200 text-xl absolute right-0" onClick={() => setShowSideBar(!showSideBar)}>x</button>}
      </div>
      <div className="w-full flex flex-col gap-[45px] py-[15px] px-[20px]">
        <div className='w-full max-w-[170px] h-[70px] bg-slate-500 mx-auto rounded'>

        </div>
        <div className='flex flex-col gap-[15px]'>
            <div className='w-full bg-slate-400 p-[15px] rounded-md'>
                Lorem ipsum, dolor 
            </div>
            <div className='w-full bg-slate-400 p-[15px] rounded-md'>
                Lorem ipsum, dolor
            </div>
            <div className='w-full bg-slate-400 p-[15px] rounded-md'>
                Lorem ipsum, dolor 
            </div>
            <div className='w-full bg-slate-400 p-[15px] rounded-md'>
                Lorem ipsum, dolor
            </div>
        </div>
        <div className='absolute bottom-[15px] left-[25px] '>
        <div className='w-full bg-slate-400 p-[15px] rounded-md'>
                Lorem ipsum, dolor
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar