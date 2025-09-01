"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
// LOCAL CUSTOM HOOKS
import useProduct from "../use-product";
// ICONS
import Heart from "icons/Heart";
import CartIcon from "icons/Cart";
import Eye from "icons/Eye";
// STYLED COMPONENTS
import {
  ContentWrapper,
  ImageBox,
  ImageWrapper,
  StyledBazaarCard,
  HeartIconBox,
  DeliveryInfo,
  FloatingActions,
  PriceContainer,
  GradientOverlay,
  ProductBadge,
  AddToCartButton,
  RatingContainer,
  DeliveryChip
} from "./styles";
// UTILS
import { calculateDiscount, currency } from "lib";
import ProductPrice from "../product-card-2/components/product-price";

// ====================================================================
type Props = {
  off: number;
  slug: string;
  price: number;
  title: string;
  imgUrl: string;
  rating?: number;
  id: string | number;
  hideRating?: boolean;
  reviewCount?: number;
  deliveryText?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  stockStatus?: "in-stock" | "low-stock" | "out-of-stock";
};
// ====================================================================

export default function ProductCard10(props: Props) {
  const {
    off,
    id,
    title,
    price,
    imgUrl,
    rating = 4.9,
    hideRating,
    slug,
    reviewCount = 1639,
    deliveryText = "Tomorrow",
    isNew = false,
    isBestSeller = false,
    stockStatus = "in-stock"
  } = props;

  const { handleCartAmountChange, cartItem, isFavorite, openModal, toggleDialog, toggleFavorite } =
    useProduct(slug);

  const handleAddToCart = () => {
    const product = { price, imgUrl, id, name: title, qty: 1, slug };
    handleCartAmountChange(product);
  };

  const handleRemoveFormCart = () => {
    const product = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: cartItem.qty - 1
    };
    handleCartAmountChange(product, "remove");
  };

  return (
    <StyledBazaarCard>
      <ImageWrapper>
        {/* PRODUCT BADGES */}
        {isNew && (
          <ProductBadge className="new-badge">
            <Chip label="NEW" size="small" sx={{ backgroundColor: "#FF6B35", color: "white", fontWeight: 600, fontSize: "10px" }} />
          </ProductBadge>
        )}
        {isBestSeller && (
          <ProductBadge className="bestseller-badge" style={{ top: isNew ? "45px" : "12px" }}>
            <Chip label="BESTSELLER" size="small" sx={{ backgroundColor: "#4ECDC4", color: "white", fontWeight: 600, fontSize: "10px" }} />
          </ProductBadge>
        )}

        {/* FLOATING ACTION BUTTONS */}
        <FloatingActions className="floating-actions">
          <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"} placement="left">
            <IconButton
              size="small"
              onClick={toggleFavorite}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: isFavorite ? "#FF6B6B" : "#666",
                marginBottom: "8px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#FF6B6B",
                  transform: "scale(1.1)",
                  boxShadow: "0 8px 25px rgba(255, 107, 107, 0.3)"
                }
              }}
            >
              <Heart fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Quick view" placement="left">
            <IconButton
              size="small"
              onClick={toggleDialog}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#666",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#4ECDC4",
                  transform: "scale(1.1)",
                  boxShadow: "0 8px 25px rgba(78, 205, 196, 0.3)"
                }
              }}
            >
              <Eye fontSize="small" />
            </IconButton>
          </Tooltip>
        </FloatingActions>

        {/* DISCOUNT OVERLAY */}
        {off > 0 && (
          <GradientOverlay>
            <Chip
              label={`${off}% OFF`}
              sx={{
                background: "linear-gradient(135deg, #c70039 0%, #fa0048 100%)",
                color: "white",
                fontWeight: 700,
                fontSize: "11px",
                boxShadow: "0 4px 15px rgba(255, 107, 53, 0.4)"
              }}
            />
          </GradientOverlay>
        )}

        {/* PRODUCT IMAGE / THUMBNAIL */}
        <ImageBox>
          <Link href={`/products/${slug}`}>
            <LazyImage alt={title} width={200} height={200} src={imgUrl} />
          </Link>
        </ImageBox>
      </ImageWrapper>

      <ContentWrapper>
        {/* PRODUCT NAME / TITLE */}
        <Link href={`/products/${slug}`} style={{ textDecoration: "none" }}>
          <H3
            mb={1.5}
            title={title}
            fontSize={17}
            fontWeight={700}
            color="text.primary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: 1.3,
              transition: "color 0.3s ease",
              "&:hover": {
                color: "primary.main",
                transform: "translateY(-1px)"
              }
            }}
          >
            {title}
          </H3>
        </Link>

        {/* PRODUCT RATING / REVIEW  */}
        {!hideRating && (
          <RatingContainer sx={{ mb: 1.5 }}>
            <FlexBox alignItems="center" gap={1}>
              <Rating
                size="small"
                value={rating}
                readOnly
                precision={0.1}
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#FFD700"
                  },
                  "& .MuiRating-iconEmpty": {
                    color: "#E0E0E0"
                  }
                }}
              />
              <Paragraph fontSize={13} fontWeight={600} color="#FFD700">
                {rating}
              </Paragraph>
              <Paragraph fontSize={12} color="grey.500">
                ({reviewCount.toLocaleString()})
              </Paragraph>
            </FlexBox>
          </RatingContainer>
        )}

        {/* PRODUCT PRICE WITH DISCOUNT */}
        <PriceContainer sx={{ mb: 1.5 }}>
          <ProductPrice price={price} off={off} />
        </PriceContainer>

        {/* DELIVERY INFORMATION & STOCK STATUS */}
        <FlexBox justifyContent="space-between" alignItems="center">
          <DeliveryChip>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#4CAF50"
                }}
              />
              <Paragraph fontSize={11} fontWeight={600} color="grey.600">
                {deliveryText}
              </Paragraph>
            </Box>
          </DeliveryChip>

          <Chip
            label={stockStatus === "in-stock" ? "In Stock" : stockStatus === "low-stock" ? "Low Stock" : "Out of Stock"}
            size="small"
            sx={{
              backgroundColor: stockStatus === "in-stock" ? "#E8F5E8" : stockStatus === "low-stock" ? "#FFF3E0" : "#FFEBEE",
              color: stockStatus === "in-stock" ? "#2E7D32" : stockStatus === "low-stock" ? "#F57C00" : "#C62828",
              fontWeight: 600,
              fontSize: "10px",
              height: "20px"
            }}
          />
        </FlexBox>
      </ContentWrapper>
    </StyledBazaarCard>
  );
}
