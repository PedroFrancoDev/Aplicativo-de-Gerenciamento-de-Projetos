import backgroundImg from "@assets/images/loginBackground.png";
import { Main } from "./styles";
import { LoginComponent } from "./components/login";
import { RegisterComponent } from "./components/register";
import { useState } from "react";

export function AcessFlow() {
    const [currentPage, setCurrentPage] = useState(1);

    const buildCurrentPage = () => {
        switch(currentPage) {
            case 1: return <LoginComponent setCurrentPage={setCurrentPage}/>;
            case 2: return  <RegisterComponent/>;
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