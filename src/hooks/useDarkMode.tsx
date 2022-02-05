import { useEffect, useState } from "react"
import useLocalStorage from "./useLocalStorage"

export default function useDarkMode() {
    const [statusDM, setStatusDM] = useLocalStorage("theme", "")
    //const [statusDM, setStatusDM] = useState(false)

    function StatusDarkMode(statusDM: boolean){
        statusDM ? setStatusDM(false) : setStatusDM(true)
    }

    useEffect(() => {
        setStatusDM(statusDM)
    })


    return {
        StatusDarkMode,
        statusDM,
    }
}