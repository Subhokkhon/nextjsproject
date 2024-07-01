import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const MyCues: NextPage = () => {
  return (
    <div className={styles.myCues}>
      <div className={styles.wrapperNaveBarResponsive}>
        <img
          className={styles.naveBarResponsive}
          alt=""
          src="/nave-bar-responsive.svg"
        />
      </div>
      <div className={styles.myCuesInner}>
        <div className={styles.addParent}>
          <img
            className={styles.addIcon}
            loading="lazy"
            alt=""
            src="/add.svg"
          />
          <div className={styles.addYourListingWrapper}>
            <a className={styles.addYourListing}>Add Your Listing</a>
          </div>
        </div>
      </div>
      <main className={styles.myCuesChild}>
        <section className={styles.frameParent}>
          <FrameComponent
            groupsBlack24dp11="/groups-black-24dp-1-1.svg"
            people="People"
            anIndividualOrOrganizatio="An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association."
          />
          <FrameComponent
            groupsBlack24dp11="/place.svg"
            people="Place"
            anIndividualOrOrganizatio="An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
            propBorder="2px solid #77933c"
            propBackgroundColor="#fff"
          />
          <FrameComponent
            groupsBlack24dp11="/product-2.svg"
            people="Product"
            anIndividualOrOrganizatio="An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit."
            propBorder="2px solid #c0504d"
            propBackgroundColor="#fff"
          />
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default MyCues;
