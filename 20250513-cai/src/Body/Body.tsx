import styles from "./Body.module.sass";
import Author from "../Author/Author";
import PageTitle from "../PageTitle/PageTitle";
import IndexCat from "../IndexCat/IndexCat";
function Body() {
  return (
    <main>
      <PageTitle title="Full Index" />
      <IndexCat category="A" />
      <Author fullName="Léonie Abo" categories="" newItem={true} />
      <Author fullName="Amba Bongo" categories="" newItem={true} />
      <Author fullName="Lima-Baleka Bosekilolo" categories="" newItem={false} />
      <Author fullName="Diur N’tumb" categories="" newItem={false} />
      <Author fullName="Marie-Jeanne Tshilolo Kabika" categories="" newItem={true} />
      <IndexCat category="B" />
      <Author fullName="Eric Ntumba" categories="" newItem={false} />
      <Author fullName="Justine M'Poyo Kassa-Vubu" categories="" newItem={false} />
      <IndexCat category="C" />
      <Author fullName="Léonie Abo" categories="" newItem={false} />
      <Author fullName="Amba Bongo" categories="" newItem={false} />
      <Author fullName="Lima-Baleka Bosekilolo" categories="" newItem={true} />
      <Author fullName="Diur N’tumb" categories="" newItem={false} />
      <Author fullName="Marie-Jeanne Tshilolo Kabika" categories="" newItem={false} />
    </main>
  );
}

export default Body;
