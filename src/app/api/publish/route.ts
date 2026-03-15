import { NextResponse } from "next/server";
import { execSync } from "child_process";

export async function POST() {
  try {
    const cwd = process.cwd();

    // Check if there are any changes to content data files
    const status = execSync("git status --porcelain src/content/data/ public/og/", {
      cwd,
      encoding: "utf-8",
    }).trim();

    if (!status) {
      return NextResponse.json({ message: "No content changes to publish." });
    }

    // Stage content data files and OG images
    execSync("git add src/content/data/ public/og/", {
      cwd,
      encoding: "utf-8",
    });

    // Commit
    const timestamp = new Date().toISOString().slice(0, 16).replace("T", " ");
    execSync(
      `git commit -m "content: update via CMS (${timestamp})"`,
      { cwd, encoding: "utf-8" },
    );

    // Push
    execSync("git push", { cwd, encoding: "utf-8" });

    return NextResponse.json({ message: "Published successfully. Vercel will deploy in about 30 seconds." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: `Publish failed: ${message}` }, { status: 500 });
  }
}
