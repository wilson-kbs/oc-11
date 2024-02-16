import styles from "./Gallery.module.scss";
import { useMemo, useState } from "react";

interface GalleryProps {
  className?: string;
  pictures: string[];
}

function Gallery({ className, ...props }: GalleryProps) {
  const [currentPicture, setCurrentPicture] = useState<string>(
    props.pictures[0],
  );

  const currentPictureIndex = useMemo(() => {
    return props.pictures.indexOf(currentPicture!) + 1;
  }, [currentPicture, props.pictures]);

  const hasMultiplePictures = props.pictures.length > 1;

  const getNextPicture = () => {
    const currentIndex = props.pictures.indexOf(currentPicture!);
    const nextIndex = currentIndex + 1;
    if (nextIndex < props.pictures.length) {
      setCurrentPicture(props.pictures[nextIndex]);
    } else {
      setCurrentPicture(props.pictures[0]);
    }
  };

  const getPreviousPicture = () => {
    const currentIndex = props.pictures.indexOf(currentPicture!);
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setCurrentPicture(props.pictures[previousIndex]);
    } else {
      setCurrentPicture(props.pictures[props.pictures.length - 1]);
    }
  };

  return (
    <div className={`${styles.Gallery} ${className && className}`}>
      {hasMultiplePictures && (
        <>
          <div className={styles.Gallery__left}>
            <img
              className={styles.Gallery__btn_arrow}
              onClick={getPreviousPicture}
              src="/images/icons/arrow.svg"
            />
          </div>
          <div className={styles.Gallery__right}>
            <img
              className={styles.Gallery__btn_arrow}
              onClick={getNextPicture}
              src="/images/icons/arrow.svg"
            />
          </div>
        </>
      )}
      <div className={styles.Gallery__content}>
        <img
          className={styles.Gallery__content_img}
          src={currentPicture}
          alt="Housing"
        />
        {hasMultiplePictures && (
          <p className={styles.Gallery__content_text}>
            {currentPictureIndex} / {props.pictures.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default Gallery;
