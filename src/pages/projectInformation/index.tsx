import { GlobalSection } from "./styles";
import image from '@assets/images/backgroundImg.jpg';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

export function ProjectInformation() {
    return <GlobalSection>
        <Link to="/"><HiOutlineArrowLeft size={26} /></Link>
        <br />
        <br />
        <br />
        <div>
            <img src={image} />
            <h2>App Gerencianto de tarefas</h2>
            <p>Chegar ao seu destino nunca foi tão fácil! Com [Nome do App], você tem acesso a um serviço de transporte de qualidade na palma da sua mão. Seja para uma corrida rápida até o trabalho ou uma viagem longa, estamos aqui para atender todas as suas necessidades.</p>
        </div>
    </GlobalSection>
}