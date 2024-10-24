import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";

type Props = {
    setCurrentPage: Function
}

export function LoginComponent({setCurrentPage}: Props) {

    return <>
       <h1>Entrar</h1>
                <form action="">
                    <h2><span>Organize,</span> <br /> Priorize e Realize!</h2>

                    <CustomInput placeholder="Ex:. pedrofranco@gmail.com" type="email" labelText="Email" />

                    <CustomInput placeholder="Digite sua senha" type="email" labelText="Senha" />

                    <CustomButton isLoading={false} text="Entrar" />

                    <small onClick={() => setCurrentPage(2)}>Esqueceu a senha?</small>
        </form>
    </>
} 