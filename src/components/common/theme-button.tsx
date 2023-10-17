"use client"

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from 'next-themes'

export default function ThemeButton(){
    const { theme, setTheme } = useTheme()

    const switchTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }
    
    return(
        <div 
            className="bg-gray-100 dark:bg-gray-600 p-2 fixed bottom-4 right-4 rounded-lg cursor-pointer"
            onClick={()=>switchTheme()}
        >
            {
                theme === "light"? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />
            }
        </div>
    )
}