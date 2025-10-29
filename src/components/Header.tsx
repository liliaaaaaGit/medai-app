"use client";

import Link from "next/link";
import Image from "next/image";
import { useMedAIStore } from "@/store/useMedAIStore";

export function Header() {
  const { mode, setMode } = useMedAIStore();

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 relative">
            <Image
              src="/LogoMedAI.png"
              alt="MedAI Logo"
              width={45}
              height={45}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h1 className="text-xl font-semibold hidden md:block">MedAI - Traust du mir?</h1>
          <h1 className="text-lg font-semibold md:hidden">MedAI - Traust du mir?</h1>
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
