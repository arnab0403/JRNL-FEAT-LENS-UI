import Selector from "./Selector";

export default function Matrics({matricsData, setMatricsData}: {matricsData: any, setMatricsData: (matricsData: any) => void}) {
    const handleMetricClick = (metricKey: string) => {
    setMatricsData((prev:any) =>
        prev.map((group:any) => ({
        ...group,
        metrics: group.metrics.map((metric:any) =>
            metric.key === metricKey
            ? { ...metric, show: !metric.show }
            : metric
        ),
        }))
    );
    };

    return (
    <div className="mt-3 flex flex-col gap-2">
        <div>
            <p className="text-[16px] text-text-grey font-light">{matricsData.title}</p>
        </div>
        <div className="flex flex-col px-[2px] w-full gap-4" onClick={(e) => e.stopPropagation()}>
            {matricsData.metrics.map((metric: any) => (
                <Selector text={metric.label} show={metric.show} key={metric.key} onClick={() => handleMetricClick(metric.key)}/>
            ))}
        </div>
    </div>
    )
}