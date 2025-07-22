import { useEffect, useState } from "react";
import styles from "./BottomNav.module.sass";
import SearchTool from "../SearchTool/SearchTool";

function BottomNav() {

  
  const cY = new Date().getFullYear();

  const filters = [
    {
      id: 0,
      title: "genre",
      genres: [
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
      id: 1,
      title: "date",
      placeholderFrom: 1900,
      placeholderTo: cY,
    },
    {
      id: 2,
      title: "place of birth",
      pob: [
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
      ageRange: [
        "Adults",
        "Teenagers (13 to 17)",
        "Children (0 to 12)",
      ],
    },
    {
      id: 4,
      title: "languages",
      languages: [
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
      title: "publishers",
      publisherList: [
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

  return (
    <nav role="search bar" className={styles.container}>

      <SearchTool name="filters" items={filters} />



      <input name="search bar" type="search" placeholder="Enter name, place, or subject here..." />
    </nav>
  );
}

export default BottomNav;
