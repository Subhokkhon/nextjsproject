import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import OrContinueWith from "./or-continue-with";
import styles from "./loginlight.module.css";

export type LoginlightType = {
  className?: string;
};

const Loginlight: NextPage<LoginlightType> = ({ className = "" }) => {
  return (
    <div className={[styles.loginlight, className].join(" ")}>
      <FrameComponent
        groupsBlack24dp11="/groups-black-24dp-1-11.svg"
        people="People"
        anIndividualOrOrganizatio="An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association."
        propBorder="unset"
        propBackgroundColor="#8064a2"
      />
      <OrContinueWith
        place="/place1.svg"
        place1="Place"
        anAddressClassroomShopPer="An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
      />
      <OrContinueWith
        place="/product-21.svg"
        place1="Product"
        anAddressClassroomShopPer="An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit."
        propBackgroundColor="#c0504d"
        propBorder="unset"
      />
      <OrContinueWith
        place="/program1.svg"
        place1="Program"
        anAddressClassroomShopPer="An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition."
        propBackgroundColor="#0096c8"
        propBorder="unset"
      />
    </div>
  );
};

export default Loginlight;
