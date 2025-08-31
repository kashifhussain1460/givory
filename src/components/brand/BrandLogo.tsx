import Link from "next/link";
import { CSSProperties } from "react";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export type BrandLogoVariant = "full" | "small";

interface BrandLogoProps {
    variant?: BrandLogoVariant;
    href?: string;
    style?: CSSProperties;
}

export default function BrandLogo({ variant = "full", href = "/", style }: BrandLogoProps) {
    const containerStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 12px",
        borderRadius: 8,
        textDecoration: "none",
        ...style
    };

    const brandTextBase: CSSProperties = {
        lineHeight: 1,
        color: "rgb(199, 0, 57)",
        letterSpacing: "0px"
    };

    const sloganBase: CSSProperties = {
        marginTop: 4,
        fontSize: "12px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: "rgb(199, 0, 57)"
    };

    const content = variant === "small" ? (
        <span className={greatVibes.className} style={{ ...brandTextBase, fontSize: "28px", fontWeight: "600" }}>Givory</span>
    ) : (
        <>
            <span className={greatVibes.className} style={{ ...brandTextBase, fontSize: "36px", fontWeight: "600" }}>Givory</span>
            <span className={cormorant.className} style={sloganBase}>Beyond Gifting, it&apos;s Givory</span>
        </>
    );

    return (
        <Link href={href} aria-label="Givory home" style={{ textDecoration: "none" }}>
            <div style={containerStyle}>{content}</div>
        </Link>
    );
}
