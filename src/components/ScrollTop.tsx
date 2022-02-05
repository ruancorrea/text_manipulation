import { useEffect, useState } from "react"
import { useScrollY } from "../hooks/useScrollY"
import { IconArrowUP } from "./Icons"

export default function ScrollTop() {
    const [className, setClassName] = useState("")
    const scrollY = useScrollY();
    const [visivelButton, setVisivelButton] = useState(scrollY ? true : false)
    const styleButton = {
        display: "flex",
        bottom: '50px',
        right: '50px',
    }

    useEffect(() => {
        setVisivelButton(scrollY > 0 ? true : false);
    })


    function BackToTop() {
        console.log(scrollY)
        window.scrollTo(0, 0);
        setClassName("animation transition delay-100 duration-100")
    }

    return (
        <div className="">
            {   visivelButton ?
                <button style={styleButton} onClick={BackToTop} 
                className={`${className} fixed scale-150 animate-pulse hover:animate-none hover:-translate-y-2 text-red-400  hover:text-red-600 px-1`}>
                    {IconArrowUP}
                </button>
                :
                <></>
            }

        </div>
    )
      
}