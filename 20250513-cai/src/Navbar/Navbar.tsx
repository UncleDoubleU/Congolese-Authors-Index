import { useState, useEffect } from "react";
import styles from "./Navbar.module.sass";

function Navbar() {
  const [navClass, setNavClass] = useState(`${styles.nav}`);
  const [listClass, setListClass] = useState(`${styles.hidden}`);
  const [btnText, setBtnText] = useState("menu");
  const [isClicked, setIsClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  useEffect(() => {
    if (!isClicked) {
      setBtnText("menu");
      setListClass(`${styles.hidden}`);
    } else {
      setBtnText("close");
      setListClass(`${styles.ul}`);
    }
  }, [isClicked]);

  return (
    <nav className={styles.nav}>
      <a className={styles.topNavLogo} href="#">
        Congolese Authors Index
      </a>
      <button onClick={handleClick} className={styles.navBtn}>
        {btnText}
      </button>
      <ul className={listClass}>
        <li>
          <a className={styles.navLink} href="#">
            Index
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
