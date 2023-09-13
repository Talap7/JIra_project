import React from "react";
import { Outlet } from "react-router-dom";
import { CabinetHeader } from "./cabinetHeader";

export const CabinetLayout = () => {
    return (
        <>
            <CabinetHeader />
            <Outlet />
        </>
    )
}