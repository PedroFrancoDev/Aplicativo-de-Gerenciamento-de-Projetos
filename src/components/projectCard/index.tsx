import { Card } from "./styles";
import image from '@assets/images/backgroundImg.jpg';
import { FaPeopleGroup } from "react-icons/fa6";
import { FcParallelTasks } from "react-icons/fc";

export function ProjectCard() {
    return <>
        <Card>
            <img src={image} />
            <div>
                <h2>App Gerencianto de tarefas</h2>
                <p>Desenvolva uma aplicação de gerenciamento de projetos com interface intuitiva e funcionalidades avançadas. A aplicação deve permitir aos.</p>
                <small><FaPeopleGroup size={15} /> 20 Membros</small>
                <small><FcParallelTasks size={15} /> Tarefas</small>
            </div>
        </Card>
    </>
}