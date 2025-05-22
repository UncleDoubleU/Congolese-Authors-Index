import { useEffect, useState } from "react";
import styles from "./BottomNav.module.sass";

function BottomNav() {

  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [contClass, setContClass] = useState(`${styles.hidden}`)
  const [listH3Class, setListH3Class] = useState(`${styles.listH3}`)
  const [listClass, setListClass] = useState(`${styles.hidden}`)
  const [btnText, setBtnText] = useState("search tools");
  const activeRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    setContClass(!isClicked ? `${styles.hidden}` : `${styles.searchToolCont}`)
    stylesChanger()

  }, [isClicked])
  // useEffect(() => {

  //   setListH3Class(!isVisible ? `${styles.listH3}` : `${styles.listH3Active}`)
  // }, [isVisible])

  function handleClick() {
    setIsClicked((c) => !c)


  }

  function titleClick(e) {
    setIsVisible((c) => !c)
    console.log(e)
  }

  function stylesChanger() {
    setListClass(!isVisible ? `${styles.listH3}` : `${styles.listH3Active}`)
  }


  return (
    <nav role="search bar" className={styles.container}>
      <section className={contClass}>
        <article onClick={stylesChanger} className={styles.searchToolItem}>
          <h3 className={listH3Class}><span className={styles.listTitle}>filters</span><span aria-hidden="true" className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M6.06934 4.51562V10L3.93066 9.14941V4.51562L0 0H10L6.06934 4.51562Z" fill="#110404" />
          </svg></span></h3>
          <ul className={listClass}>
            <li className={styles.listItem}>
              <a href="#">filter 1</a>
            </li >
            <li className={styles.listItem}>
              <a href="#">filter 2</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">filter 3</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">filter 4</a>
            </li>
          </ul>
        </article>
      </section>
      <section className={contClass}>
        <article onClick={stylesChanger} className={styles.searchToolItem}>
          <h3 className={listH3Class}><span className={styles.listTitle}>sort by</span><span aria-hidden="true" className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11" fill="#110404">
            <path d="M4 0L8 4.71429H0L4 0Z" fill="#110404" />
            <path d="M4 11L0 6.28571L8 6.28572L4 11Z" fill="#110404" />
          </svg></span></h3>
          <ul className={listClass}>
            <li className={styles.listItem}>
              <a href="#">filter 5</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">filter 6</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">filter 7</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">filter 8</a>
            </li>
          </ul>
        </article>
      </section>
      <button onClick={handleClick}>{btnText}</button>
      <input name="search bar" type="search" placeholder="search" />
    </nav>
  );
}

export default BottomNav;
