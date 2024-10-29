import { NavBar } from "components/navBar/NavBar"
import { Main, ModalContainer } from "./styles"
import { Header } from "components/header/header";
import { Overview } from "./components/overview";
import { Projects } from "./components/projects";
import { Tasks } from "./components/tasks";
import { useSelector } from "react-redux"
import { currentNavNavigation } from "@store/slices/navBarNavigation";
import { NavBarSectionsInformation } from "components/navBar/navBarSections";
import { ChangeEvent, useState } from "react";
import { GoPlus } from "react-icons/go";
import Modal from "react-modal";
import { CustomInput } from "components/customInput";
import { CustomButton } from "components/customButton";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        backgroundColor: "#f1f1f1",
        padding: '20px',
        borderRadius: '8px',
    },
    overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 999,
        padding: 0,
    },
};


Modal.setAppElement('#root');

type PojectProps = {
    title: string,
    description: string,
    startDate: string,
    endDate: string,
}

export function HomePage() {
    const currentNavBarNavigation = useSelector(currentNavNavigation);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [projectInformation, setProjectInformation] = useState<PojectProps>({
        title: "",
        description: "",
        startDate: "",
        endDate: ""
    });

    const buildCurrentPage = () => {
        switch (currentNavBarNavigation) {
            case 1: return <Overview />;
            case 2: return <Projects />;
            case 3: return <Tasks />;
        }
    }

    function handleGetProjectInformationForm(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
        e.preventDefault();
        setProjectInformation({ ...projectInformation, [e.target.name]: e.target.value });

        console.log(projectInformation);
    }

    function openModal() {
        setShowModal(true);

        console.log(showModal)
    }

    function closeModal() {
        setShowModal(false);
    }

    function handleCreatePoject(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
    }

    return <Main>
        <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <ModalContainer>
                <CustomInput
                    placeholder={"Digite o título"}
                    type={"text"}
                    labelText={"Título"}
                    onChange={(e) => handleGetProjectInformationForm(e)}
                    name={"title"}
                    value={projectInformation.title}
                />
                <section>
                    <CustomInput
                        placeholder=""
                        type="date"
                        labelText="Início"
                        onChange={(e) => handleGetProjectInformationForm(e)}
                        name="startDate"
                        value={projectInformation.startDate}
                    />
                    <CustomInput
                        placeholder=""
                        type="date"
                        labelText="Fim"
                        onChange={(e) => handleGetProjectInformationForm(e)}
                        name="andDate"
                        value={projectInformation.endDate}
                    />
                </section>

                <textarea
                    value={projectInformation.description}
                    name="description"
                    onChange={(e) => handleGetProjectInformationForm(e)}
                    placeholder="Digite a descrição do Pojeto"
                />
                <CustomButton
                    text="Criar novo Pojecto"
                    isLoading={false}
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleCreatePoject(e)}
                />
            </ModalContainer>

        </Modal>
        <NavBar
            setShowMobileMenu={setShowMobileMenu}
            showMobileMenu={showMobileMenu}
        />
        <section>
            <Header
                showMobileMenu={showMobileMenu}
                setShowMobileMenu={setShowMobileMenu}
            />
            <section>
                {NavBarSectionsInformation.map(section => (
                    currentNavBarNavigation == section.id &&
                    <div key={section.id}>
                        {section.buttons.map(button => <button.icon key={button.id} size={30} />)}

                        <section>
                            <h1>{section.title}</h1>
                            <p>{section.description}</p>
                        </section>

                        {
                            currentNavBarNavigation == 2 &&
                            <button onClick={openModal}>
                                <GoPlus color="white" size={24} />
                                Novo Projecto
                            </button>}
                    </div>

                ),)}

                {buildCurrentPage()}
            </section>
        </section>

    </Main>
}