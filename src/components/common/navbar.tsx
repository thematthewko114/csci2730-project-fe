"use client"

import { useEffect } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar(){
    useEffect(() => {
        console.log("Navbar");
    }, [])
    return(
        <div className="bg-gray-100 dark:bg-gray-700 fixed top-0 w-screen h-16 flex z-50">
            <div className="text-lg lg:text-2xl my-auto ml-3 lg:ml-6">BlockRecord</div>
            <div className="ml-auto my-auto mr-3 lg:mr-6 cursor-pointer"><ConnectButton /></div>
        </div>
    )
}