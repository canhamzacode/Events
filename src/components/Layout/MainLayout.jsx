import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar"
import { useState } from "react"


const MainLayout = ({title, description}) => {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <div className="w-full h-screen grid layout relative">
        {showSideBar && <div className="w-full h-screen absolute z-[1] bg-black/40"/>}
        <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
            <div className="w-full h-screen bg-black/30 p-[20px]">
                <div className="w-full flex items-center justify-between gap-[10px]">
                    <div>
                    <h2 className="text-[28px]">{title} </h2>
                    <p className="text-base md:flex hidden">{description} </p>
                    </div>
                    <div className="w-[250px] md:flex hidden p-[8px] rounded bg-white ">
                    <input type="text" placeholder="Search..." className="outline-none border-none" />
                    </div>
                    <div className="flex items-center gap-[15px]">
                    <div className="w-[50px] h-[50px] bg-slate-700 rounded-[50%]">
                        <img src="" alt="" className="w-full h-full rounded-[50%]" />
                    </div>
                    <button className="md:hidden flex" onClick={() => setShowSideBar(!showSideBar)}>Bar</button>
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout