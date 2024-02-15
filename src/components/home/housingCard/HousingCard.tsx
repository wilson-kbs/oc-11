import styles from "./HousingCard.module.scss";
import content from "src/contents/pages/home.json";
import type { IHousing } from "src/types/models/IHousing.ts";

interface HousingCardProps {
  className?: string;
  housing: IHousing;
}

function HousingCard({ className, ...props }: HousingCardProps) {
  return (
    <article className={`${styles.HousingCard} ${className}`}>
      <img src={props.housing.cover} alt={content.body.housings.cover.alt} />
      <h2>{props.housing.title}</h2>
    </article>
  );
}

export default HousingCard;
