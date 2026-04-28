// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { Services } from "@/VisaApp";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — VisaHOBe" }, { name: "description", content: "Services page — VisaHOBe global visa & migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><Services navigate={navigate} /></SiteLayout>;
}
