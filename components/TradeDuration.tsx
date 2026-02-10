import { MoreVertical } from "lucide-react"
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const tradeData = [
  { duration: 0.5, value: 0 },
  { duration: 0.8, value: -40 },
  { duration: 1, value: 30 },
  { duration: 1.2, value: 120 },
  { duration: 1.5, value: 90 },
  { duration: 2, value: -80 },
  { duration: 2.2, value: -20 },
  { duration: 2.5, value: 70 },
  { duration: 3, value: 95 },
]

export function TradeDurationChart() {
  return (
    <div className="w-[50%] rounded-[43px] border border-jrnl-dash bg-gradient-to-t from-[#14151C] to-[#0F0F0F] p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between p-3 h-[73px]">
          <h3 className="text-[20px] font-normal text-text-white">
            Trade Duration VS Profit
          </h3>
        <span className="text-text-white">
          <MoreVertical className="h-6 w-6" />
        </span>
      </div>

      {/* Chart */}
      <div className="h-[80%] w-full pr-3">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
            
            <CartesianGrid
              stroke="#27272a"
            />

            <XAxis
              type="number"
              dataKey="duration"
              unit="h"
              stroke="#71717a"
              tickCount={8}
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />

            <YAxis
              type="number"
              dataKey="value"
              stroke="#71717a"
              tickLine={false}
              axisLine={false}
              tickCount={6}
              domain={[-150, 150]}
              fontSize={11}
              tickFormatter={(v) => `$${v}.00`}
            />

            {/* Solid zero line */}
            <ReferenceLine
              y={0}
              stroke="#3f3f46"
            />

            <Tooltip
              cursor={{ strokeDasharray: "2 2" }}
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #27272a",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#a1a1aa" }}
              formatter={(value) => [`₹ ${value}`, "PnL"]}
              labelFormatter={(label) => `Duration: ${label}h`}
            />

            <Scatter
              data={tradeData.filter(d => d.value >= 0)}
              dataKey="value"
              fill="#22c55e"
              opacity={0.85}
              r={4}
            />

            <Scatter
              data={tradeData.filter(d => d.value < 0)}
              dataKey="value"
              fill="#ef4444"
              opacity={0.85}
              r={4}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}
