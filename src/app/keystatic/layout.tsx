import { PublishButton } from "./publish-button";

export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <PublishButton />
    </>
  );
}
