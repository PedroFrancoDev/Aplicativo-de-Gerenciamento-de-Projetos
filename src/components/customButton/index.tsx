import { Button } from "./styles";

type Props = {
    text: string,
}

export function CustomButton({ text }: Props) {
    return <Button>
        {text}
    </Button>
}