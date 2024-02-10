import styles from "./Gallery.module.scss";

interface GalleryProps {
  className?: string;
}

function Gallery({ className }: GalleryProps) {
  return <div className={`${styles.Gallery} ${className}`}>GALLERY</div>;
}

export default Gallery;
