import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { auth } from "@firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { handleFirebaseError } from "@firebase/firebaseError";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    setCurrentPage: (newPage: number) => void,
}

type userCredentials = {
    email: string,
    password: string,
}

export function RegisterComponent({ setCurrentPage }: Props) {
    const [showPassword, setShowPassword] = useState(true);
    const [userCredentials, setUserCredentials] = useState<userCredentials>({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessae] = useState<string>("");
    const notify = () => toast.success("Registado com sucesso");

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

    function handleSavingPageInLoclestorage(newPage: number) {
        localStorage.setItem("pageKey", newPage.toString(),);
        setCurrentPage(newPage);
    }

    function getUserCredentialsForm(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });

        if (errorMessage !== "") {
            setErrorMessae("");
        }
    }

    function handleSignUpUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                notify();
                setIsLoading(false);
            }).catch((error) => {
                const currentError = handleFirebaseError(error);

                setErrorMessae(currentError);
                setIsLoading(false);
            });
    }


    return <>
        <ToastContainer />
        <h1><FaArrowLeft onClick={() => handleSavingPageInLoclestorage(1)} size={22} />Registar-se</h1>
        <form action="">
            <h2><span>Complete seu registro</span> <br /> Explore mais!</h2>

            <CustomInput
                name="email"
                onChange={(e) => getUserCredentialsForm(e)}
                placeholder="Ex:. pedrofranco@gmail.com"
                type="email"
                labelText="Email"
            />
            <CustomInput
                name="password"
                onChange={(e) => getUserCredentialsForm(e)}
                hasEye={true}
                onClick={() => TogglePassword()}
                placeholder="Digite sua senha"
                type={showPassword ? "text" : "password"}
                labelText="Senha"
            />
            <span>{errorMessage}</span>
            <CustomButton onClick={(e) => handleSignUpUser(e)} isLoading={isLoading} text="Registar" />
        </form>
    </>
} 