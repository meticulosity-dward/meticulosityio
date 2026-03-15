import { createOgImage, size, contentType } from "@/lib/og-image";

export { size, contentType };
export const alt = "Automation Catalog - 24 Production Automations for Agencies";

export default function OgImage() {
  return createOgImage(
    "Automation Catalog",
    "24 production automations running across agencies today: AI intelligence, time and billing, client lifecycle, project management, and more."
  );
}
