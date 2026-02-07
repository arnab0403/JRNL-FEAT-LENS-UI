import { AssetPerformanceDistribution } from "./Asste"
import BestAssetChart from "./BarChart"
import { HourlyTradeDistribution } from "./Chart"
import { DailyPnLChart } from "./Chartbarnegative"
import Directional from "./Directional"
import { Holiday } from "./Holiday"
import {AssetPerformanceDonut} from "./Pie"
import { TradeDurationChart } from "./TradeDuration"

function Analytics({setIsOpen}: {setIsOpen: (value:boolean)=>void}){
    return(
        <div className="bg-primary px-10 py-5" >
            <div  className="bg-jrnl-primary-sidebar rounded-[12px] w-full  px-4 py-6 flex flex-col gap-4">
                <div className="bg-secondary  rounded-[12px] w-full flex justify-between gap-5">
                    <HourlyTradeDistribution/>
                    <BestAssetChart/>
                </div>

                <div className="bg-secondary  rounded-[12px] w-full flex justify-between gap-5">
                    <DailyPnLChart/>
                    <BestAssetChart/>
                </div>

                <div className="bg-secondary  rounded-[12px] w-full flex justify-between gap-5">
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