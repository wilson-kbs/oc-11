import styles from "./NotFound.module.scss";
import content from "src/contents/pages/notFound.json";

import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = content.title;
  }, []);

  return (
    <section className={styles.NotFound}>
      <header className={styles.NotFound__Header}>
        <h1 className={styles.NotFound__title}>{content.body.title}</h1>
      </header>
      <main className={styles.NotFound__Main}>
        <p className={styles.NotFound__message}>{content.body.message}</p>
      </main>
      <footer className={styles.NotFound__Footer}>
        <Link
          className={styles.NotFound__link}
          to={content.body.links.backToHome.href}
        >
          {content.body.links.backToHome.title}
        </Link>
      </footer>
    </section>
  );
}

export default NotFound;
