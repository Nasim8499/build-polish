// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { Book } from "@/VisaApp";

export const Route = createFileRoute("/book")({
  head: () => ({ meta: [{ title: "Book — VisaHOBe" }, { name: "description", content: "Book page — VisaHOBe global visa & migration services." }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  return <SiteLayout><Book navigate={navigate} /></SiteLayout>;
}
