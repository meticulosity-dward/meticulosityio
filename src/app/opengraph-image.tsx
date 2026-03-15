import { createOgImage, size, contentType } from "@/lib/og-image";

export { size, contentType };
export const alt = "Meticulosity.io - Automation-as-a-Service Built for Agencies";

export default function OgImage() {
  return createOgImage(
    "Automation-as-a-Service Built for Agencies",
    "50+ production-tested automations saving 230+ hours/month. Your tools. Our automations. Zero workflows to build."
  );
}
