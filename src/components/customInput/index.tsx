import { InputSection } from "./styles"

type Props = {
    placeholder: string,
    type: string,
    labelText: string,
}

export function CustomInput({ placeholder, type, labelText }: Props) {
    return <InputSection>
        <label htmlFor={labelText}>{labelText}</label>
        <input id={labelText} type={type} placeholder={placeholder} />
    </InputSection>
}