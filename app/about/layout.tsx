import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Check Design - Sobre",
    description : "Página sobre o programador do site Check Design"
}

export default function AboutLayout( { children } : Readonly<{ children : React.ReactNode }> ) {
    return (
        <div>
            {children}
        </div>
    )
}