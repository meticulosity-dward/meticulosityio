import { createOgImage, size, contentType } from "@/lib/og-image";

export { size, contentType };
export const alt = "What Is Meticulosity.io - Managed Automation for Agencies";

export default function OgImage() {
  return createOgImage(
    "What Is Meticulosity.io",
    "A managed automation service that deploys 50+ production-tested automations across your existing tools. No workflows to build or maintain."
  );
}
