"use client"

import { MoreVertical } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartTooltip } from "./ui/chart"

const chartData = [
  { range: "0s", value: 12 },
  { range: "1 min", value: 20 },
  { range: "5–15 min", value: 42 },
  { range: "15–30 min", value: 28 },
  { range: "30min–1h", value: 14 },
  { range: "1h", value: 7 },
]

export function Holding() {
  return (
    <Card className="w-[50%] rounded-[43px] border border-jrnl-dash bg-gradient-to-t from-[#14151C] to-[#0F0F0F] p-6">
      
      {/* Header */}
      <CardHeader className="flex items-center justify-between p-3 h-[73px]">
        <CardTitle className="text-[20px] font-normal text-jrnl-text-white">
          Average Holding Period
        </CardTitle>
        <MoreVertical className="h-6 w-6 text-jrnl-text-white" />
      </CardHeader>

      {/* Chart */}
      <CardContent className="h-[240px] w-full p-0">
        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} 
            margin={{left:-25, right:25, top:0, bottom:0}} barCategoryGap={0}
            barGap={0}
            >
              
              <CartesianGrid
                stroke="#27272a"
              />

              <XAxis
                dataKey="range"
                stroke="#71717a"
                domain={[0, 50]} 
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
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.03)"}}
                contentStyle={{
                  backgroundColor: "#09090b",
                  border: "1px solid #27272a",
                  borderRadius: "8px",
                  fontSize: "12px",
                  color:"white"
                }}
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
