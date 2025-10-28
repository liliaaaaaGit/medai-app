"use client";

import { Header } from "@/components/Header";
import { ModeToggle } from "@/components/ModeToggle";
import { SymptomForm } from "@/components/SymptomForm";
import { ClinicalSummary } from "@/components/ClinicalSummary";
import { ChronicTips } from "@/components/ChronicTips";
import { LifeExpectancyCard } from "@/components/LifeExpectancyCard";
import { useMedAIStore } from "@/store/useMedAIStore";

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
