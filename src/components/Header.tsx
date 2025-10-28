"use client";

import Link from "next/link";
import { useMedAIStore } from "@/src/store/useMedAIStore";

export function Header() {
  const { mode, setMode } = useMedAIStore();

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">M</span>
          </div>
          <h1 className="text-xl font-semibold hidden md:block">MedAI - Traust du mir?</h1>
          <h1 className="text-lg font-semibold md:hidden">Traust du mir?</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-4">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors ${
              mode === "acute" 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setMode("acute")}
          >
            Diagnose
          </Link>
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors ${
              mode === "chronic" 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setMode("chronic")}
          >
            Langzeitmanagement
          </Link>
          <Link 
            href="/info" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Info
          </Link>
        </nav>
      </div>
    </header>
  );
}
