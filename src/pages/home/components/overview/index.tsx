import { ProjectCard } from "components/projectCard";
import { Bar } from "react-chartjs-2";
import { Container } from "./styles";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export function Overview() {

    const data = {
        labels: [
            "Total de Projetos",
            "Tarefas em Progresso",
            "Tarefas Atrasadas",
            "Projetos Concluídos",
        ]
        ,
        datasets: [
            {
                label: "Desempenho dos Prpjetos",
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: "#368fb7",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Este gráfico exibe as principais métricas relacionadas ao desempenho dos projetos na plataforma.",
            },
        },
    };
    return <Container>
        <section>
            <Bar data={data} options={options} />
        </section>
        <ul>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </ul>
    </Container>
}