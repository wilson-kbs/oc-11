import styles from "./Home.module.scss";
import content from "src/contents/pages/home.json";

import type { IHousing } from "src/types/models/IHousing.ts";

import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import RoutesService from "src/services/RoutesService.ts";

import Banner from "src/components/common/banner/Banner.tsx";
import HousingsView from "src/components/home/housingsView/HousingsView.tsx";

import bannerImage from "public/images/banner-home.jpg";

function Home() {
  const housings = useLoaderData() as IHousing[];

  useEffect(() => {
    document.title = RoutesService.getPageTitle(content.title);
  }, []);

  return (
    <div className={styles.Home}>
      <Banner
        className={styles.Home__Banner}
        title={content.body.banner.title}
        imageUrl={bannerImage}
        opacity={0.6}
      />
      <HousingsView className={styles.Home__HousingView} housings={housings} />
    </div>
  );
}

export default Home;
