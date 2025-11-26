"use client";

import { useState } from "react";
import { CircleHelp, X } from "lucide-react";
import type { GlossaryEntry } from "@/data/glossary";

type HelpDrawerProps = {
  terms: GlossaryEntry[];
};

export function HelpDrawer({ terms }: HelpDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 rounded-full border border-[color:var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-text)] transition hover:bg-white/70 dark:border-[color:var(--color-dark-border)] dark:text-[color:var(--color-dark-text)] dark:hover:bg-white/5"
        aria-label="도움말 열기"
      >
        <CircleHelp className="h-4 w-4 text-[color:var(--color-accent-strong)] dark:text-[color:var(--color-dark-accent)]" />
        도움말
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="h-full w-full max-w-md translate-x-0 bg-[color:var(--color-card)] p-6 shadow-2xl transition dark:bg-[color:var(--color-dark-card)] sm:rounded-l-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
                  용어 도움말
                </p>
                <h3 className="text-2xl font-semibold">지표 해설</h3>
              </div>
              <button
                className="rounded-full border border-[color:var(--color-border)] p-2 dark:border-[color:var(--color-dark-border)]"
                aria-label="도움말 닫기"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="moneytoring-scroll flex max-h-[80vh] flex-col gap-4 overflow-y-auto pr-3">
              {terms.map((term) => (
                <div
                  key={term.term}
                  className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] p-4 dark:border-[color:var(--color-dark-border)] dark:bg-[color:var(--color-dark-card-muted)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent-strong)] dark:text-[color:var(--color-dark-accent)]">
                    {term.term}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-text)] dark:text-[color:var(--color-dark-text)]">
                    {term.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
