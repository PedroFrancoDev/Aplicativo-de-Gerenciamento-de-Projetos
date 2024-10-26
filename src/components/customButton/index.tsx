import { Button } from "./styles";
import { ScaleLoader } from "react-spinners";

type Props = {
    text: string,
    isLoading: boolean,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export function CustomButton({ text, isLoading, onClick }: Props) {
    return <Button onClick={(e) => onClick(e)} $isLoading={isLoading}>
        {isLoading ? <ScaleLoader className="loading" color="#f1f1f1" height={13} /> : text}
    </Button>
}