// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { CountryDetail } from "@/VisaApp";

export const Route = createFileRoute("/country/$name")({
  head: ({ params }) => ({ meta: [{ title: `${decodeURIComponent(params.name)} Visa Guide — VisaHOBe` }] }),
  component: Page,
});

function Page() {
  const { navigate } = useSiteNav();
  const { name } = Route.useParams();
  return <SiteLayout><CountryDetail navigate={navigate} countryName={decodeURIComponent(name)} /></SiteLayout>;
}
