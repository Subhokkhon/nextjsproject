import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./nav-bar.module.css";

export type NavBarType = {
  className?: string;

  /** Style props */
  navbarBackgroundFlexWrap?: CSSProperties["flexWrap"];
  navbarBackgroundPosition?: CSSProperties["position"];
  navbarBackgroundTop?: CSSProperties["top"];
};

const NavBar: NextPage<NavBarType> = ({
  className = "",
  navbarBackgroundFlexWrap,
  navbarBackgroundPosition,
  navbarBackgroundTop,
}) => {
  const navBarStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: navbarBackgroundFlexWrap,
      position: navbarBackgroundPosition,
      top: navbarBackgroundTop,
    };
  }, [navbarBackgroundFlexWrap, navbarBackgroundPosition, navbarBackgroundTop]);

  return (
    <section
      className={[styles.navbar, className].join(" ")}
      style={navBarStyle}
    >
      <div className={styles.navbarBackground} />
      <img
        className={styles.hobbycueLogoV21}
        loading="lazy"
        alt=""
        src="/hobbycue-logo-v2-1@2x.png"
      />
      <div className={styles.navbarRight}>
        <div className={styles.searchInputBackgroundParent}>
          <div className={styles.searchInputBackground} />
          <div className={styles.searchInput}>
            <a className={styles.searchHere}>Search here...</a>
          </div>
          <div className={styles.searchIconButtonBackgroundParent}>
            <div className={styles.searchIconButtonBackground} />
            <img
              className={styles.icons8Search1}
              alt=""
              src="/icons8-search-1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.userActionsParent}>
          <div className={styles.userActions}>
            <div className={styles.exploreParent}>
              <img className={styles.exploreIcon} alt="" src="/explore.svg" />
              <div className={styles.hobbiesButton}>
                <a className={styles.explore}>Explore</a>
              </div>
              <img
                className={styles.icons8ExpandArrow1}
                alt=""
                src="/icons8-expand-arrow-1.svg"
              />
            </div>
          </div>
          <div className={styles.userActions1}>
            <div className={styles.hobbiesParent}>
              <img className={styles.hobbiesIcon} alt="" src="/hobbies.svg" />
              <div className={styles.hobbiesWrapper}>
                <a className={styles.hobbies}>Hobbies</a>
              </div>
              <img
                className={styles.icons8ExpandArrow11}
                alt=""
                src="/icons8-expand-arrow-1.svg"
              />
            </div>
          </div>
          <div className={styles.userActions2}>
            <img
              className={styles.bookmarkBlack24dp1Icon}
              loading="lazy"
              alt=""
              src="/bookmark-black-24dp-1.svg"
            />
          </div>
          <div className={styles.userActions3}>
            <img
              className={styles.notificationsBlack24dp1Icon}
              loading="lazy"
              alt=""
              src="/notifications-black-24dp-1.svg"
            />
          </div>
          <div className={styles.userActions4}>
            <img
              className={styles.product3Icon}
              loading="lazy"
              alt=""
              src="/product-3.svg"
            />
          </div>
          <div className={styles.userProfile}>
            <img
              className={styles.profilePictureIcon}
              loading="lazy"
              alt=""
              src="/ellipse-23@2x.png"
            />
            <div className={styles.arrowWrapper}>
              <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
