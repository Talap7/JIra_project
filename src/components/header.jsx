import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import logo from "../image/logo.png"

export const Header = () => {
    const navigate = useNavigate()
    

    return (
        <div className="w-full bg-gradient font-thin text-white mb-9">
            <header className='flex justify-between items-center h-9 px-5'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="logo" className="w-8 h-8" onClick={() => navigate("/")}/>
                    <nav className='ml-20'>
                        <ul className='flex'>
                            <li className='ml-4'>Решения</li>
                            <li className='ml-4'>Новости</li>
                            <li className='ml-4'>Цены</li>
                            <li className='ml-4'>О компании</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button className='mr-5' onClick={() => navigate("/login")}>Войти</button>
                    <button className='transition ease-in-out delay-150 text-white hover:-translate-y-1' onClick={() => navigate("/register")}>Воспользоваться бесплатно</button>
                </div>
            </header>
        </div>
    )
}

