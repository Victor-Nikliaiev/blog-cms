import { Lilita_One, VT323 } from "next/font/google";
const lilitaOneFont = Lilita_One({ subsets: ["latin"], weight: "400" });
const vT323Font = VT323({ subsets: ["latin"], weight: "400" });

export const cardContainerStyleSheet = `
    mb-8
    p-4
    border
    border-gray-900
    rounded-md
    shadow-sm
    shadow-purple-950
    hover:shadow-md
    hover:bg-purple-500
    hover:text-white
    hover:dark:bg-gray-900`;

export const titleStyle = `
     ${lilitaOneFont.className}
     text-2xl
     dark:text-slate-300
    `;

export const dateStyle = `
     ${vT323Font.className}
     my-2
     text-purple-600
    `;

export const excerptStyle = `
     dark:text-gray-400
     mb-4
     line-clamp-2
    `;

export const tagStyle = `
     mr-2
     p-1
     rounded-sm
     text-sm
     lowercase
     dark:bg-gray-900
     border
     dark:border-gray-800
    `;
