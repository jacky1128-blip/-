"use client";

import type { GlossaryEntry } from "@/data/glossary";
import type { StockSnapshot } from "@/data/mock-market";
import { useCurrency } from "@/context/CurrencyContext";
import { clsx } from "clsx";
import { HelpDrawer } from "@/components/common/HelpDrawer";
import { CurrencyToggle } from "@/components/common/CurrencyToggle";

type PriceSummaryProps = {
  stock: StockSnapshot;
  glossary: GlossaryEntry[];
};

export function PriceSummary({ stock, glossary }: PriceSummaryProps) {
  const { format, currency, exchangeRate } = useCurrency();

  const metrics = [
    { label: "시가", value: stock.openUsd },
    { label: "고가", value: stock.highUsd },
    { label: "저가", value: stock.lowUsd },
    { label: "전일 종가", value: stock.previousCloseUsd },
  ];

  const changeValue =
    currency === "USD"
      ? stock.changeUsd
      : Math.round(stock.changeUsd * exchangeRate);

  const changeClass =
    stock.changePercent > 0
      ? "text-emerald-600 dark:text-emerald-300"
      : stock.changePercent < 0
        ? "text-rose-600 dark:text-rose-300"
        : "text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]";

  const changePrefix = changeValue > 0 ? "+" : changeValue < 0 ? "-" : "";
  const formattedChange =
    currency === "USD"
      ? `${changePrefix}$${Math.abs(changeValue).toFixed(2)}`
      : `${changePrefix}₩${Math.abs(changeValue).toLocaleString()}`;
  const percentPrefix =
    stock.changePercent > 0
      ? "+"
      : stock.changePercent < 0
        ? "-"
        : "";

  return (
    <section className="grid gap-6 lg:grid-cols-[3fr_2fr]">
      <div className="card-surface flex flex-col gap-6 p-6">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
              Featured Ticker
            </p>
            <h2 className="mt-1 text-3xl font-semibold">
              {stock.name} · {stock.symbol}
            </h2>
            <p className="text-sm text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
              {stock.market}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CurrencyToggle />
            <HelpDrawer terms={glossary} />
          </div>
        </div>
        <div className="flex flex-wrap items-end gap-6">
          <div>
            <div className="text-5xl font-semibold">
              {format(stock.priceUsd)}
            </div>
            <p className={clsx("mt-2 text-sm font-semibold", changeClass)}>
              {formattedChange} · {percentPrefix}
              {Math.abs(stock.changePercent).toFixed(2)}%
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
              Live
            </p>
          </div>
          <div className="flex-1 rounded-2xl bg-gradient-to-r from-white/80 to-transparent p-4 text-sm leading-relaxed dark:from-white/5">
            {stock.description}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-[color:var(--color-border)] p-4 text-sm dark:border-[color:var(--color-dark-border)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
                {metric.label}
              </p>
              <p className="mt-2 text-lg font-semibold">
                {format(metric.value)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="card-surface flex flex-col gap-4 p-6">
        <p className="section-title">핵심 지표</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {stock.primaryMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-[color:var(--color-card-muted)] p-4 dark:bg-[color:var(--color-dark-card-muted)]">
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold">
                {format(metric.valueUsd, { compact: true })}
              </p>
            </div>
          ))}
        </div>
        <p className="section-title mt-2">밸류에이션</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {stock.valuationMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-dashed border-[color:var(--color-border)] p-4 text-sm dark:border-[color:var(--color-dark-border)]">
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
                {metric.label}
              </p>
              <p className="mt-2 text-xl font-semibold">
                {metric.valueUsd.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
