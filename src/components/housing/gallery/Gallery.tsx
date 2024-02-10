import styles from "./Gallery.module.scss";

interface GalleryProps {
  className?: string;
  pictures: string[];
}

function Gallery({ className, ...props }: GalleryProps) {
  return (
    <div className={`${styles.Gallery} ${className}`}>
      {props.pictures.map((picture, index) => (
        <img key={index} src={picture} alt="gallery" />
      ))}
    </div>
  );
}

export default Gallery;
