"use client"

import { MoreVertical } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  { region: "Asian", profit: 18 },
  { region: "London", profit: 26 },
  { region: "New York", profit: 17 },
]

const chartConfig = {
  profit: {
    label: "Profit",
  },
} satisfies ChartConfig

export function AssetPerformanceDistribution() {
  return (
    <Card className="max-h-full min-h-full w-[33%]  rounded-[43px] border-zinc-800 bg-gradient-to-t from-[#14151C] to-[#0F0F0F] text-white px-3">
      
      {/* Header */}
      <CardHeader className="flex justify-between items-center px-5 h-[80px]">
        <div className="flex w-full justify-between  ">
          <div className="">
            <CardTitle className="text-xl font-normal">
              Asset Performance Distribution
            </CardTitle>
            <CardDescription className="text-xs text-jrnl-text-grey">
              Profit by Trading distribution
            </CardDescription>
          </div>

          <MoreVertical className="h-6 w-6 text-jrnl-text-white self-start" />
        </div>
      </CardHeader>

      {/* Chart */}
      <CardContent className="px-3 pt-2 pb-4">
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 10, left: -5, bottom: 0 }}
            barCategoryGap={18}
          >
            <CartesianGrid
              horizontal={false}
              stroke="#27272a"
              strokeDasharray="3 3"
            />

            <XAxis
              type="number"
              stroke="#71717a"
              tickLine={false}
              axisLine={false}
              fontSize={12}
              domain={[0, 30]}
            />

            <YAxis
              dataKey="region"
              type="category"
              stroke="#a1a1aa"
              tickLine={false}
              axisLine={false}
              fontSize={13}
            />

            <ChartTooltip
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              content={
                <ChartTooltipContent
                  formatter={(value) => [`${value}`, "Profit"]}
                />
              }
            />

            <Bar
              dataKey="profit"
              radius={[0, 0, 0, 0]}
              fill="url(#greenGradient)"
              barSize={22}
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#166534" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
