"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { clsx } from "clsx";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  const { theme } = useTheme();
  const src = theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg";

  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Moneytoring 홈으로 이동"
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-2xl">
        <Image src={src} alt="Moneytoring 로고" fill priority />
      </div>
      {!compact && (
        <div className="flex flex-col leading-tight">
          <span className="text-base font-semibold tracking-wide text-[color:var(--color-text)] dark:text-[color:var(--color-dark-text)]">
            Moneytoring
          </span>
          <span
            className={clsx(
              "text-xs font-medium",
              "text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]",
            )}
          >
            Market Intelligence Hub
          </span>
        </div>
      )}
    </Link>
  );
}
