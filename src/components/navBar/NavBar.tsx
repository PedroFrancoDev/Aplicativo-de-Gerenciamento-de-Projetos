import { NavBarSections } from "./navBarSections";
import { useState, useEffect } from "react";
import { Aside, Button } from "./style";
import { auth } from "@firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "@store/slices/usersSlice";
import { useDispatch } from "react-redux";

type UserDataProps = {
    name: string,
    email: string,
}

export function NavBar() {
    const [currentSection, setCurrentSection] = useState(1);
    const [userData, setUserData] = useState<UserDataProps>({ name: "", email: "" });
    const dispatch = useDispatch();

    useEffect(() => {
        const storedSection = localStorage.getItem("currentSection");
        setCurrentSection(Number(storedSection));

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserData({ name: user.displayName || "Usuário", email: user.email || "email@exemplo.com" });
            } else {
                dispatch(setUser(null));
            }
        },);

    }, [dispatch]);

    function handleNavigationButton(id: React.Key) {
        const buttonId = Number(id);
        localStorage.setItem("currentSection", buttonId.toString());
        setCurrentSection(buttonId);
    }

    return <>
        <Aside>
            <section>
                <div>
                    <div><h1>{userData.name[0]}</h1></div>
                    <strong>{userData.name}</strong>
                    <span>{userData.email}</span>
                </div>
            </section>
            {NavBarSections.map(section => <section key={section.id}>
                <h1>{section.title}</h1>
                <p>{section.description}</p>

                {section.buttons.map(
                    button => <Button
                        $isActive={button.id == currentSection ? true : false}
                        key={button.id}
                        onClick={() => handleNavigationButton(button.id)}
                    >
                        {<button.icon />}
                        {button.text}
                    </Button>,)}
            </section>,)}
        </Aside>
    </>
}