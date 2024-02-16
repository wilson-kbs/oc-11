import React from "react";
import styles from "./Dropdown.module.scss";
import type { PropsWithChildren } from "react";
import arrowIcon from "public/images/icons/dropdown-arrow.svg";

interface DropdownProps {
  className?: string;
  title?: string;
  titleTagName?: keyof HTMLElementTagNameMap;
}

type DefaultPropsKey = "title" | "titleTagName";
type DefaultPropsType = Required<Pick<DropdownProps, DefaultPropsKey>>;

const defaultProps: DefaultPropsType = {
  title: "Title",
  titleTagName: "h2",
};

function Dropdown({
  className = "",
  children,
  ...props
}: PropsWithChildren<DropdownProps>) {
  const data = Object.assign({}, defaultProps, props);

  const [open, setOpen] = React.useState(false);

  const getTitle = (tagName: DefaultPropsType["titleTagName"]) => {
    return React.createElement(
      tagName,
      {
        className: styles.Dropdown__title,
      },
      data.title,
    );
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <section
      className={`${styles.Dropdown} ${open ? styles.Dropdown_open : ""} ${className}`}
    >
      <header
        className={styles.Dropdown__header}
        onClick={() => handleToggle()}
      >
        {getTitle(data.titleTagName)}
        <div className={styles.Dropdown__header_icon}>
          <img src={arrowIcon} alt="Arrow" />
        </div>
      </header>
      <main className={styles.Dropdown__content}>{children}</main>
    </section>
  );
}

export default Dropdown;
