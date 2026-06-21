import Header from "../components/Header"

interface Colors {
    blue_light : string
    blue_mid : string
    blue_heavy : string
}

const colors : Colors = {
    blue_heavy : "text-blue-900",
    blue_light : "text-blue-200",
    blue_mid : "text-blue-500"
}

export default function AboutPage() {

    return (
        <div className="flex gap-5 w-screen justify-center items-center flex-col">
            <Header/>
            <h1 className={`font-bold ${colors.blue_light}`}>
                About Me Page
            </h1>
        </div>
    )

}