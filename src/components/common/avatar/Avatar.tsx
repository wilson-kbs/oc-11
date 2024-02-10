import styles from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
}

function Avatar({ className }: AvatarProps) {
  return <div className={`${styles.Avatar} ${className}`}>AVATAR</div>;
}

export default Avatar;
