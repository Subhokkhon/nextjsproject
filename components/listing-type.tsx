import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./listing-type.module.css";

export type ListingTypeType = {
  className?: string;
  groupsBlack24dp11?: string;
  people?: string;
  anIndividualOrOrganizatio?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const ListingType: NextPage<ListingTypeType> = ({
  className = "",
  groupsBlack24dp11,
  people,
  anIndividualOrOrganizatio,
  propBorder,
  propBackgroundColor,
}) => {
  const listingTypeStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  return (
    <div
      className={[styles.listingType, className].join(" ")}
      style={listingTypeStyle}
    >
      <div className={styles.listingTypeChild} />
      <div className={styles.listingTypeIcon}>
        <img
          className={styles.groupsBlack24dp11}
          loading="lazy"
          alt=""
          src={groupsBlack24dp11}
        />
        <div className={styles.peopleListingType}>
          <h3 className={styles.people}>{people}</h3>
        </div>
      </div>
      <div className={styles.anIndividualOr}>{anIndividualOrOrganizatio}</div>
    </div>
  );
};

export default ListingType;
