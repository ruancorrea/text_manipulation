import dynamic from "next/dynamic";
import Footer from "./Footer";
import Info from "./Info";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = dynamic(
    () => import('./Navbar'),
    { ssr: false },
)

const ScrollTop = dynamic(
    () => import('./ScrollTop'),
    { ssr: false },
)

const Header = dynamic(
    () => import('./Header'),
    { ssr: false },
)

const TextManipulation = dynamic(
    () => import('./TextManipulation'),
    { ssr: false },
)


export default function App() {
    const {
        StatusDarkMode,
        statusDM
    } = useDarkMode()

    const darkMode = statusDM ? "bg-gray-900" : ""

    return (
      <div className={`scroll-smooth ${darkMode}`}>
            <ScrollTop />
            <Navbar StatusDarkMode={StatusDarkMode} statusDM={statusDM}/>
            <Header statusDM={statusDM}/>
            <TextManipulation statusDM={statusDM}/> 
            <Info statusDM={statusDM}/>
            <Footer statusDM={statusDM} />
      </div>
    )
}

