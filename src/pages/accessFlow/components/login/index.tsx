import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { useEffect, useState } from "react";
import { auth } from "@firebase/config";

type Props = {
    setCurrentPage: Function
}

export function LoginComponent({ setCurrentPage }: Props) {
    const [userCredentials, setUserCredentials] = useState({});
    const [showPassword, setShowPassword] = useState(Boolean);

    useEffect(() => {
        const current = localStorage.getItem("showPasswordValue");
        console.log(auth);

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

    function handleCredentials(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e);
    }

    return <>
        <h1>Entrar</h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <h2><span>Organize,</span> <br /> Priorize e Realize!</h2>

            <CustomInput
                name="email"
                type="email"
                labelText="Email"
                onChange={(e) => handleCredentials(e)}
                placeholder="Ex:. pedrofranco@gmail.com"
            />
            <CustomInput
                name="Senha"
                hasEye={true}
                labelText="Senha"
                 placeholder="Digite sua senha"
                onClick={() => TogglePassword()}
                onChange={(e) => handleCredentials(e)}
                type={showPassword ? "text" : "password"}
            />

            <CustomButton text="Entrar" isLoading={false} />
            <small onClick={() => handleSavingPageInLoclestorage(3)}>Esqueceu a senha?</small>
            <button onClick={() => handleSavingPageInLoclestorage(2)} className="goToRegister">Registar-se</button>
        </form>
    </>
} 