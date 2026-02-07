
import Matrics from "./Matrics";

function Sidebar({isOpen, setIsOpen, matricsData, setMatricsData}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void, matricsData: any, setMatricsData: (matricsData: any) => void}) {
    return (
        <div className="h-screen text-white w-screen fixed top-0 left-0 z-50 bg-black/50" onClick={() => setIsOpen(false)}>
            <div className="h-screen w-[400px] bg-jrnl-primary-sidebar border-l border-l-jrnl-border fixed right-0 top-0 z-50">
                <div className="flex flex-col justify-between px-4 py-6">
                    <div>
                        <h1 className="text-[24px] font-light">Select Metrics</h1>
                    </div>

                    <div className="mt-3 flex flex-col gap-2 h-[2000px] overflow-y-scroll scrollbar-hide">
                        {matricsData.map((matricsData: any) => (
                            <Matrics matricsData={matricsData} key={matricsData.key} setMatricsData={setMatricsData}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;