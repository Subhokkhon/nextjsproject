import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.programParent}>
        <img
          className={styles.programIcon}
          loading="lazy"
          alt=""
          src="/program.svg"
        />
        <div className={styles.programWrapper}>
          <h3 className={styles.program}>Program</h3>
        </div>
      </div>
      <div className={styles.anEventWithVenueAndDateParent}>
        <div className={styles.anEventWith}>
          An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition,
          Performance or Competition.
        </div>
        <div className={styles.wrapperGroup1210}>
          <img
            className={styles.wrapperGroup1210Child}
            loading="lazy"
            alt=""
            src="/group-1210.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
