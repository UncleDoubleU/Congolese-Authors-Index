import { useEffect, useState } from "react";
import styles from "./BottomNav.module.sass";
import SearchTool from "../SearchTool/SearchTool";

function BottomNav() {

  const [isClicked, setIsClicked] = useState(false)
  const [btnText, setBtnText] = useState("tools");

  useEffect(() => {
    setBtnText(!isClicked ? "search tools" : "close")
  }, [isClicked])

  const filters = [
    { id: 0, title: "by genre" },
    { id: 1, title: "by date of birth" },
    { id: 2, title: "by place of birth" },
    { id: 3, title: "first published in" },
    { id: 4, title: "by languages" },
    { id: 5, title: " by publishers" },
  ];
  const sorting = [
    { id: 0, title: "alphabetical" },
    { id: 1, title: "ascending" },
    { id: 2, title: "decending" },
    { id: 3, title: "newest first" },
    { id: 4, title: "oldest first" },
  ];

  function handleClick() {
    setIsClicked((c) => !c);
  }

  return (
    <nav role="search bar" className={styles.container}>
      {isClicked ? (
        <>
          <SearchTool name="filters" items={filters} />
          <SearchTool name="sort by" items={sorting} />
        </>
      ) : null}

      <button onClick={handleClick}>{btnText}</button>
      <input name="search bar" type="search" placeholder="search" />
    </nav>
  );
}

export default BottomNav;
