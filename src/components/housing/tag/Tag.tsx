import styles from "./Tag.module.scss";
interface TagProps {
  className?: string;
  content?: string;
}

function Tag({ className, ...props }: TagProps) {
  return <div className={`${className} ${styles.Tag}`}>{props.content}</div>;
}

export default Tag;
