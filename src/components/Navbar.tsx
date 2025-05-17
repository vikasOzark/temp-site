import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
        <nav className="w-full py-4 px-4 md:px-8 lg:px-12 bg-gray-100 backdrop-blur-sm fixed top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold">
                        <span className="text-gray-800">Agent</span>
                        <span className="text-mlops-blue">CORE</span>
                    </Link>
                </div>

                <div className="hidden md:flex space-x-8 items-center">
                    <NavLink href="#solutions">Solutions</NavLink>
                    <NavLink href="#docs">Docs</NavLink>
                    <NavLink href="#pricing">Pricing</NavLink>
                </div>

                <div className="flex items-center space-x-3">
                    <Button
                        variant="primary"
                        className="bg-mlops-blue hover:bg-blue-700 hidden md:flex"
                    >
                        Book a demo
                    </Button>
                    <Button
                        variant="outline"
                        className="border-mlops-blue text-mlops-blue hover:bg-blue-50"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <a
            href={href}
            className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
        >
            {children}
        </a>
    );
};

export default Navbar;
