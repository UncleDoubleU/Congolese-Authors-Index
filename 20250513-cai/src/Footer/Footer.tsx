import styles from "./Footer.module.sass";

function Footer() {
  return (
    <footer role="footer" className={styles.footer}>
      <section className={styles.socialMediaCont}>
        <article className={styles.socialMedia}>
          <ul>
            <li>
              <a href="/">Github</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="#">Back to top</a>
            </li>
          </ul>
        </article>
      </section>
      <section className={styles.info}>
        <a className={styles.logo} href="/">
          Congolese Authors Index
        </a>
        <p className={styles.description}>
          This website serves as a comprehensive and user-friendly platform
          dedicated to showcasing authors and writers born in the Democratic
          Republic of Congo by collecting publicly available information from
          across the web.
        </p>
      </section>
      <section className={styles.additionals}>
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
      </section>
    </footer>
  );
}

export default Footer;
