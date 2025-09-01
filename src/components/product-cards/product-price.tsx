import Box from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
import { Paragraph } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { calculateDiscount, currency } from "lib";
import { greatVibesFont } from "lib/fonts";
// ==============================================================
type Props = { price: number; discount: number };
// ==============================================================

export default function ProductPrice({ discount, price }: Props) {
  return (
    <FlexBox alignItems="center" gap={1} mt={0.5}>
      <Paragraph style={{ fontFamily: greatVibesFont }} fontWeight={600} color="primary.main">
        {calculateDiscount(price, discount)}
      </Paragraph>

      {discount ? (
        <Box style={{ fontFamily: greatVibesFont }} component="del" fontWeight={600} color="grey.600">
          {currency(price)}
        </Box>
      ) : null}
    </FlexBox>
  );
}
