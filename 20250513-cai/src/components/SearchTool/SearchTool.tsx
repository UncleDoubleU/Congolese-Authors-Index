import { useState, useEffect, useRef } from "react";
import styles from "./SearchTool.module.sass";

interface SearchToolProps {
  name: string;
  items: { id: number; title: string }[];
}

function SearchTool({ name, items }: SearchToolProps) {
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
    { setBtnText(isClicked ? "close" : "search tools") }

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




  const listItems = items.map((item) => (
    <option key={item.id} className={styles.listItem}>{item.title}</option>
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
    <section key={name} ref={contRef} role="button" className={contStyle}>
      <label htmlFor="search tools" className={listH3Syle}>
        {name}
        <select name="search tools">
          {listItems}
        </select>
      </label>
      <button onClick={handleClick}>{btnText}</button>
    </section>
  );
}

export default SearchTool;
