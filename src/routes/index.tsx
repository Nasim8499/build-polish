// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { Home } from "@/VisaApp";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "VisaHOBe — Global Visa, Recruitment & Migration" }, { name: "description", content: "Global visa, work, study and investor migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><Home navigate={navigate} /></SiteLayout>;
}
