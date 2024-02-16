import styles from "./Avatar.module.scss";
import content from "src/contents/pages/housing.json";

interface AvatarProps {
  className?: string;
  url: string;
}

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <div className={`${styles.Avatar} ${className}`}>
      <img
        className={styles.Avatar__img}
        src={props.url}
        alt={content.body.host.avatar.alt}
      />
    </div>
  );
}

export default Avatar;
