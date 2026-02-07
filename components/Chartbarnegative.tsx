"use client"

import { MoreVertical } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { day: "Mon", pnl: -50 },
  { day: "Tue", pnl: -200 },
  { day: "Wed", pnl: 200 },
  { day: "Thu", pnl: 40 },
  { day: "Fri", pnl: -120 },
  { day: "Sat", pnl: 390 },
  { day: "Sun", pnl: 0 },
]

const chartConfig = {
  pnl: {
    label: "PnL",
  },
} satisfies ChartConfig

export function DailyPnLChart() {
  return (
    <Card className="w-[50%] rounded-2xl border-zinc-800  bg-gradient-to-t from-[#14151C] to-[#0F0F0F] text-white py-10">
      {/* Header */}
      <CardHeader className="flex-row items-start justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl font-medium">
            Daily Profit/Loss
          </CardTitle>
          <CardDescription className="text-xs text-zinc-400">
            Last 7 day performance
          </CardDescription>
        </div>
        <MoreVertical className="h-4 w-4 text-zinc-400" />
      </CardHeader>

      {/* Chart */}
      <CardContent className="pt-4">
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} margin={{ top: 10, left: 0, right: 0 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
              vertical={false}
            />

            <XAxis
              dataKey="day"
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
              domain={[-400, 600]}
            />

            {/* Zero Line */}
            <ReferenceLine
              y={0}
              stroke="#3f3f46"
              strokeDasharray="4 4"
            />

            <ChartTooltip
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              content={
                <ChartTooltipContent
                  formatter={(value) => [`₹ ${value}`, "PnL"]}
                />
              }
            />

            <Bar dataKey="pnl" radius={[6, 6, 6, 6]}>
              {chartData.map((item) => (
                <Cell
                  key={item.day}
                  fill={
                    item.pnl >= 0
                      ? "url(#greenGradient)"
                      : "url(#redGradient)"
                  }
                />
              ))}
            </Bar>

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
      </CardContent>
    </Card>
  )
}
