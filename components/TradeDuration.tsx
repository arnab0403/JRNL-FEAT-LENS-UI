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
    <div className="w-[50%] rounded-2xl border border-zinc-800 bg-gradient-to-t from-[#14151C] to-[#0F0F0F] p-4">
      
      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-zinc-200">
            Trade Duration
          </h3>
          <p className="text-xs text-zinc-500">
            Profit & loss vs time held
          </p>
        </div>
        <span className="text-zinc-500">⋮</span>
      </div>

      {/* Chart */}
      <div className="h-[80%]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 10, left: -5, bottom: 0 }}>
            
            <CartesianGrid
              stroke="#27272a"
              strokeDasharray="3 3"
            />

            <XAxis
              type="number"
              dataKey="duration"
              unit="h"
              stroke="#71717a"
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
              domain={[-100, 150]}
              fontSize={11}
              tickFormatter={(v) => `₹${v}`}
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
