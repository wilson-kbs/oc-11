import styles from "./HousingsView.module.scss";
import type { IHousing } from "src/types/models/IHousing.ts";

import HousingCard from "src/components/home/housingCard/HousingCard.tsx";

interface HousingsViewProps {
  className?: string;
  housings: IHousing[];
}

function HousingsView({ className, ...props }: HousingsViewProps) {
  return (
    <div className={`${className} ${styles.HousingsView}`}>
      <div className={styles.HousingsView__list}>
        {props.housings.map((housing, index) => (
          <HousingCard
            className={styles.HousingsView__item}
            key={index}
            housing={housing}
          />
        ))}
      </div>
    </div>
  );
}

export default HousingsView;
