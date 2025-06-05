
import Author from "../Author/Author";
import PageTitle from "../PageTitle/PageTitle";
import IndexCat from "../IndexCat/IndexCat";
function Body() {

  return (
    <main>
      <PageTitle title="Full Index" />
      <IndexCat category="A" />
      <Author fullName="Léonie Abo" newItem={true} pob="Malungu" dob={1945} />
      <Author fullName="Amba Bongo" newItem={true} pob="Fizi" dob={1957} />
      <Author fullName="Lima-Baleka Bosekilolo" newItem={false} pob="Kinshasa" dob={1941} />
      <Author fullName="Diur N’tumb" newItem={false} pob="Lubumbashi" dob={1953} />
      <Author fullName="Marie-Jeanne Tshilolo Kabika" newItem={true} pob="Fizi" dob={1957} />
      <IndexCat category="B" />
      <Author fullName="Eric Ntumba" newItem={false} pob="Goma" dob={1936} />
      <Author fullName="Justine M'Poyo Kassa-Vubu" newItem={false} pob="Lubumbashi" dob={1953} />
      <IndexCat category="C" />
      <Author fullName="Léonie Abo" newItem={false} pob="Malungu" dob={1945} />
      <Author fullName="Amba Bongo" newItem={false} pob="Lubumbashi" dob={1953} />
      <Author fullName="Lima-Baleka Bosekilolo" newItem={true} pob="Kinshasa" dob={1941} />
      <Author fullName="Diur N’tumb" newItem={false} pob="Fizi" dob={1957} />
      <Author fullName="Marie-Jeanne Tshilolo Kabika" newItem={false} pob="Malungu" dob={1945} />
    </main>
  );
}

export default Body;
