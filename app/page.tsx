"use client";

import { Header } from "@/src/components/Header";
import { ModeToggle } from "@/src/components/ModeToggle";
import { SymptomForm } from "@/src/components/SymptomForm";
import { ClinicalSummary } from "@/src/components/ClinicalSummary";
import { ChronicTips } from "@/src/components/ChronicTips";
import { LifeExpectancyCard } from "@/src/components/LifeExpectancyCard";
import { useMedAIStore } from "@/src/store/useMedAIStore";

export default function HomePage() {
  const mode = useMedAIStore((s) => s.mode);
  const result = useMedAIStore((s) => s.result);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl p-6 pt-12 grid gap-8">
        <ModeToggle />
        <SymptomForm />
        {mode === "acute" ? <ClinicalSummary /> : <ChronicTips />}
        {result && <LifeExpectancyCard />}
      </main>
    </>
  );
}
