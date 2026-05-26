import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lightbulb, Package, Search } from "lucide-react";

const researchSignals = [
  {
    title: "Wedding market demand",
    value: "$64.93B in 2024 → $95.35B by 2030",
    detail: "Supports a durable paid niche for speech-prep tooling in a growing event-services category.",
  },
  {
    title: "AI adoption fit",
    value: "About one-third of U.S. adults use AI chatbots",
    detail: "Confirms willingness to use guided AI workflows for stressful, high-stakes writing moments.",
  },
  {
    title: "Monetization benchmark",
    value: "1.7% baseline paid conversion; ~4.2% upper performers",
    detail: "Sets realistic subscription targets for paid toast-generation and rehearsal plans.",
  },
];

const launchSuggestions = [
  "Launch role-based landing pages for best man, maid of honor, and parent speeches.",
  "Use planner and coordinator pilots to drive referral-led acquisition.",
  "Gate premium rollout on activation, retention, and conversion benchmarks already defined in go-to-market planning.",
];

const assetInventory = [
  "Role + tone guided toast generator",
  "Quote discovery and speech templates",
  "Speech analytics and practice mode",
  "Mobile teleprompter-style toast view",
  "Saved toasts and authentication UI",
  "Vercel-ready website-in-test deployment path",
];

const artifactInventory = [
  "README.md",
  "CHANGELOG.md",
  "DEPLOYMENT_GUIDE.md",
  "GO_TO_MARKET.md",
  "BRAND_GUIDELINES.md",
  "SECURITY.md",
  "scripts/test-baseline.js",
  "scripts/build-baseline.js",
];

const S2MLaunchKit = () => {
  return (
    <section className="mt-8 sm:mt-12">
      <div className="rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-blue-50 p-4 shadow-sm sm:p-6">
        <div className="mb-6 text-center sm:mb-8">
          <Badge className="mb-3 bg-yellow-100 text-yellow-900 hover:bg-yellow-100">
            S2M Launch Kit
          </Badge>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Research engine, launch suggestions, assets, and artifacts
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-600 sm:text-base">
            This homepage now surfaces the ship-to-market context behind ToastBot AI Scribe so
            operators can review the market case, launch moves, product assets, and delivery
            artifacts in one place.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="border-yellow-200 bg-white/90">
            <CardHeader className="pb-4">
              <div className="mb-3 flex items-center gap-2 text-yellow-700">
                <Search className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Research engine</span>
              </div>
              <CardTitle className="text-xl text-gray-900">Validated market signals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {researchSignals.map((signal) => (
                <div key={signal.title} className="rounded-lg border border-yellow-100 bg-yellow-50/60 p-4">
                  <div className="text-sm font-semibold text-gray-900">{signal.title}</div>
                  <div className="mt-1 text-sm font-medium text-blue-700">{signal.value}</div>
                  <p className="mt-2 text-sm text-gray-600">{signal.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white/90">
            <CardHeader className="pb-4">
              <div className="mb-3 flex items-center gap-2 text-blue-700">
                <Lightbulb className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Suggestions</span>
              </div>
              <CardTitle className="text-xl text-gray-900">One-iteration launch actions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-600">
                {launchSuggestions.map((suggestion) => (
                  <li key={suggestion} className="rounded-lg border border-blue-100 bg-blue-50/60 p-4">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-white/90">
            <CardHeader className="pb-4">
              <div className="mb-3 flex items-center gap-2 text-emerald-700">
                <Package className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Assets</span>
              </div>
              <CardTitle className="text-xl text-gray-900">Website-ready product inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {assetInventory.map((asset) => (
                  <Badge key={asset} variant="secondary" className="bg-emerald-100 px-3 py-1 text-emerald-900 hover:bg-emerald-100">
                    {asset}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-white/90">
            <CardHeader className="pb-4">
              <div className="mb-3 flex items-center gap-2 text-purple-700">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Artifacts</span>
              </div>
              <CardTitle className="text-xl text-gray-900">Revvel-standard delivery set</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 sm:grid-cols-2">
                {artifactInventory.map((artifact) => (
                  <div key={artifact} className="rounded-lg border border-purple-100 bg-purple-50/60 px-3 py-2 text-sm text-gray-700">
                    {artifact}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default S2MLaunchKit;
