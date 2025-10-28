interface StatisticBlockProps {
  percentage: string;
  description: string;
}

export function StatisticBlock({ percentage, description }: StatisticBlockProps) {
  return (
    <div className="mb-8">
      <div className="text-center">
        <div className="text-destructive text-6xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
          {percentage}
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
