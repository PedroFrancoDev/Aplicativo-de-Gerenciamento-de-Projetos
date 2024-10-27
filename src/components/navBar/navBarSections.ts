import { IconType } from "react-icons";
import { GrOverview } from "react-icons/gr";
import { GiArchiveRegister } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import React from "react";

type Button = {
    id: React.Key,
    text: string,
    icon: IconType,
};

type Section = {
    id: React.Key,
    title: string,
    description: string,
    buttons: Button[]
}

export const NavBarSections: Section[] = [
    {
        id: 1,
        title: "Página inicial",
        description: "visão geral de todos os projetos e estatísticas",
        buttons: [
            {
                id: 1,
                text: "Visão geral",
                icon: GrOverview
            },
        ]
    },
    {
        id: 2,
        title: "Projetos",
        description: "Criação e Edição de projetos",
        buttons: [
            {
                id: 2,
                text: "Registrar Projeto",
                icon: GiArchiveRegister
            },
        ]
    },
    {
        id: 3,
        title: "Adicione e editar tarefas",
        description: "Adicione e editar tarefas para cada projeto",
        buttons: [
            {
                id: 4,
                text: "Adicionar tarefas",
                icon: FaTasks
            },
        ]
    },
];