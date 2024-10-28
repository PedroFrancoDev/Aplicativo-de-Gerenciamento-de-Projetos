import { NavBarSectionsInformation } from "./navBarSections";
import { useState, useEffect } from "react";
import { Aside, Button } from "./style";
import { auth } from "@firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "@store/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNavBarNavigation, currentNavNavigation } from "@store/slices/navBarNavigation";

type UserDataProps = {
    name: string,
    email: string,
}

export function NavBar() {
    const [userData, setUserData] = useState<UserDataProps>({ name: "", email: "" });
    const dispatch = useDispatch();
    const currentNavBarNavigation = useSelector(currentNavNavigation);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserData({ name: user.displayName || "Usuário", email: user.email || "email@exemplo.com" });
            } else {
                dispatch(setUser(null));
            }
        },);

    }, [dispatch]);

    function handleNavigationButton(id: number) {
        dispatch(setCurrentNavBarNavigation(id));
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
            {NavBarSectionsInformation.map(section => <section key={section.id}>
                <h1>{section.title}</h1>
                <p>{section.description}</p>

                {section.buttons.map(
                    button => <Button
                        $isActive={button.id == currentNavBarNavigation ? true : false}
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