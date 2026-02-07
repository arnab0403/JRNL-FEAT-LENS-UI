"use client"

import { MoreVertical } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
  { range: "0s", value: 12 },
  { range: "1 min", value: 20 },
  { range: "5–15 min", value: 42 },
  { range: "15–30 min", value: 28 },
  { range: "30min–1h", value: 14 },
  { range: "1h", value: 7 },
]

export function Holiday() {
  return (
    <Card className="w-[50%] rounded-2xl border border-jrnl-dash bg-gradient-to-t from-[#14151C] to-[#0F0F0F]">
      
      {/* Header */}
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-zinc-200">
          Average Holiday Period
        </CardTitle>
        <MoreVertical className="h-4 w-4 text-zinc-500" />
      </CardHeader>

      {/* Chart */}
      <CardContent className="pt-2">
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10 }}>
              
              <CartesianGrid
                stroke="#27272a"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="range"
                stroke="#71717a"
                tickLine={false}
                axisLine={false}
                fontSize={11}
              />

              <YAxis
                stroke="#71717a"
                tickLine={false}
                axisLine={false}
                fontSize={11}
                domain={[0, 50]}
              />

              <Bar
                dataKey="value"
                radius={[0, 0, 0, 0]}
                fill="url(#greenGradient)"
                barSize={32}
              />

              {/* Gradient */}
              <defs>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#166534" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
