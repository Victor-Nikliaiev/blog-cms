import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

export const CmsNavbar = () => {
    return (
        <div className='flex justify-between items-center py-1 px-5'>
            <Link href={"/"}>
                <Logo arrow={true} />
            </Link>
        </div>
    );
};
