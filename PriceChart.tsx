"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { PricePoint } from "@/data/mock-market";
import { AreaSeries, createChart, ColorType, Time, type ISeriesApi } from "lightweight-charts";
import { useTheme } from "@/context/ThemeContext";
import { useCurrency } from "@/context/CurrencyContext";
import { clsx } from "clsx";

const ranges = [
  { label: "1M", months: 1 },
  { label: "3M", months: 3 },
  { label: "6M", months: 6 },
  { label: "1Y", months: 12 },
];

type PriceChartProps = {
  data: PricePoint[];
};

export function PriceChart({ data }: PriceChartProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const seriesRef = useRef<ISeriesApi<"Area"> | null>(null);
  const { theme } = useTheme();
  const { convert, currency } = useCurrency();
  const [selectedRange, setSelectedRange] = useState("6M");

  const filteredData = useMemo(() => {
    const months = ranges.find((r) => r.label === selectedRange)?.months ?? 6;
    const cutoff = new Date(data[data.length - 1].time);
    cutoff.setMonth(cutoff.getMonth() - months);
    return data
      .filter((point) => new Date(point.time) >= cutoff)
      .map((point) => ({
        time: point.time as Time,
        value: Number(convert(point.value).toFixed(2)),
      }));
  }, [selectedRange, data, convert]);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: theme === "dark" ? "#E3F2FF" : "#26490d",
      },
      width: containerRef.current.clientWidth,
      height: 320,
      grid: {
        vertLines: {
          color: theme === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)",
        },
        horzLines: {
          color: theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
        },
      },
      rightPriceScale: {
        visible: true,
        borderColor: "transparent",
      },
      timeScale: {
        borderColor: "transparent",
      },
      crosshair: {
        mode: 0,
      },
    });

    const areaSeries = chart.addSeries(AreaSeries, {
      lineColor: theme === "dark" ? "#71d8ff" : "#5e9c24",
      topColor: theme === "dark" ? "rgba(113,216,255,0.4)" : "rgba(94,156,36,0.4)",
      bottomColor: theme === "dark" ? "rgba(17,33,61,0.6)" : "rgba(238,249,221,0.8)",
      priceLineVisible: true,
    });

    seriesRef.current = areaSeries;
    chartRef.current = chart;

    const handleResize = () => {
      if (!containerRef.current || !chartRef.current) return;
      chartRef.current.applyOptions({
        width: containerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [theme]);

  useEffect(() => {
    if (seriesRef.current) {
      seriesRef.current.setData(filteredData);
    }
  }, [filteredData, currency]);

  return (
    <section className="card-surface flex flex-col gap-4 p-6">
      <div className="flex flex-wrap items-center gap-4">
        <div>
          <p className="section-title">프리미엄 차트</p>
          <h3 className="text-2xl font-semibold">TradingView Lightweight Charts</h3>
        </div>
        <div className="ml-auto flex gap-2 rounded-full border border-[color:var(--color-border)] p-1 dark:border-[color:var(--color-dark-border)]">
          {ranges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedRange(range.label)}
              className={clsx(
                "rounded-full px-3 py-1 text-xs font-semibold",
                range.label === selectedRange
                  ? "bg-[color:var(--color-accent)] text-white dark:bg-[color:var(--color-dark-accent)] dark:text-[#06111a]"
                  : "text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]",
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
      <div ref={containerRef} className="w-full" />
    </section>
  );
}
