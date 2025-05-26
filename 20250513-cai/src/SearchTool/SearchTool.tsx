import { useState, useEffect, useRef } from "react";
import styles from "./SearchTool.module.sass";

function SearchTool({ name, items }) {
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [listStyle, setListStyles] = useState(`${styles.hidden}`)
  const [listH3Syle, setListH3Style] = useState(`${styles.listH3}`)
  const [contStyle, setContStyle] = useState(`${styles.searchToolCont}`)
  const contRef = useRef(null)

  useEffect(() => {
    setListStyles(isClicked ? `${styles.list}` : `${styles.hidden}`)
    setListH3Style(isClicked ? `${styles.listH3Active}` : `${styles.listH3}`)
    setContStyle(isClicked ? `${styles.searchToolCont} ${styles.active}` : `${styles.searchToolCont}`)

  }, [isClicked])

  useEffect(() => {

    document.addEventListener("click", handleOutsideClick)


    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  });



  const listItems = items.map((item) => (
    <li key={item.id} className={styles.listItem}>{item.title}</li>
  ));




  function handleClick() {
    setIsClicked((c) => !c);

  }

  function handleOutsideClick(e) {
    if (!contRef.current.contains(e.target)) { setIsClicked(false) };
  }


  return (
    <section key={name} ref={contRef} onClick={handleClick} role="button" className={contStyle}>
      <article>
        <h3 className={listH3Syle}>
          <span>{name}</span>
          <span aria-hidden="true" className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M6.06934 4.51562V10L3.93066 9.14941V4.51562L0 0H10L6.06934 4.51562Z"
                fill="#110404"
              />
            </svg>
          </span>
        </h3>

        <ul className={listStyle}>{listItems}</ul>
      </article>
    </section>
  );
}

export default SearchTool;
