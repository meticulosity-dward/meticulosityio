"use client";

import { useState } from "react";

export function PublishButton() {
  const [state, setState] = useState<"idle" | "publishing" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function publish() {
    setState("publishing");
    setMessage("");
    try {
      const res = await fetch("/api/publish", { method: "POST" });
      const data = await res.json();
      setMessage(data.message);
      setState(res.ok ? "done" : "error");
      if (res.ok) {
        setTimeout(() => setState("idle"), 5000);
      }
    } catch {
      setMessage("Network error. Try again.");
      setState("error");
    }
  }

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999 }}>
      {message && (
        <div
          style={{
            position: "absolute",
            bottom: 52,
            right: 0,
            width: 280,
            padding: "10px 14px",
            borderRadius: 8,
            fontSize: 13,
            lineHeight: 1.4,
            backgroundColor: state === "error" ? "#fef2f2" : "#f0fdf4",
            color: state === "error" ? "#991b1b" : "#166534",
            border: `1px solid ${state === "error" ? "#fecaca" : "#bbf7d0"}`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {message}
        </div>
      )}
      <button
        onClick={publish}
        disabled={state === "publishing"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 20px",
          borderRadius: 10,
          border: "none",
          fontSize: 14,
          fontWeight: 600,
          cursor: state === "publishing" ? "wait" : "pointer",
          color: "white",
          backgroundColor:
            state === "done"
              ? "#16a34a"
              : state === "error"
                ? "#dc2626"
                : "#4f46e5",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transition: "background-color 0.2s",
        }}
      >
        {state === "publishing" ? (
          <>
            <span
              style={{
                width: 16,
                height: 16,
                border: "2px solid rgba(255,255,255,0.3)",
                borderTopColor: "white",
                borderRadius: "50%",
                animation: "spin 0.6s linear infinite",
              }}
            />
            Publishing...
          </>
        ) : state === "done" ? (
          "Published"
        ) : (
          "Publish to Live Site"
        )}
      </button>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}
