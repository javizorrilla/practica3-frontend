import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

// Este componente estaba en server side, pero la acción de onClick() de un botón siempre debe ocurrir en client side

const StartComp: FunctionComponent = () => {
  return (
    <div
      class="screen typewriter"
      onClick={() => window.location.assign("/lovers")}
    >
      <h1>
        Welcome to the abism of errors. You have a mission, solve them all. Good
        luck!
      </h1>
    </div>
  );
};

export default StartComp;
