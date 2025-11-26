import { LoadingLogo } from "@/components/common/LoadingLogo";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--color-page)] dark:bg-[color:var(--color-dark-page)]">
      <LoadingLogo caption="종목 데이터를 불러오고 있습니다" />
    </div>
  );
}
