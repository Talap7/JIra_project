import React from "react";
import "./sideBar.css"

export const SideBar = ({ active, setActive, children }) => {
    return <>
        <div className={active ? "sidebar active w-3/12" : "sidebar"} onClick={() => setActive(true)}>
            <button className={active ? "button_toggle active" : "button_toggle"}>
                {active
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white" onClick={(e) =>{
                        e.stopPropagation()
                        setActive(false)
                    }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white bg-slate-700 rounded-full p-0" onClick={e => {
                        e.stopPropagation()
                        setActive(true)
                    }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                }
            </button>
            {children}
        </div>
    </>
}