import { useEffect, useState } from "react";
import { useWidth } from "../hooks/useWidth"
import { IconMenuHamburguer } from "./Icons";

interface ItemProps {
    nome: string
    destino: string
    className?: string
}

interface NavBarProps {
    className?: string
    StatusDarkMode: (statusDM: boolean) => void
    statusDM: boolean
}


function Item(props: ItemProps) {
    return (
        <a className={`p-2 ${props.className}`} href={props.destino}>{props.nome}</a>
    )
}

function ItensNavbar(props: NavBarProps) {
    return (
        <div className="duration-1000 delay-1000 transition-transform">
            <Item className={props.className} nome={"Saved texts"} destino={"/#savedtexts"}/>
            <Item className={props.className} nome={`What's that?`} destino={"/#whatsthat"}/>
            {
                props.StatusDarkMode ?
                <button className="p-2 uppercase text-white"
                onClick={() => props.StatusDarkMode(props.statusDM)}>Dark Theme: 
                    <small className="font-bold px-1 rounded-none">{props.statusDM ? "on" : "off"}</small>
                </button>
                :
                <></>
            }
        </div>
    )
}

export default function Navbar(props: NavBarProps) {
    const width = useWidth();
    const [ham, setHam] = useState(false);
    const [itensHam, setItensHam] = useState(false);
    const darkModeNavbar = props.statusDM ? "bg-stone-700" : "bg-gray-600"

    useEffect(() => {
        if (width < 680) {
            setHam(true);
        }else {
            setHam(false);
            setItensHam(false);
        }
    }, [width])

    return (
        <div className={`fixed w-screen p-3
                        ${darkModeNavbar}    `}>
            {ham ?
                <div className="flex justify-end">
                    <button onClick={() => setItensHam(!itensHam)} className="text-white mr-4">{IconMenuHamburguer} </button>  
                </div>
                :
                    <div className="flex justify-center uppercase text-white font-bold">
                        <ItensNavbar StatusDarkMode={props.StatusDarkMode} statusDM={props.statusDM} />
                    </div>
            }

            {itensHam ?
                
                <ItensNavbar className={"flex text-white font-bold"} StatusDarkMode={props.StatusDarkMode} statusDM={props.statusDM} />
                :
                <></>

            }
        </div>
    )
}