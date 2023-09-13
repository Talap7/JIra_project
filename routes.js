import { ConfirmForm } from "./src/pages/confirmForm";
import { LoginForm } from "/src/pages/loginForm";
import { RegisterForm } from "/src/pages/registerForm";

const routes = [
    {path: "/register", display: "none", name: "Register Form", component: RegisterForm},
    {path: "/login", name: "Login Form", component: LoginForm},
    {path: "/confirm", display: "none", name: "Confirm Form", component: ConfirmForm},
]

export default routes