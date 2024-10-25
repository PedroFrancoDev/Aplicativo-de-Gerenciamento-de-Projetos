import backgroundImg from "@assets/images/backgroundImg.jpg";
import { Main } from "./styles";
import { LoginComponent } from "./components/login";
import { RegisterComponent } from "./components/register";
import { useEffect, useState } from "react";
import { RecoverPasswordComponent } from "./components/recoverPassword";

export function AcessFlow() {
    const [currentPage, setCurrentPage] = useState(Number);

    useEffect(() => {
        const localPage = localStorage.getItem("pageKey");
        setCurrentPage(Number(localPage));
    }, [])

    const buildCurrentPage = () => {
        switch (currentPage) {
            case 1: return <LoginComponent setCurrentPage={setCurrentPage} />;
            case 2: return <RegisterComponent setCurrentPage={setCurrentPage} />;
            case 3: return <RecoverPasswordComponent setCurrentPage={setCurrentPage} />;
            default: return <LoginComponent setCurrentPage={setCurrentPage} />;
        }
    }

    return <>
        <Main>
            <img src={backgroundImg} alt="Login Background" />
            <section>
                {
                    buildCurrentPage()
                }
            </section>
        </Main>
    </>
} 