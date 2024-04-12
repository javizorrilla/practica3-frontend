import { useSignal } from "@preact/signals";
import { FunctionComponent } from "preact";
import Form from "../components/Form.tsx";

const HiPage: FunctionComponent = () => {
    const name = useSignal<string>("");
    const surname = useSignal<string>("");

    return (
        <div>
            <Form name={name} surname={surname}/>
        </div>
    )
}

export default HiPage;