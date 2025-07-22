import { useState, useEffect, useRef } from "react";
import styles from "./SearchTool.module.sass";

interface SearchToolProps {
  filtersName: string;
  sortingName: string;
  filters: { id: number; title: string; options: string[]; }[];
  sorting: { id: number; title: string; }[];
  date: { title: string; placeholderFrom: number; placeholderTo: number; };
}

function SearchTool({ filtersName, sortingName, filters, sorting, date }: SearchToolProps) {
  const [isClicked, setIsClicked] = useState(false)
  const [btnText, setBtnText] = useState("search tools");
  const [listStyle, setListStyles] = useState(`${styles.hidden}`);
  const [listH3Syle, setListH3Style] = useState(`${styles.listH3}`);
  const [contStyle, setContStyle] = useState(`${styles.searchToolCont}`);
  const [width, setWidth] = useState(window.innerWidth)

  const contRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setListStyles(isClicked ? `${styles.list}` : `${styles.hidden}`)
    setListH3Style(isClicked ? `${styles.listH3Active}` : `${styles.hidden}`)
    setContStyle(isClicked ? `${styles.searchToolCont} ${styles.active}` : `${styles.searchToolCont}`)
    setBtnText(isClicked ? "close" : "search tools")

  }, [isClicked])

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const filtersDropDown = filters.map((item) => (
    <label key={item.id} className={listStyle}>
      {item.title}
      <select className={styles.dropDown} name={item.title} multiple>
        <option key={item.title} value="">{item.title}</option>
        {item.options.map((filter, index) => (
          <option key={index} value={filter}>{filter}</option>
        ))}
      </select>
    </label>
  ));

  const sortingDropDown = sorting.map((item) => (
    <option value={item.title} key={item.id}>{item.title}</option>
  ));

  function handleClick() {
    setIsClicked((c) => !c);
  }

  function handleOutsideClick(e: MouseEvent) {
    if (contRef?.current && !contRef.current.contains(e.target as Node)) { setIsClicked(false) };
  }

  function handleResize() {
    setWidth(window.innerWidth)
  }

  return (

    <section key={filtersName} ref={contRef} className={contStyle}>
      <h2>Search Tools</h2>
      <article>
        <h3 className={listH3Syle}>{sortingName}</h3>
        <label className={listStyle}>{sortingName}
          <select name={sortingName}>
            {sortingDropDown}
          </select>
        </label>
      </article>

      <article>
        <label className={listStyle}>between
          <input
            aria-label="Publication date full year"
            type="number"
            min="1900"
            max={date.placeholderTo}
            step="1"
            // value={""}
            placeholder="YYYY" />
        </label>
        <label className={listStyle}>and
          <input
            aria-label="Publication date full year"
            type="number"
            min="1900"
            max={date.placeholderTo}
            step="1"
            // value={""}
            placeholder="YYYY" />
        </label>
      </article>

      <article>
        <h3 className={listH3Syle}>{filtersName}</h3>
        {filtersDropDown}
      </article>
      <button onClick={handleClick}>{btnText}</button>
    </section >
  );
}

export default SearchTool;
