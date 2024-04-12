import { Fragment } from "preact/jsx-runtime";
import Axios from "npm:axios";
import Lover from "../components/Lover.tsx";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

// Cambiar los atributos de los tipos porque en la api estan foto e imagen en inglés (photo & image)

type LoverT = {
  _id: string;
  photo: string;
};

type PokemonT = {
  _id: string;
  image: string;
};

export const handler: Handlers = {
  GET: async (
    _req: Request,
    ctx: FreshContext<unknown, { pageData: LoverT[] | PokemonT[] }>,
  ) => {
    const { pagesection } = ctx.params;
    if (pagesection === "lovers") {
      const response = await Axios.get<LoverT[]>(
        `https://lovers.deno.dev/`,
      );
      return ctx.render({ pageData: response.data });
    } else if (pagesection === "pokemons") {
      const response = await Axios.get<PokemonT[]>(
        `https://lospoquimones.deno.dev/`,
      );
      return ctx.render({ pageData: response.data });
    } else if (pagesection === "superheroes") {
      const response = await Axios.get<PokemonT[]>(
        `https://supermondongo.deno.dev/`,
      );
      return ctx.render({ pageData: response.data });
    } else {
      return ctx.render({ pageData: [] });
    }
  },
};

const LoversPage = (props: PageProps<{ pageData: LoverT[] | PokemonT[] }>) => {
  const lovers = props.data.pageData;
  const partLength = lovers.length / 3;
  const firstPart = lovers.slice(0, partLength);
  const secondPart = lovers.slice(partLength, partLength * 2);
  const thirdPart = lovers.slice(partLength * 2);

  return (
    <Fragment>
      <div class={`titleSection ${props.url.pathname.slice(1)}`}>
        {props.url.pathname.slice(1) === "lovers" &&
          <h1 class="modernist">{props.url.pathname.slice(1)}</h1>}
        {props.url.pathname.slice(1) === "pokemons" &&
          <h1 class="fifties">{props.url.pathname.slice(1)}</h1>}
        {props.url.pathname.slice(1) === "superheroes" &&
          <h1 class="ninetyfive">{props.url.pathname.slice(1)}</h1>}
      </div>
      <div class="columns">
        <div class="column column-reverse">
          {secondPart.map((lover) => (
            <Lover
              image={(lover as any).photo
                ? (lover as LoverT).photo
                : (lover as PokemonT).image}
              key={lover._id}
            />
          ))}
        </div>
        <div class="column">
          {firstPart.map((lover) => (
            <Lover
              image={(lover as any).photo
                ? (lover as LoverT).photo
                : (lover as PokemonT).image}
              key={lover._id}
            />
          ))}
        </div>
        <div class="column column-reverse">
          {thirdPart.map((lover) => (
            <Lover
              image={(lover as any).photo
                ? (lover as LoverT).photo
                : (lover as PokemonT).image}
              key={lover._id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LoversPage;