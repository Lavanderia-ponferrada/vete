import RadarIsland from "@/components/islands/RadarIsland.astro";

export default function RadarIslandWrapper({ scores }: { scores: any }) {
  return (
    <RadarIsland scores={scores} client:load />
  );
}
