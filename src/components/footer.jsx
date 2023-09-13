import React, { useState } from 'react'
import { TextField } from '../form/textField'
import facebook from "../icons/facebook.png"
import instagram from "../icons/instagram.png"
import linkedin from "../icons/linkedin.png"
import youtube from "../icons/yt.png"

export const Footer = () => {
    const [data, setData] = useState({ email: "", })

    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }))
    }

    return (
        <footer className='flex-col justify-center mt-5'>
            <div className='flex justify-center text-center bg-violet w-full'>
                <div className=' flex-col w-5/12'>
                    <h3 className="mt-9 font-bold text-white">Начните работу с Jira уже сегодня</h3>
                    <TextField
                        label=""
                        name="email"
                        type="text"
                        onChange={handleChange}
                        value={data.value}
                    />
                    <button type='button' className='mb-5 transition ease-in-out delay-150 text-white hover:-translate-y-1'>Зарегистрируйтесь это бесплатно</button>
                </div>
            </div>
            <div  className='flex justify-between items-center text-white bg-indigo-900 mt-0 px-20 h-24'>
                <div className='font-thin'>Политика <br/> конфиденциальности</div>
                <div className='font-thin'>Условия <br/> использования</div>
                <div className='font-thin'>Тех. поддержка</div>
                <div className='flex'>
                    <a href="http://facebook.com"><img className='ml-2 w-7 h-7' src={facebook} alt="facebook" /></a>
                    <a href="http://instagram.com"><img className='ml-2 w-7 h-7' src={instagram} alt="instagram" /></a>
                    <a href="http://linkedin.com"><img className='ml-2 w-7 h-7' src={linkedin} alt="linkedin" /></a>
                    <a href="http://youtube.com"><img className='ml-2 w-7 h-7' src={youtube} alt="youtube" /></a>
                </div>
            </div>
        </footer>
    )
}