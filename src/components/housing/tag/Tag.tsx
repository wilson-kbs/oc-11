import styles from "./Tag.module.scss";
interface TagProps {
  className?: string;
  content?: string;
}

function Tag({ className, ...props }: TagProps) {
  return <div className={`${styles.Tag} ${className}`}>{props.content}</div>;
}

export default Tag;
