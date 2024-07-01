import type { NextPage } from "next";
import styles from "./frame-component11.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.basketCartEcommerceShoppingParent}>
          <img
            className={styles.basketCartEcommerceShoppingIcon}
            loading="lazy"
            alt=""
            src="/5402359-basket-cart-ecommerce-shopping-buy-icon-1.svg"
          />
          <div className={styles.productWrapper}>
            <h3 className={styles.product}>Product</h3>
          </div>
        </div>
        <div className={styles.anItemThat}>
          An Item that you can Book, Buy or Rent. Appointment, Ticket, or
          Voucher. Equipment, Instrument or Activity Kit.
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.programParent}>
          <img
            className={styles.programIcon}
            loading="lazy"
            alt=""
            src="/program2.svg"
          />
          <div className={styles.programWrapper}>
            <h3 className={styles.program}>Program</h3>
          </div>
        </div>
        <div className={styles.people}>People</div>
        <div className={styles.anEventWith}>
          An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition,
          Performance or Competition.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
