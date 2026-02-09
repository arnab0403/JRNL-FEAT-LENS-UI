import { AssetPerformanceDistribution } from "./Asste"
import BestAssetChart from "./BestAsset"
import { HourlyTradeDistribution } from "./HourlyTrade"
import { DailyPnLChart } from "./DailyPnlChart"
import Directional from "./Directional"
import { Holiday } from "./Holiday"
import {AssetPerformanceDonut} from "./Pie"
import { TradeDurationChart } from "./TradeDuration"
import TradingPerformence from "./TradingPerformence"
import AnalyticsCustomization from "@/buttons/AnalyticsCustomization"
import AnalyticsSettings from "@/buttons/AnalyticsSettings"

function Analytics({setIsOpen}: {setIsOpen: (value:boolean)=>void}){
    return(
        <div className="bg-primary px-10 py-5 flex flex-col gap-6" >
            <div className="flex justify-between self-end w-[72px]">
                <AnalyticsCustomization/>
                <AnalyticsSettings/>
            </div>
            <div  className="bg-jrnl-primary-sidebar rounded-[12px] w-full  px-4 py-6 flex flex-col gap-4">
                <div className="bg-secondary  rounded-[12px] w-full flex justify-between gap-5">
                    <HourlyTradeDistribution/>
                    <BestAssetChart/>
                </div>

                <div className="bg-secondary  rounded-[12px] w-full flex justify-between gap-5">
                    <DailyPnLChart/>
                    <TradingPerformence/>
                </div>

                <div className="bg-secondary min-w-[450px]  rounded-[12px] w-full flex justify-between gap-5">
                    <Directional/>
                    <AssetPerformanceDistribution/>
                    <AssetPerformanceDonut/>
                </div>

                <div className="bg-secondary  rounded-[12px] w-full flex justify-between gap-5">
                    <TradeDurationChart/>
                    <Holiday/>
                </div>
            </div>
        </div>
    )
}
export default Analytics