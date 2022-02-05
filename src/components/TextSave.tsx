import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { IconCopy, IconDelete } from "./Icons";

interface TextSaveProps{
    textsSaves?: [string]
    setTextsSaves?: (textsSaves: [string]) => void
    statusDM: boolean

}

export default function TextSave(props: TextSaveProps) {
    const darkMode = props.statusDM ? "bg-slate-900" : "bg-white text-black";
    const HeaderClassName = props.statusDM ? "bg-slate-800" : "bg-gray-500";
    const ItemClassName = props.statusDM ? "bg-slate-800 hover:bg-gray-300 hover:text-black text-white" : "hover:bg-gray-200 text-black";
    
    return (
        <div  className={`${darkMode} my-5`}>
            <header id={"savedtexts"} className={`${HeaderClassName} font-semibold p-3 rounded-lg text-white`}>
                <h2 className="text-3xl">Saved texts</h2>
            </header>
            <ul className="mt-2">
                {props.textsSaves.map((text, index) => {
                    return (
                        <li key={index} className={`flex items-center p-1 justify-between ${ItemClassName}`}>
                            <small className="px-3 py-1">
                                {text}
                            </small>

                            <div className="flex ">
                                <button onClick={() =>{
                                    var texts: [string] =  [...props.textsSaves]
                                    texts.splice(index, 1)
                                    props.setTextsSaves(texts)
                                }} className="text-red-600 rounded-3xl p-2 delay-150 hover:bg-red-600 hover:text-white">
                                    {IconDelete}
                                </button>
                            </div>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

/*
Copy

<button onClick={() =>{
                                    
    }} className="text-blue-600 rounded-3xl p-2 delay-150 hover:bg-blue-600 hover:text-white">
        {IconCopy}
    </button>
*/