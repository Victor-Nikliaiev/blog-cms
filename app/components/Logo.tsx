import React from "react";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ subsets: ["latin"], weight: "400" });

interface LogoProps {
    arrow: boolean;
}
export const Logo: React.FC<LogoProps> = ({ arrow }) => {
    return (
        <div className={`${font.className} text-3xl dark:text-amber-50`}>
            {arrow ? <>&#8592;</> : null}
            Arhis<span className='text-purple-500'>Blog</span>
        </div>
    );
};
