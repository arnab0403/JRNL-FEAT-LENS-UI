"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { MoreVertical } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
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
  { time: "1 AM", activity: 0 },
  { time: "2 AM", activity: 0 },
  { time: "3 AM", activity: 0 },
  { time: "4 AM", activity: 0 },
  { time: "5 AM", activity: 0 },
  { time: "6 AM", activity: 0 },
  { time: "7 AM", activity: 1.8 },
  { time: "8 AM", activity: 2.2 },
  { time: "9 AM", activity: 2.0 },
  { time: "10 AM", activity: 1.0 },
  { time: "11 AM", activity: 0.5 },
  { time: "12 PM", activity: 3.2 },
  { time: "1 PM", activity: 1.0 },
  { time: "2 PM", activity: 0 },
  { time: "3 PM", activity: 5.1 },
  { time: "4 PM", activity: 2.9 },
  { time: "5 PM", activity: 0 },
  { time: "6 PM", activity: 1.5 },
  { time: "7 PM", activity: 1.0 },
  { time: "8 PM", activity: 0.5 },
  { time: "9 PM", activity: 3.3 },
  { time: "10 PM", activity: 0.2 },
  { time: "11 PM", activity: 0.1 },
  { time: "12 AM", activity: 0 },
]

const chartConfig = {
  activity: {
    label: "Activity",
    color: "#10B981", // Emerald 500
  },
} satisfies ChartConfig

export function HourlyTradeDistribution() {
  return (
      <Card className="w-[50%] rounded-[43px] border border-jrnl-dash bg-gradient-to-t from-[#14151C] to-[#0F0F0F] text-white shadow-none px-3">
        <CardHeader className="flex flex-row items-center justify-between pb-8 pt-4 ">
          <div className="space-y-1">
            <CardTitle className="text-[20px] font-normal text-white">
              Hourly Trade Distribution
            </CardTitle>
            <CardDescription className="text-jrnl-text-grey">
              Trading Activity by hour
            </CardDescription>
          </div>
          <button className="text-jrnl-text-white self-start">
            <MoreVertical className="h-6 w-6" />
          </button>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">

            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 0,
                left: -40,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#49DE80" stopOpacity={1} />
                  <stop offset="100%" stopColor="#122F1D" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                stroke="#27272a" // zinc-800
                strokeDasharray="0"
              />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={15}
                interval={1} // Show every 2nd label if needed, or adjust
                tick={{ fill: "#71717a", fontSize: 12 }}
                tickFormatter={(value, index) => {
                  // Show labels for 1 AM, 3 AM, 5 AM etc. matching screenshot roughly
                  // Screenshot has 1 AM, 3 AM, 5 AM ...
                  const hour = parseInt(value.split(" ")[0]);
                  const isAm = value.includes("AM");
                  // Simple filter to match screenshot density approximately
                  // Or just rely on interval.
                  // Let's just return the value for now, recharts might auto-hide
                  return value;
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#71717a", fontSize: 12 }}
                tickCount={5}
                domain={[0, 'auto']}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
                contentStyle={{
                  backgroundColor: "#09090b",
                  border: "1px solid #27272a",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="activity"
                fill="url(#barGradient)"
                radius={[0, 0, 0, 0]}
                barSize={12}
              />
            </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
  )
}
