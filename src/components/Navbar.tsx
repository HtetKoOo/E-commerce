import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const NavBar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:64 relative">
            {/* Mobile */}
            <div className="flex h-full items-center justify-between md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wide">MimCookThee</div>
                </Link>
                <Menu />
            </div>
            {/* Bigger Screen */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* Left */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png" alt="" width={24} height={24}/>
                        <div className="text-2xl tracking-wide">MimCookThee</div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href="/">HomePage</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
                {/* Right */}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavIcons/>
                </div>
            </div>
        </div>
    )
}
export default NavBar;