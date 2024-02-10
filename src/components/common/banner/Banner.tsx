import styles from "./Banner.module.scss";

interface BannerProps {
  className?: string;
  title?: string;
  imageUrl?: string;
}

function Banner({ className, ...props }: BannerProps) {
  return (
    <div
      className={`${styles.Banner} ${className}`}
      style={{ backgroundImage: props.imageUrl && `url(${props.imageUrl})` }}
    >
      <p className={styles.Banner__title}>{props.title}</p>
    </div>
  );
}

export default Banner;
