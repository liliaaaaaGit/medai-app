"use client";

import { Button } from "@/src/components/ui/button";
import { useMedAIStore } from "@/src/store/useMedAIStore";
import { cn } from "@/src/lib/utils";

export function ModeToggle() {
  const { mode, setMode } = useMedAIStore();

  return (
    <div className="flex gap-2">
      <Button
        variant={mode === "acute" ? "default" : "outline"}
        onClick={() => setMode("acute")}
        className={cn("flex-1")}
      >
        Diagnose
      </Button>
      <Button
        variant={mode === "chronic" ? "default" : "outline"}
        onClick={() => setMode("chronic")}
        className={cn("flex-1")}
      >
        Langzeitmanagement
      </Button>
    </div>
  );
}
