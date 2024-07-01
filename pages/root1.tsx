import type { NextPage } from "next";
import styles from "./root1.module.css";

const Root: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.rootChild} />
      <div className={styles.basketCartEcommerceShoppingParent}>
        <img
          className={styles.basketCartEcommerceShoppingIcon}
          loading="lazy"
          alt=""
          src="/5402359-basket-cart-ecommerce-shopping-buy-icon-11.svg"
        />
        <div className={styles.productDetails}>
          <a className={styles.product}>Product</a>
        </div>
      </div>
      <div className={styles.anItemThat}>
        An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher.
        Equipment, Instrument or Activity Kit.
      </div>
    </div>
  );
};

export default Root;
