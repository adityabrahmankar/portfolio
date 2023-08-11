import { PiFileText, PiHouse, PiLaptop, PiLink, PiPen } from "react-icons/pi";

export const MenuItems = [
    {
        title: 'Home',
        href: '/',
        icon: PiHouse,
    },
    {
        title: 'Projects',
        href: '/projects',
        icon:  PiLaptop,
    },
    {
        title: 'About',
        href: '/about',
        icon :  PiFileText,
    },
    {
        title: 'Contact',
        href: '/contact',
        icon : PiLink,
    },
    {
        title: 'Blog',
        href: '/blog',
        icon: PiPen,
    },
    
]