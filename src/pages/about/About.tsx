import styles from "./About.module.scss";
import content from "src/contents/pages/about.json";
import bannerImage from "public/images/banner-about.jpg";

import { useEffect } from "react";

import Banner from "src/components/common/banner/Banner.tsx";
import Dropdown from "src/components/common/dropdown/Dropdown.tsx";
import RoutesService from "src/services/RoutesService.ts";

function About() {
  useEffect(() => {
    document.title = RoutesService.getPageTitle(content.title);
  }, []);

  return (
    <div className={styles.About}>
      <Banner
        className={styles.About__Banner}
        imageUrl={bannerImage}
        opacity={0.3}
        shadow={false}
      />
      <div className={styles.About_content}>
        <Dropdown title={content.body.dropdowns.reliability.title}>
          {content.body.dropdowns.reliability.content}
        </Dropdown>
        <Dropdown title={content.body.dropdowns.respect.title}>
          {content.body.dropdowns.respect.content}
        </Dropdown>
        <Dropdown title={content.body.dropdowns.service.title}>
          {content.body.dropdowns.service.content}
        </Dropdown>
        <Dropdown title={content.body.dropdowns.security.title}>
          {content.body.dropdowns.security.content}
        </Dropdown>
      </div>
    </div>
  );
}

export default About;
