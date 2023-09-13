import React from "react";
import "./sideBar.css"

export const SideBar = ({active, setActive, children}) => {
    return <>
        <div className={active ? "sidebar active" : "sidebar"}>
            {children}
        </div>
    </>
}