import { Metadata } from "next";
import GiftShopPageView from "pages-sections/gift-shop/page-view";
import ShopLayout3 from "components/layouts/shop-layout-3";

export const metadata: Metadata = {
  title: "Givory - Beyond Gifting, It's Givory",
  description: `Givory is a platform for buying and selling gifts. It is a platform for buying and selling gifts.`,
  authors: [{ name: "Givory", url: "https://givory.com" }],
  keywords: ["Givory", "Gifting", "Gifts", "Givory.com", "Givory.in"]
};

export default function GiftShopPage() {
  return (
    <ShopLayout3>
      <GiftShopPageView />
    </ShopLayout3>
  );
}
