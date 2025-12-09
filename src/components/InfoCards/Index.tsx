import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function InfoCard({ title, children, className = "" }: InfoCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-white/20 ${className}`}
    >
      <h3 className="mb-4 text-xl font-semibold text-indigo-400">{title}</h3>
      <div className="text-slate-300 leading-relaxed">{children}</div>
    </div>
  );
}
