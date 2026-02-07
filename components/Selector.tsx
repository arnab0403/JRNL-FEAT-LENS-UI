import Right from "@/buttons/Right"

function Selector({text,show, onClick}: {text: string,show: boolean, onClick: () => void}) {
    return (
    <div className="flex items-center cursor-pointer gap-2 bg-bold min-h-[33px] rounded-[8px] px-[6px] hover:outline-white hover:outline-2" onClick={onClick}>
        <div className="w-4 h-4 border border-white rounded flex items-center justify-center">
            {show && <Right/>}
        </div>
        <p className="text-[14px]">{text}</p>
    </div>
    )
}

export default Selector