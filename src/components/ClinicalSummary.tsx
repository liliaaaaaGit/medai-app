"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useMedAIStore } from "@/store/useMedAIStore";

export function ClinicalSummary() {
  const { result, loading } = useMedAIStore();

  if (loading || !result) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Medizinische Einschätzung</CardTitle>
        <CardDescription>Akute Diagnose</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {result.summary && (
          <div>
            <h4 className="font-semibold mb-2">Zusammenfassung</h4>
            <p className="text-sm text-muted-foreground">{result.summary}</p>
          </div>
        )}

        {result.differentials && Array.isArray(result.differentials) && result.differentials.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Differenzialdiagnosen</h4>
            <ul className="space-y-2">
              {result.differentials.map((diff: any, idx: number) => {
                const label = typeof diff === 'string' ? diff : (diff.label || diff.condition || JSON.stringify(diff));
                const probability = diff.probability;
                const reasoning = diff.reasoning;
                
                return (
                  <li key={idx} className="text-sm">
                    <span className="font-medium">{label}</span>
                    {probability && <span className="text-muted-foreground"> ({probability})</span>}
                    {reasoning && <p className="text-muted-foreground ml-4">{reasoning}</p>}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {result.advice && (
          <div>
            <h4 className="font-semibold mb-2">Empfehlungen</h4>
            <p className="text-sm text-muted-foreground">{result.advice}</p>
          </div>
        )}

        {result.nextSteps && (
          <div>
            <h4 className="font-semibold mb-2">Nächste Schritte</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {Array.isArray(result.nextSteps) ? (
                result.nextSteps.map((step: any, idx: number) => (
                  <li key={idx}>{typeof step === 'string' ? step : JSON.stringify(step)}</li>
                ))
              ) : (
                <li>{typeof result.nextSteps === 'string' ? result.nextSteps : JSON.stringify(result.nextSteps)}</li>
              )}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
