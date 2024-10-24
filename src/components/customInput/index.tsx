import { InputSection } from "./styles"
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
    placeholder: string,
    type: string,
    labelText: string,
    hasEye?: boolean,
    onClick?: () => void,
}

export function CustomInput({ placeholder, type, labelText, hasEye, onClick }: Props) {
    return <InputSection>
        <label htmlFor={labelText}>{labelText}</label>
        <div>
            <input id={labelText} type={type} placeholder={placeholder} />
            {hasEye && <button onClick={onClick} > {type == "text" ? <FaEye size={20} /> : <FaEyeSlash size={20} />}</button>}
        </div>
    </InputSection>
}