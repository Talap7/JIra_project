import { React, useEffect, useState } from "react"
import { TextField } from "../form/textField"
import { NavLink, useNavigate } from "react-router-dom"
import { validator } from "../utils/validator"
import gitlab from "../image/gitlab.png"


export const RegisterForm = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({ email: "", password: "", password2: "" })
    const [errors, setErrors] = useState({})
    const isValid = Object.keys(errors).length === 0;

    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }))
    }



    const validatorConfig = {
        email: {
            isRequired: {
                message: "Вы не заполнили данные"
            },
            invalidEmail: {
                message: "Некоректно заполнен email"
            }
        },
        password: {
            isRequired: {
                message: "Вы не заполнили данные"
            },
            isCapital: {
                message: "Пароль должен содержать хотя бы один заглавные символ"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль не должен быть меньше 8-ми символов"
            }
        },
        password2: {
            passwordMatch: {
                message: "Пароли не совпадают",
                otherField: data.password,
            },
        },
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).lenght === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/confirm")
    }


    return (

        <div className="flex justify-center">
            <div className="flex-col mb-5">
                <div className="w-32 h-32 mb-4 ml-56"><img src={gitlab} alt="Black logo" /></div>
                <div className="flex">
                    <div className="bg-gradient flex-col items-center text-center text-white rounded-tl-lg rounded-bl-lg p-4 shadow-lg">
                        <h2 className="mt-20 font-bold">Welcome back!</h2>
                        <p className=" mt-5 font-thin">to keep connected with us please login <br /> with your personal info</p>
                        <button className="py-1 px-3 border-2 border-white rounded-lg mt-5" type="button"><NavLink to="/login">Sign in</NavLink></button>
                    </div>
                    <div className="flex-col justify-center items-center text-center rounded-tr-lg rounded-br-lg p-4 shadow-lg ">
                        <h2 className="font-bold ">Create Account</h2>
                        <form className="p-4 rounded">
                            <TextField
                                label="Введите Email"
                                name="email"
                                type="text"
                                value={data.email}
                                error={errors.email}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Введите пароль"
                                name="password"
                                type="password"
                                value={data.password}
                                error={errors.password}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Повторите пароль"
                                name="password2"
                                type="password"
                                value={data.password2}
                                error={errors.password2}
                                onChange={handleChange}
                            />
                        </form>
                        <button
                            className="py-1 px-3 border-2 border-black rounded-lg mt-3"
                            onClick={handleSubmit}
                            disabled={!isValid}
                        >
                            Sign up
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

