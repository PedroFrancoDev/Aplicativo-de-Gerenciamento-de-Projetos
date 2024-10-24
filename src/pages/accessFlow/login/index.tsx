import backgroundImg from "@assets/images/loginBackground.png";
import { Main } from "./styles";
import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";

export function LoginPage() {
    return <>
        <Main>
            <img src={backgroundImg} alt="Login Background" />
            <section>
                <h1>Entrar</h1>
                <form action="">
                    <h2><span>Organize,</span> <br /> Priorize e Realize!</h2>

                    <CustomInput placeholder="Ex:. pedrofranco@gmail.com" type="email" labelText="Email" />

                    <CustomInput placeholder="Digite sua senha" type="email" labelText="Senha" />

                    <CustomButton text="Entrar" />
                </form>
            </section>
        </Main>
    </>
} 