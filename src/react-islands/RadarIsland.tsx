import { ArticleRadarChart } from "@/components/article/RadarChart";

export default function RadarIsland({ scores }) {
  return (
    <div style={{ width: "100%", height: "320px" }}>
      <ArticleRadarChart scores={scores} />
    </div>
  );
}
