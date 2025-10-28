"use client";

import { Separator } from "@/components/ui/separator";
import { StatisticBlock } from "@/components/StatisticBlock";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  const handleBackToDiagnose = () => {
    router.push("/");
  };
  return (
    <div className="min-h-screen bg-[#f4f4f4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <h1 className="text-left mb-12 text-destructive text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
          KI als Akteur der Gesundheitskommunikation
        </h1>

        {/* Opening Text */}
        <div className="space-y-6 mb-12 text-left">
          <p>
            <span className="inline-block mb-4">
              „Lebenserwartung basierend auf Ihrer Diagnose: 1 Tag."
            </span>
          </p>
          <p>
            Haben Sie es geglaubt? Oder war Ihnen klar, dass Sie von dieser Diagnose nicht sofort sterben werden?
          </p>
          <p>
            Genau hier liegt die Gefahr künstlicher Intelligenz im Gesundheitswesen. Sie klingt rational, präzise und überzeugend – doch sie kann sich irren.
          </p>
        </div>

        <Separator className="my-12 bg-gray-300" />

        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <p>
            KI erkennt Muster, stellt Diagnosen, gibt Therapieempfehlungen und begleitet Patienten langfristig. Sie hilft Ärzten, komplexe Daten auszuwerten und entlastet das Gesundheitssystem. Doch fehlender Kontext, Verzerrungen und unvollständige Daten können zu Fehleinschätzungen führen.
          </p>
          <p>
            Eine aktuelle Vergleichsstudie zeigt, wie leistungsfähig – und zugleich trügerisch – KI sein kann: In einem Test mit 400 simulierten Patientenfällen wurden Ärzte und ein KI-Sprachmodell miteinander verglichen. Die Ergebnisse sprechen für sich:
          </p>
        </div>

        {/* Statistics Section */}
        <div className="my-16">
          <StatisticBlock
            percentage="74 %"
            description="Ärzte ohne KI-Unterstützung treffen in 74 % der Fälle die richtige Diagnose."
          />
          <StatisticBlock
            percentage="76 %"
            description="Mit KI-Unterstützung steigt die Diagnosegenauigkeit der Ärzte leicht auf 76 %."
          />
          <StatisticBlock
            percentage="90 %"
            description="Das KI-Modell allein erreicht eine diagnostische Trefferquote von 90 %."
          />
          
          {/* Source Caption */}
          <p className="text-xs text-gray-500 text-left mt-8">
            Quelle: Vergleichsstudie zur Diagnosegenauigkeit von KI-Systemen, veröffentlicht 2024 (New York Times / advisory.com). Die Studie basierte auf 400 simulierten Patientenfällen – unter realen Bedingungen kann die Genauigkeit stark variieren.
          </p>
        </div>

        {/* Continuation Text */}
        <div className="space-y-6 mb-12">
          <p>
            Ein beeindruckendes Ergebnis – aber kein Beweis für Zuverlässigkeit im Alltag. Denn KI bewertet Fälle – Ärzte bewerten Menschen. Damit wird KI zum Akteur der Gesundheitskommunikation: Sie spricht, erklärt, beeinflusst und prägt, wie wir über Krankheit, Risiko und Gesundheit denken.
          </p>
        </div>

        <Separator className="my-12 bg-gray-300" />

        {/* Thought-Provoking Question */}
        <div className="my-16 text-center">
          <p className="text-destructive max-w-2xl mx-auto text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
            Wenn Maschinen mitreden – wem würden Sie im Zweifel mehr vertrauen: der KI oder dem Arzt?
          </p>
          
          <button 
            onClick={handleBackToDiagnose}
            className="mt-8 bg-destructive text-white px-6 py-3 rounded-md hover:bg-destructive/90 transition"
          >
            Zurück zur Diagnose
          </button>
        </div>
      </div>
    </div>
  );
}
