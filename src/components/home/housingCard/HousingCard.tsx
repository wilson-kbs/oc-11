import styles from "./HousingCard.module.scss";
import content from "src/contents/pages/home.json";
import type { IHousing } from "src/types/models/IHousing.ts";
import RoutesService from "src/services/RoutesService.ts";
import { Link } from "react-router-dom";

interface HousingCardProps {
  className?: string;
  housing: IHousing;
}

function HousingCard({ className, ...props }: HousingCardProps) {
  return (
    <Link
      className={`${styles.HousingCard} ${className}`}
      to={RoutesService.getHousingRoute(props.housing.id)}
    >
      <article className={styles.HousingCard__content}>
        <img
          className={styles.HousingCard__Cover}
          src={props.housing.cover}
          alt={content.body.housings.cover.alt}
        />
        <div className={styles.HousingCard__mask}></div>
        <h2 className={styles.HousingCard__Title}>{props.housing.title}</h2>
      </article>
    </Link>
  );
}

export default HousingCard;
