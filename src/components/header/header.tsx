import { RxHamburgerMenu } from "react-icons/rx";
import { HeaderStyle } from "./styles";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "@firebase/config";
import { useDispatch } from "react-redux";
import { setUser } from "@store/slices/usersSlice";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { handleFirebaseError } from "@firebase/firebaseError";
import { setCurrentAccess } from "@store/slices/acessFlowSlice";
import logo from "@assets/icons/task.png";

export function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const notify = (e: string) => toast.error(e);
    const dispatch = useDispatch();

    function handleToggleMenu() {
        setShowMenu(!showMenu)
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

    return <HeaderStyle>
        <h1><img src={logo} />Gerencimento de Projectos</h1>
        <ToastContainer />

        <div>
            <RxHamburgerMenu onClick={handleToggleMenu} size={20} color="#1c1c1c1" />

            {showMenu && <ul>
                <li onClick={handleSignOut}><CiLogout size={17} />Sair</li>
            </ul>}
        </div>
    </HeaderStyle>
}