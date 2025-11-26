import type { CommunityPost } from "@/data/mock-market";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

type CommunityPanelProps = {
  posts: CommunityPost[];
};

const sentimentColor: Record<CommunityPost["sentiment"], string> = {
  bullish: "text-emerald-600 dark:text-emerald-300",
  neutral: "text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]",
  bearish: "text-rose-600 dark:text-rose-300",
};

export function CommunityPanel({ posts }: CommunityPanelProps) {
  return (
    <aside className="card-surface flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="section-title">Community Pulse</p>
          <h3 className="text-2xl font-semibold">프로 인사이트</h3>
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-[color:var(--color-accent-strong)] dark:text-[color:var(--color-dark-accent)]">
          더 보기
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] p-4 dark:border-[color:var(--color-dark-border)] dark:bg-[color:var(--color-dark-card-muted)]"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
              <span>{post.author}</span>
              <span className={clsx("text-xs font-semibold", sentimentColor[post.sentiment])}>
                {post.sentiment}
              </span>
            </div>
            <h4 className="mt-2 text-lg font-semibold">{post.title}</h4>
            <p className="mt-1 text-sm text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
              {post.content}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
              <span>👍 {post.upvotes}</span>
              <span>💬 {post.comments}</span>
              <span>{post.updatedAt}</span>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
