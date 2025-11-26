import Image from "next/image";

type LoadingLogoProps = {
  caption?: string;
};

export function LoadingLogo({
  caption = "머니터링 데이터 로딩 중",
}: LoadingLogoProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
      <div className="relative h-20 w-20">
        <Image
          src="/logo-light.svg"
          alt="Moneytoring mark"
          fill
          priority
          style={{
            animation: "logo-spin 2s linear infinite",
          }}
        />
      </div>
      <p className="text-sm font-medium text-[color:var(--color-text-muted)] dark:text-[color:var(--color-dark-text-muted)]">
        {caption}
      </p>
    </div>
  );
}
