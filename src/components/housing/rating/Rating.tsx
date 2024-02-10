import styles from "./Rating.module.scss";

interface RatingProps {
  className?: string;
}

function Rating({ className }: RatingProps) {
  return <div className={`${styles.Rating} ${className}`}>RATING</div>;
}

export default Rating;
