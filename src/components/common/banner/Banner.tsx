import React from "react";
import styles from "./Banner.module.scss";

interface BannerProps {
  className?: string;
  opacity?: number;
  title?: string;
  shadow?: boolean;
  imageUrl?: string;
}

function Banner({
  className,
  opacity = 0.6,
  shadow = true,
  ...props
}: BannerProps) {
  return (
    <div
      className={`${styles.Banner} ${className}`}
      style={
        {
          "--Banner-bg-opacity": opacity,
          boxShadow: !shadow ? "none" : "",
          backgroundImage: props.imageUrl && `url(${props.imageUrl})`,
        } as React.CSSProperties
      }
    >
      <p className={styles.Banner__title}>{props.title}</p>
    </div>
  );
}

export default Banner;
