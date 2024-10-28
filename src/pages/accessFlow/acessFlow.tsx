import backgroundImg from "@assets/images/backgroundImg.jpg";
import { Main } from "./styles";
import { LoginComponent } from "./components/login";
import { RegisterComponent } from "./components/register";
import { RecoverPasswordComponent } from "./components/recoverPassword";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessPage } from "@store/slices/acessFlowSlice";
import { useEffect } from "react";
import { setFullLoading } from "@store/slices/fullLoading";
import { selectUsers, setUser } from "@store/slices/usersSlice";
import { FullLoading } from "components/fullLoading";
import { selectFullLoading } from '@store/slices/fullLoading';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@firebase/config";
import { setCurrentNavBarNavigation } from "@store/slices/navBarNavigation";

export function AcessFlow() {
    const currentNavBarNavigation = useSelector(selectAccessPage);
    const dispatch = useDispatch();
    const user = useSelector(selectUsers);
    const isLoading = useSelector(selectFullLoading);

    useEffect(() => {
        dispatch(setFullLoading(true));
        const pageKey = localStorage.getItem("navBarNavigation");

        if (pageKey) {
            dispatch(setCurrentNavBarNavigation(JSON.parse(pageKey)))
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    name: user.displayName
                },),);
            } else {
                dispatch(setUser(null));
            }

            dispatch(setFullLoading(false));
        });

        return () => {
            unsubscribe();
        };
    }, [dispatch, user]);

    const buildCurrentPage = () => {
        switch (currentNavBarNavigation) {
            case 1: return <LoginComponent />;
            case 2: return <RegisterComponent />;
            case 3: return <RecoverPasswordComponent />;
            default: return <LoginComponent />;
        }
    }

    return <>
        {isLoading && <FullLoading />}
        <Main>
            <img src={backgroundImg} alt="Login Background" />
            <section>
                {
                    buildCurrentPage()
                }
            </section>
        </Main>
    </>
} 