import { PieChart, Pie, Cell, ResponsiveContainer, Label, Sector } from "recharts"
import { MoreVertical } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

const data = [
  { name: "BTCUSD: $1", value: 35, color: "#82C1F9" },
  { name: "GBPUSD: $570", value: 25, color: "#1E4CF0" },
  { name: "USD: $6775", value: 20, color: "#2E80F1" },
  { name: "$10919", value: 10, color: "#2563EB" },
  { name: "BTCUSD: $1", value: 10, color: "#1D4ED8" },
]

export function AssetPerformanceDonut() {
  return (
    <Card className="w-[33%] mx-auto aspect-square flex flex-col justify-between overflow-hidden rounded-[2rem]  border-zinc-800 bg-gradient-to-t from-[#14151C] to-[#0F0F0F]">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl font-medium text-white/90">
            Asset Performance Distribution
          </CardTitle>
          <CardDescription className="text-sm text-white/40">
            Profit by Trading distribution
          </CardDescription>
        </div>
        <button className="text-white/60 hover:text-white transition-colors">
          <MoreVertical className="h-5 w-5" />
        </button>
      </CardHeader>
      <CardContent className="flex-1 relative flex items-center justify-center p-0 m-0">
        <div className="w-full h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                stroke="none"
                activeIndex={0}
                label={({ cx, cy, midAngle, outerRadius, name }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = outerRadius + 25;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="rgba(255, 255, 255, 0.6)"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                      fontSize={10}
                    >
                      {name}
                    </text>
                  );
                }}
                labelLine={{
                  stroke: 'rgba(255, 255, 255, 0.2)',
                  strokeWidth: 1
                }}
                activeShape={({
                  outerRadius = 0,
                  ...props
                }: PieSectorDataItem) => (
                  <Sector {...props} outerRadius={outerRadius + 10} />
                )}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-white text-4xl font-semibold"
                          >
                            28
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-white/40 text-sm"
                          >
                            Trades
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>


      </CardContent>
    </Card>
  )
}
