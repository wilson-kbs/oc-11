import styles from "./PageWrapper.module.scss";

import { Outlet } from "react-router-dom";

import Header from "src/components/layouts/header/Header.tsx";
import Main from "src/components/layouts/main/Main.tsx";
import Footer from "src/components/layouts/footer/Footer.tsx";

function PageWrapper() {
  return (
    <div className={styles.PageWrapper}>
      <Header className={styles.PageWrapper__Header} />
      <Main className={styles.PageWrapper__Main}>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default PageWrapper;
