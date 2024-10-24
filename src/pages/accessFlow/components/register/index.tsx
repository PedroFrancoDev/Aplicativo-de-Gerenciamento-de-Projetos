import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";

export function RegisterComponent() {

    return <>
       <h1>Registar-se</h1>
                <form action="">
                    <h2><span>Organize,</span> <br /> Priorize e Realize!</h2>

                    <CustomInput placeholder="Ex:. pedrofranco@gmail.com" type="email" labelText="Email" />
                    <CustomInput placeholder="Digite sua senha" type="text" labelText="Senha" />
                    <CustomInput placeholder="Digite sua senha" type="text" labelText="Confirmar Senha" />

                    <CustomButton isLoading={false} text="Registar" />
        </form>
    </>
} 