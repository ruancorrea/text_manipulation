interface FooterProps {
    statusDM: boolean
}

export default function Footer(props: FooterProps) {
    const darkModeFooter = props.statusDM ? "bg-stone-700" : "bg-gray-600"
    return (
        <footer className={`w-full mt-5 p-10 text-white ${darkModeFooter}`} >
            <div className="flex justify-center">
                <small className="font-semibold uppercase">developed by</small> 
            </div>
            <div className="flex justify-center">
               <small className="font-semibold">RUAN CORREA</small> 
            </div> 
        </footer>
    )
}