import styles from "./Tag.module.scss";
interface TagProps {
  className?: string;
}

function Tag({ className }: TagProps) {
  return <div className={`${styles.Tag} ${className}`}>TAG</div>;
}

export default Tag;
