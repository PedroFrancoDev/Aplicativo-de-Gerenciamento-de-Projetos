import { Button } from "./styles";
import { ScaleLoader } from "react-spinners";

type Props = {
    text: string,
    isLoading: boolean,
}

export function CustomButton({ text, isLoading}: Props) {
    return <Button isLoading={isLoading}>
        {isLoading ? <ScaleLoader className="loading" color="#f1f1f1" height={13} /> : text}
    </Button>
}