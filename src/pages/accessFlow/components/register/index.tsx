import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
    setCurrentPage: Function
}

export function RegisterComponent({ setCurrentPage }: Props) {
    const [showPassword, setShowPassword] = useState(true);

    function TogglePassword() {
        setShowPassword(!showPassword);
    }


    return <>
        <h1><FaArrowLeft onClick={() => setCurrentPage(1)} size={22} />Registar-se</h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <h2><span>Complete seu registro</span> <br /> Explore mais!</h2>

            <CustomInput placeholder="Ex:. pedrofranco@gmail.com" type="email" labelText="Email" />
            <CustomInput hasEye={true} onClick={() => TogglePassword()} placeholder="Digite sua senha" type={showPassword ? "text" : "password"} labelText="Senha" />

            <CustomButton isLoading={false} text="Registar" />
        </form>
    </>
} 