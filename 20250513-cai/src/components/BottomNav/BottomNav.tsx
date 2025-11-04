import styles from "./BottomNav.module.sass";
// import SearchTool from "./SearchTool/SearchTool";
import { useRef } from "react";
import { useContext } from "react";
import { TestContext } from "../../Contexts/Contexts";

function BottomNav() {

  let authorNames, i, txtValue, container, innerLink, item;
  const searchBarRef = useRef<HTMLFormElement>(null);
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const authorsData = useContext(TestContext);

  authorNames = document.getElementsByTagName('h2');
  
  console.log(container);

  function renderFilteredArtists() {
    for (i = 0; i < authorsData.length; i++) {
      item =
        console.log()
    }
    // if (inputSearchRef?.current) {
    //   const inputSearch = inputSearchRef.current
    //   console.log(inputSearch.value.toLocaleLowerCase())

    // } else {
    //   console.log("could not find input field")
    // }
  }

  function handleSubmit(e: SubmitEvent) {
    if (searchBarRef?.current) {
      e.preventDefault();

      const form = searchBarRef.current;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());

      console.log(formJson)
    } else {
      console.error("form failed to load")
    }
  }

  return (
    <search>
      <form
        method="get"
        onSubmit={() => handleSubmit}
        name="searchForm"
        ref={searchBarRef}
        role="search bar"
        className={styles.container}
      >
        {/* <SearchTool
        filtersName="filter by"
        sortingName="sort by"
        filters={filters}
        sorting={sorting}
        date={dateRange}
      /> */}

        <input
          ref={inputSearchRef}
          key="search-bar"
          name="search bar"
          type="search"
          placeholder="Enter name, place, or subject here..."
          aria-label="search for an author"
          maxLength={255}
          className={styles.searchInput}
          onKeyUp={renderFilteredArtists}
        />
        <button
          className={styles.searchBtn}
          type="submit"

        >
          search
        </button>
      </form>
    </search>
  );
}

export default BottomNav;
