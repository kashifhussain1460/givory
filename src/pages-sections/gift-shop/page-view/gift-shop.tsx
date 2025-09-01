import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
import Newsletter from "components/newsletter";
// LOCAL CUSTOM COMPONENTS
import Sidebar from "../sidebar";
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";
import Grocery1Section3 from "../../grocery-1/section-3";
// API FUNCTIONS
import api from "utils/__api__/gift-shop";
import api2 from "utils/__api__/grocery-2";
import Section1GiftShop from "../../grocery-2/section-1";
import StickyWrapper from "components/sticky-wrapper";
import { MobileNavigationBar2 } from "components/mobile-navigation";
import Section3GiftShop from "../../fashion-1/section-3";
export default async function GiftShopPageView() {
  const allProducts = await api.getAllProducts();
  const serviceList = await api.getServiceList();
  const topCategories = await api.getTopCategories();
  const mainCarouselData = await api2.getMainCarousel();
  const popularProducts = await api.getPopularProducts();
  const topSailedProducts = await api.getTopSailedProducts();
  const categoryNavigation = await api.getCategoryNavigation();
  const SideNav = <Sidebar navList={categoryNavigation} />;
  return (
    <Fragment>
      {/* TOP HERO AREA */}
      <StickyWrapper SideNav={SideNav}>
        <Section1GiftShop carouselData={mainCarouselData} />

        {/* SERVICE LIST AREA */}
        {/* <Section2 serviceList={serviceList} /> */}

        {/* OFFER BANNER AREA */}
        <Section3GiftShop />
        {/* POPULAR PRODUCT AREA */}
        <Grocery1Section3 title="Shop By Occasions & Relations" products={popularProducts} />

        {/* POPUP NEWSLETTER FORM */}
        <Newsletter image="/assets/images/newsletter/bg-5.png" />
        {/* SMALL DEVICE BOTTOM NAVIGATION */}
        <MobileNavigationBar2>{SideNav}</MobileNavigationBar2>
      </StickyWrapper>
    </Fragment>
  );
}
