import { NavBarSectionsInformation } from "./navBarSections";
import { useState, useEffect } from "react";
import { Aside, Button, GlobalSection } from "./style";
import { auth } from "@firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { setUser } from "@store/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNavBarNavigation, currentNavNavigation } from "@store/slices/navBarNavigation";
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { toast } from "react-toastify";
import { setCurrentAccess } from "@store/slices/acessFlowSlice";
import { handleFirebaseError } from "@firebase/firebaseError";

type UserDataProps = {
    name: string,
    email: string,
}

type Props = {
    showMobileMenu: boolean,
    setShowMobileMenu: (value: boolean) => void
}

export function NavBar({ showMobileMenu, setShowMobileMenu }: Props) {
    const [userData, setUserData] = useState<UserDataProps>({ name: "", email: "" });
    const dispatch = useDispatch();
    const currentNavBarNavigation = useSelector(currentNavNavigation);
    const notify = (e: string) => toast.error(e);

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

    function handleSignOut() {
        signOut(auth)
            .then(() => {
                dispatch(setUser(null));
                dispatch(setCurrentAccess(1));
            })
            .catch((error) => {
                const currentError = handleFirebaseError(error);
                notify(currentError);
            });
    }

    return <>
        <Aside $showMobileMenu={showMobileMenu}>
            <GlobalSection>
                <section>
                    <small>
                        <small></small>
                        <IoMdClose onClick={() => setShowMobileMenu(false)} />
                    </small>
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
                                onClick={() => {
                                    handleNavigationButton(button.id);
                                    setShowMobileMenu(false);
                                }}>
                                {<button.icon />}
                                {button.text}
                            </Button>,)}
                    </section>,)}
                </section>

                <button onClick={handleSignOut} id="logout"><CiLogout color="red" size={20} />Sair</button>
            </GlobalSection>
        </Aside>
    </>
}