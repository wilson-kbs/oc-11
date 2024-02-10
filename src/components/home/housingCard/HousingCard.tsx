import styles from "./HousingCard.module.scss";

interface HousingCardProps {
  className?: string;
}

function HousingCard({ className }: HousingCardProps) {
  return (
    <div className={`${styles.HousingCard} ${className}`}>HOUSING CARD</div>
  );
}

export default HousingCard;
