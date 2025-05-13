import styles from "./Navbar.module.sass";

function Navbar() {
  function handleClick() {
    const liEl = document.getElementById("nav-list");
    const menuBtn = document.getElementById("menu-btn");
    if (liEl && menuBtn) {
      liEl.style.display === "inline-flex"
        ? (liEl.style.display = "none") && (menuBtn.textContent = "menu")
        : (liEl.style.display = "inline-flex") &&
          (menuBtn.textContent = "close");
    }
  }

  return (
    <nav className={styles.nav}>
      <a className={styles.navLogo} href="/">
        Congolese Authors Index
      </a>
      <button id="menu-btn" onClick={handleClick} className={styles.mobileBtn}>
        menu
      </button>
      <ul id="nav-list" className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/">index</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">about</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
