import React, { useState } from "react";
import { Modal } from "../modal/modal";
import { TextField } from "../form/textField";
import desk from "../image/desk.png";
import { useNavigate } from "react-router-dom";

export const CabinetContent = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({project: ""})
    const [modalActive, setModalActive] = useState(false)

    const handleChange = ({target}) => {
        setData(prevState => ({...prevState, [target.name] : target.value}))
    }

    return (
        <>
            <div className="flex mx-32">
                <div className=" w-5/12 mr-5">
                    <ul>
                        <li className="text-gray w-11/12 h-6 pl-3 mb-px rounded hover:bg-blue-300 hover:text-blue-800">Доски</li>
                        <li className="text-gray w-11/12 h-6  pl-3 mb-px rounded hover:bg-blue-300 hover:text-blue-800">Шаблоны</li>
                        <li className="text-gray w-11/12 h-6 pl-3 rounded hover:bg-blue-300 hover:text-blue-800">Избранное</li>
                    </ul>
                    <hr className="w-11/12" />
                    <p className="font-thin pl-3">Рабочие пространства</p>
                    <div className="flex w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                        <div className=" font-thin hover:bg-blue-300 hover:text-blue-800 rounded px-8" onClick={() => setModalActive(true)}>Создайте рабочее пространство</div>
                    </div>
                </div>
                <div className=" w-7/12">
                    <h1>Ваши рабочие пространства</h1>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="flex">
                    <div className="w-6/12 mr-5">
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
};
