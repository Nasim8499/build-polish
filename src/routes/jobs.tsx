// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { Jobs } from "@/VisaApp";

export const Route = createFileRoute("/jobs")({
  head: () => ({ meta: [{ title: "Jobs — VisaHOBe" }, { name: "description", content: "Jobs page — VisaHOBe global visa & migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><Jobs navigate={navigate} /></SiteLayout>;
}
