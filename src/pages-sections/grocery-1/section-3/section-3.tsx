"use client";
import Box from "@mui/material/Box";

// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { SectionHeader } from "components/section-header";
// CUSTOM DATA MODEL
import Product from "models/Product.model";
// STYLED COMPONENT
import { SubTitle } from "../styles";
import ProductCard10 from "components/product-cards/product-card-3/product-card";

// =================================================================
type Props = { title: string; products: Product[] };
// =================================================================

export default function ProductCarousel({ products, title }: Props) {
  const responsive = [
    { breakpoint: 1440, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <div className="mb-3 m-1">
      <SectionHeader title={title} seeMoreLink="#" />
      <SubTitle>Surprise Your Loved Ones!</SubTitle>

      <Carousel
        responsive={responsive}
        slidesToShow={4}
        arrowStyles={{
          width: 30,
          height: 30,
          boxShadow: 2,
          borderRadius: 1,
          background: "white",
          color: "primary.main",
          transition: "all 0.4s ease"
        }}>
        {products.map((item) => (
          <Box pb={2} key={item.id}>
            <ProductCard10 {...item} imgUrl={item.thumbnail} off={item.discount} />
          </Box>
        ))}
      </Carousel>
    </div>
  );
}
