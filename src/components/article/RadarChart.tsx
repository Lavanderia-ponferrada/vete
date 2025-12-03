import { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

interface RadarChartProps {
  scores: {
    ingredients: number;
    nutrition: number;
    palatability: number;
    priceQuality: number;
    overall: number;
  };
}

const ArticleRadarChart = ({ scores }: RadarChartProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const data = [
    { subject: "Ingredientes", value: scores.ingredients, fullMark: 5 },
    { subject: "Nutrición", value: scores.nutrition, fullMark: 5 },
    { subject: "Palatabilidad", value: scores.palatability, fullMark: 5 },
    { subject: "Calidad/Precio", value: scores.priceQuality, fullMark: 5 },
    { subject: "Global", value: scores.overall, fullMark: 5 }
  ];

  if (!mounted) {
    return (
      <div className="w-full h-[320px] flex items-center justify-center bg-secondary/30 rounded-lg animate-pulse" />
    );
  }

  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#ccc" strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#666", fontSize: 11 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 5]}
            tick={{ fill: "#666", fontSize: 10 }}
            tickCount={6}
          />
          <Radar
            name="Puntuación"
            dataKey="value"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.4}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ArticleRadarChart;
