"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useMedAIStore } from "@/store/useMedAIStore";

export function ChronicTips() {
  const { result, loading } = useMedAIStore();

  if (loading || !result) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Medizinische Einschätzung</CardTitle>
        <CardDescription>Chronisches Krankheitsmanagement</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {result.conditionSummary && (
          <div>
            <h4 className="font-semibold mb-2">Zustand</h4>
            <p className="text-sm text-muted-foreground">{result.conditionSummary}</p>
          </div>
        )}

        {result.selfManagement && (
          <div>
            <h4 className="font-semibold mb-2">Selbstmanagement</h4>
            {Array.isArray(result.selfManagement) ? (
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {result.selfManagement.map((item: any, idx: number) => (
                  <li key={idx}>{typeof item === 'string' ? item : JSON.stringify(item)}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{typeof result.selfManagement === 'string' ? result.selfManagement : JSON.stringify(result.selfManagement)}</p>
            )}
          </div>
        )}

        {result.lifestyle && (
          <div>
            <h4 className="font-semibold mb-2">Lebensstil</h4>
            {Array.isArray(result.lifestyle) ? (
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {result.lifestyle.map((item: any, idx: number) => (
                  <li key={idx}>{typeof item === 'string' ? item : JSON.stringify(item)}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{typeof result.lifestyle === 'string' ? result.lifestyle : JSON.stringify(result.lifestyle)}</p>
            )}
          </div>
        )}

        {result.monitoring && (
          <div>
            <h4 className="font-semibold mb-2">Überwachung</h4>
            {Array.isArray(result.monitoring) ? (
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {result.monitoring.map((item: any, idx: number) => (
                  <li key={idx}>{typeof item === 'string' ? item : JSON.stringify(item)}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{typeof result.monitoring === 'string' ? result.monitoring : JSON.stringify(result.monitoring)}</p>
            )}
          </div>
        )}

        {result.redFlags && (
          <div>
            <h4 className="font-semibold mb-2 text-destructive">Warnsignale</h4>
            {Array.isArray(result.redFlags) ? (
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {result.redFlags.map((item: any, idx: number) => (
                  <li key={idx}>{typeof item === 'string' ? item : JSON.stringify(item)}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{typeof result.redFlags === 'string' ? result.redFlags : JSON.stringify(result.redFlags)}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
