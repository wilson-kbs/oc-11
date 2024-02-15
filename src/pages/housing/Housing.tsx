import styles from "./Housing.module.scss";
import content from "src/contents/pages/housing.json";

import type { IHousing } from "src/types/models/IHousing.ts";

import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import RoutesService from "src/services/RoutesService.ts";

import Gallery from "src/components/housing/gallery/Gallery.tsx";
import Rating from "src/components/housing/rating/Rating.tsx";
import Dropdown from "src/components/common/dropdown/Dropdown.tsx";
import Host from "src/components/housing/host/Host.tsx";

function Housing() {
  const housing = useLoaderData() as IHousing;

  useEffect(() => {
    document.title = RoutesService.getPageTitle(housing.title, content.title);
  }, [housing.title]);

  return (
    <article className={styles.Housing}>
      <Gallery pictures={housing.pictures} />
      <div className={styles.Housing__Content}>
        <div className={styles.Housing__Content_wrapperA}>
          <div className={styles.Housing__title}>{housing.title}</div>
          <div className={styles.Housing__location}>{housing.location}</div>
          <div className={styles.Housing__tags}>{housing.tags}</div>
        </div>
        <div className={styles.Housing__Content_wrapperB}>
          <Host host={housing.host} />
          <Rating rating={housing.rating} />
        </div>
      </div>
      <div className={styles.Housing__info}>
        <Dropdown title={content.body.dropdown.description}>
          {housing.description}
        </Dropdown>
        <Dropdown title={content.body.dropdown.equipments}>
          {housing.equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
        </Dropdown>
      </div>
    </article>
  );
}

export default Housing;
