import { AppShell } from "@/components/layout/AppShell";
import { PriceSummary } from "@/components/sections/PriceSummary";
import { PriceChart } from "@/components/sections/PriceChart";
import { NewsList } from "@/components/sections/NewsList";
import { getGlossaryByTerms } from "@/data/glossary";
import { getMarketSnapshot, getStockBySymbol } from "@/data/mock-market";

type StockPageProps = {
  params: { symbol: string };
};

export default async function StockDetailPage({ params }: StockPageProps) {
  const [snapshot, stock] = await Promise.all([
    getMarketSnapshot(),
    getStockBySymbol(params.symbol),
  ]);
  const glossary = getGlossaryByTerms(stock.terms);

  return (
    <AppShell>
      <PriceSummary stock={stock} glossary={glossary} />
      <PriceChart data={snapshot.chart} />
      <NewsList news={snapshot.news} title="관련 뉴스" />
    </AppShell>
  );
}
