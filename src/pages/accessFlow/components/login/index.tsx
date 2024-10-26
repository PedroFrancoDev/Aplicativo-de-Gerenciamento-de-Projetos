import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { useEffect, useState } from "react";
import { auth } from "@firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { handleFirebaseError } from "@firebase/firebaseError";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    setCurrentPage: (newPage: number) => void,
}

type UserCredentials = {
    email: string,
    password: string,
}

export function LoginComponent({ setCurrentPage }: Props) {
    const [userCredentials, setUserCredentials] = useState<UserCredentials>({ email: "", password: "" },);
    const [showPassword, setShowPassword] = useState(Boolean);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessae] = useState<string>("");
    const notify = () => toast.success("Login realizado com sucesso!");

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

    function handleSigInUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setIsLoading(true);

        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log(user);
                setIsLoading(false);
                notify();
            })
            .catch((error) => {
                const currentError = handleFirebaseError(error);
                setErrorMessae(currentError);
                setIsLoading(false);
            })
    }

    return <>
        <ToastContainer />
        <h1>Entrar</h1>
        <div>
            <form action="">
                <h2><span>Organize,</span> <br /> Priorize e Realize!</h2>

                <CustomInput
                    name="email"
                    type="email"
                    labelText="Email"
                    onChange={(e) => getUserCredentialsForm(e)}
                    placeholder="Ex:. pedrofranco@gmail.com"
                />
                <CustomInput
                    name="password"
                    hasEye={true}
                    labelText="Senha"
                    placeholder="Digite sua senha"
                    onClick={() => TogglePassword()}
                    onChange={(e) => getUserCredentialsForm(e)}
                    type={showPassword ? "text" : "password"}
                />
                <small onClick={() => handleSavingPageInLoclestorage(3)}>Esqueceu a senha?</small>
                <span>{errorMessage}</span>
                <CustomButton onClick={(e) => handleSigInUser(e)} text="Entrar" isLoading={isLoading} />

                <button
                    type="button"
                    onClick={() => { handleSavingPageInLoclestorage(2) }}
                    className="goToRegister"
                >
                    Registar-se
                </button>
            </form>
        </div>
    </>
} 