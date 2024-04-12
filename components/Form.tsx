import { IS_BROWSER } from "$fresh/runtime.ts";
import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";

type FormProps = {
  name: Signal<string>;
  surname: Signal<string>;
};

const Form: FunctionComponent<FormProps> = ({ name, surname }) => {
  return (
    <div>
        <h3>Say hi hi hi</h3>
      <input
        type="text"
        placeholder="Name"
        value={IS_BROWSER ? name.value : ""}
        onInput={(e) => {
          name.value = e.currentTarget.value;
        }}
      />

      <input
        type="text"
        placeholder="Surname"
        value={IS_BROWSER ? surname.value : ""}
        onInput={(e) => {
          surname.value = e.currentTarget.value;
        }}
      />
    </div>
  );
};

export default Form;