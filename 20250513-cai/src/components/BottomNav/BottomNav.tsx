import styles from "./BottomNav.module.sass";
import SearchTool from "../SearchTool/SearchTool";
import { useRef } from "react";

function BottomNav() {


  const searchBarRef = useRef<HTMLElement>(null)

  const cY = new Date().getFullYear();




  const filters = [
    {
      id: 0,
      title: "genre",
      options: [
        "fiction",
        "non-fiction",
        "academic research / studies",
        "essay",
        "poem",
        "biography",
        "tales",
        "novel",
        "theatre",
      ],
    },
    {
      id: 2,
      title: "place of birth",
      options: [
        "Lower Uele",
        "Equateur",
        "East Kasai",
        "Ituri",
        "Kasai",
        "Kasai-Central",
        "Kinshasa",
        "Kongo Central",
        "Kwango",
        "Kwilu",
        "Lomami",
        "Lualaba",
        "Mai-Ndombe",
        "Maniema",
        "Mongala",
        "North Kivu",
        "North Ubangi",
        "Sankuru",
        "South Kivu",
        "South Ubangi",
        "Tanganyika",
        "Tshopo",
        "Tshuapa",
        "Upper Katanga",
        "Upper Lomami",
        "Upper Uele",
      ],
    },
    {
      id: 3,
      title: "audience",
      options: [
        "Adults",
        "Teenagers (13 to 17)",
        "Children (0 to 12)",
      ],
    },
    {
      id: 4,
      title: "language",
      options: [
        "french",
        "english",
        "german",
        "lingala",
        "tshiluba",
        "kikongo",
        "swahili",
      ],
    },
    {
      id: 5,
      title: "publisher",
      options: [
        "Baobab House Press",
        "Maple & Clay Publishing",
        "Éditions L'Éclipse",
        "Saffron Ink Works",
        "Obsidian Gate Theatre Co.",
        "Iron Lantern Press",
        "Kirin Scroll Editions",
        "Cobalt Stage & Print",
        "another fictious publisher's name",
        "publisher",
      ],
    },
  ];

  const sorting = [
    { id: 0, title: "A to Z" },
    { id: 1, title: "Z to A" },
    { id: 2, title: "relevance" },
    { id: 3, title: "newest first" },
    { id: 4, title: "oldest first" },
  ];

  const dateRange = {
    title: "date",
    placeholderFrom: 1900,
    placeholderTo: cY,
  }



  return (
    <nav
      ref={searchBarRef}
      role="search bar"
      className={styles.container}
    >
      <SearchTool
        filtersName="filter by"
        sortingName="sort by"
        filters={filters}
        sorting={sorting}
        date={dateRange}
      />

      <input
        name="search bar"
        type="search"
        placeholder="Enter name, place, or subject here..." />
    </nav>
  );
}

export default BottomNav;
