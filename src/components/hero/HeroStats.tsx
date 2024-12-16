interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "500+", label: "Businesses Served" },
  { value: "40%", label: "Average Time Saved" },
  { value: "25%", label: "Cost Reduction" }
];

export function HeroStats() {
  return (
    <div className="flex justify-center gap-8 mt-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center backdrop-blur-sm bg-black/20 p-4 rounded-lg">
          <div className="text-2xl font-mono text-purple-400">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}