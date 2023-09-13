import React, { useState } from "react";
import { SideBar } from "../sideBar/sideBar";

export const WorkSpace = () => {
    const [sideBarActive, setSideBarActive] = useState(true)
    return (
        <>
            <SideBar
            active={sideBarActive}
            setActive={setSideBarActive}
            />
        </>
    )
}