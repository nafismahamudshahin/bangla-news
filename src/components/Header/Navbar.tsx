import Link from "next/link";

const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })

const Navbar = () => {

    return (
        <nav className="bg-base-100 shadow-sm sticky z-50 top-0">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                    </div>
                    <Link className="flex flex-col" href='/'>
                        <span className="text-3xl font-bold text-red-500">Bangla News</span>
                        <span className="text-sm text-gray-500">{date}</span>
                    </Link>
                </div>
                <div className="navbar-end gap-2">
                    <Link className="btn btn-outline btn-success" href=''>Sign In</Link>
                    <Link className="btn btn-success" href=''>Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;