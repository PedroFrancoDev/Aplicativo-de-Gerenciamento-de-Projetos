import backgroundImg from "@assets/images/backgroundImg.jpg";
import { Main } from "./styles";
import { LoginComponent } from "./components/login";
import { RegisterComponent } from "./components/register";
import { useState } from "react";
import { RecoverPasswordComponent } from "./components/recoverPassword";

export function AcessFlow() {
    const [currentPage, setCurrentPage] = useState(1);

    const buildCurrentPage = () => {
        switch (currentPage) {
            case 1: return <LoginComponent setCurrentPage={setCurrentPage} />;
            case 2: return <RegisterComponent setCurrentPage={setCurrentPage} />;
            case 3: return <RecoverPasswordComponent setCurrentPage={setCurrentPage} />
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