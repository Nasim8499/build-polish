// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { CountryDetail } from "@/VisaApp";

export const Route = createFileRoute("/country/$name")({
  head: ({ params }) => ({ meta: [{ title: `${decodeURIComponent(params.name)} Visa Guide — VisaHOBe` }] }),
  component: Page,
  pendingComponent: Pending,
});

function Pending() {
  return (
    <SiteLayout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white">
        <div className="h-12 w-12 rounded-full border-4 border-[#003B73]/20 border-t-[#003B73] animate-spin mb-4"></div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#6E7580]">Loading country details…</p>
      </div>
    </SiteLayout>
  );
}

function Page() {
  const { navigate } = useSiteNav();
  const { name } = Route.useParams();
  return <SiteLayout><CountryDetail navigate={navigate} countryName={decodeURIComponent(name)} /></SiteLayout>;
}
