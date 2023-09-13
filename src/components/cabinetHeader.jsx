import React, { useState } from "react";
import logo from "../image/logo.png"
import { useNavigate } from "react-router-dom";
import { Modal } from "../modal/modal";
import { TextField } from "../form/textField";
import desk from "../image/desk.png"

export const CabinetHeader = () => {
    const navigate = useNavigate()
    const [modalActive, setModalActive] = useState(false)
    const [data, setData] = useState({ project: "" })
    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }))
    }
    return (<>
        <div className="w-full bg-slate-700 font-thin text-white mb-5">
            <header className='flex justify-between items-center h-9 px-5'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="logo" className="w-8 h-8" onClick={() => navigate("/")} />
                    <nav className='ml-20'>
                        <ul className='flex'>
                            <li className='ml-4'>Рабочие пространства</li>
                            <li className='ml-4'>Недавние</li>
                            <li className='ml-4'>Избранное</li>
                            <li className='ml-4'>Шаблоны</li>
                            <li className='ml-4 bg-blue-500 px-2 rounded' onClick={() => setModalActive(true)}>Создать</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button className='mr-5'>Учетная запись</button>
                </div>
            </header>
        </div>
        <Modal
            active={modalActive}
            setActive={setModalActive}>
            <div className="flex ">
                <div className="w-6/12 mr-5 text-black">
                    <h3 className="mb-3">Создайте рабочее пространство</h3>
                    <p className="font-thin text-xs">Повысьте производительность: участники команды смогут получать удобный доступ ко всем доскам.</p>
                    <TextField
                        label="Название рабочего пространства"
                        name="project"
                        type="text"
                        value={data.project}
                        onChange={handleChange}
                    />
                    <button type="button" className="mt-20 w-full bg-slate-700 h-10 text-white rounded" onClick={() => navigate("/cabinet/workspace")}>Продолжить</button>
                </div>
                <div className="flex items-center justify-center">
                    <img src={desk} alt="desk" />
                </div>
            </div>
        </Modal>
    </>
    )
}