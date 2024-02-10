import styles from "./Home.module.scss";
import content from "src/contents/pages/home.json";

import Banner from "src/components/common/banner/Banner.tsx";
import HousingsView from "src/components/home/housingsView/HousingsView.tsx";

function Home() {
  return (
    <div className={styles.Home}>
      <Banner title={content.body.banner.title} />
      <HousingsView />
    </div>
  );
}

export default Home;
