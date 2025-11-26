"use client";

import { Search, Bell } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "마켓 개요", href: "/" },
  { label: "종목 탐색", href: "/stocks/NVDA" },
  { label: "뉴스", href: "/news" },
  { label: "커뮤니티", href: "/community" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/stocks")) {
      return pathname.startsWith("/stocks");
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="glass-panel sticky top-0 z-30 mx-auto mb-10 flex max-w-6xl flex-col gap-5 rounded-[32px] px-6 py-4 backdrop-blur">
      <div className="flex flex-wrap items-center gap-4">
        <Logo />
        <div className="ml-auto flex items-center gap-3">
          <button className="rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-sm font-semibold text-[color:var(--color-accent-strong)] shadow-sm transition hover:-translate-y-0.5 dark:border-[color:var(--color-dark-border)] dark:bg-white/5 dark:text-[color:var(--color-dark-text)]">
            로그인
          </button>
          <button
            className="relative rounded-full border border-[color:var(--color-border)] p-2 dark:border-[color:var(--color-dark-border)]"
            aria-label="알림 확인"
          >
            <Bell className="h-4 w-4 text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]" />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[color:var(--color-accent)]"></span>
          </button>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <nav className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                isActive(tab.href)
                  ? "bg-[color:var(--color-accent)] text-white"
                  : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)] dark:text-[color:var(--color-dark-text-muted)] dark:hover:text-[color:var(--color-dark-text)]",
              )}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex w-full max-w-xs items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-3 py-2 dark:border-[color:var(--color-dark-border)] dark:bg-white/5">
          <Search className="h-4 w-4 text-[color:var(--color-text-muted)]" />
          <input
            type="search"
            placeholder="티커, 키워드, ETF 검색"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-[color:var(--color-text-muted)]"
          />
        </div>
      </div>
    </header>
  );
}
