import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { MoreVertical } from "lucide-react"

const data = [
  { asset: "BTC", profit: 13, loss: 17 },
  { asset: "ETH", profit: 23, loss: 14 },
  { asset: "SOL", profit: 14, loss: 10 },
  { asset: "XRP", profit: 23, loss: 11 },
  { asset: "ADA", profit: 12, loss: 23 },
]

export default function BestAssetChart() {
  return (
    <div className="w-[50%] rounded-[43px] border border-jrnl-dash bg-gradient-to-t from-[#14151C] to-[#0F0F0F] p-10">
      
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-normal text-zinc-200">
          Best Asset for Trading
        </h3>
        <MoreVertical className="h-4 w-4 text-zinc-400" />
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={8}
            margin={{ top: 20, right: 10, left: -40, bottom: 0 }}
          >
            <CartesianGrid
              x={data[0].profit}
              y={data[0].loss}
              stroke="#27272a"
              vertical={false}
              horizontal={true}
            />

            <XAxis
              dataKey="asset"
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

            {/* Profit */}
            <Bar
              dataKey="profit"
              radius={[0, 0, 0, 0]}
              fill="url(#greenGradient)"
            />

            {/* Loss */}
            <Bar
              dataKey="loss"
              radius={[0, 0, 0, 0]}
              fill="url(#redGradient)"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#49DE80" />
                <stop offset="100%" stopColor="#122F1D" />
              </linearGradient>

              <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#6B2A2A" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="mt-4 text-[15px] text-zinc-400">
        Best Asset: BTC
      </div>
    </div>
  )
}
