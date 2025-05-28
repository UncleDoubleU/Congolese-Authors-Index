import { useEffect, useState } from "react";
import styles from "./BottomNav.module.sass";
import SearchTool from "../SearchTool/SearchTool";


function BottomNav() {

  const [isClicked, setIsClicked] = useState(false)
  const [btnText, setBtnText] = useState("tools");

  useEffect(() => {
    setBtnText(!isClicked ? "tools" : "close")
  }, [isClicked])

  const filters = [
    { id: 0, title: "by genre", options: ["men", "women", "non-binary", "trans", "other"] },
    { id: 1, title: "by date of birth", options: [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000] },
    {
      id: 2, title: "by place of birth", options: [
        "Lower Uele",
        "Equateur",
        "East Kasai",
        "Ituri",
        "Kasai",
        "Kasai - Central",
        "Kinshasa",
        "Kongo Central",
        "Kwango",
        "Kwilu",
        "Lomami",
        "Lualaba",
        "Mai - Ndombe",
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
        "Upper Uele"
      ]
    },
    { id: 3, title: "first published in", options: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020] },
    { id: 4, title: "by languages", options: ["English", "French", "Lingala", "Tshiluba", "Kikongo", "Swahili", "German", "Dutch"] },
    { id: 5, title: " by publishers", options: ["publisher 1", "publisher 2", "publisher 3", "publisher 4"] },
  ];
  const sorting = [
    { id: 0, title: "alphabetical" },
    { id: 1, title: "ascending" },
    { id: 2, title: "decending" },
    { id: 3, title: "newest first" },
    { id: 4, title: "oldest first" },
  ];

  function handleClick() {
    setIsClicked((c) => !c)
  }


  return (
    <nav role="search bar" className={styles.container}>
      {isClicked ?
        <>
          <SearchTool name="filters" items={filters} />
          <SearchTool name="sort by" items={sorting} />
        </> : null}


      <button onClick={handleClick}>{btnText}</button>
      <input name="search bar" type="search" placeholder="search" />
    </nav>
  );
}

export default BottomNav;
