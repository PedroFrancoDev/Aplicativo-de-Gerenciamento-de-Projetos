import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { useEffect, useState } from "react";

type Props = {
    setCurrentPage: Function
}

export function LoginComponent({ setCurrentPage }: Props) {
    const [showPassword, setShowPassword] = useState(Boolean);

    useEffect(() => {
        const current = localStorage.getItem("showPasswordValue");

        if (current !== null) {
            setShowPassword(JSON.parse(current));
        }
    }, [])

    function TogglePassword() {
        const newValue = !showPassword;

        setShowPassword(newValue);
        localStorage.setItem("showPasswordValue", JSON.stringify(newValue));
    }

    function handleSavingPageInLoclestorage(newPage: Number) {
        localStorage.setItem("pageKey", newPage.toString(),);
        setCurrentPage(newPage);
    }

    return <>
        <h1>Entrar</h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <h2><span>Organize,</span> <br /> Priorize e Realize!</h2>

            <CustomInput placeholder="Ex:. pedrofranco@gmail.com" type="email" labelText="Email" />

            <CustomInput onClick={() => TogglePassword()} placeholder="Digite sua senha" type={showPassword ? "text" : "password"} labelText="Senha" hasEye={true} />

            <CustomButton text="Entrar" isLoading={false} />
            <small onClick={() => handleSavingPageInLoclestorage(3)}>Esqueceu a senha?</small>
            <button onClick={() => handleSavingPageInLoclestorage(2)} className="goToRegister">Registar-se</button>
        </form>
    </>
} 