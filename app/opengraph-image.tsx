import { ImageResponse } from "next/og";

export const alt = "Off My Plate — We automate repetitive work with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#f7f9fc", padding: 72, fontFamily: "Arial, sans-serif", color: "#111827" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #dce3ec", borderRadius: 32, background: "white", padding: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 27, fontWeight: 700 }}>
          <div style={{ width: 42, height: 42, border: "8px solid #1A73E8", transform: "rotate(30deg)" }} />
          Off My Plate
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 69, lineHeight: 1.05, letterSpacing: -3, fontWeight: 700, maxWidth: 850 }}>We automate repetitive work with AI.</div>
          <div style={{ fontSize: 27, color: "#5B6472" }}>Custom workflows. Connected tools. Time back for your team.</div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#1A73E8", fontWeight: 700 }}>offmyplate.io</div>
      </div>
    </div>,
    size,
  );
}
