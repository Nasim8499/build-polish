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
      <div className="bg-white">
        <div className="relative h-[40vh] bg-gradient-to-b from-[#0A1628] to-[#003B73] animate-pulse" />
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-2/3 bg-gray-200 rounded animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 bg-gray-100 rounded-xl animate-pulse" />
            ))}
          </div>
          <div className="space-y-4">
            <div className="h-32 bg-gray-100 rounded-2xl animate-pulse" />
            <div className="h-32 bg-gray-100 rounded-2xl animate-pulse" />
          </div>
        </div>
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
