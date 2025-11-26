"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type SearchHeroProps = {
  placeholders: string[];
};

export function SearchHero({ placeholders }: SearchHeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [placeholders.length]);

  return (
    <section className="glass-panel flex flex-col gap-6 px-8 py-10 text-[color:var(--color-text)] dark:text-[color:var(--color-dark-text)]">
      <div className="flex flex-col gap-3">
        <p className="section-title">리서치 워크스페이스</p>
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          글로벌 시세·뉴스·커뮤니티를
          <br />
          하나의 뷰에서 탐색하세요.
        </h1>
        <p className="text-base text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
          프리미엄 마켓보이스, 실시간 데이터, 팀 협업 노트를 한 화면에 정리했습니다.
          환율과 용어 설명도 즉시 확인할 수 있습니다.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white/80 px-5 py-4 text-lg shadow-sm dark:border-[color:var(--color-dark-border)] dark:bg-white/5">
          <span className="text-sm font-semibold text-[color:var(--color-accent-strong)] dark:text-[color:var(--color-dark-accent)]">
            검색
          </span>
          <input
            className="flex-1 bg-transparent text-base font-medium outline-none placeholder:text-[color:var(--color-text-muted)] dark:placeholder:text-[color:var(--color-dark-text-muted)]"
            placeholder={placeholders[index]}
          />
          <kbd className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs font-semibold dark:border-[color:var(--color-dark-border)]">
            ⌘K
          </kbd>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--color-accent)] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[color:var(--color-accent)]/30 transition hover:-translate-y-1 dark:bg-[color:var(--color-dark-accent)] dark:text-[#06111a]">
          라이브 데모 열기
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid gap-4 text-sm text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)] sm:grid-cols-3">
        <div>
          <p className="font-semibold text-[color:var(--color-text)] dark:text-[color:var(--color-dark-text)]">
            실시간 래더
          </p>
          <p>환율·선물·상품을 one-click으로 연결합니다.</p>
        </div>
        <div>
          <p className="font-semibold text-[color:var(--color-text)] dark:text-[color:var(--color-dark-text)]">
            팀 공유 노트
          </p>
          <p>관심 종목과 논의 히스토리를 태깅합니다.</p>
        </div>
        <div>
          <p className="font-semibold text-[color:var(--color-text)] dark:text-[color:var(--color-dark-text)]">
            데이터 트랜스레이션
          </p>
          <p>$↔₩ 환산과 주요 지표 설명을 즉시 확인합니다.</p>
        </div>
      </div>
    </section>
  );
}
