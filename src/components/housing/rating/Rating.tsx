import styles from "./Rating.module.scss";
import starSvg from "public/images/icons/star.svg";
import starActiveSvg from "public/images/icons/star-active.svg";

interface RatingProps {
  className?: string;
  rating?: number | string;
}

function Rating({ className, ...props }: RatingProps) {
  const ratingDisplay = Array.from({ length: 5 }, (_, index) => {
    return index < Number(props.rating);
  });

  return (
    <div className={`${styles.Rating} ${className}`}>
      {ratingDisplay.map((active, index) => (
        <img
          key={index}
          className={`${styles.Rating__icon} ${active ? styles.Rating__icon_active : ""}`}
          src={active ? starActiveSvg : starSvg}
        />
      ))}
    </div>
  );
}

export default Rating;
