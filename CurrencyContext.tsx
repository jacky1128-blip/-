"use client";

import { createContext, useContext, useState } from "react";

type Currency = "USD" | "KRW";

type CurrencyContextValue = {
  currency: Currency;
  exchangeRate: number;
  setCurrency: (next: Currency) => void;
  convert: (valueInUsd: number) => number;
  format: (valueInUsd: number, options?: { compact?: boolean }) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | undefined>(
  undefined,
);

const defaultRate = 1387.45;

export function CurrencyProvider({
  children,
  usdToKrwRate = defaultRate,
}: {
  children: React.ReactNode;
  usdToKrwRate?: number;
}) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const convert = (valueInUsd: number) =>
    currency === "USD" ? valueInUsd : valueInUsd * usdToKrwRate;

  const format = (
    valueInUsd: number,
    options?: { compact?: boolean },
  ): string => {
    const baseFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "USD" ? 2 : 0,
      minimumFractionDigits: currency === "USD" ? 2 : 0,
    });
    const compactFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "USD" ? 2 : 0,
      minimumFractionDigits: currency === "USD" ? 2 : 0,
      notation: "compact",
    });
    const value = convert(valueInUsd);
    const display =
      options?.compact && Math.abs(value) >= 1000000
        ? compactFormatter.format(value)
        : baseFormatter.format(value);

    return currency === "KRW"
      ? display.replace("KRW", "₩").replace(".00", "")
      : display;
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, exchangeRate: usdToKrwRate, setCurrency, convert, format }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used inside CurrencyProvider");
  }
  return ctx;
}
