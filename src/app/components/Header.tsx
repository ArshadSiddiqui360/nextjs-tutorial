"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    // { name: "Dashboard", href: "/dashboard/archived" },
    { name: "Blog", href: "/blog" },
    { name: "Products", href: "/products" },
    { name: "OrderProduct", href: "/order-product" },
    { name: "Phone", href: "/routes/restapi" },
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Register-Template", href: "/register-template" },
    { name: "Login-Template", href: "/login-template" },
    { name: "Forgot Password", href: "/forgot-password" },
    { name: "Next.JS", href: "https://nextjs.org/", rel: "noopener noreferrer", target:"_blank" },
    { name: "Next.JS Tutorial", href: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI", rel: "noopener noreferrer", target:"_blank" },
    { name: "NextJS GitHub", href: "https://github.com/gopinav/Next.js-14-Tutorials", rel: "noopener noreferrer", target:"_blank" },


];

export default function Header() {

    const pathname = usePathname();
	// const isActive = (path: string) => path === pathname;

    return(
        <>
            <header
                style= {{
                    backgroundColor: "lightblue",
                    padding: "1rem"
                }}
            >

                <h2>Header</h2>
                <nav>

                {
                    navLinks.map( (link) => {
                    
                    // Method#1
                    // const isActive  = pathName.startsWith(link.href);

                    return (

                            <Link
                                href={link.href}
                                key={link.name}
                                rel={link.rel} 
                                target={link.target} 
                                // Method#1
                                // className={isActive ? "isActive" : ""}
                                // Method#2
                                className={`link ${pathname === link.href ? 'isActive' : ''}`} 
                                // Method#3
                                // className={`link ${isActive(link.href) ? 'isActive' : ''}`}  
                            >
                                {link.name} 
                            </Link>

                        //    <Link href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI" legacyBehavior>
                        //         <a target="_blank" rel="noopener noreferrer" key={link.name}>Next.JS Tutorial</a>
                        //     </Link>

                        //     <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI" target="_blank" rel="noopener noreferrer">Next.JS Tutorial</a>                   
                        
                    )
                    } )
                }
                </nav>

            </header>
        </>
    )
}
