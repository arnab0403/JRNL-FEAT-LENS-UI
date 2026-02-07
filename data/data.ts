export const lensMetricsData = [
  {
    key: "corePerformanceMetrics",
    title: "Core Performance Metrics",
    metrics: [
      { key: "totalPnL", label: "Total P&L", show: true },
      { key: "netPnL", label: "Net P&L", show: true },
      { key: "grossProfit", label: "Gross Profit", show: false },
      { key: "grossLoss", label: "Gross Loss", show: false },
      { key: "averageTradePnL", label: "Average Trade P&L", show: false },
      { key: "medianTradePnL", label: "Median Trade P&L", show: false },
      { key: "bestTradePnL", label: "Best Trade P&L", show: false },
      { key: "worstTradePnL", label: "Worst Trade P&L", show: false },
      { key: "totalReturnPercent", label: "Total Return (%)", show: false },
      { key: "roiPercent", label: "ROI (%)", show: false },
      { key: "annualizedReturn", label: "Annualized Return", show: false },
      { key: "monthlyReturn", label: "Monthly Return", show: false },
      { key: "dailyReturn", label: "Daily Return", show: false },
      { key: "compoundedReturn", label: "Compounded Return", show: false },
      { key: "equityGrowthPercent", label: "Equity Growth (%)", show: false }
    ]
  },

  {
    key: "winLossMetrics",
    title: "Win/Loss & Accuracy Metrics",
    metrics: [
      { key: "totalTrades", label: "Total Trades", show: false },
      { key: "winningTrades", label: "Winning Trades Count", show: false },
      { key: "losingTrades", label: "Losing Trades Count", show: false },
      { key: "breakevenTrades", label: "Break-even Trades Count", show: false },
      { key: "winRate", label: "Win Rate (%)", show: false },
      { key: "lossRate", label: "Loss Rate (%)", show: false },
      { key: "winLossRatio", label: "Win/Loss Ratio", show: false },
      { key: "averageWin", label: "Average Win", show: false },
      { key: "averageLoss", label: "Average Loss", show: false },
      { key: "largestWin", label: "Largest Win", show: false },
      { key: "largestLoss", label: "Largest Loss", show: false },
      { key: "smallestWin", label: "Smallest Win", show: false },
      { key: "smallestLoss", label: "Smallest Loss", show: false },
      { key: "maxConsecutiveWins", label: "Consecutive Wins (Max)", show: false },
      { key: "maxConsecutiveLosses", label: "Consecutive Losses (Max)", show: false },
      { key: "profitFactor", label: "Profit Factor", show: false },
      { key: "expectancy", label: "Expectancy", show: false }
    ]
  },

  {
    key: "riskDrawdownMetrics",
    title: "Risk & Drawdown Metrics",
    metrics: [
      { key: "maxDrawdownAbsolute", label: "Maximum Drawdown (Absolute)", show: false },
      { key: "maxDrawdownPercent", label: "Maximum Drawdown (%)", show: true },
      { key: "currentDrawdown", label: "Current Drawdown", show: true },
      { key: "averageDrawdown", label: "Average Drawdown", show: false },
      { key: "maxDrawdownDuration", label: "Drawdown Duration (Max)", show: false },
      { key: "timeToRecovery", label: "Time to Recovery", show: false },
      { key: "riskPerTradePercent", label: "Risk per Trade (%)", show: false },
      { key: "averageRiskPerTrade", label: "Average Risk per Trade", show: false },
      { key: "averageRMultiple", label: "R-Multiple (Average)", show: false },
      { key: "bestRMultiple", label: "Best R-Multiple", show: false },
      { key: "worstRMultiple", label: "Worst R-Multiple", show: false },
      { key: "returnVolatility", label: "Volatility of Returns", show: false },
      { key: "stdDeviationReturns", label: "Standard Deviation of Returns", show: false },
      { key: "downsideDeviation", label: "Downside Deviation", show: false },
      { key: "ulcerIndex", label: "Ulcer Index", show: false }
    ]
  },

  {
    key: "efficiencyQualityMetrics",
    title: "Efficiency & Quality Metrics",
    metrics: [
      { key: "sharpeRatio", label: "Sharpe Ratio", show: false },
      { key: "sortinoRatio", label: "Sortino Ratio", show: false },
      { key: "calmarRatio", label: "Calmar Ratio", show: false },
      { key: "recoveryFactor", label: "Recovery Factor", show: false },
      { key: "payoffRatio", label: "Payoff Ratio", show: true },
      { key: "tradeEfficiency", label: "Trade Efficiency (%)", show: true },
      { key: "riskAdjustedReturn", label: "Risk-Adjusted Return", show: true },
      { key: "profitPerDay", label: "Profit per Day", show: false },
      { key: "profitPerTrade", label: "Profit per Trade", show: false },
      { key: "returnOnMargin", label: "Return on Margin", show: false },
      { key: "capitalUtilization", label: "Capital Utilization (%)", show: false },
      { key: "holdingPeriodReturn", label: "Holding Period Return", show: false },
      { key: "slippageImpact", label: "Slippage Impact", show: false },
      { key: "feeImpact", label: "Fee Impact on P&L", show: false },
      { key: "netVsGrossRatio", label: "Net vs Gross Ratio", show: false }
    ]
  },

  {
    key: "timeBasedMetrics",
    title: "Time-Based Metrics",
    metrics: [
      { key: "tradesPerDay", label: "Trades per Day", show: false },
      { key: "tradesPerWeek", label: "Trades per Week", show: false },
      { key: "tradesPerMonth", label: "Trades per Month", show: false },
      { key: "pnlByDay", label: "P&L by Day", show: false },
      { key: "pnlByWeek", label: "P&L by Week", show: false },
      { key: "pnlByMonth", label: "P&L by Month", show: false },
      { key: "bestDayPnL", label: "Best Day P&L", show: false },
      { key: "worstDayPnL", label: "Worst Day P&L", show: false },
      { key: "bestMonthPnL", label: "Best Month P&L", show: false },
      { key: "worstMonthPnL", label: "Worst Month P&L", show: false },
      { key: "averageHoldingTime", label: "Average Holding Time", show: false },
      { key: "longestHoldingTime", label: "Longest Holding Time", show: false },
      { key: "shortestHoldingTime", label: "Shortest Holding Time", show: false },
      { key: "pnlByHour", label: "P&L by Hour of Day", show: false },
      { key: "pnlByWeekday", label: "P&L by Day of Week", show: false }
    ]
  },

  {
    key: "instrumentMarketMetrics",
    title: "Instrument & Market Metrics",
    metrics: [
      { key: "pnlBySymbol", label: "P&L by Symbol", show: false },
      { key: "tradesBySymbol", label: "Trades by Symbol", show: false },
      { key: "winRateBySymbol", label: "Win Rate by Symbol", show: true },
      { key: "bestSymbol", label: "Best Symbol", show: true },
      { key: "worstSymbol", label: "Worst Symbol", show: true },
      { key: "pnlByAssetClass", label: "P&L by Asset Class", show: true },
      { key: "pnlByMarket", label: "P&L by Market (Spot/Futures/Options)", show: false },
      { key: "volumeTraded", label: "Volume Traded", show: false },
      { key: "turnover", label: "Turnover", show: false },
      { key: "averageTradeSize", label: "Average Trade Size", show: false },
      { key: "largestTradeSize", label: "Largest Trade Size", show: false },
      { key: "averageLeverage", label: "Leverage Used (Avg)", show: false },
      { key: "marginUsage", label: "Margin Usage", show: false },
      { key: "feePerSymbol", label: "Fee per Symbol", show: false },
      { key: "avgCommissionPerTrade", label: "Avg Commission per Trade", show: false },
      { key: "totalCommission", label: "Total Commission", show: false }
    ]
  },

  {
    key: "costExecutionMetrics",
    title: "Cost & Execution Metrics",
    metrics: [
      { key: "totalFeesPaid", label: "Total Fees Paid", show: false },
      { key: "feesAsPercentPnL", label: "Fees as % of P&L", show: false },
      { key: "averageFeePerTrade", label: "Average Fee per Trade", show: true },
      { key: "slippagePerTrade", label: "Slippage per Trade", show: true },
      { key: "marketVsLimitFillRate", label: "Market vs Limit Fill Rate", show: true },
      { key: "partialFillRate", label: "Partial Fill Rate", show: false },
      { key: "orderRejectionRate", label: "Order Rejection Rate", show: false },
      { key: "cancelledOrdersCount", label: "Cancelled Orders Count", show: false },
      { key: "netExecutionQuality", label: "Net Execution Quality", show: false }
    ]
  }
];

