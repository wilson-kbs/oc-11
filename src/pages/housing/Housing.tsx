import styles from "./Housing.module.scss";
import content from "src/contents/pages/housing.json";

import { useEffect } from "react";

import Gallery from "src/components/housing/gallery/Gallery.tsx";
import Avatar from "src/components/common/avatar/Avatar.tsx";
import Rating from "src/components/housing/rating/Rating.tsx";
import Dropdown from "src/components/common/dropdown/Dropdown.tsx";

interface HousingProps {}

function Housing({}: HousingProps) {
  const title = "";

  useEffect(() => {
    document.title = `${title} - ${content.title}`;
  }, [title]);

  return (
    <div className={styles.Housing}>
      <Gallery />
      <div className={styles.Housing__Content}>
        <div className={styles.Housing__Content_wrapperA}>
          <div className={styles.Housing__title}>HOUSING TITLE</div>
          <div className={styles.Housing__location}>HOUSING LOCATION</div>
          <div className={styles.Housing__tags}>TAGS</div>
        </div>
        <div className={styles.Housing__Content_wrapperB}>
          <Avatar />
          <Rating />
        </div>
      </div>
      <div className={styles.Housing__info}>
        <Dropdown title={content.body.dropdown.description} />
        <Dropdown title={content.body.dropdown.equipments} />
      </div>
    </div>
  );
}

export default Housing;
