import React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
  className?: string;
}

export function CodeBlock({ code, language = "text", label, className }: CodeBlockProps) {
  return (
    <div className={cn("rounded-xl overflow-hidden bg-[#0f172a] border border-white/10 shadow-2xl", className)}>
      {label && (
        <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          </div>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
