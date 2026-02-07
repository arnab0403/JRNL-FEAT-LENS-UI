"use client"

import { MoreVertical } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { direction: "Sell", profit: 18, loss: 15 },
  { direction: "Buy", profit: 14, loss: 17 },
]

const chartConfig = {
  profit: {
    label: "Profit",
  },
  loss: {
    label: "Loss",
  },
} satisfies ChartConfig

export default function Directional() {
  return (
    <Card className="h-full w-[33%] rounded-2xl border-zinc-800 bg-gradient-to-t from-[#14151C] to-[#0F0F0F] text-white">
      
      {/* Header */}
      <CardHeader className="flex items-center justify-between px-5 pt-5 pb-3">
        <CardTitle className="text-base font-medium">
          Directional Performance
        </CardTitle>
        <MoreVertical className="h-4 w-4 text-zinc-400" />
      </CardHeader>

      {/* Chart */}
      <CardContent className="px-3 pb-4 pt-0">
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            barGap={6}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#27272a"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="direction"
              stroke="#71717a"
              tickLine={false}
              axisLine={false}
              fontSize={12}
            />

            <YAxis
              stroke="#71717a"
              tickLine={false}
              axisLine={false}
              fontSize={12}
              domain={[0, 20]}
            />

            <ChartTooltip
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              content={
                <ChartTooltipContent
                  formatter={(value) => [value, "Trades"]}
                />
              }
            />

            {/* Profit */}
            <Bar
              dataKey="profit"
              radius={[6, 6, 0, 0]}
              fill="url(#greenGradient)"
            />

            {/* Loss */}
            <Bar
              dataKey="loss"
              radius={[6, 6, 0, 0]}
              fill="url(#redGradient)"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>

              <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>
          </BarChart>
        </ChartContainer>

        {/* Bottom labels (Sell / Buy indicators) */}
        <div className="mt-2 flex justify-center gap-10 text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <span className="text-red-400">▼</span> Sell
          </span>
          <span className="flex items-center gap-1">
            <span className="text-green-400">▲</span> Buy
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
