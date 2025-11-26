import type { NewsItem } from "@/data/mock-market";
import { ArrowUpRight } from "lucide-react";

type NewsListProps = {
  news: NewsItem[];
  title?: string;
};

export function NewsList({ news, title = "마켓 보이스" }: NewsListProps) {
  return (
    <section className="card-surface flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="section-title">Realtime News</p>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-[color:var(--color-accent-strong)] dark:text-[color:var(--color-dark-accent)]">
          전체 보기
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {news.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] p-4 transition hover:-translate-y-1 dark:border-[color:var(--color-dark-border)] dark:bg-[color:var(--color-dark-card-muted)]"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
              <span>{item.publisher}</span>
              <span>·</span>
              <span>{item.timestamp}</span>
              <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-[color:var(--color-text)] dark:border-[color:var(--color-dark-border)] dark:text-[color:var(--color-dark-text)]">
                {item.tag}
              </span>
            </div>
            <h4 className="mt-2 text-lg font-semibold">{item.headline}</h4>
            <p className="mt-1 text-sm text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
              {item.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
