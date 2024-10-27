import { InputSection } from "./styles"
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
    placeholder: string,
    type: string,
    labelText: string,
    hasEye?: boolean,
    onClick?: () => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    value: string,
}

export function CustomInput({
    placeholder,
    type,
    labelText,
    hasEye,
    onClick,
    onChange,
    name,
    value,
}: Props) {
    return <InputSection>
        <label htmlFor={labelText}>{labelText}</label>
        <div>
            <input
                value={value}
                name={name}
                type={type}
                id={labelText}
                onChange={(e) => onChange(e)}
                placeholder={placeholder}
            />
            {hasEye && <button onClick={onClick} > {type == "text" ? <FaEye size={18} /> : <FaEyeSlash size={18} />}</button>}
        </div>
    </InputSection>
}