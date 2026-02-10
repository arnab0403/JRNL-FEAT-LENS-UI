"use client";

import Calender from "@/buttons/Calender";
import ThemeToggle from "../buttons/ThemeToggle";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { lensMetricsData } from "@/data/data";
import Reports from "@/components/Reports";
import Analytics from "@/components/Analytics";
import { ChartBarInteractive } from "@/components/Test";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [matricsData, setMatricsData] = useState<any>(lensMetricsData);
  const [tab, setTab] = useState<"review" | "analytics" | "reports">("reports");

  return (
    <>
    <div className="grid grid-cols-[5%_95%] h-screen z-40 text-white bg-primary-sidebar">
      <div className=" bg-jrnl-primary-sidebar border-r-jrnl-border border-r"></div>
      <div className="">
        <div className="bg-primary px-6 py-4 border-b border-jrnl-border flex flex-col gap-4">
          <div className="flex justify-between">

            <div className="flex flex-col">
              <h1 className="text-[40px]">Lens</h1>
              <p className="text-[18px] text-jrnl-text-grey">Reports - Metrics Overview</p>
            </div>

            <div className="flex  gap-6">
              <p className="font-extralight text-[16px]">Tuesday, 4 Feb 2026</p>
              <Calender className="cursor-pointer" />
              <ThemeToggle className="cursor-pointer" />
            </div>

          </div>
          {/* feature options */}
          <div className="flex gap-6 text-jrnl-text-white" >
            <button className={`${tab === "reports" ? "bg-jrnl-bold" : "text-jrnl-text-grey"} m-0 p-0  px-3 h-[40px] rounded-[10px] cursor-pointer text-center`} onClick={()=>setTab("reports")}>
              <p className="leading-[120%] text-[20px] h-[24px]">
                Reports
              </p>
            </button>
            <button className={`${tab === "analytics" ? "bg-jrnl-bold" : "text-jrnl-text-grey"} max-h-10  text-[20px] px-3 py-2.5 rounded-[10px] cursor-pointer flex justify-center items-center`} onClick={()=>setTab("analytics")}>
              Analytics
            </button>
            <button className={`${tab === "review" ? "bg-jrnl-bold" : "text-jrnl-text-grey"} max-h-10 text-[20px] px-3 py-2.5 rounded-[10px] cursor-pointer flex justify-center items-center`} onClick={()=>setTab("review")}>
              Review
            </button>
          </div>
        </div>
        {tab === "reports" && <Reports setIsOpen={setIsOpen} lensMetricsData={matricsData}  />}
        {tab === "analytics" && <Analytics setIsOpen={setIsOpen} />}
      </div>
    </div>
    {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} matricsData={matricsData} setMatricsData={setMatricsData}/>}
    </>
  );
}
