import Link from "next/link";
// CUSTOM COMPONENTS
import { H5 } from "components/Typography";
import FlexRowCenter from "components/flex-box/flex-row-center";
import BrandLogo from "components/brand/BrandLogo";

export default function LogoWithTitle() {
  return (
    <FlexRowCenter flexDirection="column" gap={1.5} mb={4}>
      <BrandLogo variant="full" />
      <H5 fontWeight={700}>Welcome To Givory</H5>
    </FlexRowCenter>
  );
}
