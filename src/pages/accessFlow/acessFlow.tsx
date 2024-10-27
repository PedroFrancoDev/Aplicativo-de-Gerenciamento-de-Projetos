import backgroundImg from "@assets/images/backgroundImg.jpg";
import { Main } from "./styles";
import { LoginComponent } from "./components/login";
import { RegisterComponent } from "./components/register";
import { RecoverPasswordComponent } from "./components/recoverPassword";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessPage } from "@store/slices/acessFlowSlice";
import { useEffect } from "react";
import { setFullLoading } from "@store/slices/fullLoading";
import { selectUsers } from "@store/slices/usersSlice";

export function AcessFlow() {
    const currentAccessPage = useSelector(selectAccessPage);
    const dispatch = useDispatch();
    const user = useSelector(selectUsers);

    useEffect(() => {
        dispatch(setFullLoading(true));

        if (user === null) {
            dispatch(setFullLoading(false));
        }
    }, [dispatch, user]);


    const buildCurrentPage = () => {
        switch (currentAccessPage) {
            case 1: return <LoginComponent />;
            case 2: return <RegisterComponent />;
            case 3: return <RecoverPasswordComponent />;
            default: return <LoginComponent />;
        }
    }

    return <>
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