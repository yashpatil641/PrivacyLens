// import "@/App.css";

import { Progress } from "@/components/ui/progress"

type props = {
    score: number
    type: string
    quotes: string[]
    iscollapsed: boolean
}
const Infosection: React.FC<props> = ({ score, type, quotes, iscollapsed }) => {
    return (
        <>
            
            <div className={`cursor-pointer bg-green-500/500 min-h-[75px]  flex flex-col gap-3 pt-4 p-3 pb-5 font-medium transition-h duration-300 ease-in-out box-border  border-white/30 ${iscollapsed ? 'border-b-2' : 'border-none'}`}>
                <div className="flex gap-4">
                    <p>{type}</p>
                    <p>{score}/5</p>
                </div>
                <Progress className="w-[80%]" value={(100 * score) / 5} />
            </div>

            <div
                className={`box-border bg-pink-500/500 rounded-tl-none rounded-tr-none rounded-bl-[4px] rounded-br-[4px] ${iscollapsed ? 'max-h-[200px] px-7 py-4' : ' max-h-[0px] overflow-hidden text-transparent px-7 '
                    } transition-h ease-in-out duration-300 overflow-hidden`}
            >
                <ul className="list-disc  box-border flex flex-col gap-2">
                    {quotes.map((quote, index) => (
                        <li key={index}>{quote}</li>
                    ))}
                </ul>
            </div>



        </>
    )

}

export default Infosection
