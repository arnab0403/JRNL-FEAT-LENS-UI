import { Plus } from "lucide-react";
import Table from "./Table";

export default function Reports({setIsOpen,lensMetricsData}:{setIsOpen:(value:boolean)=>void,lensMetricsData:any}){
    const leftMetricsData = lensMetricsData.flatMap((section:any) => section.metrics).filter((metric:any)=>metric.show).filter((_:any, index:any) => index % 2 === 0);

    const rightMetricsData = lensMetricsData.flatMap((section:any) => section.metrics).filter((metric:any)=>metric.show).filter((_:any, index:any) => index % 2 !== 0);
    
    return (
        <div className="bg-primary px-10 py-5">
            <div className="flex gap-6  justify-end">
                <button className="max-h-[37px] border border-jrnl-border text-[20px] px-2 py-2.5 rounded-[10px] tracking-normal appearance-none items-center cursor-pointer flex gap-1 text-jrnl-text-grey hover:text-white hover:border-white" onClick={()=>setIsOpen(true)} >
                <Plus />
                <p className="text-[16px] font-normal">
                Customise Metrics
                </p>
                </button>
            </div>
            <div className="w-[70%] flex gap-6 mt-5">
                <Table metrics={leftMetricsData}/>
                <Table metrics={rightMetricsData}/>
            </div>
        </div>
    )
}