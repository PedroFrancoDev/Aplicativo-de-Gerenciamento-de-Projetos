import { NavBar } from "components/navBar/NavBar"
import { Main } from "./styles"
import { Header } from "components/header/header";
import { GrOverview } from "react-icons/gr";
import { ProjectCard } from "components/projectCard";
import { useEffect } from "react";
import { setFullLoading } from "@store/slices/fullLoading";
import { selectUsers } from "@store/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
export function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector(selectUsers);

    useEffect(() => {
        dispatch(setFullLoading(true));

        if (user) {
            dispatch(setFullLoading(false));
        }
    }, [dispatch, user]);

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