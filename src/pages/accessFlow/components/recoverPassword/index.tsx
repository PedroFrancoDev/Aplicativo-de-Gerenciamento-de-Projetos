import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
    setCurrentPage: Function
}

export function RecoverPasswordComponent({ setCurrentPage }: Props) {

    function handleSavingPageInLoclestorage(newPage: Number) {
        localStorage.setItem("pageKey", newPage.toString(),);
        setCurrentPage(newPage);
    }

    return <>
        <h1><FaArrowLeft onClick={() => handleSavingPageInLoclestorage(1)} size={22} />Recuper Senha</h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <h2><span>Problemas com a senha?</span> <br /> Recuperar em apenas alguns passos!

            </h2>

            <CustomInput placeholder="Ex:. pedrofranco@gmail.com" type="email" labelText="Email" />

            <CustomButton text="Recuperar" isLoading={false} />
        </form>
    </>
} 