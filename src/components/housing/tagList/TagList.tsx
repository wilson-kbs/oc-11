import styles from "./TagList.module.scss";

interface TagListProps {
  className?: string;
}

function TagList({ className }: TagListProps) {
  return <div className={`${styles.TagList} ${className}`}>TAG LIST</div>;
}

export default TagList;
