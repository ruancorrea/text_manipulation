import { useEffect, useState } from "react"
import useTextManipulation from "../hooks/useTextManipulation";
import { IconCopy, IconOk, IconSave } from "./Icons";
import TextSave from "./TextSave";

interface TextManipulationProps {
    statusDM: boolean
}

export default function TextManipulation (props: TextManipulationProps) {

    const [copy, setCopy] = useState(false);
    const [save, setSave] = useState(false);
    
    const className = "flex justify-center w-48 px-2 py-2 ml-2 rounded-lg bg-slate-500 text-white hover:bg-slate-700";
    const classNameCopy = copy ? "bg-green-700 hover:bg-gray-200 text-white hover:text-green-700" : "bg-zinc-600 hover:bg-zinc-900 text-white"
    const classNameSave = save ? "bg-green-700 hover:bg-gray-200 text-white hover:text-green-700" : "bg-zinc-600 hover:bg-zinc-900 text-white"

    const darkModeTextArea = props.statusDM ? "bg-gray-700 focus:text-gray-900 focus:bg-gray-400" : "bg-gray-200 focus:text-gray-700 focus:bg-gray-100"
    const darkModeDivButtons =  props.statusDM ? "bg-zinc-700" : "bg-gray-100"
    

    const { 
        text, 
        setText, 
        textsSaves,
        setTextsSaves,
        optionsManipulation 
    } = useTextManipulation();


    return (
        <div className="sm:px-2 py-2 md:px-20">
            <div className="flex justify-end p-2">
                <button className={`px-3 py-2 mr-2 rounded-xl ${classNameSave}`}
                onClick={() => {
                    setTextsSaves((prev) => {
                        return [...prev, text]});
                    setSave(true);
                }}
                >
                    {
                        save ?
                        <>{IconOk}</>

                        :
                        <>{IconSave}</>

                    }
                </button>
                <button className={`px-3 py-2 rounded-xl ${classNameCopy}`}
                onClick={() => {
                    navigator.clipboard.writeText(text);
                    setCopy(true);}}>
                        {
                            copy ?
                            <>{IconOk}</>
    
                            :
                            <>{IconCopy}</>

                        }
                </button>
            </div>
            <textarea 
            className={`rounded-mdtransition ease-in-out 
            w-full h-96 p-4
            border border-solid border-gray-300
          focus:border-blue-600 focus:outline-none
            ${darkModeTextArea}
                `} 
                onChange={(e) => {
                    setText(e.target.value);
                    setCopy(false);
                    setSave(false);
                }}
                value={text} />

            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full 
                         rounded-md py-1 ${darkModeDivButtons}`}>
                {
                    optionsManipulation.map((option, index) => {
                        return (
                            <div key={index} className="flex justify-center p-2">
                                <button className={`${className}`}
                                onClick={() => option.function(text)}><small>{option.name}</small></button>
                            </div>
                        )
                    })
                }
            </div>
            <TextSave statusDM={props.statusDM} textsSaves={textsSaves} setTextsSaves={setTextsSaves} />

        </div>
    )
}