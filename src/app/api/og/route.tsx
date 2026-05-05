import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/data/site";

export const runtime = "edge";

const SIZE = { width: 1200, height: 630 };

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? siteConfig.name;
  const subtitle = searchParams.get("subtitle") ?? siteConfig.role;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 0% 0%, rgba(183,190,255,0.25) 0%, transparent 45%), radial-gradient(circle at 100% 100%, rgba(124,196,255,0.18) 0%, transparent 45%), #0a0a12",
          color: "#f5f5f7",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              background: "linear-gradient(135deg, #b7beff 0%, #7cc4ff 100%)",
              color: "#0a0a12",
              fontWeight: 700,
              fontSize: 22,
            }}
          >
            K
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: -0.4,
              color: "#a1a1aa",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 28,
              color: "#b7beff",
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: -2,
              maxWidth: 980,
              color: "#f5f5f7",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#71717a",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: -0.2,
          }}
        >
          <div>kavindualuthwaththa.com</div>
          <div>Sri Lanka</div>
        </div>
      </div>
    ),
    SIZE
  );
}
