// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { Contact } from "@/VisaApp";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — VisaHOBe" }, { name: "description", content: "Contact page — VisaHOBe global visa & migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><Contact navigate={navigate} /></SiteLayout>;
}
