import Box from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { calculateDiscount, currency } from "lib";
import { greatVibesFont } from "lib/fonts";
// ==============================================================
type Props = { price: number; off: number };
// ==============================================================

export default function ProductPrice({ price, off }: Props) {
  return (
    <FlexBox gap={1} alignItems="center">
      <Paragraph style={{ fontFamily: greatVibesFont }} fontWeight="600" color="primary.main">
        {calculateDiscount(price, off)}
      </Paragraph>

      {off ? (
        <Box style={{ fontFamily: greatVibesFont }} component="del" fontWeight="600" color="grey.600">
          {currency(price)}
        </Box>
      ) : null}
    </FlexBox>
  );
}
