import { NavBar } from "components/navBar/NavBar"
import { Main } from "./styles"
import { Header } from "components/header/header";
import { GrOverview } from "react-icons/gr";
import { ProjectCard } from "components/projectCard";

export function HomePage() {
    return <Main>
        <NavBar />

        <section>
            <Header />

            <section>
                <div>
                    <GrOverview size={33.08} />

                    <section>
                        <h1>Visão Geral</h1>
                        <p>visão geral de todos os projetos e estatísticas</p>
                    </section>
                </div>

                <ul>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </ul>
            </section>
        </section>
    </Main>
}