// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { Study } from "@/VisaApp";

export const Route = createFileRoute("/study")({
  head: () => ({ meta: [{ title: "Study — VisaHOBe" }, { name: "description", content: "Study page — VisaHOBe global visa & migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><Study navigate={navigate} /></SiteLayout>;
}
