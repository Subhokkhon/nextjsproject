import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./or-continue-with.module.css";

export type OrContinueWithType = {
  className?: string;
  place?: string;
  place1?: string;
  anAddressClassroomShopPer?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
};

const OrContinueWith: NextPage<OrContinueWithType> = ({
  className = "",
  place,
  place1,
  anAddressClassroomShopPer,
  propBackgroundColor,
  propBorder,
}) => {
  const orContinueWithStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  return (
    <section
      className={[styles.orContinueWith, className].join(" ")}
      style={orContinueWithStyle}
    >
      <div className={styles.orContinueWithChild} />
      <div className={styles.placeParent}>
        <img className={styles.placeIcon} loading="lazy" alt="" src={place} />
        <div className={styles.placeWrapper}>
          <div className={styles.place}>{place1}</div>
        </div>
      </div>
      <div className={styles.anAddressClassroom}>
        {anAddressClassroomShopPer}
      </div>
    </section>
  );
};

export default OrContinueWith;
