import { useState, useEffect } from "react";
import styles from "./Navbar.module.sass";

function Navbar() {
  const [navClass, setNavClass] = useState(`${styles.nav}`);
  const [btnText, setBtnText] = useState("menu");
  const [isClicked, setIsClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setBtnText(isClicked ? "close" : "menu");
  }, [isClicked]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  function navBtnClick() {
    setIsClicked((c) => !c);
  }

  const showMenu = width < 768 ? !isClicked : true;
  const ulClass = showMenu ? `${styles.navList}` : `${styles.active}`;

  return (
    <nav className={styles.nav}>
      <a className={styles.topNavLogo} href="#">
        Congolese Authors Index
      </a>
      <button onClick={navBtnClick} className={styles.navBtn}>
        {btnText}
      </button>

      <ul className={ulClass}>
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
