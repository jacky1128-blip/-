"use client";

import { useCurrency } from "@/context/CurrencyContext";

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-1 text-xs font-semibold uppercase dark:border-[color:var(--color-dark-border)] dark:bg-[color:var(--color-dark-card)]">
      {(["USD", "KRW"] as const).map((unit) => (
        <button
          key={unit}
          onClick={() => setCurrency(unit)}
          className={`rounded-full px-3 py-1 transition ${
            currency === unit
              ? "bg-[color:var(--color-accent)] text-white dark:bg-[color:var(--color-dark-accent)] dark:text-[#06111a]"
              : "text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]"
          }`}
        >
          {unit === "USD" ? "$" : "₩"}
        </button>
      ))}
    </div>
  );
}
