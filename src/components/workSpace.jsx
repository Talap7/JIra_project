import React, { useState } from "react";
import { SideBar } from "../sideBar/sideBar";
import { CanBanDesk } from "./canBanDesk";

export const WorkSpace = () => {
    const [sideBarActive, setSideBarActive] = useState(true)
    
    return (
        <div className="flex">
            <SideBar
                active={sideBarActive}
                setActive={setSideBarActive}
            >
                <div className=" flex flex-col ml-4 text-xs font-thin text-white">
                    <p className="mt-3 font-bold">ttalaibek</p>
                    <hr className="mt-5 mb-4"/>
                    <p className="mb-4">Доски</p>
                    <p className="mb-4" >Участники</p>
                    <p className="mb-4">Настройка рабочего <br/> пространства</p>
                    <p className="mb-4 font-semibold">Режимы просмотра</p>

                </div>
            </SideBar>
            <CanBanDesk/>
        </div>
    )
}