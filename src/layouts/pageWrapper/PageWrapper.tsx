import styles from "./PageWrapper.module.scss";

import { Outlet } from "react-router-dom";

import Header from "src/components/layouts/header/Header.tsx";
import Footer from "src/components/layouts/footer/Footer.tsx";

function PageWrapper() {
  return (
    <div className={styles.PageWrapper}>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}

export default PageWrapper;
