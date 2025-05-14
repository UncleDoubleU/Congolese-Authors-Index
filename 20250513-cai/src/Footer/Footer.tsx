import styles from "./Footer.module.sass";
import BottomNav from "../BottomNav/BottomNav";
function Footer() {
  return (
    <footer>
      <BottomNav />
      <a href="/">Congolese Authors Index</a>
      <p>
        This website serves as a comprehensive and user-friendly platform
        dedicated to showcasing authors and writers born in the Democratic
        Republic of Congo by collecting publicly available information from
        across the web.
      </p>
      <nav>
        <ul>
          <li>
            <button>manage cookies</button>
          </li>
          <li>
            <button>to navigation bar</button>
          </li>
          <li>
            <p>© 2025 Congolese Authors Index.</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
