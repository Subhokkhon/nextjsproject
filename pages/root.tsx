import type { NextPage } from "next";
import styles from "./root.module.css";

const Root: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.rootChild} />
      <div className={styles.groupsBlack24dp11Parent}>
        <img
          className={styles.groupsBlack24dp11}
          loading="lazy"
          alt=""
          src="/groups-black-24dp-1-13.svg"
        />
        <div className={styles.peopleWrapper}>
          <a className={styles.people}>People</a>
        </div>
      </div>
      <div className={styles.anIndividualOr}>
        An Individual or Organization. Teacher, Coach, Professional or Online
        Seller. Company, Business or Association.
      </div>
    </div>
  );
};

export default Root;
