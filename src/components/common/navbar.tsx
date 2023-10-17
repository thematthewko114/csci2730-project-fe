"use client"

import { useEffect } from "react";

export default function Navbar(){
    useEffect(() => {
        console.log("Navbar");
    }, [])
    return(
        <div className="bg-gray-700 fixed top-0 w-screen h-16 flex z-50">
            <div className="text-lg lg:text-2xl my-auto ml-3 lg:ml-6">BlockRecord</div>
            <div className="ml-auto my-auto mr-3 lg:mr-6 cursor-pointer border-2 border-gray-200 rounded-lg px-4 py-2 bg-gray-500">Connect Wallet</div>
        </div>
    )
}