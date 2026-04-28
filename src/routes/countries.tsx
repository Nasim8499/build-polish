// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { Countries } from "@/VisaApp";

export const Route = createFileRoute("/countries")({
  head: () => ({ meta: [{ title: "Countries — VisaHOBe" }, { name: "description", content: "Countries page — VisaHOBe global visa & migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><Countries navigate={navigate} /></SiteLayout>;
}
