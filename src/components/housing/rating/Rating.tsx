import styles from "./Rating.module.scss";

interface RatingProps {
  className?: string;
  rating?: number | string;
}

function Rating({ className, ...props }: RatingProps) {
  return <div className={`${styles.Rating} ${className}`}>{props.rating}</div>;
}

export default Rating;
