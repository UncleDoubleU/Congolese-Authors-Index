import { useState, useEffect } from "react";
import styles from "./Navbar.module.sass";

function Navbar() {
  // const [navClass, setNavClass] = useState(`${styles.nav}`);

  const [btnText, setBtnText] = useState("menu");
  const [isClicked, setIsClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setBtnText(isClicked ? "close" : "menu");
  }, [isClicked]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setIsClicked(false);
  }

  function navBtnClick() {
    setIsClicked((c) => !c);
  }

  function linkClick() {
    setIsClicked((c) => !c);
  }

  function handleScroll() {
    setIsClicked(false);
  }

  const showMenu = width <= 768 ? !isClicked : true;
  const ulClass = showMenu ? `${styles.navList}` : `${styles.active}`;

  return (
    <nav role="main navigation" className={styles.nav}>
      <a className={styles.navLogo} href="#">
        Congolese Authors&nbsp;Index
      </a>
      <button onClick={navBtnClick} className={styles.navBtn}>
        {btnText}
      </button>

      <ul className={ulClass}>
        <li>
          <a onClick={linkClick} className={styles.navLink} href="#">
            Index
          </a>
        </li>
        <li>
          <a onClick={linkClick} className={styles.navLink} href="#">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
