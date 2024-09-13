import Link from "next/link";
import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { Logo } from "./Logo";

export const Navbar = () => {
    return (
        <div className='mx-auto max-w-5xl px-6'>
            <div className='flex justify-between items-center h-16 w-full'>
                <Link href='/'>
                    <Logo />
                </Link>
                <ThemeSwitch />
            </div>
        </div>
    );
};
