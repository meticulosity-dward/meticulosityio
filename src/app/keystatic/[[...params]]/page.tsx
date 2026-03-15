"use client";

import dynamic from "next/dynamic";

const KeystaticPage = dynamic(() => import("./keystatic-inner"), {
  ssr: false,
  loading: () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>Loading CMS...</p>
    </div>
  ),
});

export default function Page() {
  return <KeystaticPage />;
}
