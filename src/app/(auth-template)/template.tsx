"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

import { useState } from "react";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Register-Template", href: "/register-template" },
    { name: "Login-Template", href: "/login-template" },
    { name: "Forgot Password", href: "/forgot-password" },
    { name: "Home", href: "/" },

];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const [curState, setState] = useState("");

    const pathName = usePathname();
    
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter something..."
                    value={curState}
                    onChange={ (e) => setState(e.target.value)}
                />
            </div>
            {
                navLinks.map( (link) => {
                    const isActive  = pathName.startsWith(link.href);

                    return (
                        <Link
                            href={link.href}
                            key={link.name} 
                            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}> 
                            {link.name} 
                        </Link>
                    )
                } )
            }

            {children}
        </>
    );
}