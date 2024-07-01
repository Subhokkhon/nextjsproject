import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  groupsBlack24dp11?: string;
  people?: string;
  anIndividualOrOrganizatio?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  groupsBlack24dp11,
  people,
  anIndividualOrOrganizatio,
  propBorder,
  propBackgroundColor,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.groupsBlack24dp11Parent}>
        <img
          className={styles.groupsBlack24dp11}
          loading="lazy"
          alt=""
          src={groupsBlack24dp11}
        />
        <div className={styles.peopleWrapper}>
          <a className={styles.people}>{people}</a>
        </div>
      </div>
      <div className={styles.anIndividualOr}>{anIndividualOrOrganizatio}</div>
    </div>
  );
};

export default FrameComponent;
