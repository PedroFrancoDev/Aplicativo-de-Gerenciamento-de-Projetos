import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { useEffect, useState } from "react";
import { auth } from "@firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { handleFirebaseError } from "@firebase/firebaseError";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { setUser } from "@store/slices/usersSlice";
import { setCurrentAccess } from "@store/slices/acessFlowSlice";

type UserCredentials = {
    email: string,
    password: string,
}

export function LoginComponent() {
    const [userCredentials, setUserCredentials] = useState<UserCredentials>({
        email: "",
        password: ""
    },);
    const [showPassword, setShowPassword] = useState(Boolean);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessae] = useState<string>("");
    const notify = () => toast.success("Login realizado com sucesso!");
    const dispatch = useDispatch();

    useEffect(() => {
        const current = localStorage.getItem("showPasswordValue");
        if (current !== null) {
            setShowPassword(JSON.parse(current));
        }
    }, [])

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({
                id: user.uid,
                email: user.email,
                name: user.displayName
            },),);
        } else {
            dispatch(setUser(null));
        }
    },);

    function TogglePassword() {
        const newValue = !showPassword;

        setShowPassword(newValue);
        localStorage.setItem("showPasswordValue", JSON.stringify(newValue));
    }

    function handleSetCurrentAccessPage(newPage: number) {
        dispatch(setCurrentAccess(newPage));
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

        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password).then(() => {
            notify();
        })
            .catch((error) => {
                const currentError = handleFirebaseError(error);
                setErrorMessae(currentError);

            }).finally(() => {
                setIsLoading(false);
            })

        setUserCredentials({ email: "", password: "" });
    }

    return <>
        <ToastContainer />
        <h1>Entrar</h1>
        <div>
            <form action="">
                <h2><span>Organize,</span> <br /> Priorize e Realize!</h2>

                <CustomInput
                    value={userCredentials.email}
                    name="email"
                    type="email"
                    labelText="Email"
                    onChange={(e) => getUserCredentialsForm(e)}
                    placeholder="Ex:. pedrofranco@gmail.com"
                />
                <CustomInput
                    value={userCredentials.password}
                    name="password"
                    hasEye={true}
                    labelText="Senha"
                    placeholder="Digite sua senha"
                    onClick={() => TogglePassword()}
                    onChange={(e) => getUserCredentialsForm(e)}
                    type={showPassword ? "text" : "password"}
                />
                <small onClick={() => handleSetCurrentAccessPage(3)}>Esqueceu a senha?</small>
                <span>{errorMessage}</span>
                <CustomButton onClick={(e) => handleSigInUser(e)} text="Entrar" isLoading={isLoading} />

                <button
                    type="button"
                    onClick={() => { handleSetCurrentAccessPage(2) }}
                    className="goToRegister"
                >
                    Registar-se
                </button>
            </form>
        </div>
    </>
} 