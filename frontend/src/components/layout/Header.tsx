
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { RootState } from "../../redux/store"
import { logout } from "../../redux/slices/authSlice"

const Header = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(user)
    return (
        <header className="flex justify-end items-center px-20 py-4 shadow-md">
            <Link to='/' className="mr-auto hover:text-teal-300">Home</Link>
            <nav>
                <ul>
                    {
                        user ? <>
                            {
                                user.role == "USER" ? <>
                                    <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                                        <Link to="/my-reports">My Reports</Link>
                                    </li>
                                    <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                                        <Link to="/report-crime">Report Crime</Link>
                                    </li>
                                </> : <>
                                    <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                                        <Link to="/reports"> Reports</Link>
                                    </li>
                                    <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                                        <Link to="/investigators"> Investigators</Link>
                                    </li>
                                </>}
                            <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                                <button onClick={() => {
                                    dispatch(logout());
                                    navigate('/');
                                }}>
                                    Logout
                                </button>
                            </li>
                        </> : <>
                            <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="inline-block px-4 text-gray-700 no-underline transition-colors duration-300 ease-in-out hover:text-teal-300">
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header