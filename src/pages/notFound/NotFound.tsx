import styles from "./NotFound.module.scss";
import content from "src/contents/pages/notFound.json";

import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = content.title;
  }, []);

  return (
    <div className={styles.NotFound}>
      <h1>{content.body.title}</h1>
      <p>{content.body.message}</p>
      <Link to={content.body.links.backToHome.href}>
        {content.body.links.backToHome.title}
      </Link>
    </div>
  );
}

export default NotFound;
