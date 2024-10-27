import { ScaleLoader } from "react-spinners";
import { Div } from "./styles";

export function FullLoading() {
    return (
        <Div>
            <ScaleLoader className="loading" color="#368fb7" height={26} />
        </Div>
    );
}
