import { Link } from "react-router";
import homeDefault from "@/assets/home/icon/house-regular-full.svg";
import homeActive from "@/assets/home/icon/house-regular-full-active.svg";

import orderDefault from "@/assets/home/icon/bell-regular-full.svg";
import orderActive from "@/assets/home/icon/bell-regular-full-active.svg";

import receiptDefault from "@/assets/home/icon/receipt-solid-full.svg";
import receiptActive from "@/assets/home/icon/receipt-solid-full-active.svg";

import favDefault from "@/assets/home/icon/heart-regular-full.svg";
import favActive from "@/assets/home/icon/heart-regular-full-active.svg";

import LogoutDefault from "@/assets/home/icon/logout.svg";
import LogoutActive from "@/assets/home/icon/logout_yellow.svg";

type NavBarProps = {
    num: number;
};

const navItems = [
    { id: "home", label: "Home", defaultSrc: homeDefault, activeSrc: homeActive, href: "/" },
    { id: "order", label: "Orders", defaultSrc: orderDefault, activeSrc: orderActive, href: "/user/current" },
    { id: "receipt", label: "History", defaultSrc: receiptDefault, activeSrc: receiptActive, href: "/user/history" },
    { id: "favourite", label: "Favourites", defaultSrc: favDefault, activeSrc: favActive, href: "/user/favourite" },
    { id: "logout", label: "Logout", defaultSrc: LogoutDefault, activeSrc: LogoutActive, href: "/user/logout" },
];

function NavBar({ num }: NavBarProps) {
    const activeItem = navItems[num]?.id;

    return (
        <nav className="fixed left-0 top-0 hidden h-screen w-20 flex-col items-center border-r border-gray-100 bg-white py-10 sm:flex lg:w-24">
            <ul className="flex flex-col gap-6">
                {navItems.map(item => (
                    <li key={item.id}>
                        <Link
                            to={item.href}
                            aria-label={item.label}
                            className="flex items-center justify-center rounded-xl p-2 transition hover:bg-gray-100"
                        >
                            <img
                                src={activeItem === item.id ? item.activeSrc : item.defaultSrc}
                                alt={item.label}
                                className="h-12 w-12"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;