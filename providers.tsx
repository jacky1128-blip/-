"use client";

import { CurrencyProvider } from "@/context/CurrencyContext";
import { ThemeProvider } from "@/context/ThemeContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const usdToKrwRate = Number(
    process.env.NEXT_PUBLIC_MOCK_USD_KRW ?? 1387.45,
  );

  return (
    <ThemeProvider>
      <CurrencyProvider usdToKrwRate={usdToKrwRate}>
        {children}
      </CurrencyProvider>
    </ThemeProvider>
  );
}
