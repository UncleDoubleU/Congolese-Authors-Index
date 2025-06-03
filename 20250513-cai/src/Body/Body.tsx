
import Author from "../Author/Author";
import PageTitle from "../PageTitle/PageTitle";
import IndexCat from "../IndexCat/IndexCat";
function Body() {

  return (
    <main>
      <PageTitle title="Full Index" />
      <IndexCat category="A" />
      <Author fullName="Léonie Abo" newItem={true} />
      <Author fullName="Amba Bongo" newItem={true} />
      <Author fullName="Lima-Baleka Bosekilolo" newItem={false} />
      <Author fullName="Diur N’tumb" newItem={false} />
      <Author fullName="Marie-Jeanne Tshilolo Kabika" newItem={true} />
      <IndexCat category="B" />
      <Author fullName="Eric Ntumba" newItem={false} />
      <Author fullName="Justine M'Poyo Kassa-Vubu" newItem={false} />
      <IndexCat category="C" />
      <Author fullName="Léonie Abo" newItem={false} />
      <Author fullName="Amba Bongo" newItem={false} />
      <Author fullName="Lima-Baleka Bosekilolo" newItem={true} />
      <Author fullName="Diur N’tumb" newItem={false} />
      <Author fullName="Marie-Jeanne Tshilolo Kabika" newItem={false} />
    </main>
  );
}

export default Body;
