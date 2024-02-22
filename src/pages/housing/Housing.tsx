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
import Tag from "src/components/housing/tag/Tag.tsx";

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
          <h1 className={styles.Housing__title}>{housing.title}</h1>
          <p className={styles.Housing__location}>{housing.location}</p>
          <div className={styles.Housing__tags}>
            {housing.tags.map((tag) => (
              <Tag
                key={tag}
                className={styles.Housing__tags_item}
                content={tag}
              />
            ))}
          </div>
        </div>
        <div className={styles.Housing__Content_wrapperB}>
          <Host className={styles.Housing__host} host={housing.host} />
          <Rating className={styles.Housing__rating} rating={housing.rating} />
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
