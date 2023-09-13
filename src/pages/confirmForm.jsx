import React, { useState } from "react"
import { TextField } from "../form/textField"
import gitlab from "../image/gitlab.png"
import { useNavigate } from "react-router-dom"


export const ConfirmForm = () => {
    const [data, setData] = useState({ code: "" })
    const navigate = useNavigate()

    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }))
    }

    return (
        <div className="flex justify-center items-center text-center mb-10">
            <div className="flex-col items-center ">
                <div className="w-32 h-32 mb-4 ml-32"><img src={gitlab} alt="Black logo" /></div>
                <div className="flex-col items-center justify-center border border-black w-96" >
                    <h2 className="mt-5 mb-4 font-bold">Подтверждение <br /> регистрации</h2>
                    <p className="font-thin text-gray-500">На вашу почту было отправленно сообщение с кодом, который необходимо ввести в форму ниже</p>
                    <form className="px-9" action="">
                        <TextField
                            label="Полученный код"
                            name="code"
                            type="text"
                            value={data.code}
                            onChange={handleChange}
                        />
                    </form>
                    <div className="text-left pl-9">
                        <span className=" font-thin">Пример кода: 59420</span>
                    </div>
                    <div className="flex justify-around mb-5">
                        <button className="bg-gradient rounded-full text-white w-32 mt-5 h-10" onClick={() => navigate("/cabinet")}>Продолжить</button>
                        <button className="bg-blue-500 rounded-full text-white w-32 mt-5 h-10" onClick={() => navigate("/register")}>Назад</button>
                    </div>
                </div>
            </div>
        </div>

    )
}