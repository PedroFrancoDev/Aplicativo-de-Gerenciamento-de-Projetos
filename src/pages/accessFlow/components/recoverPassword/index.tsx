import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { FaArrowLeft } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@firebase/config";
import { handleFirebaseError } from "@firebase/firebaseError";

type Props = {
    setCurrentPage: (e: number) => void
}

export function RecoverPasswordComponent({ setCurrentPage }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessae] = useState<string>("");
    const notify = () => toast.success("E-mail de recuperação enviado! Verifique sua caixa de entrada.");
    const [userEmail, setUserEmail] = useState<string>("");

    function handleSavingPageInLoclestorage(newPage: number) {
        localStorage.setItem("pageKey", newPage.toString(),);
        setCurrentPage(newPage);
    }

    function getEmailForm(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setUserEmail(e.target.value);

        if (errorMessage !== "") {
            setErrorMessae("");
        }
    }

    function handlePasswordRecover(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        setIsLoading(true);
        sendPasswordResetEmail(auth, userEmail).then(() => {
            notify();
            setIsLoading(false);
        }).catch((error) => {

            console.log(error.code);
            const currentError = handleFirebaseError(error);
            setErrorMessae(currentError);
            setIsLoading(false);
        });
    }

    return <>
        <ToastContainer />
        <h1><FaArrowLeft onClick={() => handleSavingPageInLoclestorage(1)} size={22} />Recuper Senha</h1>
        <form action="" noValidate>
            <h2><span>Problemas com a senha?</span> <br /> Recuperar em apenas alguns passos!

            </h2>

            <CustomInput
                name="email"
                onChange={(e) => getEmailForm(e)}
                placeholder="Ex:. pedrofranco@gmail.com"
                type="email"
                labelText="Email"
            />
            <span>{errorMessage}</span>
            <CustomButton onClick={(e) => handlePasswordRecover(e)} text="Recuperar" isLoading={isLoading} />
        </form>
    </>
} 