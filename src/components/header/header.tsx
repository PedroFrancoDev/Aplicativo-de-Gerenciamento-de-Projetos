import { RxHamburgerMenu } from "react-icons/rx";
import { HeaderStyle } from "./styles";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from "@assets/icons/task.png";

type Props = {
    setShowMobileMenu: (e: boolean) => void,
    showMobileMenu: boolean,
}

export function Header({ setShowMobileMenu, showMobileMenu }: Props) {


    return <HeaderStyle>
        <h1><img src={logo} />Gerencimento de Projectos</h1>
        <ToastContainer />
        <RxHamburgerMenu color="1c1c1c" onClick={() => setShowMobileMenu(!showMobileMenu)} size={20} />
    </HeaderStyle>
}