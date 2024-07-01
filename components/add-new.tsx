import type { NextPage } from "next";
import NavBar from "./nav-bar";
import ListingType from "./listing-type";
import FrameComponent1 from "./frame-component1";
import styles from "./add-new.module.css";

export type AddNewType = {
  className?: string;
};

const AddNew: NextPage<AddNewType> = ({ className = "" }) => {
  return (
    <div className={[styles.addNew, className].join(" ")}>
      <NavBar />
      <section className={styles.content}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.addListingCard}>
            <div className={styles.addListingContent}>
              <img
                className={styles.addIcon}
                loading="lazy"
                alt=""
                src="/add1.svg"
              />
              <div className={styles.addListingTitle}>
                <h2 className={styles.addYourListing}>Add Your Listing</h2>
              </div>
            </div>
          </div>
          <div className={styles.listingTypes}>
            <div className={styles.listingTypeParent}>
              <ListingType
                groupsBlack24dp11="/groups-black-24dp-1-12.svg"
                people="People"
                anIndividualOrOrganizatio="An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association."
              />
              <ListingType
                groupsBlack24dp11="/location-on-black-24dp-1.svg"
                people="Place"
                anIndividualOrOrganizatio="An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
                propBorder="2px solid #77933c"
                propBackgroundColor="#fff"
              />
            </div>
            <FrameComponent1 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddNew;
