"use client";

import { useEffect } from "react";
import { makePage } from "@keystatic/next/ui/app";
import keystaticConfig from "../../../../keystatic.config";

const KeystaticPage = makePage(keystaticConfig);

export default function KeystaticInner() {
  useEffect(() => {
    // Next.js 16 patches window.history.pushState/replaceState to trigger
    // soft navigation (RSC payload fetching). This conflicts with keystatic's
    // internal SPA routing which uses pushState directly, causing
    // "The router state header was sent but could not be parsed" errors.
    //
    // Fix: For /keystatic URLs, call the native History.prototype methods
    // instead of Next.js's patched versions.
    const nextPush = window.history.pushState;
    const nextReplace = window.history.replaceState;
    const nativePush = History.prototype.pushState;
    const nativeReplace = History.prototype.replaceState;

    window.history.pushState = function (...args: Parameters<typeof nativePush>) {
      const url = args[2]?.toString() ?? "";
      if (url.includes("/keystatic")) {
        return nativePush.apply(this, args);
      }
      return nextPush.apply(this, args);
    };

    window.history.replaceState = function (...args: Parameters<typeof nativeReplace>) {
      const url = args[2]?.toString() ?? "";
      if (url.includes("/keystatic")) {
        return nativeReplace.apply(this, args);
      }
      return nextReplace.apply(this, args);
    };

    return () => {
      window.history.pushState = nextPush;
      window.history.replaceState = nextReplace;
    };
  }, []);

  return <KeystaticPage />;
}
