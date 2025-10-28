"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMedAIStore } from "@/store/useMedAIStore";
import { analyzeRemote } from "@/lib/api";
import { Loader2 } from "lucide-react";

export function SymptomForm() {
  const { mode, input, setInput, setResult, setLoading, setError, loading, error } = useMedAIStore();
  const [localAge, setLocalAge] = useState(input.age?.toString() || "");
  const [localSex, setLocalSex] = useState(input.sex || "");
  const [localSymptoms, setLocalSymptoms] = useState(input.symptoms || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const ageNum = parseInt(localAge);
    if (!ageNum || ageNum < 0 || ageNum > 120) {
      setError("Please enter a valid age between 0 and 120");
      return;
    }

    if (!localSex) {
      setError("Bitte wählen Sie ein Geschlecht aus (Please select a sex)");
      return;
    }

    if (!localSymptoms.trim()) {
      setError("Please describe your symptoms");
      return;
    }

    const formData = {
      age: ageNum,
      sex: localSex as "female" | "male" | "diverse",
      symptoms: localSymptoms,
    };

    setInput(formData);
    setError(null);
    setLoading(true);

    try {
      const result = await analyzeRemote(mode, formData);
      setResult(result);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patientendaten</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="age">Alter</Label>
              <Input
                id="age"
                type="number"
                min="0"
                max="120"
                value={localAge}
                onChange={(e) => setLocalAge(e.target.value)}
                placeholder="z.B. 45"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sex">Geschlecht</Label>
              <Select value={localSex} onValueChange={setLocalSex} required>
                <SelectTrigger id="sex">
                  <SelectValue placeholder="Auswählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="female">Weiblich</SelectItem>
                  <SelectItem value="male">Männlich</SelectItem>
                  <SelectItem value="diverse">Divers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="symptoms">
              {mode === "chronic" ? "Diagnose und Begleitsymptome" : "Symptome"}
            </Label>
            <Textarea
              id="symptoms"
              value={localSymptoms}
              onChange={(e) => setLocalSymptoms(e.target.value)}
              placeholder={mode === "chronic" ? "Beschreiben Sie Ihre Diagnose und Begleitsymptome..." : "Beschreiben Sie Ihre Symptome..."}
              required
              rows={4}
            />
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              {error}
            </div>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analysiere...
              </>
            ) : (
              "Analysieren"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
