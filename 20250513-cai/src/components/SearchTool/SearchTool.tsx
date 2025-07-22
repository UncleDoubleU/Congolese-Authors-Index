import { useState, useEffect, useRef } from "react";
import styles from "./SearchTool.module.sass";

interface SearchToolProps {
  filtersName: string;
  sortingName: string;
  filters: { id: number; title: string; options: string[]; }[];
  dateRange: { id: number; title: string; placeholderFrom: number; placeholderTo: number; }[];
}

function SearchTool({ filtersName, sortingName, filters }: SearchToolProps) {
  const [isClicked, setIsClicked] = useState(false)
  const [btnText, setBtnText] = useState("search tools");
  const [listStyle, setListStyles] = useState(`${styles.hidden}`);
  const [listH3Syle, setListH3Style] = useState(`${styles.listH3}`);
  const [contStyle, setContStyle] = useState(`${styles.searchToolCont}`);
  const [width, setWidth] = useState(window.innerWidth)

  const contRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setListStyles(isClicked ? `${styles.list}` : `${styles.hidden}`)
    setListH3Style(isClicked ? `${styles.listH3Active}` : `${styles.listH3}`)
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
      <select className={styles.dropDown} name={item.title} defaultValue={""}>
        <option value="">{item.title}</option>
        {item.options.map((filter, index) => (
          <option key={index} value={filter}>{filter}</option>
        ))}
      </select>
    </label>

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

    <section key={filtersName} ref={contRef} role="button" className={contStyle}>
      <article>
        <h3 className={listH3Syle}>{filtersName}</h3>
        {filtersDropDown}
      </article>
      <article>
        <h3 className={listH3Syle}>{sortingName}</h3>
        {filtersDropDown}
      </article>
      <button onClick={handleClick}>{btnText}</button>
    </section >
  );
}

export default SearchTool;
