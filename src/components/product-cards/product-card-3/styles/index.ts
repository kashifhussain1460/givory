import styled from "@mui/material/styles/styled";
import { keyframes } from "@mui/material/styles";
// GLOBAL CUSTOM COMPONENT
import { FlexBetween } from "components/flex-box";

// KEYFRAME ANIMATIONS
const slideUp = keyframes`
 
`;

const float = keyframes`

`;

const shimmer = keyframes`
 
`;

export const StyledBazaarCard = styled("div")({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  flexDirection: "column",
  backgroundColor: "white",
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  border: "1px solid rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    transform: "translateY(-2px)",
    borderColor: "rgba(0,0,0,0.12)",
    "& .floating-actions": {
      opacity: 1,
      transform: "translateX(0)"
    }
  }
});

export const ImageWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "16px 16px 0 0",
  overflow: "hidden",
  backgroundColor: "#F8F9FA",
  [theme.breakpoints.down("sm")]: { display: "block" }
}));

export const HoverButtonBox = styled("div")({
  opacity: 0,
  top: "50%",
  left: "50%",
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: ".5s ease",
  transform: "translate(-50%, -50%)",
  "& .buttonBox": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    "& .addCartButton": {
      bottom: 20,
      margin: "auto",
      padding: "4px 14px",
      position: "absolute",
      "& svg": { fontSize: 16 }
    }
  }
});

export const ImageBox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 32px",
  minHeight: "280px",
  position: "relative",
  zIndex: 2,
  "& img": {
    borderRadius: "16px",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))"
  },
  "&:hover img": {
    transform: "scale(1.08) rotate(2deg)",
    filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.2))"
  }
});

export const ItemController = styled(FlexBetween)(({ theme }) => ({
  background: "#fff",
  overflow: "hidden",
  borderRadius: "5px",
  boxShadow: theme.shadows[2],
  "& span": {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "6px 12px",
    alignItems: "center",
    "&:hover": { cursor: "pointer", background: "#f3f5f9" }
  },
  "& svg": { fontSize: 22, color: theme.palette.grey[600] }
}));

export const ContentWrapper = styled("div")({
  padding: "20px",
  backgroundColor: "white",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
});

export const FloatingActions = styled("div")({
  position: "absolute",
  top: "20px",
  right: "20px",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  opacity: 0,
  transform: "translateX(20px)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
});

export const ProductBadge = styled("div")({
  position: "absolute",
  top: "12px",
  left: "12px",
  zIndex: 10,
  animation: `${float} 2s ease-in-out infinite`
});

export const GradientOverlay = styled("div")({
  position: "absolute",
  bottom: "16px",
  left: "16px",
  zIndex: 10
});

export const AddToCartButton = styled("button")({
  position: "absolute",
  bottom: "16px",
  left: "50%",
  transform: "translateX(-50%) translateY(20px)",
  opacity: 0,
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 24px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  border: "none",
  borderRadius: "50px",
  fontWeight: 600,
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
  "&:hover": {
    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
    transform: "translateX(-50%) translateY(0) scale(1.05)",
    boxShadow: "0 12px 35px rgba(102, 126, 234, 0.6)"
  }
});

export const PriceContainer = styled("div")({
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-4px",
    right: "-4px",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent)",
    borderRadius: "8px",
    opacity: 0,
    transition: "opacity 0.3s ease"
  },
  "&:hover::before": {
    opacity: 1
  }
});

export const RatingContainer = styled("div")({
  "& .MuiRating-root": {
    "& .MuiRating-iconFilled": {
      filter: "drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))"
    }
  }
});

export const DeliveryChip = styled("div")({
  padding: "6px 12px",
  backgroundColor: "rgba(76, 175, 80, 0.1)",
  borderRadius: "20px",
  border: "1px solid rgba(76, 175, 80, 0.2)"
});

export const DeliveryInfo = styled("div")({
  marginTop: "12px",
  paddingTop: "12px",
  borderTop: "1px solid rgba(0,0,0,0.06)"
});

// Legacy component - keeping for backwards compatibility
export const HeartIconBox = styled("div")({
  position: "absolute",
  top: "12px",
  right: "12px",
  zIndex: 2
});
