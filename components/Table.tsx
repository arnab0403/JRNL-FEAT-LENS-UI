 function Table({metrics}: {metrics: any}) {
    return (
        <div className="w-[50%] h-[50%] border border-[#2A2A2A] rounded-[12px] overflow-hidden">
          <div className="flex justify-between bg-jrnl-bold px-4 h-[52px] items-center">
            <h3>Metric</h3>
            <h3>Value</h3>
          </div>
          {metrics.map((metric:any,index:number)=>(
            metric.show && (
            <div key={metric.key} className={`flex justify-between px-4 h-[39px] items-center border-t border-t-[#2A2A2A] ${index % 2 === 0 ? "bg-jrnl-minimal" : "bg-jrnl-primary-sidebar"}`}>
              <p>{metric.label}</p>
              <p>5297.97</p>
            </div>
            )
          ))}
        </div>
    )
 }

 export default Table;