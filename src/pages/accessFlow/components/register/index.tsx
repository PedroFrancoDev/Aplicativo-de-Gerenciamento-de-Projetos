import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
    setCurrentPage: Function
}

export function RegisterComponent({ setCurrentPage }: Props) {
    const [showPassword, setShowPassword] = useState(true);

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
        <h1><FaArrowLeft onClick={() => handleSavingPageInLoclestorage(1)} size={22} />Registar-se</h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <h2><span>Complete seu registro</span> <br /> Explore mais!</h2>

            <CustomInput
                name="email"
                onChange={(e) => {}}
                placeholder="Ex:. pedrofranco@gmail.com"
                type="email"
                labelText="Email"
            />
            <CustomInput
                name="senha"
                onChange={(e) => {}}
                hasEye={true}
                onClick={() => TogglePassword()}
                placeholder="Digite sua senha"
                type={showPassword ? "text" : "password"}
                labelText="Senha"
            />

            <CustomButton isLoading={false} text="Registar" />
        </form>
    </>
} 