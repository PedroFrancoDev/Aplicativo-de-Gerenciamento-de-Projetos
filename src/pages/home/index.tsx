import { NavBar } from "components/navBar/NavBar"
import { Main } from "./styles"
import { Header } from "components/header/header";
import { Overview } from "./components/overview";
import { Projects } from "./components/projects";
import { Tasks } from "./components/tasks";
import { useSelector } from "react-redux"
import { currentNavNavigation } from "@store/slices/navBarNavigation";
import { NavBarSectionsInformation } from "components/navBar/navBarSections";

export function HomePage() {
    const currentNavBarNavigation = useSelector(currentNavNavigation);

    const buildCurrentPage = () => {
        switch (currentNavBarNavigation) {
            case 1: return <Overview />;
            case 2: return <Projects />;
            case 3: return <Tasks />;
        }
    }

    return <Main>
        <NavBar />

        <section>
            <Header />

            <section>
                {NavBarSectionsInformation.map(section => (
                    currentNavBarNavigation == section.id &&
                    <div key={section.id}>
                        {section.buttons.map(button => <button.icon key={button.id} size={30} />)}

                        <section>
                            <h1>{section.title}</h1>
                            <p>{section.description}</p>
                        </section>
                    </div>
                ),)}

                {buildCurrentPage()}
            </section>
        </section>

    </Main>
}