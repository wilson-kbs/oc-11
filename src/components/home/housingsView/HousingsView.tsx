import styles from "./HousingsView.module.scss";
import type { IHousing } from "src/types/models/IHousing.ts";

import { Link } from "react-router-dom";
import RoutesService from "src/services/RoutesService.ts";

import HousingCard from "src/components/home/housingCard/HousingCard.tsx";

interface HousingsViewProps {
  className?: string;
  housings: IHousing[];
}

function HousingsView({ className, ...props }: HousingsViewProps) {
  return (
    <div className={`${styles.HousingsView} ${className}`}>
      <div className={styles.HousingsView__list}>
        {props.housings.map((housing, index) => (
          <Link to={RoutesService.getHousingRoute(housing.id)} key={index}>
            <HousingCard housing={housing} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HousingsView;
