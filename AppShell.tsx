import { Header } from "@/components/layout/Header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-4 pb-12 pt-6 sm:px-8">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-6">{children}</main>
    </div>
  );
}
