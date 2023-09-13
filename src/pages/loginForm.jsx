import React, { useState } from "react"
import { TextField } from "../form/textField"
import gitlab from "../image/gitlab.png"

export const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "" })

    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }))
    }

    return (
        <div className="flex justify-center items-center h-screen mt-10">
            <div className="flex-col justify-center items-center text-center ">
                <div className="w-32 h-32 mb-4 ml-32 mr-36 mt-5"><img src={gitlab} alt="Black logo" /></div>
                <div className="text-center rounded-tr-lg rounded-br-lg border border-black h-96 bg-white p-4 rounded shadow-md mb-5">
                    <h2 className="font-bold text-2xl my-5">Login</h2>
                    <form className=" flex-col px-5">
                        <TextField
                            label="Введите Email"
                            name="email"
                            type="text"
                            value={data.email}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Введите пароль"
                            name="password"
                            type="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </form>
                    <div className="text-end">
                        <button type="button" className="text-xs font-thin mr-5">Forgot password?</button>
                        <button type="button" className=" bg-gradient rounded-full text-white w-full mt-5 h-10">Войти</button>
                    </div>
                    <div>
                        <p className="mt-5">Or sign In using</p>
                    </div>
                </div>
            </div>
        </div>
    )
}