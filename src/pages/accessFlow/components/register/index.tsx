import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { auth } from "@firebase/config";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { handleFirebaseError } from "@firebase/firebaseError";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from "@store/slices/usersSlice";
import { useDispatch } from "react-redux";
import { setCurrentAccess } from "@store/slices/acessFlowSlice";

type userCredentials = {
    name: string,
    email: string,
    password: string,
}

export function RegisterComponent() {
    const [showPassword, setShowPassword] = useState(true);
    const [userCredentials, setUserCredentials] = useState<userCredentials>({ email: "", password: "", name: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const notify = () => toast.success("Registado com sucesso");
    const dispatch = useDispatch();

    useEffect(() => {
        const current = localStorage.getItem("showPasswordValue");

        if (current !== null) {
            setShowPassword(JSON.parse(current));
        }
    }, [])

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({ id: user.uid, email: user.email, name: user.displayName }));
            updateProfile(user, { displayName: userCredentials.name });
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
            setErrorMessage("");
        }
    }

    function handleSignUpUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password).then(() => {
            notify();
        })
            .catch((error) => {
                const currentError = handleFirebaseError(error);

                setErrorMessage(currentError);
            }).finally(() => {
                setIsLoading(false);
            });

        setUserCredentials({ email: "", password: "", name: "" });
    }


    return <>
        <ToastContainer />
        <h1><FaArrowLeft onClick={() => handleSetCurrentAccessPage(1)} size={22} />Registar-se</h1>
        <form action="">
            <h2><span>Complete seu registro</span> <br /> Explore mais!</h2>

            <CustomInput
                value={userCredentials.name}
                name="name"
                type="text"
                labelText="Nome Completo"
                onChange={(e) => getUserCredentialsForm(e)}
                placeholder="Digite seu nome completo"
            />

            <CustomInput
                value={userCredentials.email}
                name="email"
                onChange={(e) => getUserCredentialsForm(e)}
                placeholder="Ex:. pedrofranco@gmail.com"
                type="email"
                labelText="Email"
            />
            <CustomInput
                value={userCredentials.password}
                name="password"
                onChange={(e) => getUserCredentialsForm(e)}
                hasEye={true}
                onClick={() => TogglePassword()}
                placeholder="Digite sua senha"
                type={showPassword ? "text" : "password"}
                labelText="Senha"
            />
            {errorMessage && <span>{errorMessage}</span>}
            <CustomButton onClick={(e) => handleSignUpUser(e)} isLoading={isLoading} text="Registar" />
        </form>
    </>
}