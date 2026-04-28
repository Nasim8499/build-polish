// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { Documents } from "@/VisaApp";

export const Route = createFileRoute("/documents")({
  head: () => ({ meta: [{ title: "Documents — VisaHOBe" }, { name: "description", content: "Documents page — VisaHOBe global visa & migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><Documents navigate={navigate} /></SiteLayout>;
}
