
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex justify-end items-center px-20 py-4 shadow-md">
            <Link to='/' className="mr-auto hover:text-teal-300">Home</Link>
            <nav>
                <ul>
                    <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                        <Link to="/register">Register</Link>
                    </li>
                    <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header