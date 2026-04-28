// @ts-nocheck
import { createFileRoute, useRouter } from "@tanstack/react-router";
import SiteLayout, { useSiteNav } from "@/components/SiteLayout";
import { CountryDetail } from "@/VisaApp";

export const Route = createFileRoute("/country/$name")({
  head: ({ params }) => ({ meta: [{ title: `${decodeURIComponent(params.name)} Visa Guide — VisaHOBe` }] }),
  component: Page,
  pendingComponent: Pending,
  errorComponent: ErrorView,
  notFoundComponent: NotFoundView,
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

function ErrorView({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <SiteLayout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 text-center">
        <h2 className="text-2xl font-black text-[#003B73] mb-3">Something went wrong</h2>
        <p className="text-sm text-[#6E7580] mb-6 max-w-md">{error?.message || "We couldn't load this country page."}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="bg-[#003B73] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#E63946] transition-colors rounded"
        >
          Try Again
        </button>
      </div>
    </SiteLayout>
  );
}

function NotFoundView() {
  const { name } = Route.useParams();
  return (
    <SiteLayout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 text-center">
        <h2 className="text-2xl font-black text-[#003B73] mb-3">Country "{decodeURIComponent(name)}" not found</h2>
        <p className="text-sm text-[#6E7580]">Please pick another destination from the Countries page.</p>
      </div>
    </SiteLayout>
  );
}

function Page() {
  const { navigate } = useSiteNav();
  const { name } = Route.useParams();
  const decoded = decodeURIComponent(name);
  return (
    <SiteLayout>
      <CountryDetail navigate={navigate} countryName={decoded} />
    </SiteLayout>
  );
}
