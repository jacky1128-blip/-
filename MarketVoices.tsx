import type { MarketVoice } from "@/data/mock-market";

type MarketVoicesProps = {
  voices: MarketVoice[];
};

export function MarketVoices({ voices }: MarketVoicesProps) {
  return (
    <section className="card-surface flex flex-col gap-4 p-6">
      <div>
        <p className="section-title">Market Voices</p>
        <h3 className="text-2xl font-semibold">기관 뷰포인트</h3>
      </div>
      <div className="flex flex-col gap-4">
        {voices.map((voice) => (
          <article
            key={voice.id}
            className="rounded-2xl border border-[color:var(--color-border)] p-4 dark:border-[color:var(--color-dark-border)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-10 w-10 rounded-2xl"
                style={{ backgroundColor: voice.avatarColor }}
              ></span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
                  {voice.author}
                </p>
                <h4 className="text-lg font-semibold">{voice.title}</h4>
              </div>
              <span className="ml-auto text-xs text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
                {voice.publishedAt}
              </span>
            </div>
            <p className="mt-3 text-sm text-[color:var(--color-text)] dark:text-[color:var(--color-dark-text)]">
              {voice.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
