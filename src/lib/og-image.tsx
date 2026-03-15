import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function createOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #190F2E 0%, #552769 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            meticulosity
          </span>
          <span
            style={{
              fontSize: "36px",
              fontWeight: 300,
              color: "#5ABA48",
            }}
          >
            .io
          </span>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#F9F2FD",
            lineHeight: 1.5,
            maxWidth: "800px",
            opacity: 0.85,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...size }
  );
}
