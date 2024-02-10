import styles from "./HousingsView.module.scss";
import HousingCard from "src/components/home/housingCard/HousingCard.tsx";
interface HousingsViewProps {
  className?: string;
}

function HousingsView({ className }: HousingsViewProps) {
  const count = 6;
  return (
    <div className={`${styles.HousingsView} ${className}`}>
      <div className={styles.HousingsView__list}>
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <HousingCard key={index} />
          ))}
      </div>
    </div>
  );
}

export default HousingsView;
