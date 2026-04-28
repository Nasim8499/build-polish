// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { About } from "@/VisaApp";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — VisaHOBe" }, { name: "description", content: "About page — VisaHOBe global visa & migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><About navigate={navigate} /></SiteLayout>;
}
