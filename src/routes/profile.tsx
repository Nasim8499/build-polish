// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { Profile } from "@/VisaApp";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — VisaHOBe" }, { name: "description", content: "Profile page — VisaHOBe global visa & migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><Profile navigate={navigate} /></SiteLayout>;
}
