import backgroundImg from "@assets/images/backgroundImg.jpg";
import { Main } from "./styles";
import { LoginComponent } from "./components/login";
import { RegisterComponent } from "./components/register";
import { RecoverPasswordComponent } from "./components/recoverPassword";
import { useSelector } from "react-redux";
import { selectAccessPage } from "@store/slices/acessFlowSlice";


export function AcessFlow() {
    const currentAccessPage = useSelector(selectAccessPage);

    const buildCurrentPage = () => {
        switch (currentAccessPage) {
            case 1: return <LoginComponent />;
            case 2: return <RegisterComponent />;
            case 3: return <RecoverPasswordComponent />;
            default: return <LoginComponent />;
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